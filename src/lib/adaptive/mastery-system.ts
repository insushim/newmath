// ============================================================
// Mastery System (마스터리 시스템)
// ============================================================
// Duolingo-style skill progression:
//   not_started → learning → practicing → mastered → review_needed
//
// Gate logic: 80% accuracy on N attempts → mastery
// Skills unlock sequentially within a unit
// ============================================================

export type MasteryLevel = 'not_started' | 'learning' | 'practicing' | 'mastered' | 'review_needed';

export interface SkillMastery {
  skillId: string;
  level: MasteryLevel;
  totalAttempts: number;
  correctCount: number;
  recentAttempts: boolean[]; // last 10 attempts
  bestStreak: number;
  currentStreak: number;
  theta: number; // IRT ability
  lastPracticedAt: string | null;
  masteredAt: string | null;
}

export interface UnitProgress {
  unitId: string;
  totalSkills: number;
  masteredSkills: number;
  currentSkillIndex: number; // which skill is currently active
  isComplete: boolean;
  overallAccuracy: number;
}

// ─── Thresholds ────────────────────────────────────────────

/** Minimum attempts before mastery can be achieved */
const MIN_ATTEMPTS_FOR_MASTERY = 5;

/** Accuracy threshold for mastery (80%) */
const MASTERY_ACCURACY = 0.8;

/** Recent window size for mastery check */
const RECENT_WINDOW = 10;

/** Accuracy threshold for demotion to review_needed */
const REVIEW_THRESHOLD = 0.6;

/** Min recent attempts before demotion */
const MIN_ATTEMPTS_FOR_DEMOTION = 3;

// ─── Core Functions ─────────────────────────────────────────

/**
 * Create initial mastery state for a new skill.
 */
export function createSkillMastery(skillId: string): SkillMastery {
  return {
    skillId,
    level: 'not_started',
    totalAttempts: 0,
    correctCount: 0,
    recentAttempts: [],
    bestStreak: 0,
    currentStreak: 0,
    theta: 0,
    lastPracticedAt: null,
    masteredAt: null,
  };
}

/**
 * Update mastery after an answer.
 * Returns the updated mastery and whether the level changed.
 */
export function updateMastery(
  mastery: SkillMastery,
  isCorrect: boolean,
  newTheta?: number,
): { mastery: SkillMastery; levelChanged: boolean; newLevel: MasteryLevel } {
  const now = new Date().toISOString();
  const prevLevel = mastery.level;

  // Update stats
  const totalAttempts = mastery.totalAttempts + 1;
  const correctCount = mastery.correctCount + (isCorrect ? 1 : 0);
  const currentStreak = isCorrect ? mastery.currentStreak + 1 : 0;
  const bestStreak = Math.max(mastery.bestStreak, currentStreak);
  const recentAttempts = [...mastery.recentAttempts, isCorrect].slice(-RECENT_WINDOW);
  const theta = newTheta ?? mastery.theta;

  // Calculate recent accuracy
  const recentCorrect = recentAttempts.filter(Boolean).length;
  const recentAccuracy = recentAttempts.length > 0 ? recentCorrect / recentAttempts.length : 0;
  const overallAccuracy = totalAttempts > 0 ? correctCount / totalAttempts : 0;

  // Determine new level
  let newLevel: MasteryLevel;

  if (prevLevel === 'mastered' || prevLevel === 'review_needed') {
    // Already mastered: check if review is needed
    if (recentAttempts.length >= MIN_ATTEMPTS_FOR_DEMOTION && recentAccuracy < REVIEW_THRESHOLD) {
      newLevel = 'review_needed';
    } else if (recentAttempts.length >= MIN_ATTEMPTS_FOR_MASTERY && recentAccuracy >= MASTERY_ACCURACY) {
      newLevel = 'mastered';
    } else {
      newLevel = prevLevel;
    }
  } else {
    // Progressing through levels
    if (totalAttempts === 0) {
      newLevel = 'not_started';
    } else if (totalAttempts < MIN_ATTEMPTS_FOR_MASTERY) {
      newLevel = 'learning';
    } else if (recentAccuracy >= MASTERY_ACCURACY && recentAttempts.length >= MIN_ATTEMPTS_FOR_MASTERY) {
      newLevel = 'mastered';
    } else if (overallAccuracy >= 0.5) {
      newLevel = 'practicing';
    } else {
      newLevel = 'learning';
    }
  }

  const updated: SkillMastery = {
    ...mastery,
    totalAttempts,
    correctCount,
    currentStreak,
    bestStreak,
    recentAttempts,
    theta,
    level: newLevel,
    lastPracticedAt: now,
    masteredAt: newLevel === 'mastered' && prevLevel !== 'mastered' ? now : mastery.masteredAt,
  };

  return {
    mastery: updated,
    levelChanged: prevLevel !== newLevel,
    newLevel,
  };
}

