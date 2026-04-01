'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Users, BookOpen, TrendingUp, AlertTriangle, ArrowRight,
  Clock, Star, Target, Flame, ChevronRight, Trophy, Zap,
  UserCheck, BarChart3, Activity, Inbox, Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from 'recharts';

interface TeacherStats {
  teacher: { name: string };
  overview: {
    totalStudents: number;
    activeToday: number;
    avgAccuracy: number;
    totalQuestionsToday: number;
    atRiskCount: number;
  };
  students: Array<{
    id: string; display_name: string; grade: number;
    total_xp: number; current_streak: number; level: number;
  }>;
  weeklyActivity: Array<{ date: string; students: number; questions: number }>;
  recentSessions: Array<{
    display_name: string; session_type: string;
    correct_count: number; total_questions: number; xp_earned: number; completed_at: string;
  }>;
  atRiskStudents: Array<{
    display_name: string; current_streak: number; updated_at: string; accuracy: number;
  }>;
}

function EmptyState({ icon: Icon, title, description }: { icon: typeof Inbox; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="rounded-2xl bg-muted/50 p-4 mb-3">
        <Icon className="h-8 w-8 text-muted-foreground/50" />
      </div>
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p className="text-xs text-muted-foreground/70 mt-1 max-w-xs">{description}</p>
    </div>
  );
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return '방금 전';
  if (min < 60) return `${min}분 전`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}시간 전`;
  const day = Math.floor(hr / 24);
  return `${day}일 전`;
}

const SESSION_TYPE_LABEL: Record<string, string> = {
  daily_quest: '일일 퀘스트',
  lesson: '단원 학습',
  review: '복습',
  skill_practice: '스킬 연습',
};

export default function TeacherDashboard() {
  const [data, setData] = useState<TeacherStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/teacher/stats')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="h-8 w-8 mx-auto mb-3 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-sm text-muted-foreground">데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const overview = data?.overview ?? { totalStudents: 0, activeToday: 0, avgAccuracy: 0, totalQuestionsToday: 0, atRiskCount: 0 };
  const students = data?.students ?? [];
  const weekly = data?.weeklyActivity ?? [];
  const recent = data?.recentSessions ?? [];
  const atRisk = data?.atRiskStudents ?? [];
  const activityRate = overview.totalStudents > 0 ? Math.round((overview.activeToday / overview.totalStudents) * 100) : 0;

  // Format weekly data for chart
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const chartData = weekly.map(w => ({
    day: dayNames[new Date(w.date).getDay()] ?? w.date,
    학생: w.students,
    문제: w.questions,
  }));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">교사 대시보드</h1>
        <p className="text-muted-foreground mt-1">학급 현황을 실시간으로 확인하세요</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: '전체 학생', value: overview.totalStudents, sub: overview.totalStudents === 0 ? '학급을 만들어 보세요' : `${activityRate}% 활동률`, icon: Users, gradient: 'from-blue-500 to-cyan-500' },
          { label: '오늘 학습', value: overview.activeToday, sub: overview.activeToday === 0 ? '아직 활동 없음' : `${overview.totalQuestionsToday}문제 풀이`, icon: UserCheck, gradient: 'from-green-500 to-emerald-500' },
          { label: '평균 정답률', value: overview.avgAccuracy > 0 ? `${overview.avgAccuracy}%` : '-', sub: overview.avgAccuracy > 0 ? '오늘 기준' : '데이터 없음', icon: Target, gradient: 'from-violet-500 to-purple-500' },
          { label: '주의 필요', value: overview.atRiskCount, sub: overview.atRiskCount === 0 ? '모두 양호' : `관리 필요`, icon: AlertTriangle, gradient: 'from-rose-500 to-red-500' },
        ].map((stat, i) => (
          <Card key={i} className="overflow-hidden border-0 shadow-md">
            <CardContent className="p-0">
              <div className={`bg-gradient-to-br ${stat.gradient} p-4 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium opacity-80">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <p className="text-[11px] opacity-70 mt-0.5">{stat.sub}</p>
                  </div>
                  <div className="rounded-xl bg-white/20 p-2.5">
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No students CTA */}
      {overview.totalStudents === 0 && (
        <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
          <CardContent className="flex flex-col items-center text-center py-10">
            <div className="rounded-2xl bg-primary/10 p-4 mb-4">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-lg font-bold">시작해 볼까요?</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              아직 가입한 학생이 없습니다. 학급을 만들고 참여 코드를 학생들에게 공유하면, 여기서 실시간으로 학습 현황을 확인할 수 있어요.
            </p>
            <Link href="/teacher-classrooms" className="mt-4">
              <Button className="gap-2">
                <Users className="h-4 w-4" /> 학급 만들기
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Charts — only if data exists */}
      {weekly.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-3 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                이번 주 학습 현황
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="day" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                    <Bar dataKey="학생" fill="#6366f1" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="문제" fill="#c4b5fd" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Top students */}
          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                XP 순위
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2.5">
              {students.slice(0, 5).map((s, i) => (
                <div key={s.id} className="flex items-center gap-3 rounded-xl border p-2.5">
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    i === 0 ? 'bg-yellow-100 text-yellow-700' :
                    i === 1 ? 'bg-gray-100 text-gray-600' :
                    i === 2 ? 'bg-orange-100 text-orange-700' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{s.display_name}</p>
                    <p className="text-[10px] text-muted-foreground">Lv.{s.level}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-primary">{s.total_xp.toLocaleString()}</p>
                    <p className="text-[10px] text-orange-500 flex items-center gap-0.5 justify-end">
                      <Flame className="h-3 w-3" /> {s.current_streak}일
                    </p>
                  </div>
                </div>
              ))}
              {students.length === 0 && (
                <EmptyState icon={Trophy} title="아직 학생이 없어요" description="학생이 가입하면 순위가 표시됩니다" />
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Alerts + Activity Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Alerts */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              주의가 필요한 학생
              {atRisk.length > 0 && <Badge variant="secondary" className="ml-auto text-[10px]">{atRisk.length}명</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {atRisk.length > 0 ? (
              <div className="space-y-2">
                {atRisk.map((a, i) => (
                  <div key={i} className="rounded-xl border-l-4 border-l-red-500 bg-red-50/80 dark:bg-red-950/30 p-3.5">
                    <p className="text-sm font-semibold">{a.display_name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      정답률 {a.accuracy}% · 스트릭 {a.current_streak}일 · 마지막 활동 {timeAgo(a.updated_at)}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={AlertTriangle}
                title={overview.totalStudents === 0 ? '아직 학생이 없어요' : '모두 잘하고 있어요!'}
                description={overview.totalStudents === 0 ? '학생이 가입하면 여기에 표시됩니다' : '주의가 필요한 학생이 없습니다'}
              />
            )}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Activity className="h-4 w-4 text-green-500" />
              최근 활동
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recent.length > 0 ? (
              <div className="space-y-3">
                {recent.map((act, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                      {act.display_name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-semibold">{act.display_name}</span>
                        <span className="text-muted-foreground"> {SESSION_TYPE_LABEL[act.session_type] ?? act.session_type} 완료</span>
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {act.correct_count}/{act.total_questions} 정답 · +{act.xp_earned} XP
                      </p>
                    </div>
                    <span className="text-[10px] text-muted-foreground shrink-0">{timeAgo(act.completed_at)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Activity}
                title="아직 학습 활동이 없어요"
                description={overview.totalStudents === 0 ? '학생이 문제를 풀기 시작하면 여기에 표시됩니다' : '오늘은 아직 아무도 학습하지 않았어요'}
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick link to classrooms */}
      <Link href="/teacher-classrooms">
        <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-primary/30">
          <CardContent className="flex items-center justify-between p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-100 dark:bg-indigo-900/30 p-2.5">
                <Users className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold">학급 관리</p>
                <p className="text-xs text-muted-foreground">학급 만들기, 학생 관리, 참여 코드 확인</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
