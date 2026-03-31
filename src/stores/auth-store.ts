import { create } from 'zustand';
import type { Profile, UserRole, SubscriptionTier, ThemeSetting, LeagueName } from '@/types/database';

interface AuthState {
  /** Current authenticated user profile (null if not logged in) */
  profile: Profile | null;
  /** Whether the auth state is still being loaded */
  isLoading: boolean;
  /** Whether the user is authenticated */
  isAuthenticated: boolean;
  /** Auth error message */
  error: string | null;

  /** Set profile after login or profile fetch */
  setProfile: (profile: Profile | null) => void;
  /** Update specific profile fields (optimistic UI updates) */
  updateProfile: (updates: Partial<Profile>) => void;
  /** Set loading state */
  setLoading: (loading: boolean) => void;
  /** Set error state */
  setError: (error: string | null) => void;
  /** Clear auth state on logout */
  logout: () => void;

  /** Convenience selectors */
  isStudent: () => boolean;
  isTeacher: () => boolean;
  isParent: () => boolean;
  isPremium: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  profile: null,
  isLoading: true,
  isAuthenticated: false,
  error: null,

  setProfile: (profile) =>
    set({
      profile,
      isAuthenticated: profile !== null,
      isLoading: false,
      error: null,
    }),

  updateProfile: (updates) =>
    set((state) => {
      if (!state.profile) return state;
      return {
        profile: { ...state.profile, ...updates, updated_at: new Date().toISOString() },
      };
    }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error, isLoading: false }),

  logout: () =>
    set({
      profile: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    }),

  isStudent: () => get().profile?.role === 'student',
  isTeacher: () => get().profile?.role === 'teacher',
  isParent: () => get().profile?.role === 'parent',
  isPremium: () => {
    const tier = get().profile?.subscription_tier;
    return tier === 'premium' || tier === 'school';
  },
}));
