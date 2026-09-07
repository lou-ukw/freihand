/* ============================================================
   INHALTE DER HÖRSTATION
   Nur diese Datei muss bearbeitet werden.
   Sie enthält alles, was auf der Station zu sehen ist.

   Sprechtext: Feature "Die 308. Gemeindeschule am Leopoldplatz",
   nach Roik-Bogner, Radde 1973/1992 und dem Typoskript
   von Bruno Stephan.
   ============================================================ */


/* ---------- Einstellungen ---------- */

const EINSTELLUNGEN = {
  ausstellung:  "FREIHAND",
  untertitel:   "Schrift, Schule, Gemeinschaft",
  ort:          "Mitte Museum",

  // Überschrift und Anleitung auf der Startseite
  stationstitel: "Zum Hören",
  anleitung:     "Acht Kapitel zur Geschichte der 308. Gemeindeschule am Leopoldplatz. Tippen Sie auf ein Kapitel, um es zu hören.",
  quellen:       "Nach Roik-Bogner, Radde 1973/1992 und dem Typoskript von Bruno Stephan.",

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
     bildunterschrift  Legende und Nachweis, oder ""
     text     Zusammenfassung unter dem Bild
     transkript  Sprechtext zum Mitlesen. Absätze durch Leerzeile trennen.
------------------------------------------------------------ */

const KAPITEL = [

{
  nr: "001",
  titel: "Zehn Baracken aus Holz",
  bild: "bilder/001.jpg",
  bildunterschrift: "[Legende] [Nachweis]",
  text: "1904 plant die Stadtbauinspektion zehn transportable Schulpavillons aus Holz, dazu eine Turnhalle, umgeben von einem zweieinhalb Meter hohen Bretterzaun. Im Januar 1905 ziehen die ersten Kinder ein. Die Schule, die später als 308. bekannt wird, kommt erst 1913 dazu: zwölf Mädchen- und zwei Knabenklassen, Arbeiterkinder aus den Hinterhöfen ringsum.",
  transkript: `Es beginnt mit Holz.

Im Herbst 1904 reicht die Stadtbauinspektion Wedding Pläne ein – für zehn transportable Schulpavillons und eine Turnhalle, errichtet im Holzfachwerkbau, auf einem Gelände zwischen Malplaquet-, Nazarethkirch-, Max- und Schulstraße. Die Baracken stehen hinter einem zweieinhalb Meter hohen Bretterzaun. Zwei Eingangstore zur Nazarethkirchstraße, zwei Fußgängerpforten zur Schulstraße.

Am 16. Januar 1905 erfolgt die Gebrauchsabnahme. Sofort ziehen die ersten Kinder ein – Mädchen der 244. Gemeindeschule. Andere Schulen folgen, teilen sich die Baracken. Erst am 1. Oktober 1913, mit Rektor Steffen und zwölf Mädchen- sowie zwei Knabenklassen, zieht die Schule ein, die als „308." in die Geschichte eingehen wird.

Es ist eine Schule für Arbeiterkinder im Wedding. Für Kinder aus engen Wohnungen, aus Hinterhöfen, aus Familien, in denen das Geld selten reicht und die Wände nah sind. Und es ist – noch – eine ganz normale Gemeindeschule.

Aber das wird sich ändern.`
},

{
  nr: "002",
  titel: "Eine Schule als Lebensgemeinschaft",
  bild: "bilder/002.jpg",
  bildunterschrift: "[Legende] [Nachweis]",
  text: "1923 übernimmt Max Kreuziger das Rektorat. Er kennt die Hamburger Reformschulen und den Begriff, den Wilhelm Paulsen für sie geprägt hat: Lebensgemeinschaft. Kinder, Lehrkräfte und Eltern sollen die Schule gemeinsam tragen, und was die Kinder von draußen mitbringen, soll nicht vor der Tür bleiben. Die 308. arbeitet von 1923 an so — offiziell anerkannt wird sie erst sieben Jahre später.",
  transkript: `1923 übernimmt ein Mann namens Max Kreuziger das Rektorat. Er ist Sozialdemokrat, überzeugter Reformpädagoge, beeinflusst von der Hamburger Bewegung um Wilhelm Paulsen. Und er trägt eine Frage mit sich, die in dieser Zeit viele Lehrkräfte umtreibt: Was soll Schule eigentlich sein?

Die Antwort, die Kreuziger gibt, klingt einfach. Und ist es nicht.

Er nennt sie – mit dem Begriff, den Paulsen für die ganze Bewegung geprägt hat: Lebensgemeinschaft.

Keine Schule, in der Wissen von oben nach unten gereicht wird. Kein Ort, der das Leben draußen aussperrt. Sondern ein Ort, an dem Kinder, Lehrkräfte und Eltern gemeinsam leben – an dem das, was die Kinder kennen, fühlen, erleben, nicht vor der Tür bleibt, sondern in den Mittelpunkt rückt.

Die 308. lebt das pädagogische Programm von Anfang an – offiziell anerkannt als Lebensgemeinschaftsschule wird sie allerdings erst 1930, als die Zahl solcher Versuchsschulen in Berlin auf elf Stück steigt.

Kreuziger hatte die Hamburger Reformschulen studiert, wo Lehrer wie Wilhelm Paulsen darauf bestanden: Kinder sind keine leeren Behälter, sondern bringen Erfahrungen, Bilder, Sprache, Gefühle mit. Und genau das sollte Eingang in die Schule finden.

Im Wedding des Jahres 1923 bedeutet das: Diese Kinder bringen den Leopoldplatz mit. Die Enge der Mietskasernen. Die Gerüche der Hinterhöfe. Die Stimmen der Mütter, die abends rechnen, ob das Geld reicht. Den Lärm der Straße. Die Freiheit der wenigen Freiflächen.

All das soll nicht draußen bleiben. All das soll hinein.`
},

{
  nr: "003",
  titel: "Freier Ausdruck",
  bild: "bilder/003.jpg",
  bildunterschrift: "[Legende] [Nachweis]",
  text: "Keine Diktate, keine Abschriften: Die Kinder schreiben eigene Beobachtungen und Geschichten auf. In Alfred Zettls Klassenzimmer bemalt ein ehemaliger Schüler die Wände mit historischen Szenen, und die Eltern sparen Stahlrohrstühle an, damit sich im Unterrichtsgespräch alle ansehen können. In jedem Klassenraum steht ein Aquarium. Ein Reporter der BZ am Mittag nennt die Schule im Mai 1931 das Reich der Kinderträume.",
  transkript: `Gemeinsam mit seinem Kollegen Bruno Stephan und dem restlichen Kollegium beginnt Kreuziger, die 308. zu verwandeln.

Das Zentrum dieser Verwandlung ist ein Begriff, der in der Reformpädagogik dieser Jahre wie ein Schlüssel kursiert: freier Ausdruck. Die Idee, dass Kinder nicht nachahmen, nicht wiederholen, nicht auswendig lernen sollen – sondern sich kreativen Raum nehmen sollen; ausdrücken, was sie sehen. Was sie denken. Was sie fühlen.

Das klingt heute selbstverständlich. Damals ist es eine kleine Revolution.

An der 308. bedeutet freier Ausdruck: Die Kinder schreiben eigene Texte – keine Diktate, keine Abschriften, sondern eigene Beobachtungen, eigene Geschichten, eigene Gedanken. Sie zeichnen, was sie sehen. Sie gestalten ihren Klassenraum mit. Sie benennen, was sie kennen, und lernen dabei, dass ihre Sprache zählt. Dass ihre Welt zählt.

In Alfred Zettls Klassenzimmer hat ein ehemaliger Schüler, inzwischen selbst Kunsterzieher, die Wände bemalt – mit Illustrationen historischer Geschehnisse. Nicht als Dekoration. Als Einladung. Die Bilder sollen Gespräche auslösen, Fragen, Assoziationen. Der Raum selbst wird zum pädagogischen Werkzeug.

Auch die alte Ordnung weicht: Weg von der starren Bankreihe, die nur Frontalunterricht zulässt. Neue Stahlrohrstühle stehen jetzt im Klassenzimmer – von den Eltern mühsam angespart, damit die Kinder sich im Unterrichtsgespräch anschauen können.

Und dann sind da die Aquarien.

Goldfische, Schnecken, Krebse, Salamander, Frösche – in jedem Klassenraum. Als Beobachtungsobjekte, als Gesprächsanlässe, als lebendige Welt, die in den Unterricht hineinragt. Die Kinder sollen schauen. Beschreiben. Staunen.

Ein Reporter der BZ am Mittag schreibt im Mai 1931 begeistert: Die 308. sei „das Reich der Kinderträume". Auf den Tischen Blumentöpfe. An den Wänden Bilder. Die Kinder sollten sich, so Alfred Zettl, im Unterrichtsraum wohl und aufgehoben fühlen – als gehöre dieser Raum ihnen.`
},

{
  nr: "004",
  titel: "Der Garten und die Kakaoküche",
  bild: "bilder/004.jpg",
  bildunterschrift: "[Legende] [Nachweis]",
  text: "Die Schule hat einen Garten, und der Garten ist Unterricht: Im September 1925 schreiben die Schüler auf, wie sich das Land am besten für die Gemeinschaft nutzen ließe. In der Schulküche kochen Väter und Mütter für die bedürftigsten Kinder — einkaufen, Tisch decken, abwaschen und die Abrechnung führen die Kinder selbst. Jede Klasse hat außerdem ihre eigene Kakaoküche, betrieben von Müttern nach festem Plan.",
  transkript: `Aber das Kollegium denkt nicht nur an die Klassenzimmer. Es denkt größer.

Die Schule hat einen Garten. Und der Garten ist kein Schmuck. Er ist Unterricht. Die Kinder pflanzen, ernten, beobachten das Wachsen. Im September 1925 äußern sich die Schüler schriftlich darüber, wie das Gartenland möglichst einträglich für die Gemeinschaft genutzt werden könnte. Der Garten ist Biologieunterricht, Schreibanlass, Gemeinschaftsprojekt. Und für Kinder, die zuhause keinen Quadratmeter Grün haben, ist er noch etwas anderes: ein Erfahrungsraum, den sie sonst nicht kennen würden.

Es gibt eine Schulküche. Eine Arbeitsgemeinschaft aus Vätern und Müttern bereitet dort das Mittagessen für die bedürftigsten Kinder der Schule zu – und die Kinder selbst sind keine Zuschauer dabei: Sie kaufen ein, decken den Tisch, waschen ab, führen die Abrechnungen und die Buchführung der Küche. Die Schulküche ist, für eine gewisse Zeit, ganz offiziell Aufgabengebiet einer der oberen Klassen.

Mittags gibt es Kakao. Jede Klasse hat ihre eigene Kakaoküche, in einem Vorraum zum Klassenzimmer.

Lehrer Bruno Stephan erinnert sich Jahrzehnte später noch daran: „Die Kakaoküche lag in den Händen der Mütter, die sich drei um drei Tage nach festem Plan dafür zur Verfügung stellten."

Schule ist kein Gegenraum zum Leben, sondern seine Fortsetzung. Ein Ort, den Eltern, Kinder und Lehrkräfte gemeinsam tragen.`
},

{
  nr: "005",
  titel: "Montagabend, achtzehn Uhr",
  bild: "bilder/005.jpg",
  bildunterschrift: "[Legende] [Nachweis]",
  text: "Jeden Montag von achtzehn bis zwanzig Uhr tagt der Elternausschuss: drei gewählte Vertreter aus jeder der fünfzehn Klassen, mit dem Kollegium zusammen rund sechzig Personen. Oskar Eckert baut neben dem Schülerchor auch einen Elternchor auf. Zum Sommerfest 1931 kommen einige tausend Menschen auf den Leopoldplatz, mit Fackelzug und Aufführungen der Kinder. Das Jahresmotto lautet: Es war einmal.",
  transkript: `Und dann sind da die Elternabende.

Jeden Montag, von achtzehn bis zwanzig Uhr, tagt der Elternausschuss – aus jeder der fünfzehn Klassen drei gewählte Vertreter, die zusammen mit dem Kollegium ein rund sechzigköpfiges Gremium bilden. Einmal im Monat kommen dann, in jeder Klasse einzeln, alle Eltern zusammen – und hier, sagt Kreuziger selbst, sei die Aussprache „naturgemäß lebhafter".

Die Eltern sind keine Adressaten, die über das Tun der Schule informiert werden. Sie sind Teil des Ganzen. Sie bringen Kuchen. Sie organisieren das Sommerfest. Sie singen im Elternchor – denn Lehrer Oskar Eckert hat nicht nur einen Schülerchor und einen gemischten Chor aufgebaut, sondern auch einen Elternchor und einen Männerchor.

Das Sommerfest 1931 ist – wie alle anderen Feste – ein Großereignis. Laut der Vossischen Zeitung vom 23. August 1931 strömen einige tausend Menschen auf den Leopoldplatz. Es gibt einen Fackelzug, Kaffeeküchen, Aufführungen der Kinder. Das Jahresmotto: „Es war einmal…" Eine Schule, die sich selbst als Lebensgemeinschaft versteht, feiert auch gemeinsam.

Die Schule führt Theaterstücke auf. 1928 „Das Glückskind, oder der Teufel mit den drei goldenen Haaren". 1930 wagt sich die Abschlussklasse an Gerhart Hauptmanns „Biberpelz". Die Kinder stehen auf der Bühne.`
},

{
  nr: "006",
  titel: "Streit um die weltliche Schule",
  bild: "bilder/006.jpg",
  bildunterschrift: "[Legende] [Nachweis]",
  text: "Die 308. ist eine weltliche Schule, ohne Konfession. Im Januar 1922 beantragt die Bezirksverordnetenversammlung Wedding solche Schulen, ein Jahr später werden acht Weddinger Gemeindeschulen umgewandelt. Die evangelische Kirche wehrt sich: Pfarrer Struckmeier verschickt eine Warnkarte an sämtliche Väter der betroffenen Schulen, Flugblätter werden verteilt. Der Vorwurf lautet, hier wüchsen Kinder ohne Werte auf.",
  transkript: `Es gibt noch eine Dimension, die man nicht vergessen darf.

Die 308. liegt im Wedding. Im Wedding der Weimarer Republik. Einem Viertel, das zu den ärmsten Berlins gehört, einem Viertel voller Arbeiterfamilien, politischer Auseinandersetzungen, sozialer Not.

Die Schule ist eine weltliche Schule – keine konfessionelle, keine evangelische, keine katholische. Das ist eine politische Entscheidung. Und sie macht die 308. zum Schauplatz eines heftigen Kulturkampfes.

Die evangelische Kirche kämpft gegen die weltlichen Schulen. Pfarrer Struckmeier, Vorsitzender der evangelischen Eltern im Wedding, schickt eine Warnkarte – „Achtung! Evangelische Eltern!" – an sämtliche Väter der betroffenen Schulen. Flugblätter werden verteilt. Der Vorwurf: Diese Schule ist gottlos. Diese Kinder wachsen ohne Werte auf.

Am 4. Januar 1922 beschließt die Bezirksverordnetenversammlung Wedding dennoch, die Einrichtung weltlicher Schulen zu beantragen. Zum 1. April 1923 werden acht Weddinger Gemeindeschulen – darunter die Barackenschule am Leopoldplatz – in Sammelschulen umgewandelt. Der Schulvorstand hält stand.

Aber das Viertel formt die Schule auch auf andere Weise. Die Kinder, die an der 308. lernen, wachsen in einer Welt auf, in der politische Überzeugungen Familien spalten, in der Armut ein täglicher Begleiter ist, in der die Straße laut und das Zuhause eng ist. Der freie Ausdruck, den Kreuziger und seine Kollegen fordern, ist auch deshalb so bedeutsam: Er gibt diesen Kindern die Sprache für das, was sie kennen. Er sagt ihnen: Was ihr erlebt, ist es wert, aufgeschrieben zu werden.`
},

{
  nr: "007",
  titel: "Nach Paragraph 4",
  bild: "bilder/007.jpg",
  bildunterschrift: "[Legende] [Nachweis]",
  text: "1933 leiten Heinrich Mäcke und Else Hiebsch die Schule. Beide werden noch im selben Jahr nach Paragraph 4 aus dem Dienst entfernt — jenem Gesetz, mit dem der nationalsozialistische Staat Beamte ohne Begründung entlassen kann. Max Kreuziger, inzwischen Schulrat, kommt in ein Konzentrationslager und schließt sich später der Widerstandsgruppe um Ernst von Harnack an. Bertha Schübel, Bruno Stephan und Alfred Zettl werden versetzt, Bücher aus der Schüler- und der Elternbücherei werden verbrannt.",
  transkript: `Am 30. Januar 1933 wird Adolf Hitler Reichskanzler.

An der 308. ändert sich zunächst nichts, was man von außen sehen kann.

Kreuziger selbst ist zu diesem Zeitpunkt längst nicht mehr Rektor der 308. – schon Ende der zwanziger Jahre war er zum Schulrat für den Bezirk Wedding aufgestiegen. Die Schule leiten inzwischen zwei andere: Rektor Heinrich Mäcke und Konrektorin Else Hiebsch. Beide werden noch 1933 „nach § 4" aus dem Dienst entfernt – jenem Gesetz, das es dem nationalsozialistischen Staat erlaubt, Beamte ohne Begründung zu entlassen.

Auch Kreuziger selbst, inzwischen Schulrat, wird Opfer des § 4. Nach seiner Entlassung wird er in einem Konzentrationslager interniert. Nach seiner Freilassung taucht er – nach Auskunft seines früheren Kollegen Alfred Zettl – vorübergehend bei diesem unter. Er schließt sich der Widerstandsgruppe um Ernst von Harnack an. Er überlebt die Zeit bis 1945 und arbeitet danach im Schulwesen der DDR.

Auch die anderen werden versetzt, degradiert, zum Schweigen gebracht. Bertha Schübel, die Hauswirtschaftslehrerin, wird im April 1934 „zur Bewährung" nach Neukölln versetzt – ein bürokratischer Ausdruck für das Verstummen einer Stimme. Bruno Stephan geht im Herbst 1934 nach Reinickendorf. Alfred Zettl wird im April 1935 nach Charlottenburg versetzt.

Alfred Zettl erinnert sich auch an das, was in der Schule verbrannt wurde: Bücher aus der umfangreichen Schülerbücherei, aus der von ihm eingerichteten Elternbücherei. Und die schwarz-rot-goldene Fahne wird in die Flammen geworfen.

Was zehn Jahre lang aufgebaut wurde – die Aquarien, die Chöre, die Gärten, die Montagabende, die Kakaoküchen, der freie Ausdruck, die Überzeugung, dass diese Kinder und ihre Welt zählen – es wird ausgetrieben. Planmäßig, gründlich, schnell.

Am 26. Januar 1937 brennt die Turnhalle fast vollständig ab. Die verkohlten Überreste stehen zwei Jahre lang.

1943 stehen in den Baracken, in denen der Chor probte und die Kakaoküchen standen, Schreibtische des Ernährungsamts, des Wirtschaftsamts und einer Lebensmittelkartenstelle. Nach 1943 werden fast alle Baracken im Krieg zerstört.`
},

{
  nr: "008",
  titel: "Vierzig Jahre später",
  bild: "bilder/008.jpg",
  bildunterschrift: "[Legende] [Nachweis]",
  text: "Von der Schule geblieben sind Erinnerungen — an die Aquarien, an den Kakao, an Kreuziger, Zettl und Eckert. Bruno Stephan blickt vierzig Jahre später zurück und findet eine Sache besonders erstaunlich: dass sich Montag für Montag, über all die Jahre, immer wieder genug Eltern für die Ausschusssitzungen fanden.",
  transkript: `Was bleibt, sind Erinnerungen.

Von Lehrkräften, Eltern, ehemaligen Schülerinnen und Schülern, die Jahrzehnte später noch von dieser Schule erzählen. Von den Aquarien. Vom Kakao. Von Max Kreuziger, der die Schule zu dem gemacht hat, was sie war. Von Alfred Zettl, in dessen Klassenzimmer die Wände erzählten. Von Oskar Eckert, der einen Chor mit allen gründete, die er gewinnen konnte – Kinder als auch Eltern.

Bruno Stephan blickt vierzig Jahre später zurück und nennt es „eine auch im Rückblick noch fast unglaubliche Leistung" – dass sich für die zeitraubenden Elternausschusssitzungen, Montag für Montag, all die Jahre über, immer wieder Menschen fanden, die mitmachten.

Vielleicht liegt das Unglaubliche darin, dass Kreuziger und seine Kolleg*innen etwas geglaubt haben, das so einfach klingt und so selten wirklich ernst genommen wird:

Dass Kinder nicht erst dann etwas zu sagen haben, wenn sie erwachsen sind. Dass ihre Sprache, ihre Erfahrungen, ihre Welt – die Enge der Wohnung, der Lärm des Leopoldplatzes, der Geschmack des Kakaokuchens – der Stoff ist, aus dem Bildung werden muss.`
}

];
