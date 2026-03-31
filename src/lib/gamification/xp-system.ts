// ============================================================
// XP & Level System
// ============================================================

export const XP_CONFIG = {
  /** XP for answering a question correctly */
  correctAnswer: 10,
  /** Bonus XP for first-try correct */
  firstTryBonus: 5,
  /** XP for answering incorrectly (participation) */
  wrongAnswer: 2,
  /** XP per second saved under par time */
  speedBonus: 1,
  /** Maximum speed bonus per question */
  maxSpeedBonus: 10,
  /** XP for completing a session */
  sessionComplete: 30,
  /** XP for perfect session (100% accuracy) */
  perfectSession: 50,
  /** XP multiplier for streak (per day, max 2x) */
  streakMultiplierPerDay: 0.05,
  maxStreakMultiplier: 2.0,
  /** XP for daily login */
  dailyLogin: 5,
  /** XP for meeting daily goal */
  dailyGoalMet: 20,
  /** XP for mastering a skill */
  skillMastered: 100,
  /** XP for completing a unit */
  unitComplete: 200,
  /** XP for review session */
  reviewSessionComplete: 15,
  /** Streak milestones (days → bonus XP) */
  streakMilestones: {
    3: 30,
    7: 100,
    14: 200,
    30: 500,
    60: 1000,
    100: 2000,
    365: 10000,
  } as Record<number, number>,
  /** Coins earned per correct answer */
  coinsPerCorrect: 1,
  /** Coins for session complete */
  coinsSessionComplete: 5,
  /** Coins for perfect session */
  coinsPerfectSession: 10,
  /** Coins for daily goal */
  coinsDailyGoal: 3,
} as const;

/**
 * Level curve: XP required to reach a given level.
 * Uses a polynomial curve: XP(n) = 100 * n^1.5
 *
 * Level 1: 0 XP
 * Level 2: 100 XP
 * Level 3: ~260 XP
 * Level 5: ~1118 XP
 * Level 10: ~3162 XP
 * Level 20: ~8944 XP
 * Level 50: ~35355 XP
 */
export function getXPForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.round(100 * Math.pow(level - 1, 1.5));
}

/**
 * Calculate the current level and progress from total XP.
 */
export function calculateLevel(totalXP: number): {
  level: number;
  currentLevelXP: number;
  nextLevelXP: number;
  progress: number;
  xpInCurrentLevel: number;
} {
  let level = 1;

  while (getXPForLevel(level + 1) <= totalXP) {
    level++;
    if (level > 999) break;
  }

  const currentLevelXP = getXPForLevel(level);
  const nextLevelXP = getXPForLevel(level + 1);
  const xpInCurrentLevel = totalXP - currentLevelXP;
  const xpNeeded = nextLevelXP - currentLevelXP;
  const progress = xpNeeded > 0 ? xpInCurrentLevel / xpNeeded : 1;

  return {
    level,
    currentLevelXP,
    nextLevelXP,
    progress: Math.min(1, Math.max(0, progress)),
    xpInCurrentLevel,
  };
}

/**
 * Calculate XP earned for a single question response.
 */
export function calculateQuestionXP(params: {
  isCorrect: boolean;
  isFirstTry: boolean;
  timeSpentMs: number;
  parTimeMs: number;
  streakDays: number;
}): { xp: number; coins: number; breakdown: Record<string, number> } {
  const { isCorrect, isFirstTry, timeSpentMs, parTimeMs, streakDays } = params;
  const breakdown: Record<string, number> = {};

  let xp = 0;
  let coins = 0;

  if (isCorrect) {
    xp += XP_CONFIG.correctAnswer;
    breakdown['정답'] = XP_CONFIG.correctAnswer;

    if (isFirstTry) {
      xp += XP_CONFIG.firstTryBonus;
      breakdown['첫 시도 보너스'] = XP_CONFIG.firstTryBonus;
    }

    // Speed bonus: XP per second saved under par
    if (timeSpentMs < parTimeMs) {
      const savedSeconds = Math.floor((parTimeMs - timeSpentMs) / 1000);
      const speedBonus = Math.min(savedSeconds * XP_CONFIG.speedBonus, XP_CONFIG.maxSpeedBonus);
      if (speedBonus > 0) {
        xp += speedBonus;
        breakdown['속도 보너스'] = speedBonus;
      }
    }

    coins += XP_CONFIG.coinsPerCorrect;
  } else {
    xp += XP_CONFIG.wrongAnswer;
    breakdown['참여 XP'] = XP_CONFIG.wrongAnswer;
  }

  // Apply streak multiplier
  const streakMultiplier = Math.min(
    1 + streakDays * XP_CONFIG.streakMultiplierPerDay,
    XP_CONFIG.maxStreakMultiplier,
  );

  if (streakMultiplier > 1) {
    const bonus = Math.round(xp * (streakMultiplier - 1));
    if (bonus > 0) {
      xp += bonus;
      breakdown['연속 학습 보너스'] = bonus;
    }
  }

  return { xp, coins, breakdown };
}

/**
 * Calculate XP earned for completing a session.
 */
export function calculateSessionXP(params: {
  totalQuestions: number;
  correctCount: number;
  streakDays: number;
  sessionType: string;
}): { xp: number; coins: number; breakdown: Record<string, number> } {
  const { totalQuestions, correctCount, streakDays, sessionType } = params;
  const breakdown: Record<string, number> = {};

  let xp = 0;
  let coins = 0;

  // Session completion bonus
  const isReview = sessionType === 'review';
  const completionXP = isReview ? XP_CONFIG.reviewSessionComplete : XP_CONFIG.sessionComplete;
  xp += completionXP;
  breakdown['세션 완료'] = completionXP;
  coins += XP_CONFIG.coinsSessionComplete;

  // Perfect session bonus
  if (totalQuestions > 0 && correctCount === totalQuestions) {
    xp += XP_CONFIG.perfectSession;
    breakdown['완벽한 세션'] = XP_CONFIG.perfectSession;
    coins += XP_CONFIG.coinsPerfectSession;
  }

  // Apply streak multiplier
  const streakMultiplier = Math.min(
    1 + streakDays * XP_CONFIG.streakMultiplierPerDay,
    XP_CONFIG.maxStreakMultiplier,
  );

  if (streakMultiplier > 1) {
    const bonus = Math.round(xp * (streakMultiplier - 1));
    if (bonus > 0) {
      xp += bonus;
      breakdown['연속 학습 보너스'] = bonus;
    }
  }

  return { xp, coins, breakdown };
}

/**
 * Check if a streak milestone was reached and return bonus XP.
 */
export function checkStreakMilestone(streakDays: number): { xp: number; coins: number } | null {
  const milestoneXP = XP_CONFIG.streakMilestones[streakDays];
  if (milestoneXP) {
    return { xp: milestoneXP, coins: Math.round(milestoneXP / 10) };
  }
  return null;
}

/**
 * Get a Korean label for the current level.
 */
export function getLevelTitle(level: number): string {
  if (level <= 5) return '수학 새싹';
  if (level <= 10) return '수학 탐험가';
  if (level <= 20) return '수학 모험가';
  if (level <= 30) return '수학 용사';
  if (level <= 40) return '수학 마법사';
  if (level <= 50) return '수학 현자';
  if (level <= 75) return '수학 대가';
  if (level <= 100) return '수학 전설';
  return '수학의 신';
}
