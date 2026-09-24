# Turni PWA v15.0.0

Correzione salvataggio locale: definita la chiave di backup `turni-backup-v15`; IndexedDB e localStorage sono indipendenti e il fallback non blocca il salvataggio. Il database e la cache hanno nomi nuovi per evitare residui delle versioni precedenti.

La visualizzazione iniziale resta limitata alla settimana corrente (lunedì-domenica).

Le notifiche push sono predisposte nel service worker ma non sono ancora collegate a un provider: occorrono l'ID app del provider e un meccanismo server-side per inviare i promemoria programmati.
