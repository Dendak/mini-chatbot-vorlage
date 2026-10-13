// =====================================================================================================
//  WISSENSBASIS des Mini-Chatbots – nur diese Datei müsst ihr bearbeiten.
//
//  ACHTUNG: Diese Datei ist im Internet für alle lesbar (GitHub Pages).
//  Online steht hier nur TESTINHALT. Echte Antworten aus dem Interview kommen erst online,
//  wenn die interviewte Person sie gelesen und freigegeben hat. Bis dahin testet ihr sie nur
//  LOKAL auf dem Schul-PC (Ordner entpacken, index.html bzw. training.html im Browser öffnen).
//
//  So geht ein Eintrag:
//    frage:        eine Beispielfrage (erscheint als Vorschlag-Knopf)
//    stichwoerter: für den Stichwort-Bot (index.html): Wörter, an denen er die Frage erkennt
//                  (klein schreiben; Teilwörter gehen auch: 'geboren' passt zu „Wo bist du geboren?“)
//    fragen:       für den trainierten Bot (training.html): TRAININGSDATEN – möglichst viele
//                  verschiedene Fragen (10–20), wie Leute nach dieser Antwort fragen würden
//    antwort:      die Antwort – bei echten Daten WÖRTLICH aus dem korrigierten Transkript
//
//  Nach jedem Eintrag und nach jeder Frage ein Komma. Texte in 'einfachen' Anführungszeichen.
//  Steht in einem Text ein Apostroph (gibt's), nehmt "doppelte" Anführungszeichen.
// =====================================================================================================

const BOT = {
  name: 'Mini-Chatbot',
  begruessung: 'Hallo! Ich bin ein Mini-Chatbot aus dem Informatikunterricht. Frag mich etwas – unten stehen Beispiele.',
  unbekannt: 'Dazu weiß ich leider nichts. Frag mich etwas anderes!',
};

const WISSEN = [
  {
    frage: 'Wer bist du?',
    stichwoerter: ['wer bist', 'name', 'heißt du', 'wer ist'],
    fragen: [
      'Wer bist du?',
      'Wie heißt du?',
      'Was bist du?',
      'Stell dich bitte vor',
      'Wer hat dich gebaut?',
      'Wer hat dich programmiert?',
      'Hast du einen Namen?',
      'Mit wem rede ich gerade?',
      'Bist du ein Mensch?',
      'Wer steckt hinter dir?',
    ],
    antwort: 'Ich bin ein Mini-Chatbot. Eine Schülergruppe hat mich im Wahlpflichtfach Informatik gebaut.',
  },
  {
    frage: 'Wie funktionierst du?',
    stichwoerter: ['funktion', 'wie geht', 'arbeitest', 'verstehst'],
    fragen: [
      'Wie funktionierst du?',
      'Wie arbeitest du?',
      'Wie findest du die richtige Antwort?',
      'Verstehst du, was ich schreibe?',
      'Wie bist du programmiert?',
      'Was passiert, wenn ich dir eine Frage stelle?',
      'Wie wählst du deine Antworten aus?',
      'Bist du eine künstliche Intelligenz?',
      'Denkst du nach?',
      'Woher weißt du, was ich meine?',
    ],
    antwort: 'Ich suche in deiner Frage nach Stichwörtern. Die Antwort mit den meisten Treffern zeige ich an. Verstehen tue ich nichts!',
  },
  {
    frage: 'Was ist ein Transkript?',
    stichwoerter: ['transkript', 'abschrift', 'mitschrift'],
    fragen: [
      'Was ist ein Transkript?',
      'Was bedeutet transkribieren?',
      'Wie habt ihr das Interview abgetippt?',
      'Was ist eine Abschrift?',
      'Wie wird aus einer Aufnahme ein Text?',
      'Was habt ihr mit der Tonaufnahme gemacht?',
      'Wer hat das Gespräch aufgeschrieben?',
      'Was ist Whisper?',
      'Woher kommt der Text für deine Antworten?',
      'Wie kommt das Gespräch in den Computer?',
    ],
    antwort: 'Ein Transkript ist die schriftliche Fassung eines Gesprächs. Wir haben unser Interview mit Whisper abgetippt und danach von Hand korrigiert.',
  },
  {
    frage: 'Warum habt ihr offline transkribiert?',
    stichwoerter: ['offline', 'datenschutz', 'internet', 'cloud'],
    fragen: [
      'Warum habt ihr offline transkribiert?',
      'Warum nicht im Internet?',
      'Was hat das mit Datenschutz zu tun?',
      'Warum habt ihr keine Cloud verwendet?',
      'Ist die Aufnahme sicher?',
      'Wo liegen die Interviewdaten?',
      'Warum bleibt die Aufnahme auf dem Schul-PC?',
      'Darf man Stimmen einfach hochladen?',
      'Sind Stimmen persönliche Daten?',
      'Warum ist offline besser?',
    ],
    antwort: 'Stimme und Inhalt eines Interviews sind persönliche Daten. Darum blieben sie auf dem Schul-PC.',
  },
  {
    frage: 'Kannst du dich irren?',
    stichwoerter: ['irren', 'falsch', 'fehler', 'stimmt', 'lügen'],
    fragen: [
      'Kannst du dich irren?',
      'Machst du Fehler?',
      'Stimmt immer, was du sagst?',
      'Kannst du lügen?',
      'Was passiert, wenn du etwas nicht weißt?',
      'Bist du immer richtig?',
      'Kann man dir vertrauen?',
      'Erfindest du manchmal Antworten?',
      'Warum hast du gerade falsch geantwortet?',
      'Wie zuverlässig bist du?',
    ],
    antwort: 'Ja. Ich gebe nur gespeicherte Sätze wieder. Passt ein Stichwort zufällig, bekommst du eine Antwort auf eine ganz andere Frage.',
  },
];

// Nur für den trainierten Bot (training.html): Fragen, die der Bot NICHT beantworten soll.
// Daraus lernt er „Dazu weiß ich nichts“ – sonst wählt er immer irgendeine Antwort.
const UNBEKANNT_FRAGEN = [
  'Was isst du gern?',
  'Wie wird das Wetter morgen?',
  'Welche Fußballmannschaft magst du?',
  'Erzähl mir einen Witz',
  'Was ist die Hauptstadt von Frankreich?',
  'Wie spät ist es?',
  'Was ist deine Lieblingsfarbe?',
  'Kannst du meine Mathe-Aufgabe lösen?',
  'Welches Handy soll ich kaufen?',
  'Magst du Katzen oder Hunde?',
];
