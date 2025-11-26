import { useEffect, useMemo, useState } from 'react';
import './index.css';
import { useAppStore } from './state/useAppStore';
import { insightService } from './services/insightService';
import { llmClient } from './services/llmClient';
import { Insight, InsightDraft } from './types';
import { CalendarBoard } from './components/CalendarBoard';
import { InsightDeck } from './components/InsightDeck';
import { OnboardingCard } from './components/OnboardingCard';
import { HeroHeader } from './components/HeroHeader';
import { LoaderCircle } from 'lucide-react';

function App() {
  const { user, calendar, selectedDayId, setInsightsForDay } = useAppStore();
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedDay = useMemo(() => calendar.find((d) => d.id === selectedDayId) ?? calendar[0], [calendar, selectedDayId]);

  const topicTitle = useMemo(() => {
    const topic = useAppStore.getState().topics.find((t) => t.id === selectedDay.topicId);
    return topic?.title ?? 'Tema del giorno';
  }, [selectedDay]);

  useEffect(() => {
    if (!user) return;

    let cancelled = false;
    async function load() {
      setLoadingInsights(true);
      setError(null);
      try {
        const drafts: InsightDraft[] = await insightService.fetchInsightsByTopic(user.id, selectedDay.topicId);
        const enriched: Insight[] = await Promise.all(
          drafts.map(async (draft) => {
            const llm = await llmClient.generateInsightSummaryAndScore({ ...draft, topicTitle });
            return { ...draft, bullets: llm.bullets, pulseScore: llm.pulseScore, generatedBy: llm.provider };
          })
        );
        if (!cancelled) {
          setInsightsForDay(selectedDay.id, enriched);
        }
      } catch (err) {
        console.error(err);
        setError('Impossibile generare le sintesi: riprova più tardi.');
      } finally {
        if (!cancelled) setLoadingInsights(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [selectedDay.id, selectedDay.topicId, setInsightsForDay, topicTitle, user]);

  if (!user) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8">
        <HeroHeader />
        <OnboardingCard />
      </main>
    );
  }

  const insightsForDay = useAppStore.getState().insights[selectedDay.id] ?? [];

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 space-y-6">
      <HeroHeader user={user} topicTitle={topicTitle} />
      <CalendarBoard />
      <section className="card p-4 lg:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500">INSIGHT DECK</p>
            <h2 className="text-xl font-bold text-night">{topicTitle}</h2>
          </div>
          {loadingInsights && (
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <LoaderCircle className="h-4 w-4 animate-spin" /> Genero bullet e Pulse Score
            </span>
          )}
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <InsightDeck insights={insightsForDay} loading={loadingInsights} />
      </section>
    </main>
  );
}

export default App;
