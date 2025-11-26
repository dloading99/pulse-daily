import { LlmClient } from '../types';

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = import.meta.env.VITE_OPENAI_MODEL ?? 'gpt-4o-mini';

const hasApiKey = Boolean(import.meta.env.VITE_OPENAI_API_KEY);

async function callOpenAi(prompt: string) {
  const response = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content:
            'Sei un assistente editoriale. Genera bullet sintetici (massimo 4) e un Pulse Score 1-100 basato su rilevanza, profondità e stimolo alla conversazione professionale.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.4,
    }),
  });

  if (!response.ok) {
    throw new Error('LLM response not ok');
  }

  const data = await response.json();
  const content: string = data.choices?.[0]?.message?.content ?? '';
  return content;
}

function parseOutput(raw: string) {
  const bulletMatches = raw.match(/-\s.+/g) ?? [];
  const bullets = bulletMatches.map((b) => b.replace(/^-\s*/, '').trim()).slice(0, 4);
  const scoreMatch = raw.match(/(Pulse Score|score)[:\s]*([0-9]{1,3})/i);
  const score = Math.min(100, Math.max(1, Number(scoreMatch?.[2] ?? 68)));
  return { bullets, pulseScore: score };
}

function fallbackGenerate(prompt: string) {
  const sentences = prompt.split('.').map((s) => s.trim()).filter(Boolean).slice(0, 4);
  const bullets = sentences.map((s) => (s.length > 110 ? `${s.slice(0, 107)}...` : s));
  const pulseScore = 65 + Math.min(25, Math.round(Math.random() * 20));
  return { bullets, pulseScore, provider: 'fallback' as const };
}

export const llmClient: LlmClient = {
  async generateInsightSummaryAndScore({ title, rawText, source, publicationDate, topicTitle }) {
    const prompt = `Titolo: ${title}\nFonte: ${source}\nData: ${publicationDate}\nTema del giorno: ${topicTitle}\nTesto articolo: ${rawText}\n\nRitorna:\n- 3-4 bullet di sintesi in italiano, tono assertivo\n- Pulse Score (numero 1-100) nella forma "Pulse Score: X"`;

    if (!hasApiKey) {
      console.warn('VITE_OPENAI_API_KEY non configurata: uso fallback locale per demo.');
      return fallbackGenerate(prompt);
    }

    try {
      const raw = await callOpenAi(prompt);
      const parsed = parseOutput(raw);
      return { ...parsed, provider: 'openai' as const };
    } catch (error) {
      console.error('Errore LLM, ricado su fallback', error);
      return fallbackGenerate(prompt);
    }
  },
};
