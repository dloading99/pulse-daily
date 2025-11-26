import { Insight } from '../types';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Props {
  insights: Insight[];
  loading?: boolean;
}

export function InsightDeck({ insights, loading }: Props) {
  if (loading && insights.length === 0) {
    return <p className="mt-4 text-sm text-slate-500">Sto preparando gli insight...</p>;
  }

  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      {insights.map((insight) => (
        <article key={insight.id} className="card p-4 flex flex-col gap-3 border-slate-200">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{insight.source}</p>
              <h3 className="text-lg font-bold text-night leading-tight">{insight.title}</h3>
            </div>
            <a
              href={insight.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-night text-white"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <span className="badge">{new Date(insight.publicationDate).toLocaleDateString('it-IT')}</span>
            <span className="badge">Pulse Score: {insight.pulseScore}</span>
            <span className="badge">LLM: {insight.generatedBy}</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {insight.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 text-mint" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
      {!loading && insights.length === 0 && (
        <p className="text-sm text-slate-500">Nessun insight disponibile per oggi.</p>
      )}
    </div>
  );
}
