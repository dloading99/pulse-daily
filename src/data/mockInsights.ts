import { InsightDraft } from '../types';

export const topics = [
  {
    id: 'ai-governance',
    title: 'AI governance e policy',
    description: 'Impatto normativo e framework di sicurezza per modelli generativi in azienda.',
  },
  {
    id: 'product-ops',
    title: 'Product operations',
    description: 'Processi e metriche per scalare team di prodotto.',
  },
  {
    id: 'climate-tech',
    title: 'Climate tech',
    description: 'Innovazioni hardware/software per transizione energetica.',
  },
  {
    id: 'data-culture',
    title: 'Data culture',
    description: 'Portare la cultura data-driven nelle linee di business.',
  },
];

export const presetCalendar = [
  { id: 'day-1', label: 'Lunedì', topicId: 'ai-governance' },
  { id: 'day-2', label: 'Martedì', topicId: 'product-ops' },
  { id: 'day-3', label: 'Mercoledì', topicId: 'climate-tech' },
  { id: 'day-4', label: 'Giovedì', topicId: 'data-culture' },
  { id: 'day-5', label: 'Venerdì', topicId: 'ai-governance' },
  { id: 'day-6', label: 'Sabato', topicId: 'product-ops' },
  { id: 'day-7', label: 'Domenica', topicId: 'climate-tech' },
];

export const mockInsights: InsightDraft[] = [
  {
    id: 'insight-1',
    topicId: 'ai-governance',
    title: 'Le aziende spostano il focus su AI safety mentre arrivano i primi standard ISO',
    source: 'Bloomberg',
    publicationDate: '2024-06-14',
    link: 'https://www.bloomberg.com/ai-governance',
    rawText:
      'Bloomberg riferisce che oltre il 60% delle aziende Fortune 500 ha accelerato i budget su AI safety e compliance in vista dei nuovi standard ISO/IEC 42001. I CISO stanno chiedendo controlli su dataset e auditing dei modelli prima della messa in produzione.',
  },
  {
    id: 'insight-2',
    topicId: 'ai-governance',
    title: 'L’UE spinge per watermarking AI obbligatorio nei contenuti pubblici',
    source: 'The Economist',
    publicationDate: '2024-06-09',
    link: 'https://www.economist.com/ai-watermarking',
    rawText:
      "The Economist racconta come il regolamento europeo sull'AI stia convergendo su requisiti di watermarking per contenuti generati, con pressione dei broadcaster per esenzioni. Gli studi legali prevedono una corsa a soluzioni di labeling interoperabile entro 12 mesi.",
  },
  {
    id: 'insight-3',
    topicId: 'ai-governance',
    title: 'Framework NIST per AI responsabile adottato da banche USA',
    source: 'Harvard Business Review',
    publicationDate: '2024-06-02',
    link: 'https://hbr.org/nist-ai',
    rawText:
      'Harvard Business Review evidenzia come grandi banche statunitensi stiano adottando il framework NIST per gestire rischi di bias e drift nei modelli di credit scoring, con comitati congiunti risk + prodotto per validare i rilasci.',
  },
  {
    id: 'insight-4',
    topicId: 'product-ops',
    title: 'Product ops come hub tra PM e dati: la trasformazione di Atlassian',
    source: 'MIT Technology Review',
    publicationDate: '2024-06-11',
    link: 'https://www.technologyreview.com/product-ops-atlassian',
    rawText:
      'MIT Technology Review descrive come Atlassian abbia creato una practice di product operations che unifica user research, telemetry e rollout playbook. Il risultato è un time-to-learning ridotto del 30% su release cloud.',
  },
  {
    id: 'insight-5',
    topicId: 'product-ops',
    title: 'PM e ingegneria condividono metriche: lesson learned da Spotify',
    source: 'Bloomberg',
    publicationDate: '2024-06-05',
    link: 'https://www.bloomberg.com/spotify-metrics',
    rawText:
      'Bloomberg riporta che Spotify ha introdotto dashboard unificate tra PM e ingegneria per ridurre attriti su priorità. La mossa ha portato a sprint review congiunte e backlog puntati su impatti misurabili.',
  },
  {
    id: 'insight-6',
    topicId: 'product-ops',
    title: 'Playbook di onboarding prodotto basato su cohort analytics',
    source: 'Harvard Business Review',
    publicationDate: '2024-06-01',
    link: 'https://hbr.org/product-onboarding',
    rawText:
      'Un articolo di HBR mostra come team B2B SaaS stiano usando cohort analytics per disegnare percorsi di onboarding modulari. L’approccio riduce il churn nei primi 30 giorni del 18% grazie a milestone progressive.',
  },
  {
    id: 'insight-7',
    topicId: 'climate-tech',
    title: 'Nuovi PPA digitali per data center alimentati da rinnovabili',
    source: 'The Economist',
    publicationDate: '2024-06-13',
    link: 'https://www.economist.com/ppa-data-center',
    rawText:
      'The Economist analizza la nascita di power purchase agreement dinamici per data center europei: contratti orari legati a produzione solare/eolica che riducono il costo energetico fino al 12% mantenendo SLA.',
  },
  {
    id: 'insight-8',
    topicId: 'climate-tech',
    title: 'Batterie allo stato solido: prime linee pilota in Europa',
    source: 'MIT Technology Review',
    publicationDate: '2024-06-07',
    link: 'https://www.technologyreview.com/solid-state-europe',
    rawText:
      'MIT Technology Review segnala l’apertura di linee pilota per batterie allo stato solido in Germania e Polonia, con supply chain europea che punta a ridurre dipendenza asiatica entro il 2027.',
  },
  {
    id: 'insight-9',
    topicId: 'climate-tech',
    title: 'Finanza verde: i green bond superano quota 1.500 miliardi',
    source: 'Bloomberg',
    publicationDate: '2024-05-29',
    link: 'https://www.bloomberg.com/green-bond',
    rawText:
      'Bloomberg riporta che le emissioni di green bond hanno superato 1.500 miliardi di dollari, con forte domanda da parte di fondi pensione. Cresce la pressione per metriche di impatto verificabili.',
  },
  {
    id: 'insight-10',
    topicId: 'data-culture',
    title: 'Data product team embedded nei reparti business',
    source: 'Harvard Business Review',
    publicationDate: '2024-06-10',
    link: 'https://hbr.org/data-product-teams',
    rawText:
      'HBR racconta come aziende enterprise stiano creando piccoli data product team embedded nelle funzioni revenue per accelerare la traduzione di insight in decisioni. Il modello evita backlog IT centralizzati.',
  },
  {
    id: 'insight-11',
    topicId: 'data-culture',
    title: 'Metriche di literacy data nei programmi di formazione',
    source: 'MIT Technology Review',
    publicationDate: '2024-06-04',
    link: 'https://www.technologyreview.com/data-literacy',
    rawText:
      'MIT Technology Review evidenzia la corsa a programmi di data literacy nelle grandi aziende: corsi microlearning, badge e coaching tra pari per ridurre errori decisionali basati su dati incompleti.',
  },
  {
    id: 'insight-12',
    topicId: 'data-culture',
    title: 'Data contract per ridurre incident e rework',
    source: 'The Economist',
    publicationDate: '2024-05-27',
    link: 'https://www.economist.com/data-contracts',
    rawText:
      'The Economist descrive come i data contract stiano diventando standard per allineare team produttori e consumer di dati. Benefici: meno incident dovuti a cambi di schema e riduzione del rework.',
  },
];
