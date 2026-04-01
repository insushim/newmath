import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  createSkillMastery,
  updateMastery,
  calculateUnitProgress,
  getDailyPlan,
  type SkillMastery,
  type MasteryLevel,
  type UnitProgress,
} from '@/lib/adaptive/mastery-system';

interface MasteryState {
  /** Per-skill mastery data, keyed by skillId */
  skills: Record<string, SkillMastery>;
  /** Daily stats */
  todayCorrect: number;
  todayTotal: number;
  todayXp: number;
  todayDate: string; // YYYY-MM-DD
  /** Daily goal */
  dailyGoal: number; // questions per day

  // Actions
  getOrCreateSkill: (skillId: string) => SkillMastery;
  recordAnswer: (skillId: string, isCorrect: boolean, theta?: number) => {
    levelChanged: boolean;
    newLevel: MasteryLevel;
  };
  getUnitProgress: (unitId: string, skillIds: string[]) => UnitProgress;
  getDailyPlan: (skillIds: string[]) => ReturnType<typeof getDailyPlan>;
  getTodayStats: () => { correct: number; total: number; xp: number; goalMet: boolean };
  addDailyXp: (xp: number) => void;
  setDailyGoal: (goal: number) => void;
  resetIfNewDay: () => void;
}

function getTodayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

export const useMasteryStore = create<MasteryState>()(
  persist(
    (set, get) => ({
      skills: {},
      todayCorrect: 0,
      todayTotal: 0,
      todayXp: 0,
      todayDate: getTodayStr(),
      dailyGoal: 10,

      getOrCreateSkill: (skillId: string) => {
        const state = get();
        if (state.skills[skillId]) return state.skills[skillId];
        const newMastery = createSkillMastery(skillId);
        set((s) => ({ skills: { ...s.skills, [skillId]: newMastery } }));
        return newMastery;
      },

      recordAnswer: (skillId: string, isCorrect: boolean, theta?: number) => {
        const state = get();
        state.resetIfNewDay();
        const current = state.skills[skillId] ?? createSkillMastery(skillId);
        const result = updateMastery(current, isCorrect, theta);

        set((s) => ({
          skills: { ...s.skills, [skillId]: result.mastery },
          todayCorrect: s.todayCorrect + (isCorrect ? 1 : 0),
          todayTotal: s.todayTotal + 1,
        }));

        return { levelChanged: result.levelChanged, newLevel: result.newLevel };
      },

      getUnitProgress: (unitId: string, skillIds: string[]) => {
        const state = get();
        const masteries = skillIds.map(
          (id) => state.skills[id] ?? createSkillMastery(id)
        );
        return calculateUnitProgress(unitId, masteries);
      },

      getDailyPlan: (skillIds: string[]) => {
        const state = get();
        const masteries = skillIds.map(
          (id) => state.skills[id] ?? createSkillMastery(id)
        );
        return getDailyPlan(masteries);
      },

      getTodayStats: () => {
        const state = get();
        state.resetIfNewDay();
        return {
          correct: state.todayCorrect,
          total: state.todayTotal,
          xp: state.todayXp,
          goalMet: state.todayTotal >= state.dailyGoal,
        };
      },

      addDailyXp: (xp: number) => {
        set((s) => ({ todayXp: s.todayXp + xp }));
      },

      setDailyGoal: (goal: number) => {
        set({ dailyGoal: goal });
      },

      resetIfNewDay: () => {
        const today = getTodayStr();
        const state = get();
        if (state.todayDate !== today) {
          set({
            todayCorrect: 0,
            todayTotal: 0,
            todayXp: 0,
            todayDate: today,
          });
        }
      },
    }),
    {
      name: 'mathverse-mastery',
      version: 1,
    }
  )
);
