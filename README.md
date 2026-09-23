# Turni PWA v4

Questa versione usa ExcelJS per leggere correttamente anche i colori/stili delle celle Excel.

## Deploy
Carica `index.html`, `manifest.json` e `sw.js` nella root di un repository GitHub Pages.
Non caricare l'Excel dei turni nel repository.

## Dati
I turni estratti vengono salvati in IndexedDB sul dispositivo/browser. Riaprendo la PWA sullo stesso dispositivo, i turni sono già disponibili.

## Aggiornamento
Quando carichi un nuovo Excel, l'archivio locale viene sostituito con i turni del nuovo file.
