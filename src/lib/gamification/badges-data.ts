// ============================================================
// Badge Definitions (매쓰버스 뱃지 데이터)
// ============================================================

import type { Badge, BadgeCategory, BadgeRarity } from '@/types/database';

type BadgeDefinition = Omit<Badge, 'id'>;

export const BADGES: BadgeDefinition[] = [
  // ─── Streak Badges ────────────────────────────────────────
  {
    code: 'streak_3',
    name: '꾸준한 출발',
    description: '3일 연속 학습을 완료했어요!',
    icon: '🔥',
    category: 'streak',
    rarity: 'common',
    requirement_type: 'streak_days',
    requirement_value: 3,
    xp_reward: 30,
    coin_reward: 5,
    is_secret: false,
    sort_order: 1,
  },
  {
    code: 'streak_7',
    name: '일주일 전사',
    description: '7일 연속 학습! 대단한 의지력이에요!',
    icon: '⚡',
    category: 'streak',
    rarity: 'common',
    requirement_type: 'streak_days',
    requirement_value: 7,
    xp_reward: 100,
    coin_reward: 15,
    is_secret: false,
    sort_order: 2,
  },
  {
    code: 'streak_14',
    name: '2주 챔피언',
    description: '14일 연속 학습 달성!',
    icon: '💪',
    category: 'streak',
    rarity: 'rare',
    requirement_type: 'streak_days',
    requirement_value: 14,
    xp_reward: 200,
    coin_reward: 30,
    is_secret: false,
    sort_order: 3,
  },
  {
    code: 'streak_30',
    name: '한 달의 기적',
    description: '30일 연속 학습! 놀라운 끈기에요!',
    icon: '🏅',
    category: 'streak',
    rarity: 'epic',
    requirement_type: 'streak_days',
    requirement_value: 30,
    xp_reward: 500,
    coin_reward: 50,
    is_secret: false,
    sort_order: 4,
  },
  {
    code: 'streak_100',
    name: '백일의 전설',
    description: '100일 연속 학습! 진정한 수학 전사!',
    icon: '👑',
    category: 'streak',
    rarity: 'legendary',
    requirement_type: 'streak_days',
    requirement_value: 100,
    xp_reward: 2000,
    coin_reward: 200,
    is_secret: false,
    sort_order: 5,
  },
  {
    code: 'streak_365',
    name: '1년의 신화',
    description: '365일 연속 학습! 수학의 신이에요!',
    icon: '🌟',
    category: 'streak',
    rarity: 'legendary',
    requirement_type: 'streak_days',
    requirement_value: 365,
    xp_reward: 10000,
    coin_reward: 1000,
    is_secret: false,
    sort_order: 6,
  },

  // ─── Mastery Badges ───────────────────────────────────────
  {
    code: 'mastery_first',
    name: '첫 번째 마스터',
    description: '처음으로 스킬 하나를 완벽히 마스터했어요!',
    icon: '⭐',
    category: 'mastery',
    rarity: 'common',
    requirement_type: 'skills_mastered',
    requirement_value: 1,
    xp_reward: 100,
    coin_reward: 10,
    is_secret: false,
    sort_order: 10,
  },
  {
    code: 'mastery_5',
    name: '다재다능',
    description: '5개의 스킬을 마스터!',
    icon: '🌈',
    category: 'mastery',
    rarity: 'rare',
    requirement_type: 'skills_mastered',
    requirement_value: 5,
    xp_reward: 300,
    coin_reward: 30,
    is_secret: false,
    sort_order: 11,
  },
  {
    code: 'mastery_20',
    name: '수학 박사',
    description: '20개의 스킬 마스터! 진정한 수학 박사!',
    icon: '🎓',
    category: 'mastery',
    rarity: 'epic',
    requirement_type: 'skills_mastered',
    requirement_value: 20,
    xp_reward: 1000,
    coin_reward: 100,
    is_secret: false,
    sort_order: 12,
  },
  {
    code: 'unit_complete',
    name: '단원 정복자',
    description: '하나의 단원을 모두 완료했어요!',
    icon: '📚',
    category: 'mastery',
    rarity: 'rare',
    requirement_type: 'units_completed',
    requirement_value: 1,
    xp_reward: 200,
    coin_reward: 20,
    is_secret: false,
    sort_order: 13,
  },

  // ─── Speed Badges ─────────────────────────────────────────
  {
    code: 'speed_demon',
    name: '번개 계산왕',
    description: '10문제를 각각 5초 이내에 정답!',
    icon: '⚡',
    category: 'speed',
    rarity: 'rare',
    requirement_type: 'fast_correct_count',
    requirement_value: 10,
    xp_reward: 150,
    coin_reward: 15,
    is_secret: false,
    sort_order: 20,
  },
  {
    code: 'speed_master',
    name: '초고속 마스터',
    description: '50문제를 각각 5초 이내에 정답!',
    icon: '🚀',
    category: 'speed',
    rarity: 'epic',
    requirement_type: 'fast_correct_count',
    requirement_value: 50,
    xp_reward: 500,
    coin_reward: 50,
    is_secret: false,
    sort_order: 21,
  },

  // ─── Accuracy Badges ──────────────────────────────────────
  {
    code: 'perfect_session',
    name: '완벽한 하루',
    description: '세션에서 100% 정답률 달성!',
    icon: '💯',
    category: 'accuracy',
    rarity: 'common',
    requirement_type: 'perfect_sessions',
    requirement_value: 1,
    xp_reward: 50,
    coin_reward: 5,
    is_secret: false,
    sort_order: 30,
  },
  {
    code: 'perfect_10',
    name: '완벽주의자',
    description: '10번의 완벽한 세션!',
    icon: '🎯',
    category: 'accuracy',
    rarity: 'rare',
    requirement_type: 'perfect_sessions',
    requirement_value: 10,
    xp_reward: 300,
    coin_reward: 30,
    is_secret: false,
    sort_order: 31,
  },
  {
    code: 'accuracy_90',
    name: '정확한 사수',
    description: '전체 정답률 90% 이상 유지 (100문제 이상)',
    icon: '🏹',
    category: 'accuracy',
    rarity: 'epic',
    requirement_type: 'overall_accuracy_90',
    requirement_value: 100,
    xp_reward: 500,
    coin_reward: 50,
    is_secret: false,
    sort_order: 32,
  },

  // ─── Exploration Badges ───────────────────────────────────
  {
    code: 'explorer_domains',
    name: '수학 탐험가',
    description: '모든 영역의 문제를 한 번씩 풀어봤어요!',
    icon: '🗺️',
    category: 'exploration',
    rarity: 'rare',
    requirement_type: 'domains_explored',
    requirement_value: 5,
    xp_reward: 200,
    coin_reward: 20,
    is_secret: false,
    sort_order: 40,
  },
  {
    code: 'question_100',
    name: '백문백답',
    description: '총 100문제를 풀었어요!',
    icon: '📝',
    category: 'exploration',
    rarity: 'common',
    requirement_type: 'total_questions',
    requirement_value: 100,
    xp_reward: 100,
    coin_reward: 10,
    is_secret: false,
    sort_order: 41,
  },
  {
    code: 'question_1000',
    name: '천문천답',
    description: '총 1000문제를 풀었어요!',
    icon: '🏆',
    category: 'exploration',
    rarity: 'epic',
    requirement_type: 'total_questions',
    requirement_value: 1000,
    xp_reward: 1000,
    coin_reward: 100,
    is_secret: false,
    sort_order: 42,
  },

  // ─── Social Badges ────────────────────────────────────────
  {
    code: 'first_class',
    name: '함께하는 수학',
    description: '교실에 처음으로 참가했어요!',
    icon: '🏫',
    category: 'social',
    rarity: 'common',
    requirement_type: 'classroom_joined',
    requirement_value: 1,
    xp_reward: 50,
    coin_reward: 5,
    is_secret: false,
    sort_order: 50,
  },
  {
    code: 'leaderboard_top3',
    name: '명예의 전당',
    description: '주간 리더보드 Top 3 달성!',
    icon: '🥇',
    category: 'social',
    rarity: 'epic',
    requirement_type: 'leaderboard_top3',
    requirement_value: 1,
    xp_reward: 500,
    coin_reward: 50,
    is_secret: false,
    sort_order: 51,
  },

  // ─── Special Badges ───────────────────────────────────────
  {
    code: 'night_owl',
    name: '밤의 수학자',
    description: '밤 10시 이후에 학습을 완료!',
    icon: '🦉',
    category: 'special',
    rarity: 'common',
    requirement_type: 'night_study',
    requirement_value: 1,
    xp_reward: 30,
    coin_reward: 3,
    is_secret: true,
    sort_order: 60,
  },
  {
    code: 'early_bird',
    name: '아침형 수학자',
    description: '오전 6시 전에 학습을 시작!',
    icon: '🐦',
    category: 'special',
    rarity: 'common',
    requirement_type: 'early_study',
    requirement_value: 1,
    xp_reward: 30,
    coin_reward: 3,
    is_secret: true,
    sort_order: 61,
  },
  {
    code: 'comeback_kid',
    name: '포기하지 않는 자',
    description: '5문제 연속 틀린 후 3문제 연속 맞힘!',
    icon: '🔄',
    category: 'special',
    rarity: 'rare',
    requirement_type: 'comeback',
    requirement_value: 1,
    xp_reward: 150,
    coin_reward: 15,
    is_secret: true,
    sort_order: 62,
  },
  {
    code: 'weekend_warrior',
    name: '주말 전사',
    description: '주말에 3시간 이상 학습!',
    icon: '⚔️',
    category: 'special',
    rarity: 'rare',
    requirement_type: 'weekend_hours',
    requirement_value: 3,
    xp_reward: 200,
    coin_reward: 20,
    is_secret: false,
    sort_order: 63,
  },
];

/**
 * Get badge definition by code.
 */
export function getBadgeByCode(code: string): BadgeDefinition | undefined {
  return BADGES.find((b) => b.code === code);
}

/**
 * Get all badges in a category.
 */
export function getBadgesByCategory(category: BadgeCategory): BadgeDefinition[] {
  return BADGES.filter((b) => b.category === category);
}

/**
 * Get all badges of a rarity.
 */
export function getBadgesByRarity(rarity: BadgeRarity): BadgeDefinition[] {
  return BADGES.filter((b) => b.rarity === rarity);
}

/**
 * Get all visible (non-secret) badges.
 */
export function getVisibleBadges(): BadgeDefinition[] {
  return BADGES.filter((b) => !b.is_secret);
}

/**
 * Get the total count of badges.
 */
export function getTotalBadgeCount(): number {
  return BADGES.length;
}
