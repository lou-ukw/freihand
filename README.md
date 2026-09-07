# FREIHAND – Hörstation

Klickbare Website für die Hörstation im Ausstellungsraum (FH_D2, Ausgangsbereich).
Startseite mit Kacheln, pro Kapitel eine Seite mit Player, Bild, Zusammenfassung
und aufklappbarem Mitlesetext.

Reines HTML, CSS und JavaScript. Kein Build, kein Framework, keine Datenbank.
Die Schriften liegen im Projekt, die Station braucht im Betrieb kein Internet.

---

## Dateien einsortieren

**Audio** → Ordner `audio/`, benannt `001.mp3` bis `009.mp3`.
Die Nummer verbindet Datei und Kapitel. Andere Formate: `.m4a` und `.ogg` gehen
auch, dann in `assets/js/app.js` in der Zeile `audioPfad` die Endung ändern.

**Bilder** → Ordner `bilder/`, benannt `001.jpg` bis `009.jpg`.
Empfehlung: längste Kante 1600 px, unter 400 KB. Fehlt ein Bild, blendet die
Seite die Bildfläche aus — die Kachel bleibt dann rein typografisch.

**Texte und Titel** → `assets/js/kapitel.js`. Das ist die einzige Datei, die für
den Inhalt bearbeitet werden muss. Oben stehen die Einstellungen (Titel,
Anleitungssatz, Ruhezeit), darunter die neun Kapitel.

Umlaute funktionieren normal, die Datei ist UTF-8.

---

## Ansehen

Ein Doppelklick auf `index.html` funktioniert in Firefox. Chrome sperrt bei
`file://` teilweise das Nachladen; deshalb zum Testen besser ein kleiner
lokaler Server, im Projektordner:

```
python3 -m http.server 8000
```

Dann im Browser `http://localhost:8000` öffnen.

---

## Auf GitHub veröffentlichen

Repository `freihand`, öffentlich (GitHub Pages läuft im kostenlosen Tarif nur
aus öffentlichen Repositories).

1. Den kompletten Ordnerinhalt hochladen — `index.html` muss oben im Repository
   liegen, nicht in einem Unterordner.
2. Settings → Pages → Source: `Deploy from a branch`, Branch `main`, Ordner `/ (root)`.
3. Nach ein bis zwei Minuten liegt die Seite unter
   `https://<benutzername>.github.io/freihand/`.

Alle Pfade im Projekt sind relativ. Die Seite läuft deshalb unverändert im
Unterordner `/freihand/` wie auch später unter einer eigenen Domain.

MP3-Dateien bis 100 MB pro Datei sind unproblematisch, Git LFS ist nicht nötig.

---

## Eigene Domain

Nicht eingerichtet. Die Seite läuft unter
`https://lou-ukw.github.io/freihand/`.

Käme später doch eine eigene Adresse dazu, wäre das ein Eintrag unter
Settings → Pages → Custom domain plus vier A-Einträge beim Domain-Anbieter
(185.199.108.153, .109.153, .110.153, .111.153). Am Projekt selbst wäre nichts
zu ändern, alle Pfade sind relativ.

---

## Öffentlich heißt öffentlich

GitHub Pages läuft im kostenlosen Tarif nur aus einem öffentlichen Repository.
Alles, was hochgeladen wird, ist damit weltweit abrufbar — auch die Audiodateien.

Eingebaut sind `robots.txt` und eine `noindex`-Angabe. Damit taucht die Seite
nicht bei Google auf. Wer die Adresse kennt, kommt trotzdem hin. Das ist der
Unterschied zwischen *unauffindbar* und *nicht öffentlich*.

Wenn das Feature nur im Ausstellungsraum zu hören sein soll, gibt es zwei
saubere Wege:

**A — Audio bleibt lokal.** In der Datei `.gitignore` die Zeile `audio/*.mp3`
aktivieren, bevor zum ersten Mal hochgeladen wird. Im Netz stehen dann Aufbau,
Titel und Texte, abgespielt wird nichts. Auf dem Rechner im Museum liegen die
MP3s im Ordner `audio/`, und dort läuft alles vollständig.

**B — gar nicht ins Netz.** Repository nur als Sicherung nutzen, Pages unter
Settings → Pages wieder abschalten. Die Station läuft ausschließlich vom
Rechner im Raum.

Was einmal hochgeladen wurde, bleibt in der Versionsgeschichte, auch nach dem
Löschen. Die Entscheidung fällt also vor dem ersten Hochladen der Audiodateien.

---

## Im Ausstellungsraum

- **Kiosk-Modus.** Firefox: `firefox --kiosk file:///pfad/zur/index.html`.
  Chrome: `chrome --kiosk --incognito http://localhost:8000`.
  Damit verschwinden Adresszeile und Zurück-Taste.
- **Lautstärke** am Gerät oder am Kopfhörerverstärker einstellen, nicht in der
  Website. Sonst dreht der erste Besucher auf und der nächste erschrickt.
- **Rücksprung.** Nach vier Minuten ohne Berührung geht die Station zurück zur
  Übersicht — aber nie, während etwas läuft. Ändern:
  `ruhezeitMinuten` in `kapitel.js`, `0` schaltet es ab.
- **Kopfhörer.** Bei zwei Paaren pro Station lohnt ein Splitter mit zwei
  getrennten Lautstärkereglern.

---

## Gestaltung ändern

Alle Stellschrauben stehen oben in `assets/css/style.css` unter `:root`:

| Variable | wirkt auf |
|---|---|
| `--tinte`, `--papier` | Schwarz und Weiß |
| `--grau`, `--linie` | Nebentext, Haarlinien |
| `--schreibschrift` | Titelschrift: `"Caveat"` oder `"Grape Nuts"` |
| `--grotesk` | Textschrift |
| `--bild-graustufen` | `1` = Bilder werden entfärbt, `0` = Farbe bleibt |

Beide Schreibschriften liegen im Ordner `assets/fonts/`, ebenso ihre Lizenzen
(SIL Open Font License, für Ausstellungen frei nutzbar).

Soll die Station der Gestaltung der Ausstellung folgen, tauscht das Grafikbüro
die Schriftdateien aus und ändert die zwei Zeilen `--grotesk` und
`--schreibschrift`. Mehr ist dafür nicht nötig.

---

## Barrierefreiheit

Eingebaut sind: Bedienung per Tastatur, sichtbare Fokusrahmen, ausreichend
große Tippflächen, Rücksicht auf reduzierte Bewegung, Beschriftungen für
Screenreader.

Nicht eingebaut, weil es Inhalt ist: **der Mitlesetext**. Ein Hörangebot ohne
Transkript schließt gehörlose und schwerhörige Besucher*innen aus. Das Feld
`transkript` in `kapitel.js` ist dafür da; solange es leer ist, wird der
Aufklapper ausgeblendet.

---

## Rechte an den Stimmen

Abspielen im Ausstellungsraum und weltweit abrufbar stellen sind zwei
verschiedene Nutzungen. Wenn im Feature Schüler*innen oder Zeitzeug*innen zu
hören sind, deckt eine Einwilligung für die Ausstellung die Veröffentlichung im
Netz nicht automatisch ab. Siehe oben, Weg A oder B.

Die Fußzeile für Impressum und Datenschutzerklärung ist eingebaut, aber
ausgeschaltet: In `kapitel.js` bleiben `impressum` und `datenschutz` leer, dann
ist sie unsichtbar. Sie wird erst gebraucht, wenn die Seite als Angebot des
Bezirksamts nach außen auftritt.
