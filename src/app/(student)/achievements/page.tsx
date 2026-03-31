'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BADGES as BADGES_DATA } from '@/lib/gamification/badges-data';
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

const rarityColors: Record<string, string> = {
  common: 'border-gray-200 dark:border-gray-700',
  rare: 'border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10',
  epic: 'border-purple-300 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-900/10',
  legendary: 'border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-900/10',
};

const rarityLabels: Record<string, string> = {
  common: '일반',
  rare: '레어',
  epic: '에픽',
  legendary: '전설',
};

const categoryLabels: Record<string, string> = {
  streak: '스트릭',
  mastery: '마스터리',
  speed: '스피드',
  accuracy: '정확도',
  exploration: '탐험',
  social: '소셜',
  special: '스페셜',
};

export default function AchievementsPage() {
  const categories = [...new Set(BADGES_DATA.map((b) => b.category))];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Award className="h-6 w-6 text-amber-500" /> 업적
        </h1>
        <p className="text-muted-foreground">배지를 모아보세요!</p>
      </div>

      {/* Stats */}
      <Card>
        <CardContent className="flex items-center justify-between p-4">
          <span className="font-medium">획득한 배지</span>
          <span className="text-2xl font-bold text-primary">0 / {BADGES_DATA.length}</span>
        </CardContent>
      </Card>

      {categories.map((cat) => {
        const badges = BADGES_DATA.filter((b) => b.category === cat);
        return (
          <div key={cat}>
            <h2 className="text-lg font-bold mb-3">{categoryLabels[cat] ?? cat}</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {badges.map((badge) => (
                <Card key={badge.code} className={cn('opacity-60', rarityColors[badge.rarity])}>
                  <CardContent className="flex items-center gap-3 p-4">
                    <span className="text-3xl grayscale">{badge.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{badge.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                          {rarityLabels[badge.rarity]}
                        </span>
                        <span className="text-xs text-muted-foreground">+{badge.xp_reward} XP</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
