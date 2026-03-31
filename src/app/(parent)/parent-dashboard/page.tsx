'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Flame, Star, BookOpen, Target, TrendingUp, Clock } from 'lucide-react';

const mockChild = {
  name: '김수학',
  grade: 3,
  level: 8,
  xp: 1250,
  streak: 7,
  todayMinutes: 15,
  weekAccuracy: 82,
  weekProblems: 45,
  recentUnits: [
    { name: '덧셈과 뺄셈', progress: 85 },
    { name: '곱셈', progress: 60 },
    { name: '평면도형', progress: 30 },
  ],
};

export default function ParentDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">자녀 학습 현황</h1>
        <p className="text-muted-foreground">{mockChild.name} ({mockChild.grade}학년)</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-5 w-5 mx-auto mb-1 text-purple-500" />
            <p className="text-xl font-bold">Lv.{mockChild.level}</p>
            <p className="text-xs text-muted-foreground">{mockChild.xp} XP</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Flame className="h-5 w-5 mx-auto mb-1 text-orange-500" />
            <p className="text-xl font-bold">{mockChild.streak}일</p>
            <p className="text-xs text-muted-foreground">연속 학습</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-5 w-5 mx-auto mb-1 text-blue-500" />
            <p className="text-xl font-bold">{mockChild.todayMinutes}분</p>
            <p className="text-xs text-muted-foreground">오늘 학습</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="h-5 w-5 mx-auto mb-1 text-green-500" />
            <p className="text-xl font-bold">{mockChild.weekAccuracy}%</p>
            <p className="text-xs text-muted-foreground">주간 정답률</p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly summary */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" /> 이번 주 요약
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">풀은 문제</p>
              <p className="text-2xl font-bold">{mockChild.weekProblems}문제</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">정답률</p>
              <p className="text-2xl font-bold">{mockChild.weekAccuracy}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Unit progress */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <BookOpen className="h-5 w-5" /> 단원별 진도
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockChild.recentUnits.map((unit) => (
            <div key={unit.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{unit.name}</span>
                <span className="text-xs text-muted-foreground">{unit.progress}%</span>
              </div>
              <Progress value={unit.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
