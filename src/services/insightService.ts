import { mockInsights } from '../data/mockInsights';
import { InsightDraft, InsightService } from '../types';

export const insightService: InsightService = {
  async fetchInsightsByTopic(userId: string, topicId: string): Promise<InsightDraft[]> {
    // In futuro qui chiamiamo un backend/GraphQL; per Slice 1 filtriamo i mock
    const personalizedSeed = mockInsights.filter((insight) => insight.topicId === topicId);
    return Promise.resolve(personalizedSeed.map((insight) => ({ ...insight, id: `${insight.id}-${userId}` })));
  },
};
