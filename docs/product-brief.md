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

### 7. Scope MVP – Cosa deve esserci in v1 (e cosa no)

#### 7.1 Must-have (MVP v1.0)

Queste funzionalità devono essere presenti nella prima versione funzionante:

1. **Onboarding base**

   * Raccolta: settore, ruolo, lingua principale, obiettivo (es. awareness/lead/autorevolezza).
   * Configurazione calendario editoriale con:

     * preset settimanale,
     * possibilità di rinominare i temi,
     * drag & drop per spostare temi tra i giorni.
   * Collegamento LinkedIn via OAuth (solo profilo personale).

2. **Insight Deck minimo**

   * Per il tema del giorno:

     * Ricerca articoli su almeno **2 fonti** tra: Bloomberg, HBR, MIT Tech Review, The Economist.
     * Output di **minimo 3 card insight** con:

       * titolo,
       * fonte + data,
       * 3–5 bullet di sintesi,
       * link all’articolo.
     * Pulse Score semplificato (scala 1–100) basato su:

       * allineamento al tema del giorno,
       * recency,
       * profondità percepita (valutata dal modello).

3. **Generazione bozza post**

   * L’utente seleziona 1–3 insight.
   * Viene generata **1 bozza principale** con struttura vincolata:

     * Prima parte: HOOK (max 2 frasi).
     * Corpo: INSIGHT (3–6 frasi o bullet).
     * Sezione centrale: HUMAN CONNECTION (1–2 frasi).
     * Chiusura: OPEN LOOP (1 domanda o call to discussion).
   * Editor di testo integrato con:

     * conteggio caratteri,
     * possibilità di rigenerare mantenendo stessi insight.

4. **Generazione immagine**

   * Generazione di **1 immagine** per post con:

     * stile illustrato (no fotorealistico),
     * formati: 1200x1200.
   * Azioni utente:

     * rigenera immagine,
     * sostituisci con upload propria.

5. **Pubblicazione base su LinkedIn**

   * “Pubblica ora” sul profilo personale.
   * Anteprima fedele del post (testo + immagine).
   * Conferma esplicita prima dell’invio.

6. **Persistenza minima**

   * Salvataggio:

     * calendario temi,
     * draft post non pubblicati,
     * storico dei post pubblicati (solo metadata + link).

#### 7.2 Should-have (se rientra in tempi)

* Scheduling “Programma” con:

  * scelta data/ora,
  * orario consigliato molto semplice (fascia oraria basata su best practice standard).
* Analytics base:

  * raccolta e visualizzazione:

    * impression (se disponibili),
    * like,
    * commenti,
    * share.
* Voice Match semplificato:

  * analisi di 5–10 post recenti per estrarre:

    * lunghezza media,
    * uso di paragrafi brevi/lunghi,
    * prevalenza di storytelling vs bullet.

#### 7.3 Could-have (da esplicitare come Fase 2+)

* Ottimizzazione avanzata orari di pubblicazione in base a storico reale.
* Modello Pulse Score evoluto.
* Supporto pagine aziendali LinkedIn.
* Formati immagine aggiuntivi (1200x1350).

---

### 8. Modello dati – Oggetti chiave

Definire chiaramente almeno queste entità (nomi indicativi, implementazione a discrezione tecnica, ma concetti obbligatori):

1. **User**

   * id
   * nome, email
   * settore
   * ruolo
   * lingua principale
   * obiettivo (enum: awareness / lead / autorevolezza)
   * impostazioni palette brand (opzionale v1)
   * collegamento LinkedIn (token / metadata)

2. **Topic (Tema editoriale)**

   * id
   * user_id
   * nome (es. “Innovazione tecnologica”)
   * descrizione breve
   * giorno della settimana (0–6)
   * attivo (bool)

3. **Insight**

   * id
   * user_id
   * topic_id (opzionale, se legato al tema)
   * fonte (enum: Bloomberg / HBR / MIT / Economist / altro futuro)
   * titolo
   * url
   * data_pubblicazione
   * sintesi_bullet[] (lista stringhe)
   * pulse_score (1–100)
   * tags o parole chiave

