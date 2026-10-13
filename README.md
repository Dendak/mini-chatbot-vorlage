# Mini-Chatbot – Vorlage

Ein einfacher Chatbot als Webseite für den Informatikunterricht. Er sucht in der Frage nach **Stichwörtern** und
zeigt die passende gespeicherte Antwort an (regelbasiert, ohne KI). Läuft im Browser, ohne Server, ohne Konto.

**Vorschau:** https://dendak.github.io/mini-chatbot-vorlage/

| Datei | Wozu |
| --- | --- |
| `wissen.js` | Name des Bots, Begrüßung und die **Wissensbasis** (Fragen, Stichwörter, Antworten) – nur diese Datei bearbeitet ihr |
| `index.html` | die Chat-Seite (muss nicht verändert werden) |

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

## Wenn der Bot nicht mehr antwortet

Meist ist in `wissen.js` ein Tippfehler: fehlendes Komma nach `}`, ein Anführungszeichen zu viel oder zu wenig.
Im Browser **F12 → Konsole** zeigt die Zeile mit dem Fehler.

## Ideen zum Weiterbauen

- Mehr Stichwörter pro Antwort (auch Synonyme, Tippfehler, Mundart).
- Mit dem Häkchen „Gefundene Stichwörter anzeigen“ prüfen, warum der Bot so geantwortet hat.
- Andere fragen lassen: Welche Fragen beantwortet er falsch? Warum?
