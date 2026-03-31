'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/stores/auth-store';
import { calculateLevel } from '@/lib/gamification/xp-system';
import {
  Star,
  Flame,
  Trophy,
  Target,
  Zap,
  Calendar,
  Settings,
  LogOut,
  Moon,
  Sun,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSoundStore } from '@/stores/sound-store';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const leagueInfo: Record<string, { label: string; emoji: string; color: string }> = {
  bronze: { label: '브론즈', emoji: '🥉', color: 'text-amber-700' },
  silver: { label: '실버', emoji: '🥈', color: 'text-gray-400' },
  gold: { label: '골드', emoji: '🥇', color: 'text-yellow-500' },
  platinum: { label: '플래티넘', emoji: '💎', color: 'text-cyan-400' },
  diamond: { label: '다이아몬드', emoji: '💠', color: 'text-blue-400' },
  master: { label: '마스터', emoji: '👑', color: 'text-red-500' },
};

export default function ProfilePage() {
  const profile = useAuthStore((s) => s.profile);
  const { theme, setTheme } = useTheme();
  const { soundEnabled, toggleSound } = useSoundStore();
  const router = useRouter();
  const totalXp = profile?.total_xp ?? 0;
  const levelInfo = calculateLevel(totalXp);
  const league = leagueInfo[profile?.league ?? 'bronze'] ?? leagueInfo.bronze;

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    useAuthStore.getState().logout();
    toast.success('로그아웃 되었습니다.');
    router.push('/');
    router.refresh();
  }

  return (
    <div className="space-y-6">
      {/* Profile header */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
          {profile?.display_name?.[0] ?? '?'}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{profile?.display_name ?? '학생'}</h1>
          <p className="text-muted-foreground">
            {profile?.grade ? `${profile.grade}학년` : ''} · {league.emoji} {league.label} 리그
          </p>
        </div>
      </div>

      {/* Level card */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="font-semibold">레벨 {levelInfo.level}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {levelInfo.xpInCurrentLevel} / {levelInfo.nextLevelXP - levelInfo.currentLevelXP} XP
            </span>
          </div>
          <Progress value={levelInfo.progress * 100} className="h-3" />
        </CardContent>
      </Card>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={Zap} label="총 XP" value={String(totalXp)} color="text-purple-500 bg-purple-100 dark:bg-purple-900/30" />
        <StatCard icon={Flame} label="연속 학습" value={`${profile?.current_streak ?? 0}일`} color="text-orange-500 bg-orange-100 dark:bg-orange-900/30" />
        <StatCard icon={Trophy} label="최장 스트릭" value={`${profile?.longest_streak ?? 0}일`} color="text-amber-500 bg-amber-100 dark:bg-amber-900/30" />
        <StatCard icon={Target} label="코인" value={String(profile?.coins ?? 0)} color="text-blue-500 bg-blue-100 dark:bg-blue-900/30" />
      </div>

      <Separator />

      {/* Settings */}
      <div>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
          <Settings className="h-5 w-5" /> 설정
        </h2>
        <div className="space-y-2">
          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span className="font-medium">다크 모드</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? '켜짐' : '꺼짐'}
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                <span className="font-medium">효과음</span>
              </div>
              <Button variant="outline" size="sm" onClick={toggleSound}>
                {soundEnabled ? '켜짐' : '꺼짐'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Button variant="destructive" className="w-full gap-2" onClick={handleLogout}>
        <LogOut className="h-4 w-4" /> 로그아웃
      </Button>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: typeof Star;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xl font-bold">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}
