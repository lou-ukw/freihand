/* ============================================================
   FREIHAND – Hörstation
   Ablauf, Player, Rücksprung nach Ruhezeit.
   Diese Datei muss für die Ausstellung nicht bearbeitet werden.
   ============================================================ */

(function () {
  "use strict";

  var haupt = document.getElementById("inhalt");
  var audio = new Audio();
  audio.preload = "auto";

  var dauern = {};        // nr -> Sekunden
  var ruheUhr = null;
  var aktuellerIndex = -1;

  /* ---------- Werkzeuge ---------- */

  function zeit(sek) {
    if (!isFinite(sek) || sek < 0) return "–:––";
    var m = Math.floor(sek / 60);
    var s = Math.floor(sek % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function absaetze(behaelter, text) {
    behaelter.textContent = "";
    String(text || "").split(/\n\s*\n/).forEach(function (stueck) {
      var p = document.createElement("p");
      p.textContent = stueck.trim();
      if (p.textContent) behaelter.appendChild(p);
    });
  }

  function audioPfad(k) { return "audio/" + k.nr + ".mp3"; }

  /* ---------- Ruhezeit: zurück zur Übersicht ---------- */

  function ruheNeuStarten() {
    clearTimeout(ruheUhr);
    var min = EINSTELLUNGEN.ruhezeitMinuten;
    if (!min || audio.src === "" || !audio.paused) return;
    ruheUhr = setTimeout(function () {
      if (audio.paused && location.hash !== "" && location.hash !== "#/") {
        location.hash = "#/";
      }
    }, min * 60 * 1000);
  }

  ["pointerdown", "keydown", "wheel", "touchstart"].forEach(function (e) {
    window.addEventListener(e, ruheNeuStarten, { passive: true });
  });

  /* ---------- Übersicht ---------- */

  function zeigeUebersicht() {
    var teil = document.getElementById("tpl-uebersicht").content.cloneNode(true);
    teil.getElementById("intro-titel").textContent = EINSTELLUNGEN.stationstitel;
    teil.getElementById("intro-text").textContent = EINSTELLUNGEN.anleitung;

    var liste = teil.getElementById("kacheln");

    KAPITEL.forEach(function (k, i) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "kachel";
      a.href = "#/k/" + k.nr;

      if (k.bild) {
        var rahmen = document.createElement("div");
        rahmen.className = "kachel__bild";
        var img = document.createElement("img");
        img.src = k.bild;
        img.alt = "";
        img.loading = "lazy";
        img.addEventListener("error", function () { rahmen.remove(); });
        rahmen.appendChild(img);
        a.appendChild(rahmen);
      }

      var koerper = document.createElement("div");
      koerper.className = "kachel__körper";

      var nr = document.createElement("span");
      nr.className = "kachel__nr";
      nr.textContent = "Kapitel " + (i + 1);

      var titel = document.createElement("h2");
      titel.className = "kachel__titel";
      titel.textContent = k.titel;

      var fuss = document.createElement("span");
      fuss.className = "kachel__fuss";
      fuss.innerHTML =
        '<span class="kachel__play" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg></span>';
      var dauer = document.createElement("span");
      dauer.className = "kachel__dauer";
      dauer.dataset.nr = k.nr;
      dauer.textContent = dauern[k.nr] ? zeit(dauern[k.nr]) : "Anhören";
      fuss.appendChild(dauer);

      koerper.appendChild(nr);
      koerper.appendChild(titel);
      koerper.appendChild(fuss);
      a.appendChild(koerper);
      li.appendChild(a);
      liste.appendChild(li);
    });

    haupt.textContent = "";
    haupt.appendChild(teil);
    laengenNachtragen();
  }

  /* Liest die Spieldauer aus den Dateien nach und trägt sie in die Kacheln ein. */
  function laengenNachtragen() {
    KAPITEL.forEach(function (k) {
      if (dauern[k.nr]) return;
      var probe = new Audio();
      probe.preload = "metadata";
      probe.addEventListener("loadedmetadata", function () {
        dauern[k.nr] = probe.duration;
        var feld = document.querySelector('.kachel__dauer[data-nr="' + k.nr + '"]');
        if (feld) feld.textContent = zeit(probe.duration);
      });
      probe.src = audioPfad(k);
    });
  }

  /* ---------- Kapitelseite ---------- */

  function zeigeKapitel(index) {
    var k = KAPITEL[index];
    aktuellerIndex = index;

    var teil = document.getElementById("tpl-kapitel").content.cloneNode(true);
    teil.getElementById("kapitel-titel").textContent = k.titel;
    teil.getElementById("zaehler").textContent =
      "Kapitel " + (index + 1) + " von " + KAPITEL.length;

    /* Bild */
    if (k.bild) {
      var figur = teil.getElementById("bild-figur");
      var img = teil.getElementById("bild");
      img.src = k.bild;
      img.alt = k.bildunterschrift || k.titel;
      img.addEventListener("error", function () { figur.hidden = true; });
      figur.hidden = false;
      teil.getElementById("bildunterschrift").textContent = k.bildunterschrift || "";
    }

    /* Text */
    absaetze(teil.getElementById("kapitel-text"), k.text);

    /* Transkript */
    if (k.transkript && k.transkript.trim()) {
      var box = teil.getElementById("transkript-box");
      box.hidden = false;
      absaetze(teil.getElementById("transkript-inhalt"), k.transkript);
    }

    /* Nachbarkapitel */
    var vorher = teil.getElementById("link-vorher");
    var naechstes = teil.getElementById("link-naechstes");
    if (index > 0) {
      vorher.href = "#/k/" + KAPITEL[index - 1].nr;
      vorher.querySelector(".weiter__titel").textContent = KAPITEL[index - 1].titel;
    } else {
      vorher.hidden = true;
    }
    if (index < KAPITEL.length - 1) {
      naechstes.href = "#/k/" + KAPITEL[index + 1].nr;
      naechstes.querySelector(".weiter__titel").textContent = KAPITEL[index + 1].titel;
    } else {
      naechstes.hidden = true;
    }

    haupt.textContent = "";
    haupt.appendChild(teil);

    playerVerdrahten(k);
  }

  /* ---------- Player ---------- */

  function playerVerdrahten(k) {
    var btnPlay = document.getElementById("btn-play");
    var linie = document.getElementById("linie");
    var tinte = document.getElementById("linie-tinte");
    var feder = document.getElementById("linie-feder");
    var zeitJetzt = document.getElementById("zeit-jetzt");
    var zeitGesamt = document.getElementById("zeit-gesamt");
    var hinweis = document.getElementById("audio-hinweis");
    var sprung = EINSTELLUNGEN.sprungSekunden || 15;

    audio.pause();
    audio.src = audioPfad(k);
    audio.currentTime = 0;

    function stand() {
      var d = audio.duration;
      var anteil = (isFinite(d) && d > 0) ? (audio.currentTime / d) : 0;
      var prozent = Math.max(0, Math.min(1, anteil)) * 100;
      tinte.style.width = prozent + "%";
      feder.style.left = prozent + "%";
      zeitJetzt.textContent = zeit(audio.currentTime);
      zeitGesamt.textContent = zeit(d);
      linie.setAttribute("aria-valuenow", Math.round(prozent));
      linie.setAttribute("aria-valuetext",
        zeit(audio.currentTime) + " von " + zeit(d));
    }

    function laeuftAnzeigen() {
      var laeuft = !audio.paused && !audio.ended;
      btnPlay.dataset.laeuft = laeuft ? "ja" : "nein";
      btnPlay.setAttribute("aria-label", laeuft ? "Pause" : "Abspielen");
      if (!laeuft) ruheNeuStarten(); else clearTimeout(ruheUhr);
    }

    function umschalten() {
      if (audio.paused) {
        audio.play().catch(function () { /* wird von der Anzeige aufgefangen */ });
      } else {
        audio.pause();
      }
    }

    audio.ontimeupdate = stand;
    audio.onloadedmetadata = function () { dauern[k.nr] = audio.duration; stand(); };
    audio.onplay = laeuftAnzeigen;
    audio.onpause = laeuftAnzeigen;
    audio.onended = function () { laeuftAnzeigen(); stand(); };
    audio.onerror = function () {
      hinweis.hidden = false;
      hinweis.textContent = "Diese Audiodatei fehlt oder lässt sich nicht öffnen: " + audioPfad(k);
    };

    btnPlay.addEventListener("click", umschalten);

    document.getElementById("btn-zurueck15").addEventListener("click", function () {
      audio.currentTime = Math.max(0, audio.currentTime - sprung);
    });
    document.getElementById("btn-vor15").addEventListener("click", function () {
      var d = isFinite(audio.duration) ? audio.duration : audio.currentTime + sprung;
      audio.currentTime = Math.min(d, audio.currentTime + sprung);
    });

    /* Ziehen auf der Schreiblinie */
    function suchen(x) {
      var kasten = linie.getBoundingClientRect();
      var anteil = (x - kasten.left) / kasten.width;
      anteil = Math.max(0, Math.min(1, anteil));
      if (isFinite(audio.duration)) audio.currentTime = anteil * audio.duration;
      stand();
    }
    linie.addEventListener("pointerdown", function (e) {
      linie.setPointerCapture(e.pointerId);
      suchen(e.clientX);
    });
    linie.addEventListener("pointermove", function (e) {
      if (linie.hasPointerCapture && linie.hasPointerCapture(e.pointerId)) suchen(e.clientX);
    });
    linie.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { audio.currentTime += 5; e.preventDefault(); }
      else if (e.key === "ArrowLeft") { audio.currentTime = Math.max(0, audio.currentTime - 5); e.preventDefault(); }
      else if (e.key === " " || e.key === "Enter") { umschalten(); e.preventDefault(); }
    });

    stand();
    laeuftAnzeigen();

    /* Beim Antippen einer Kachel läuft der Beitrag gleich los.
       Wenn der Browser das verweigert, bleibt die Play-Taste stehen. */
    audio.play().catch(function () { laeuftAnzeigen(); });
  }

  /* ---------- Navigation ---------- */

  function zeichnen() {
    var treffer = /^#\/k\/([^/]+)$/.exec(location.hash);
    if (treffer) {
      var index = KAPITEL.findIndex(function (k) { return k.nr === treffer[1]; });
      if (index >= 0) { zeigeKapitel(index); window.scrollTo(0, 0); return; }
    }
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    aktuellerIndex = -1;
    zeigeUebersicht();
    window.scrollTo(0, 0);
    ruheNeuStarten();
  }

  window.addEventListener("hashchange", zeichnen);

  /* Leertaste hält an und startet wieder, solange keine Taste im Fokus ist */
  document.addEventListener("keydown", function (e) {
    if (e.key !== " ") return;
    var f = document.activeElement;
    if (f && (f.tagName === "BUTTON" || f.id === "linie" || f.tagName === "A")) return;
    if (aktuellerIndex < 0) return;
    e.preventDefault();
    if (audio.paused) audio.play().catch(function () {}); else audio.pause();
  });

  /* Kopfzeile aus den Einstellungen */
  document.getElementById("kopf-titel").textContent = EINSTELLUNGEN.ausstellung;
  document.getElementById("kopf-unter").textContent = EINSTELLUNGEN.untertitel;
  document.getElementById("kopf-ort").textContent = EINSTELLUNGEN.ort;
  document.title = EINSTELLUNGEN.stationstitel + " – " + EINSTELLUNGEN.ausstellung;

  /* Fußzeile nur, wenn Adressen hinterlegt sind */
  (function fusszeile() {
    var paare = [["fuss-impressum", EINSTELLUNGEN.impressum],
                 ["fuss-datenschutz", EINSTELLUNGEN.datenschutz]];
    var sichtbar = false;
    paare.forEach(function (p) {
      var el = document.getElementById(p[0]);
      if (p[1]) { el.href = p[1]; el.hidden = false; sichtbar = true; }
    });
    document.getElementById("fuss").hidden = !sichtbar;
  })();

  zeichnen();
})();
