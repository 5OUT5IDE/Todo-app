# Min ToDo-app

Det här är min ToDo-applikation gjord med **HTML, CSS och JavaScript**.

## Vad appen gör

- Du kan skriva en uppgift i ett **inputfält**.
- Klicka på **"Lägg till"** för att lägga till uppgiften i listan.
- Om du inte skriver något visas ett meddelande: *"Input must not be empty"*.
- Klicka på en uppgift för att markera den som **klar** (den blir grå och genomstruken).
- Klicka på uppgiften igen för att markera den som **inte klar**.
- Varje uppgift har en **🗑️ papperskorg** som du kan klicka på för att ta bort uppgiften.
- En liten räknare visar hur många uppgifter som är klara.

## Inehållet

- **HTML** –  Strukturen på sidan.
- **CSS** – Stylning på hemsidan
- **JavaScript** – lägger till funktioner som att lägga till, ta bort och markera uppgifter.

## Hur det fungerar

- Uppgifterna sparas i en **array** i JavaScript med objekt `{ text, done }`.
- HTML och arrayen hålls **synkade**.
- När du markerar en uppgift som klar eller tar bort den uppdateras både listan och räknaren automatiskt.


## Hur man kör appen

1. Ladda ner eller klona repo.
2. Öppna **index.html** i en webbläsare.
3. Börja skriva uppgifter och testa funktionerna.


> Annars kan du använda https://5out5ide.github.io/Todo-app/




---
