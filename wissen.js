// =====================================================================================================
//  WISSENSBASIS des Mini-Chatbots – nur diese Datei müsst ihr bearbeiten.
//
//  ACHTUNG: Diese Datei ist im Internet für alle lesbar (GitHub Pages).
//  Online steht hier nur TESTINHALT. Echte Antworten aus dem Interview kommen erst online,
//  wenn die interviewte Person sie gelesen und freigegeben hat. Bis dahin testet ihr sie nur
//  LOKAL auf dem Schul-PC (Ordner entpacken, index.html im Browser öffnen).
//
//  So geht ein Eintrag:
//    frage:       eine Beispielfrage (erscheint unten als Vorschlag-Knopf)
//    stichwoerter: Wörter, an denen der Bot die Frage erkennt (klein schreiben, ohne Satzzeichen;
//                  Teilwörter gehen auch: 'geboren' passt zu „Wo bist du geboren?“)
//    antwort:     die Antwort – bei echten Daten WÖRTLICH aus dem korrigierten Transkript
//
//  Nach jedem Eintrag ein Komma. Texte in 'einfachen' Anführungszeichen. Steht in einem Text ein
//  Apostroph, nehmt "doppelte" Anführungszeichen.
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
    antwort: 'Ich bin ein Mini-Chatbot. Eine Schülergruppe hat mich im Wahlpflichtfach Informatik gebaut.',
  },
  {
    frage: 'Wie funktionierst du?',
    stichwoerter: ['funktion', 'wie geht', 'arbeitest', 'verstehst'],
    antwort: 'Ich suche in deiner Frage nach Stichwörtern. Die Antwort mit den meisten Treffern zeige ich an. Verstehen tue ich nichts!',
  },
  {
    frage: 'Was ist ein Transkript?',
    stichwoerter: ['transkript', 'abschrift', 'mitschrift'],
    antwort: 'Ein Transkript ist die schriftliche Fassung eines Gesprächs. Wir haben unser Interview mit Whisper abgetippt und danach von Hand korrigiert.',
  },
  {
    frage: 'Warum habt ihr offline transkribiert?',
    stichwoerter: ['offline', 'datenschutz', 'internet', 'cloud'],
    antwort: 'Stimme und Inhalt eines Interviews sind persönliche Daten. Darum blieben sie auf dem Schul-PC.',
  },
  {
    frage: 'Kannst du dich irren?',
    stichwoerter: ['irren', 'falsch', 'fehler', 'stimmt', 'lügen'],
    antwort: 'Ja. Ich gebe nur gespeicherte Sätze wieder. Passt ein Stichwort zufällig, bekommst du eine Antwort auf eine ganz andere Frage.',
  },
];
