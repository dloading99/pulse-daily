import { UserProfile } from '../types';

interface Props {
  user?: UserProfile | null;
  topicTitle?: string;
}

export function HeroHeader({ user, topicTitle }: Props) {
  return (
    <header className="card p-5 sm:p-6 bg-gradient-to-br from-white to-slate-50 flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Daily Pulse</p>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-black text-night">
          Ricerca → Insight → Sintesi
        </h1>
        <p className="text-slate-600">
          Onboarding rapido, calendario drag & drop e Insight Deck con bullet e Pulse Score generati via LLM.
        </p>
      </div>
      {user && (
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span className="badge">{user.name}</span>
          <span className="badge">{user.role}</span>
          <span className="badge">{user.sector}</span>
          {topicTitle && <span className="badge">Tema del giorno: {topicTitle}</span>}
        </div>
      )}
    </header>
  );
}
