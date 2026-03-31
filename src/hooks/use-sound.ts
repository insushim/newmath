'use client';

import { useCallback, useEffect, useRef } from 'react';
import { SoundEngine } from '@/lib/sound/sound-engine';
import { useSoundStore } from '@/stores/sound-store';

/**
 * Hook that wraps SoundEngine with reactive settings from the sound store.
 *
 * Usage:
 *   const { playCorrect, playWrong, playLevelUp } = useSound();
 *   playCorrect(); // respects user's sound settings
 */
export function useSound() {
  const engineRef = useRef<SoundEngine | null>(null);
  const { soundEnabled, volume } = useSoundStore();

  // Lazily initialize the sound engine
  const getEngine = useCallback(() => {
    if (!engineRef.current) {
      engineRef.current = SoundEngine.getInstance();
    }
    return engineRef.current;
  }, []);

  // Sync store settings with engine
  useEffect(() => {
    const engine = getEngine();
    engine.enabled = soundEnabled;
    engine.volume = volume;
  }, [soundEnabled, volume, getEngine]);

  const playCorrect = useCallback(() => {
    getEngine().correct();
  }, [getEngine]);

  const playWrong = useCallback(() => {
    getEngine().wrong();
  }, [getEngine]);

  const playLevelUp = useCallback(() => {
    getEngine().levelUp();
  }, [getEngine]);

  const playBadgeUnlock = useCallback(() => {
    getEngine().badgeUnlock();
  }, [getEngine]);

  const playCoinEarned = useCallback(() => {
    getEngine().coinEarned();
  }, [getEngine]);

  const playStreakMilestone = useCallback(() => {
    getEngine().streakMilestone();
  }, [getEngine]);

  const playButtonClick = useCallback(() => {
    getEngine().buttonClick();
  }, [getEngine]);

  const playSessionStart = useCallback(() => {
    getEngine().sessionStart();
  }, [getEngine]);

  const playSessionComplete = useCallback(() => {
    getEngine().sessionComplete();
  }, [getEngine]);

  const playHintReveal = useCallback(() => {
    getEngine().hintReveal();
  }, [getEngine]);

  const playTimerWarning = useCallback(() => {
    getEngine().timerWarning();
  }, [getEngine]);

  return {
    playCorrect,
    playWrong,
    playLevelUp,
    playBadgeUnlock,
    playCoinEarned,
    playStreakMilestone,
    playButtonClick,
    playSessionStart,
    playSessionComplete,
    playHintReveal,
    playTimerWarning,
    /** Direct access to the engine for advanced use cases */
    engine: getEngine,
  };
}
