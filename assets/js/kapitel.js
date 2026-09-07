/* ============================================================
   INHALTE DER HÖRSTATION
   Nur diese Datei muss bearbeitet werden.
   Sie enthält alles, was auf der Station zu sehen ist.
   ============================================================ */


/* ---------- Einstellungen ---------- */

const EINSTELLUNGEN = {
  ausstellung:  "FREIHAND",
  untertitel:   "Schrift, Schule, Gemeinschaft",
  ort:          "Mitte Museum",

  // Überschrift und Anleitung auf der Startseite
  stationstitel: "Zum Hören",
  anleitung:     "Neun Kapitel zur Geschichte der 308. Gemeindeschule am Leopoldplatz. Tippen Sie auf ein Kapitel, um es zu hören.",

  // Springt nach dieser Zeit ohne Berührung zurück zur Übersicht.
  // 0 = ausgeschaltet. Läuft nie, solange Audio abgespielt wird.
  ruhezeitMinuten: 4,

  // Sprungweite der beiden Pfeiltasten
  sprungSekunden: 15,

  // Nur für die Fassung im Netz. Leer lassen = Fußzeile bleibt unsichtbar,
  // so wie es für die Station im Raum richtig ist.
  impressum:   "",
  datenschutz: ""
};


/* ---------- Kapitel ----------

   Felder pro Kapitel:
     nr       Nummer, zugleich Dateiname (001 → audio/001.mp3, bilder/001.jpg)
     titel    erscheint auf der Kachel und über dem Player
     bild     Pfad zum Bild, oder "" wenn (noch) keins da ist
     bildunterschrift  Bildnachweis / Legende, oder ""
     text     Zusammenfassung unter dem Bild, 3–6 Sätze
     transkript  vollständiger Sprechtext. Erscheint hinter "Text mitlesen".
                 Leer lassen = Feld wird ausgeblendet.
                 Absätze mit einer Leerzeile trennen.

   ACHTUNG: Titel und Texte unten sind Platzhalter.
   Die Titel folgen den Panels aus freihand_inhalte (FH_B1_V bis FH_B9)
   und sind ein Vorschlag, keine gesetzte Kapitelfolge.
------------------------------------------------------------ */

const KAPITEL = [
  {
    nr: "001",
    titel: "Zwischen Organisation und Straße",
    bild: "bilder/001.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  },
  {
    nr: "002",
    titel: "Eine andere Schule",
    bild: "bilder/002.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  },
  {
    nr: "003",
    titel: "Die 308. am Leopoldplatz",
    bild: "bilder/003.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  },
  {
    nr: "004",
    titel: "Alltag um den Leopoldplatz",
    bild: "bilder/004.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  },
  {
    nr: "005",
    titel: "Die Gemeinschaftszeitung",
    bild: "bilder/005.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  },
  {
    nr: "006",
    titel: "Schrift lernen",
    bild: "bilder/006.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  },
  {
    nr: "007",
    titel: "Das Sommerfest 1931",
    bild: "bilder/007.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  },
  {
    nr: "008",
    titel: "1933",
    bild: "bilder/008.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  },
  {
    nr: "009",
    titel: "Weiterschreiben",
    bild: "bilder/009.jpg",
    bildunterschrift: "[Bildnachweis]",
    text: "[Zusammenfassung – 3 bis 6 Sätze]",
    transkript: ""
  }
];
