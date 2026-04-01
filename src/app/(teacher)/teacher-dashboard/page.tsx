'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Users, BookOpen, TrendingUp, AlertTriangle, ArrowRight,
  Clock, Star, Target, Flame, ChevronRight, Trophy, Zap,
  UserCheck, BarChart3, Activity,
} from 'lucide-react';
import Link from 'next/link';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';

// ─── 실제감 있는 데이터 ──────────────────────────────────

const weeklyActivity = [
  { day: '월', students: 24, questions: 312 },
  { day: '화', students: 26, questions: 348 },
  { day: '수', students: 22, questions: 286 },
  { day: '목', students: 25, questions: 330 },
  { day: '금', students: 27, questions: 364 },
  { day: '토', students: 12, questions: 156 },
  { day: '일', students: 8, questions: 98 },
];

const masteryDistribution = [
  { name: '마스터', value: 42, color: '#22c55e' },
  { name: '연습 중', value: 35, color: '#eab308' },
  { name: '학습 중', value: 18, color: '#3b82f6' },
  { name: '미시작', value: 5, color: '#d1d5db' },
];

const topStudents = [
  { name: '정예은', xp: 2840, streak: 14, accuracy: 94, level: 12 },
  { name: '최도윤', xp: 2650, streak: 11, accuracy: 91, level: 11 },
  { name: '한서아', xp: 2420, streak: 9, accuracy: 89, level: 10 },
  { name: '윤지호', xp: 2180, streak: 7, accuracy: 87, level: 9 },
  { name: '김하린', xp: 2050, streak: 12, accuracy: 86, level: 9 },
];

const alerts = [
  { student: '김민수', issue: '3일 연속 미접속', detail: '마지막 접속: 3월 29일', severity: 'high' as const, trend: 'down' },
  { student: '박서연', issue: '분수 영역 정답률 38%', detail: '최근 15문제 중 6문제 정답', severity: 'high' as const, trend: 'down' },
  { student: '이지훈', issue: '나눗셈 5연속 오답', detail: '오늘 오전 학습에서 발생', severity: 'medium' as const, trend: 'flat' },
  { student: '강수빈', issue: '학습 시간 급감', detail: '지난주 대비 70% 감소', severity: 'medium' as const, trend: 'down' },
  { student: '조민재', issue: '속도 급저하', detail: '문제당 평균 시간 2배 증가', severity: 'low' as const, trend: 'flat' },
];

const recentActivity = [
  { student: '정예은', action: '일일 퀘스트 완료', detail: '10/10 정답, +180 XP', time: '3분 전', icon: '🎉' },
  { student: '최도윤', action: '단원 마스터 달성', detail: '분수의 덧셈과 뺄셈', time: '12분 전', icon: '👑' },
  { student: '한서아', action: '7일 연속 스트릭', detail: '일주일 전사 뱃지 획득', time: '25분 전', icon: '🔥' },
  { student: '김하린', action: '진단 테스트 완료', detail: '5학년 수준 배정', time: '42분 전', icon: '📊' },
  { student: '윤지호', action: '복습 세션 완료', detail: '8/10 정답', time: '1시간 전', icon: '📚' },
  { student: '박지민', action: '신규 가입', detail: '5학년 3반 참여', time: '2시간 전', icon: '👋' },
];

const classes = [
  { id: '1', name: '5학년 3반', grade: 5, students: 28, active: 24, avgAccuracy: 78.5, avgXp: 1840 },
  { id: '2', name: '5학년 4반', grade: 5, students: 30, active: 18, avgAccuracy: 72.3, avgXp: 1520 },
];

const domainStats = [
  { name: '수와 연산', accuracy: 82, mastered: 15, total: 20 },
  { name: '변화와 관계', accuracy: 71, mastered: 8, total: 14 },
  { name: '도형과 측정', accuracy: 76, mastered: 10, total: 16 },
  { name: '자료와 가능성', accuracy: 68, mastered: 5, total: 10 },
];

const SEVERITY_STYLES = {
  high: 'border-l-red-500 bg-red-50/80 dark:bg-red-950/30',
  medium: 'border-l-amber-500 bg-amber-50/80 dark:bg-amber-950/30',
  low: 'border-l-blue-500 bg-blue-50/80 dark:bg-blue-950/30',
};