4. **PostDraft**

   * id
   * user_id
   * data_creazione
   * topic_id
   * insight_ids[] (lista di id Insight selezionati)
   * testo_generato (versione AI)
   * testo_modificato (versione finale se editata)
   * stato (enum: draft / pronto / pubblicato / programmato)
   * scheduled_at (se programmato)

5. **ImageAsset**

   * id
   * user_id
   * post_draft_id
   * url (storage)
   * tipo (enum: generata / upload utente)
   * formato (1200x1200 ecc.)

6. **AnalyticsSnapshot**

   * id
   * user_id
   * post_draft_id
   * linkedin_post_id
   * impression
   * like
   * commenti
   * share
   * data_rilevazione

---

### 9. Regole dure per la generazione AI

Queste sono **non negoziabili**. Se non rispettate, il modello va ritarato.

#### 9.1 Struttura del post

Ogni generazione deve rispettare:

* HOOK:

  * massimo 2 frasi,
  * evitare frasi tipo “In questo post parlerò di…”.
* INSIGHT:

  * contenuto ancorato almeno a 1 insight selezionato,
  * vietata ripetizione letterale dei bullet, deve essere parafrasi analitica.
* HUMAN CONNECTION:

  * sempre presente,
  * usa 1–2 frasi che simulino esperienza/prospettiva personale plausibile per un professionista nel ruolo specificato.
* OPEN LOOP:

  * deve SEMPRE essere una domanda o invito alla conversazione,
  * no call-to-action di vendita in v1.

#### 9.2 Lunghezza target

* Target caratteri: 700–1.400 caratteri (spazio LinkedIn-friendly).
* Il modello deve avere vincolo di brevità:

  * se supera X caratteri (es. 1.600), l’output va rigenerato o tronca in maniera intelligente.

#### 9.3 Tono di voce

* Banditi:

  * toni eccessivamente formali tipo “Gentili colleghi,”
  * slang fuori contesto,
  * emoji spam.
* Consentiti con moderazione:

  * 0–2 emoji per post, se coerenti.
* Tono obbligatorio:

  * assertivo, ma non aggressivo,
  * tecnico, ma comprensibile per un professionista informato.

#### 9.4 Safe-guard minimi

* Vietato:

  * generare contenuti discriminatori, sensibili o politicamente esplosivi fuori contesto professionale.
* Se l’utente chiede temi borderline, il sistema deve:

  * rispondere con un messaggio di errore contestuale o generare un post neutro/educativo.

---

### 10. Gestione errori e stati vuoti

Dove saltano fuori bug e frustrazione se non definiti.

1. **Nessun articolo trovato**

   * Comportamento:

     * mostra messaggio: “Per il tema di oggi non ci sono articoli rilevanti nel periodo selezionato.”
     * opzioni:

       * “Allarga la finestra temporale”
       * “Cambia tema”
       * “Genera comunque un post partendo dal tema, senza articoli”

2. **Errore LinkedIn OAuth**

   * Comportamento:

     * notificare in modo chiaro che la pubblicazione diretta non è disponibile,
     * permettere comunque di:

       * generare testo,
       * generare immagine,
       * esportare/copiare il contenuto.

3. **Generazione immagine fallita**

   * Fino a 3 tentativi automatici dietro le quinte.
   * Se fallisce:

     * mostra stato vuoto con placeholder,
     * opzioni:

       * “Riprova”
       * “Carica immagine manuale”
       * “Prosegui senza immagine”

4. **Timeout generazione testo**

   * Se superata una soglia (es. 15 secondi):

     * mostra messaggio: “La generazione sta richiedendo più del previsto.”
     * opzioni:

       * “Riprova”
       * “Riduci la lunghezza target e riprova”

---

### 11. KPI di successo v1

Per evitare il solito “funziona, quindi è ok”, fissare metriche base:

1. **Time-to-first-post**

   * Utente nuovo:

     * obiettivo: completare onboarding + generare + pubblicare 1 post in ≤ 15 minuti.

2. **Tempo medio generazione post giornaliero**

   * Utente abituale:

     * obiettivo: ≤ 5 minuti dal momento in cui apre l’app a “Pubblica ora”.

3. **Stabilità**

   * Tasso di fallimento generazioni (testo/immagine) < 2% sulle richieste totali.

