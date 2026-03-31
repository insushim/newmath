// ============================================================
// League System (리그 시스템)
// ============================================================

import type { LeagueName } from '@/types/database';

export interface League {
  name: LeagueName;
  displayName: string;
  description: string;
  color: string;
  icon: string;
  minWeeklyXP: number;
  promotionSlots: number;
  demotionSlots: number;
  rewardCoins: number;
}

export const LEAGUES: League[] = [
  {
    name: 'bronze',
    displayName: '브론즈 리그',
    description: '수학 여정의 시작! 열심히 하면 승급할 수 있어요.',
    color: '#CD7F32',
    icon: '🥉',
    minWeeklyXP: 0,
    promotionSlots: 10,
    demotionSlots: 0,
    rewardCoins: 5,
  },
  {
    name: 'silver',
    displayName: '실버 리그',
    description: '꾸준한 학습으로 실버에 올랐어요!',
    color: '#C0C0C0',
    icon: '🥈',
    minWeeklyXP: 100,
    promotionSlots: 8,
    demotionSlots: 5,
    rewardCoins: 10,
  },
  {
    name: 'gold',
    displayName: '골드 리그',
    description: '실력이 빛나는 골드 리그!',
    color: '#FFD700',
    icon: '🥇',
    minWeeklyXP: 300,
    promotionSlots: 5,
    demotionSlots: 5,
    rewardCoins: 20,
  },
  {
    name: 'platinum',
    displayName: '플래티넘 리그',
    description: '최상위 학습자들의 경쟁!',
    color: '#E5E4E2',
    icon: '💎',
    minWeeklyXP: 600,
    promotionSlots: 3,
    demotionSlots: 5,
    rewardCoins: 35,
  },
  {
    name: 'diamond',
    displayName: '다이아몬드 리그',
    description: '전설적인 수학 실력의 소유자!',
    color: '#B9F2FF',
    icon: '💠',
    minWeeklyXP: 1000,
    promotionSlots: 3,
    demotionSlots: 5,
    rewardCoins: 50,
  },
  {
    name: 'master',
    displayName: '마스터 리그',
    description: '수학의 정상에 오른 마스터!',
    color: '#FF4500',
    icon: '👑',
    minWeeklyXP: 1500,
    promotionSlots: 0,
    demotionSlots: 5,
    rewardCoins: 100,
  },
];

/**
 * Get league data by name.
 */
export function getLeague(name: LeagueName): League {
  const league = LEAGUES.find((l) => l.name === name);
  if (!league) {
    return LEAGUES[0];
  }
  return league;
}

/**
 * Get the league index (0-based rank).
 */
export function getLeagueIndex(name: LeagueName): number {
  const index = LEAGUES.findIndex((l) => l.name === name);
  return index >= 0 ? index : 0;
}

/**
 * Get the next league (for promotion).
 */
export function getNextLeague(current: LeagueName): League | null {
  const idx = getLeagueIndex(current);
  if (idx >= LEAGUES.length - 1) return null;
  return LEAGUES[idx + 1];
}

/**
 * Get the previous league (for demotion).
 */
export function getPreviousLeague(current: LeagueName): League | null {
  const idx = getLeagueIndex(current);
  if (idx <= 0) return null;
  return LEAGUES[idx - 1];
}

/**
 * Determine if a player should be promoted based on their rank in the leaderboard.
 * Returns the new league name, or null if no change.
 *
 * @param currentLeague - player's current league
 * @param rankInLeague - player's rank in the current league (1-based)
 * @param totalInLeague - total players in the league
 */
export function determineLeagueChange(
  currentLeague: LeagueName,
  rankInLeague: number,
  totalInLeague: number,
): { newLeague: LeagueName; change: 'promoted' | 'demoted' | 'none' } {
  const league = getLeague(currentLeague);
  const nextLeague = getNextLeague(currentLeague);
  const prevLeague = getPreviousLeague(currentLeague);

  // Check promotion (top N players)
  if (nextLeague && rankInLeague <= league.promotionSlots) {
    return { newLeague: nextLeague.name, change: 'promoted' };
  }

  // Check demotion (bottom N players)
  if (prevLeague && league.demotionSlots > 0) {
    const demotionThreshold = totalInLeague - league.demotionSlots;
    if (rankInLeague > demotionThreshold && totalInLeague > league.demotionSlots) {
      return { newLeague: prevLeague.name, change: 'demoted' };
    }
  }

  return { newLeague: currentLeague, change: 'none' };
}

/**
 * Get display text for league change.
 */
export function getLeagueChangeMessage(
  change: 'promoted' | 'demoted' | 'none',
  newLeague: LeagueName,
): string {
  const league = getLeague(newLeague);

  switch (change) {
    case 'promoted':
      return `축하합니다! ${league.displayName}으로 승급했어요! ${league.icon}`;
    case 'demoted':
      return `아쉽지만 ${league.displayName}으로 이동했어요. 다시 도전해봐요!`;
    case 'none':
      return `${league.displayName}에서 계속 도전하세요!`;
  }
}

/**
 * Calculate the estimated league based on weekly XP.
 * This is a rough estimate; actual placement depends on relative ranking.
 */
export function estimateLeagueFromXP(weeklyXP: number): LeagueName {
  let result: LeagueName = 'bronze';
  for (const league of LEAGUES) {
    if (weeklyXP >= league.minWeeklyXP) {
      result = league.name;
    }
  }
  return result;
}
