import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SoundState {
  /** Whether sound effects are enabled */
  soundEnabled: boolean;
  /** Master volume (0 to 1) */
  volume: number;
  /** Whether haptic feedback is enabled (mobile) */
  hapticEnabled: boolean;

  /** Toggle sound on/off */
  toggleSound: () => void;
  /** Set sound enabled */
  setSoundEnabled: (enabled: boolean) => void;
  /** Set volume level */
  setVolume: (volume: number) => void;
  /** Toggle haptic feedback */
  toggleHaptic: () => void;
  /** Set haptic enabled */
  setHapticEnabled: (enabled: boolean) => void;
}

export const useSoundStore = create<SoundState>()(
  persist(
    (set) => ({
      soundEnabled: true,
      volume: 0.5,
      hapticEnabled: true,

      toggleSound: () =>
        set((state) => ({ soundEnabled: !state.soundEnabled })),

      setSoundEnabled: (soundEnabled) => set({ soundEnabled }),

      setVolume: (volume) =>
        set({ volume: Math.max(0, Math.min(1, volume)) }),

      toggleHaptic: () =>
        set((state) => ({ hapticEnabled: !state.hapticEnabled })),

      setHapticEnabled: (hapticEnabled) => set({ hapticEnabled }),
    }),
    {
      name: 'mathverse-sound-settings',
      partialize: (state) => ({
        soundEnabled: state.soundEnabled,
        volume: state.volume,
        hapticEnabled: state.hapticEnabled,
      }),
    },
  ),
);
