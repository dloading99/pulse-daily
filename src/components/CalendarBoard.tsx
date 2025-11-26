import { useMemo, useState } from 'react';
import { useAppStore } from '../state/useAppStore';
import { twMerge } from 'tailwind-merge';

export function CalendarBoard() {
  const { calendar, topics, selectedDayId, updateCalendar, setSelectedDay } = useAppStore();
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const topicsMap = useMemo(() => Object.fromEntries(topics.map((t) => [t.id, t])), [topics]);

  const handleDragStart = (dayId: string) => setDraggedId(dayId);
  const handleDragOver = (event: React.DragEvent, targetId: string) => {
    event.preventDefault();
    if (!draggedId || draggedId === targetId) return;
    const reordered = Array.from(calendar);
    const sourceIndex = reordered.findIndex((d) => d.id === draggedId);
    const targetIndex = reordered.findIndex((d) => d.id === targetId);
    const [removed] = reordered.splice(sourceIndex, 1);
    reordered.splice(targetIndex, 0, removed);
    updateCalendar(reordered);
  };

  const handleDrop = () => setDraggedId(null);

  return (
    <section className="card p-4 lg:p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Calendario editoriale</p>
          <h2 className="text-lg font-bold text-night">Trascina i temi della settimana</h2>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {calendar.map((day) => {
          const topic = topicsMap[day.topicId];
          return (
            <article
              key={day.id}
              draggable
              onDragStart={() => handleDragStart(day.id)}
              onDragOver={(e) => handleDragOver(e, day.id)}
              onDrop={handleDrop}
              className={twMerge(
                'rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition',
                selectedDayId === day.id ? 'ring-2 ring-mint ring-offset-1' : 'hover:-translate-y-0.5'
              )}
              onClick={() => setSelectedDay(day.id)}
            >
              <p className="text-xs font-semibold text-slate-500">{day.label}</p>
              <h3 className="text-lg font-semibold text-night">{topic?.title}</h3>
              <p className="text-sm text-slate-600">{topic?.description}</p>
              <p className="mt-2 text-xs text-slate-500">Trascina per riordinare</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
