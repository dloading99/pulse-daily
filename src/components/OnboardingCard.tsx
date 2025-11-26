import { useState } from 'react';
import { useAppStore } from '../state/useAppStore';
import { Objective } from '../types';

const sectorOptions = ['Tech B2B', 'Finanza', 'Energy', 'Consulenza', 'Healthcare'];
const languageOptions = [
  { value: 'it', label: 'Italiano' },
  { value: 'en', label: 'English' },
];
const objectiveOptions: { value: Objective; label: string }[] = [
  { value: 'awareness', label: 'Awareness' },
  { value: 'lead', label: 'Lead generation' },
  { value: 'autorevolezza', label: 'Autorevolezza' },
];

export function OnboardingCard() {
  const setUser = useAppStore((s) => s.setUser);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Founder / CEO');
  const [sector, setSector] = useState(sectorOptions[0]);
  const [focusTopics, setFocusTopics] = useState<string[]>(['AI governance e policy']);
  const [language, setLanguage] = useState('it');
  const [objective, setObjective] = useState<Objective>('awareness');

  const toggleTopic = (topic: string) => {
    setFocusTopics((curr) =>
      curr.includes(topic) ? curr.filter((t) => t !== topic) : [...curr, topic].slice(0, 3)
    );
  };

  const canSubmit = name.trim().length > 1 && focusTopics.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setUser({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      role,
      sector,
      focusTopics,
      language,
      objective,
    });
  };

  return (
    <section className="card p-5 sm:p-6 space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Onboarding</p>
        <h2 className="text-xl font-bold text-night">Personalizza il feed</h2>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-slate-600 font-medium">Nome</span>
            <input
              className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Es. Giulia Rossi"
              required
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-slate-600 font-medium">Ruolo</span>
            <input
              className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Es. Head of Product"
            />
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-slate-600 font-medium">Settore</span>
            <select
              className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              {sectorOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-slate-600 font-medium">Lingua principale</span>
            <select
              className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-slate-600 font-medium">Focus tematici</span>
            <div className="flex flex-wrap gap-2">
              {[
                'AI governance e policy',
                'Product operations',
                'Climate tech',
                'Data culture',
              ].map((topic) => (
                <button
                  type="button"
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`badge ${
                    focusTopics.includes(topic)
                      ? 'bg-night text-white border border-night'
                      : 'bg-slate-100 text-night'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-slate-600 font-medium">Obiettivo</span>
            <select
              className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint"
              value={objective}
              onChange={(e) => setObjective(e.target.value as Objective)}
            >
              {objectiveOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn-primary" disabled={!canSubmit}>
            Entra nel workspace
          </button>
        </div>
      </form>
    </section>
  );
}
