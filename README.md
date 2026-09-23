# PWA Turni

Questa versione:
- legge i colori dell'Excel con ExcelJS (non usa SheetJS per gli stili);
- identifica i dipendenti tramite il giallo della colonna A;
- identifica le location tramite il colore della colonna A;
- usa la location precedente per X non colorate;
- usa il colore della X per le X colorate;
- tratta il foglio `domeniche` come fonte autorevole per le domeniche e rimuove duplicati;
- salva i turni nel database locale del browser (IndexedDB), quindi dopo il primo caricamento non serve ricaricare l'Excel sullo stesso dispositivo/browser;
- NON include ancora alcuna funzione calendario.

## Nota
Questa è la versione locale/offline. Per la versione con database cloud gratuito (così i dati possono essere mantenuti anche cambiando dispositivo) va aggiunto Supabase con autenticazione e Row Level Security.
