'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthStore } from '@/stores/auth-store';
import { Trophy, Medal, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LEAGUES } from '@/lib/gamification/league-system';

const mockLeaderboard = [
  { rank: 1, name: '수학왕지훈', xp: 2450, level: 15, league: 'gold' as const },
  { rank: 2, name: '별빛수아', xp: 2180, level: 13, league: 'gold' as const },
  { rank: 3, name: '숫자마법사', xp: 1950, level: 12, league: 'gold' as const },
  { rank: 4, name: '피타고라스', xp: 1720, level: 11, league: 'silver' as const },
  { rank: 5, name: '계산천재', xp: 1580, level: 10, league: 'silver' as const },
  { rank: 6, name: '문제풀이왕', xp: 1340, level: 9, league: 'silver' as const },
  { rank: 7, name: '수학탐험가', xp: 1120, level: 8, league: 'silver' as const },
  { rank: 8, name: '도전러', xp: 980, level: 7, league: 'bronze' as const },
  { rank: 9, name: '새싹수학', xp: 750, level: 5, league: 'bronze' as const },
  { rank: 10, name: '시작이반', xp: 520, level: 4, league: 'bronze' as const },
];

const rankEmoji = ['🥇', '🥈', '🥉'];

export default function LeaderboardPage() {
  const profile = useAuthStore((s) => s.profile);
  const userLeague = LEAGUES.find((l) => l.name === (profile?.league ?? 'bronze'));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-500" /> 리더보드
        </h1>
        <p className="text-muted-foreground">이번 주 XP 랭킹</p>
      </div>

      {/* My league */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{userLeague?.icon ?? '🥉'}</span>
            <div>
              <p className="font-bold text-lg">{userLeague?.displayName ?? '브론즈 리그'}</p>
              <p className="text-sm text-muted-foreground">상위 {userLeague?.promotionSlots ?? 10}명 승급</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">{profile?.total_xp ?? 0}</p>
            <p className="text-xs text-muted-foreground">주간 XP</p>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="weekly">
        <TabsList className="w-full">
          <TabsTrigger value="weekly" className="flex-1">주간</TabsTrigger>
          <TabsTrigger value="monthly" className="flex-1">월간</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="mt-4 space-y-2">
          {mockLeaderboard.map((entry) => (
            <Card key={entry.rank} className={cn(entry.rank <= 3 && 'border-amber-200 dark:border-amber-800')}>
              <CardContent className="flex items-center gap-3 p-3">
                <div className="w-8 text-center shrink-0">
                  {entry.rank <= 3 ? (
                    <span className="text-xl">{rankEmoji[entry.rank - 1]}</span>
                  ) : (
                    <span className="text-sm font-bold text-muted-foreground">{entry.rank}</span>
                  )}
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {entry.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{entry.name}</p>
                  <p className="text-xs text-muted-foreground">Lv.{entry.level}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{entry.xp.toLocaleString()}</p>
                  <p className="text-[10px] text-muted-foreground">XP</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="monthly" className="mt-4">
          <p className="text-center py-8 text-muted-foreground">월간 데이터 집계 중...</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