/**
 * Check if a skill is unlocked.
 * Skills unlock sequentially within a unit:
 * - First skill is always unlocked
 * - Subsequent skills unlock when previous skill reaches 'practicing' or 'mastered'
 */
export function isSkillUnlocked(
  skillIndex: number,
  allSkillMasteries: SkillMastery[],
): boolean {
  if (skillIndex === 0) return true;

  const prevMastery = allSkillMasteries[skillIndex - 1];
  if (!prevMastery) return false;

  return prevMastery.level === 'practicing' || prevMastery.level === 'mastered' || prevMastery.level === 'review_needed';
}

/**
 * Calculate unit progress from skill masteries.
 */
export function calculateUnitProgress(
  unitId: string,
  skillMasteries: SkillMastery[],
): UnitProgress {
  const totalSkills = skillMasteries.length;
  const masteredSkills = skillMasteries.filter(
    s => s.level === 'mastered'
  ).length;

  // Find current active skill (first non-mastered unlocked skill)
  let currentSkillIndex = 0;
  for (let i = 0; i < skillMasteries.length; i++) {
    if (isSkillUnlocked(i, skillMasteries) && skillMasteries[i].level !== 'mastered') {
      currentSkillIndex = i;
      break;
    }
    if (i === skillMasteries.length - 1) {
      currentSkillIndex = i; // all mastered
    }
  }

  const totalAttempts = skillMasteries.reduce((sum, s) => sum + s.totalAttempts, 0);
  const totalCorrect = skillMasteries.reduce((sum, s) => sum + s.correctCount, 0);

  return {
    unitId,
    totalSkills,
    masteredSkills,
    currentSkillIndex,
    isComplete: masteredSkills === totalSkills && totalSkills > 0,
    overallAccuracy: totalAttempts > 0 ? totalCorrect / totalAttempts : 0,
  };
}

/**
 * Get mastery level display info.
 */
export function getMasteryInfo(level: MasteryLevel): {
  label: string;
  color: string;
  icon: string;
  progress: number; // 0-1 for progress bar
} {
  switch (level) {
    case 'not_started':
      return { label: '시작 전', color: 'gray', icon: '⚪', progress: 0 };
    case 'learning':
      return { label: '학습 중', color: 'blue', icon: '🔵', progress: 0.25 };
    case 'practicing':
      return { label: '연습 중', color: 'yellow', icon: '🟡', progress: 0.6 };
    case 'mastered':
      return { label: '마스터!', color: 'green', icon: '🟢', progress: 1.0 };
    case 'review_needed':
      return { label: '복습 필요', color: 'orange', icon: '🟠', progress: 0.4 };
  }
}

/**
 * Get skill crown level (Duolingo-style 0-5 crowns).
 */
export function getCrownLevel(mastery: SkillMastery): number {
  if (mastery.level === 'not_started') return 0;
  if (mastery.level === 'learning') return 1;
  if (mastery.level === 'practicing') return 2;
  if (mastery.level === 'mastered') {
    if (mastery.bestStreak >= 20) return 5; // legendary
    if (mastery.bestStreak >= 10) return 4;
    return 3;
  }
  if (mastery.level === 'review_needed') return 2;
  return 0;
}

/**
 * Calculate recommended daily study plan.
 */
export function getDailyPlan(
  allMasteries: SkillMastery[],
  maxItems: number = 10,
): {
  reviewSkills: string[];
  practiceSkills: string[];
  newSkills: string[];
} {
  const reviewSkills: string[] = [];
  const practiceSkills: string[] = [];
  const newSkills: string[] = [];

  for (const m of allMasteries) {
    if (m.level === 'review_needed') {
      reviewSkills.push(m.skillId);
    } else if (m.level === 'learning' || m.level === 'practicing') {
      practiceSkills.push(m.skillId);
    }
  }

  // Find first not_started skill that's unlocked
  for (let i = 0; i < allMasteries.length; i++) {
    if (allMasteries[i].level === 'not_started' && isSkillUnlocked(i, allMasteries)) {
      newSkills.push(allMasteries[i].skillId);
      if (newSkills.length >= 2) break;
    }
  }

  return {
    reviewSkills: reviewSkills.slice(0, Math.ceil(maxItems * 0.3)),
    practiceSkills: practiceSkills.slice(0, Math.ceil(maxItems * 0.4)),
    newSkills: newSkills.slice(0, Math.ceil(maxItems * 0.3)),
  };
}
