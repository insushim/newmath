'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const mockClassStats = {
  totalStudents: 28,
  activeToday: 22,
  avgAccuracy: 78.5,
  avgXpWeek: 1240,
  needsHelp: 3,
};

const mockClasses = [
  { id: '1', name: '5학년 3반', grade: 5, students: 28, active: 22 },
  { id: '2', name: '5학년 4반', grade: 5, students: 30, active: 18 },
];

const mockAlerts = [
  { student: '김민수', issue: '3일 연속 미접속', type: 'warning' as const },
  { student: '박서연', issue: '정답률 40% 이하 (분수)', type: 'danger' as const },
  { student: '이지훈', issue: '5연속 오답 (나눗셈)', type: 'danger' as const },
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">교사 대시보드</h1>
        <p className="text-muted-foreground">학급 현황을 한눈에 확인하세요</p>
      </div>

      {/* Overview stats */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-6 w-6 mx-auto mb-2 text-blue-500" />
            <p className="text-2xl font-bold">{mockClassStats.totalStudents}</p>
            <p className="text-xs text-muted-foreground">전체 학생</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="h-6 w-6 mx-auto mb-2 text-green-500" />
            <p className="text-2xl font-bold">{mockClassStats.activeToday}</p>
            <p className="text-xs text-muted-foreground">오늘 학습</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-6 w-6 mx-auto mb-2 text-purple-500" />
            <p className="text-2xl font-bold">{mockClassStats.avgAccuracy}%</p>
            <p className="text-xs text-muted-foreground">평균 정답률</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-red-500" />
            <p className="text-2xl font-bold">{mockClassStats.needsHelp}</p>
            <p className="text-xs text-muted-foreground">도움 필요</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" /> 주의가 필요한 학생
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {mockAlerts.map((alert, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-lg p-3 text-sm ${
                alert.type === 'danger' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-amber-50 dark:bg-amber-900/20'
              }`}
            >
              <AlertTriangle className={`h-4 w-4 shrink-0 ${alert.type === 'danger' ? 'text-red-500' : 'text-amber-500'}`} />
              <div className="flex-1">
                <span className="font-medium">{alert.student}</span>
                <span className="text-muted-foreground"> · {alert.issue}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Classes */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">내 학급</h2>
          <Link href="/classrooms">
            <Button variant="ghost" size="sm" className="gap-1">
              전체 보기 <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {mockClasses.map((cls) => (
            <Card key={cls.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p className="font-semibold">{cls.name}</p>
                  <p className="text-sm text-muted-foreground">{cls.students}명 · {cls.active}명 활동 중</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
