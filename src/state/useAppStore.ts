import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CalendarDay, Topic, UserProfile, Insight } from '../types';
import { presetCalendar, topics as topicSeed } from '../data/mockInsights';

interface AppState {
  user: UserProfile | null;
  calendar: CalendarDay[];
  topics: Topic[];
  selectedDayId: string;
  insights: Record<string, Insight[]>;
  setUser: (user: UserProfile) => void;
  updateCalendar: (calendar: CalendarDay[]) => void;
  setSelectedDay: (dayId: string) => void;
  setInsightsForDay: (dayId: string, insights: Insight[]) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      calendar: presetCalendar,
      topics: topicSeed,
      selectedDayId: presetCalendar[0].id,
      insights: {},
      setUser: (user) => set({ user }),
      updateCalendar: (calendar) => set({ calendar }),
      setSelectedDay: (dayId) => set({ selectedDayId: dayId }),
      setInsightsForDay: (dayId, insights) =>
        set((state) => ({ insights: { ...state.insights, [dayId]: insights } })),
    }),
    {
      name: 'pulse-daily-store',
      partialize: (state) => ({ user: state.user, calendar: state.calendar, selectedDayId: state.selectedDayId }),
    }
  )
);
