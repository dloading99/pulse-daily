export type Source = 'Bloomberg' | 'Harvard Business Review' | 'MIT Technology Review' | 'The Economist';

export interface UserProfile {
  id: string;
  name: string;
  role: string;
  sector: string;
  focusTopics: string[];
}

export interface Topic {
  id: string;
  title: string;
  description?: string;
}

export interface CalendarDay {
  id: string;
  label: string;
  topicId: string;
}

export interface InsightDraft {
  id: string;
  topicId: string;
  title: string;
  source: Source;
  publicationDate: string;
  link: string;
  rawText: string;
}

export interface Insight extends InsightDraft {
  bullets: string[];
  pulseScore: number;
  generatedBy: 'openai' | 'fallback';
}

export interface InsightService {
  fetchInsightsByTopic: (userId: string, topicId: string) => Promise<InsightDraft[]>;
}

export interface LlmClient {
  generateInsightSummaryAndScore: (
    input: Pick<InsightDraft, 'title' | 'rawText' | 'source' | 'publicationDate'> & { topicTitle: string }
  ) => Promise<{ bullets: string[]; pulseScore: number; provider: 'openai' | 'fallback' }>;
}