export default function TeacherDashboard() {
  const totalStudents = classes.reduce((s, c) => s + c.students, 0);
  const totalActive = classes.reduce((s, c) => s + c.active, 0);
  const avgAccuracy = (classes.reduce((s, c) => s + c.avgAccuracy, 0) / classes.length).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">교사 대시보드</h1>
        <p className="text-muted-foreground mt-1">오늘의 학급 현황을 한눈에 확인하세요</p>
      </div>

      {/* Overview Stats — Gradient cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: '전체 학생', value: totalStudents, sub: `${classes.length}개 학급`, icon: Users, gradient: 'from-blue-500 to-cyan-500' },
          { label: '오늘 학습', value: totalActive, sub: `${Math.round(totalActive / totalStudents * 100)}% 활동률`, icon: UserCheck, gradient: 'from-green-500 to-emerald-500' },
          { label: '평균 정답률', value: `${avgAccuracy}%`, sub: '전체 학급', icon: Target, gradient: 'from-violet-500 to-purple-500' },
          { label: '주의 필요', value: alerts.filter(a => a.severity === 'high').length, sub: `전체 ${alerts.length}명`, icon: AlertTriangle, gradient: 'from-rose-500 to-red-500' },
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

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Weekly Activity Chart */}
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
                <BarChart data={weeklyActivity} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="day" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="students" fill="#6366f1" radius={[6, 6, 0, 0]} name="학습 학생" />
                  <Bar dataKey="questions" fill="#c4b5fd" radius={[6, 6, 0, 0]} name="풀이 문제" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Mastery Distribution */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-500" />
              스킬 마스터리 분포
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 mb-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={masteryDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {masteryDistribution.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {masteryDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-xs">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="ml-auto font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts + Activity Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Alerts */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              주의가 필요한 학생
              <Badge variant="secondary" className="ml-auto text-[10px]">{alerts.length}명</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className={`rounded-xl border-l-4 p-3.5 transition-colors ${SEVERITY_STYLES[alert.severity]}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold">{alert.student}</p>
                    <p className="text-xs text-foreground/70 mt-0.5">{alert.issue}</p>
                    <p className="text-[11px] text-muted-foreground mt-1">{alert.detail}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-[10px] shrink-0 ${
                      alert.severity === 'high' ? 'border-red-300 text-red-600' :
                      alert.severity === 'medium' ? 'border-amber-300 text-amber-600' :
                      'border-blue-300 text-blue-600'
                    }`}
                  >
                    {alert.severity === 'high' ? '긴급' : alert.severity === 'medium' ? '주의' : '관찰'}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity Feed */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Activity className="h-4 w-4 text-green-500" />
              최근 활동
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-lg">
                    {act.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-semibold">{act.student}</span>
                      <span className="text-muted-foreground"> {act.action}</span>
                    </p>
                    <p className="text-[11px] text-muted-foreground">{act.detail}</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground shrink-0 pt-0.5">{act.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Domain Stats */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-indigo-500" />
            영역별 학습 현황
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {domainStats.map((domain) => (
              <div key={domain.name} className="rounded-xl border p-4 space-y-3">
                <p className="text-sm font-semibold">{domain.name}</p>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">평균 정답률</span>
                    <span className="font-medium">{domain.accuracy}%</span>
                  </div>
                  <Progress value={domain.accuracy} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">마스터리</span>
                    <span className="font-medium">{domain.mastered}/{domain.total}</span>
                  </div>
                  <Progress value={(domain.mastered / domain.total) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Students + Classes */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Students */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              이번 주 우수 학생
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2.5">
              {topStudents.map((s, i) => (
                <div key={s.name} className="flex items-center gap-3 rounded-xl border p-3 hover:bg-muted/50 transition-colors">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-sm ${
                    i === 0 ? 'bg-yellow-100 text-yellow-700' :
                    i === 1 ? 'bg-gray-100 text-gray-700' :
                    i === 2 ? 'bg-orange-100 text-orange-700' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{s.name}</p>
                    <p className="text-[11px] text-muted-foreground">
                      Lv.{s.level} · 정답률 {s.accuracy}%
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-primary">{s.xp.toLocaleString()} XP</p>
                    <p className="text-[10px] text-orange-500 flex items-center gap-0.5 justify-end">
                      <Flame className="h-3 w-3" /> {s.streak}일
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Classes */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                내 학급
              </CardTitle>
              <Link href="/teacher-classrooms">
                <Button variant="ghost" size="sm" className="gap-1 text-xs">
                  전체 보기 <ChevronRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {classes.map((cls) => {
              const activityRate = Math.round((cls.active / cls.students) * 100);
              return (
                <Link key={cls.id} href="/teacher-classrooms">
                  <div className="rounded-xl border p-4 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold">{cls.name}</p>
                        <p className="text-xs text-muted-foreground">{cls.students}명 · 평균 {cls.avgAccuracy}%</p>
                      </div>
                      <Badge variant={activityRate >= 80 ? 'default' : 'secondary'} className="text-[10px]">
                        {activityRate}% 활동
                      </Badge>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-muted-foreground">오늘 활동률</span>
                        <span className="font-medium">{cls.active}/{cls.students}명</span>
                      </div>
                      <Progress value={activityRate} className="h-2" />
                    </div>
                    <div className="flex items-center gap-4 mt-2.5 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> 평균 {cls.avgXp} XP</span>
                      <span className="flex items-center gap-1"><Target className="h-3 w-3" /> {cls.avgAccuracy}%</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
