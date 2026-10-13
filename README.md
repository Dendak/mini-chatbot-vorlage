# Mini-Chatbot – Vorlage

Ein einfacher Chatbot als Webseite für den Informatikunterricht. Er sucht in der Frage nach **Stichwörtern** und
zeigt die passende gespeicherte Antwort an (regelbasiert, ohne KI). Läuft im Browser, ohne Server, ohne Konto.

**Vorschau:** https://dendak.github.io/mini-chatbot-vorlage/

| Datei | Wozu |
| --- | --- |
| `wissen.js` | Name des Bots, Begrüßung und die **Wissensbasis** (Fragen, Stichwörter, Antworten) – nur diese Datei bearbeitet ihr |
| `index.html` | **Stichwort-Bot:** sucht Stichwörter, ohne Training (muss nicht verändert werden) |
| `training.html` | **Bot mit Training:** lernt aus Beispielfragen (maschinelles Lernen im Browser) |

> **Wichtig:** Eine GitHub-Pages-Seite ist **für alle im Internet sichtbar** – auch der Inhalt von `wissen.js`.
> Echte Antworten aus einem Interview kommen erst online, wenn die interviewte Person sie gelesen und
> **freigegeben** hat. Keine Nachnamen, keine Adressen, nichts Privates.

## 1. Konto anlegen (jede Person)

1. https://github.com/signup → mit der **Schul-E-Mail-Adresse** registrieren, den Code aus der E-Mail eingeben.
2. **Benutzername:** nicht dein voller Name – er steht später in der Adresse der Seite (z. B. `blauerfuchs27`).
3. Benutzernamen der Gruppe sagen.

## 2. Gruppen-Repo anlegen (eine Person pro Gruppe)

1. Oben auf dieser Seite **Use this template → Create a new repository**.
2. Name z. B. `chatbot-gruppe1`, **Public**, **Create repository**.
3. **Settings → Pages:** Source „Deploy from a branch“, Branch **main**, Ordner **/ (root)** → **Save**.
   Nach 1–2 Minuten steht oben die Adresse der Seite (`https://<benutzername>.github.io/chatbot-gruppe1/`).
4. **Settings → Collaborators → Add people:** die anderen der Gruppe einladen. Sie nehmen die Einladung per
   E-Mail oder unter https://github.com/notifications an.

## 3. Online bearbeiten (nur Testinhalt)

1. Im Repo auf `wissen.js` klicken → Stift-Symbol (**Edit**).
2. Namen des Bots und Begrüßung anpassen, Einträge ändern oder ergänzen.
3. **Commit changes** → kurze Beschreibung, z. B. „Neue Frage zum Schulweg“.
4. Nach etwa einer Minute die Seite neu laden (Strg + F5).

## 4. Lokal testen (echte Interview-Antworten)

1. Im Repo **Code → Download ZIP** → im **Gruppenordner auf dem Schul-PC** entpacken.
2. `wissen.js` mit dem Editor öffnen (Rechtsklick → Öffnen mit → Editor) und die echten Fragen und Antworten aus dem
   korrigierten Transkript eintragen – die Antworten **wörtlich**.
3. Speichern, `index.html` doppelklicken → der Bot läuft im Browser, nur auf diesem PC.
4. Diese Fassung **nicht hochladen**, bis die Antworten freigegeben sind.

## 5. Bot mit Training (`training.html`)

Statt Stichwörter von Hand festzulegen, **lernt** dieser Bot aus Beispielen:

1. In `wissen.js` bekommt jede Antwort eine Liste `fragen` mit **10–20 verschiedenen Fragen**, wie Leute danach
   fragen würden (das sind die **Trainingsdaten**).
2. In `UNBEKANNT_FRAGEN` stehen Fragen, die der Bot **nicht** beantworten soll – daraus lernt er „weiß ich nicht“.
3. `training.html` öffnen → **Trainieren**. Ein kleines neuronales Netz (ein „Neuron“ je Antwort) lernt, welche
   Wörter und Buchstabengruppen zu welcher Antwort gehören. Die Kurve zeigt, wie der Fehler sinkt.
4. Jede 5. Frage wird zurückgehalten (**Testfragen**): Daran seht ihr, wie gut der Bot bei Fragen ist, die er nie
   gesehen hat. Trainingsgenauigkeit 100 %, Testgenauigkeit viel kleiner? Dann hat er **auswendig gelernt**
   (Überanpassung) – mehr und vielfältigere Fragen helfen.
5. Unter „Was hat das Modell gelernt?“ steht, an welchen Wörtern er jede Antwort erkennt.

Das Training läuft nur im Browser, nichts wird verschickt oder gespeichert. Nach dem Neuladen der Seite neu trainieren.

**Repo schon aus der alten Vorlage erstellt?** `training.html` von hier herunterladen (Datei öffnen → Download)
und im eigenen Repo mit **Add file → Upload files** hochladen. In `wissen.js` die Listen `fragen` und
`UNBEKANNT_FRAGEN` ergänzen (Muster siehe `wissen.js` hier).

## Wenn der Bot nicht mehr antwortet

Meist ist in `wissen.js` ein Tippfehler: fehlendes Komma nach `}`, ein Anführungszeichen zu viel oder zu wenig.
Im Browser **F12 → Konsole** zeigt die Zeile mit dem Fehler.

## Ideen zum Weiterbauen

- Mehr Stichwörter pro Antwort (auch Synonyme, Tippfehler, Mundart).
- Mit dem Häkchen „Gefundene Stichwörter anzeigen“ prüfen, warum der Bot so geantwortet hat.
- Andere fragen lassen: Welche Fragen beantwortet er falsch? Warum?
- Stichwort-Bot und trainierten Bot mit denselben 10 Fragen vergleichen: Wer trifft öfter?
