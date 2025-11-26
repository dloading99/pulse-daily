# Daily Pulse – Product Brief

## Visione
Daily Pulse è un assistente editoriale AI-driven che trasforma la routine LinkedIn in un flusso end-to-end: ricerca → insight → scrittura → immagine → pubblicazione → apprendimento. L'obiettivo è consentire a founder, executive e creator di pubblicare contenuti autorevoli in pochi minuti mantenendo controllo umano totale.

## Target e casi d'uso
- **Target**: founder/CEO/C-level, consulenti ed esperti di settore, knowledge worker con ambizione di presenza su LinkedIn.
- **Casi d'uso chiave**:
  1. Post quotidiano in 5–10 minuti.
  2. Coerenza di personal brand su temi, tono e qualità.
  3. Curazione di insight sintetici da fonti autorevoli.
  4. Flusso unico per testo, immagine e pubblicazione.

## Principi di prodotto
1. **Human-in-control**: nessuna pubblicazione automatica; editing libero di testo e immagine.
2. **Qualità > quantità**: poche fonti affidabili, pochi insight ad alta densità.
3. **Apprendimento progressivo**: adattamento continuo su stile, temi e orari in base a engagement.
4. **Esperienza mobile-first**: ogni schermata ha un unico focus e minimizza la frizione.

## Moduli funzionali
1. **Calendario editoriale intelligente**
   - Vista settimanale (5–7 giorni) con card tema.
   - Titolo tema + descrizione, drag & drop, preset iniziale.
   - Suggerimenti basati su settore e storico engagement.
   - Persistenza e duplicazione di settimane tipo.

2. **Ricerca & Insight**
   - Fonti baseline: Bloomberg, Harvard Business Review, MIT Technology Review, The Economist.
   - Parametri: tema del giorno, settore utente, finestra temporale 7–30 giorni.
   - Filtri: esclusione contenuti AI non verificati, priorità analitica.
   - Output: 3–5 card con titolo, fonte/data, sintesi bullet, link, Pulse Score (1–100).
   - Pulse Score considera allineamento tema, profondità analitica, coerenza col settore, capacità di generare discussione.

3. **Generazione testi (Ghostwriter AI)**
   - Struttura vincolata: HOOK → INSIGHT → HUMAN CONNECTION → OPEN LOOP.
   - Tono: autoritario ma accessibile, provocatorio ma rispettoso, tecnico ma umano.
   - Voice Match tramite analisi dei post LinkedIn più performanti per estrarre pattern (lunghezza, registro, hook, storytelling).
   - UX: scelta di 1–3 insight, grado di personalizzazione, bozza principale con rigenerazione, editor integrato, duplicazione e salvataggio draft.

4. **Generazione immagini (Direttore Artistico AI)**
   - Stile illustrato editoriale (ispirazione Humaaans evoluto), no stock look.
   - Palette configurabile per utente; coerenza visiva nel tempo.
   - Metafora visiva basata sul concetto chiave del post.
   - Anteprima accanto al testo con opzioni di rigenerazione o upload custom.
   - Output ottimizzato per formato LinkedIn (1200x1200 o 1200x1350 configurabile).

5. **Pubblicazione & scheduling**
   - Integrazione LinkedIn via OAuth; supporto profilo personale (pagine future).
   - Card post (testo+immagine) come unità con anteprima fedele; gesto di conferma esplicito.
   - Modalità "Pubblica ora" e "Programma" con orario consigliato.
   - Vincolo: nessuna pubblicazione senza azione esplicita.
   - Analytics base: impression, like, commenti, share per capire temi/orari/formati migliori.

6. **Personalizzazione & learning (Pulse Engine)**
   - Dati: engagement, temi usati, hook/formati migliori, orari efficaci.
   - Applicazioni: affinare temi, ottimizzare struttura/lunghezza, suggerire orari, prioritizzare insight più conversazionali.

## Flusso utente end-to-end
1. Onboarding: settore, ruolo, lingue, obiettivo; configurazione calendario; collegamento LinkedIn; Voice Match su post esistenti.
2. Routine giornaliera: mostra tema del giorno e 3–5 insight con Pulse Score; l'utente seleziona 1–3 insight; il sistema genera bozza e immagine; l'utente edita e decide se pubblicare o programmare.

## Vincoli tecnici e di sicurezza
- LLM avanzato per generazione testo; modello di generazione immagini dedicato.
- Integrazioni con fonti via API/sistemi conformi ai termini d'uso.
- Isolamento dati per account; gestione sicura di credenziali LinkedIn (OAuth).
- Architettura scalabile per multi-utente e future estensioni di fonti/social.
