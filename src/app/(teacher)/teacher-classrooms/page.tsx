'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Plus, Users, Copy, Check, ChevronDown, ChevronUp,
  Crown, Flame, Target, Clock, Star, TrendingUp, TrendingDown,
  UserCheck, BookOpen,
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

// ─── Realistic Student Data ─────────────────────────────────

interface Student {
  id: string;
  name: string;
  level: number;
  xp: number;
  accuracy: number;
  streak: number;
  masteredSkills: number;
  totalSkills: number;
  lastActive: string;
  status: 'active' | 'idle' | 'at_risk';
  weeklyXp: number;
  trend: 'up' | 'down' | 'flat';
}

interface Classroom {
  id: string;
  name: string;
  grade: number;
  joinCode: string;
  students: Student[];
  isActive: boolean;
  createdAt: string;
}

const classrooms: Classroom[] = [
  {
    id: '1', name: '5학년 3반', grade: 5, joinCode: 'A3F7K2', isActive: true, createdAt: '2026-03-01',
    students: [
      { id: 's1', name: '정예은', level: 12, xp: 2840, accuracy: 94, streak: 14, masteredSkills: 18, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 680, trend: 'up' },
      { id: 's2', name: '최도윤', level: 11, xp: 2650, accuracy: 91, streak: 11, masteredSkills: 16, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 620, trend: 'up' },
      { id: 's3', name: '한서아', level: 10, xp: 2420, accuracy: 89, streak: 9, masteredSkills: 14, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 540, trend: 'flat' },
      { id: 's4', name: '윤지호', level: 9, xp: 2180, accuracy: 87, streak: 7, masteredSkills: 13, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 480, trend: 'up' },
      { id: 's5', name: '김하린', level: 9, xp: 2050, accuracy: 86, streak: 12, masteredSkills: 12, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 450, trend: 'flat' },
      { id: 's6', name: '이수민', level: 8, xp: 1920, accuracy: 83, streak: 5, masteredSkills: 11, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 410, trend: 'up' },
      { id: 's7', name: '박지민', level: 8, xp: 1850, accuracy: 81, streak: 3, masteredSkills: 10, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 380, trend: 'flat' },
      { id: 's8', name: '김서준', level: 7, xp: 1680, accuracy: 79, streak: 2, masteredSkills: 9, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 320, trend: 'down' },
      { id: 's9', name: '이하은', level: 7, xp: 1540, accuracy: 77, streak: 4, masteredSkills: 8, totalSkills: 30, lastActive: '어제', status: 'idle', weeklyXp: 280, trend: 'flat' },
      { id: 's10', name: '장민서', level: 6, xp: 1320, accuracy: 74, streak: 0, masteredSkills: 7, totalSkills: 30, lastActive: '어제', status: 'idle', weeklyXp: 240, trend: 'down' },
      { id: 's11', name: '김민수', level: 5, xp: 980, accuracy: 62, streak: 0, masteredSkills: 4, totalSkills: 30, lastActive: '3일 전', status: 'at_risk', weeklyXp: 80, trend: 'down' },
      { id: 's12', name: '박서연', level: 4, xp: 720, accuracy: 48, streak: 0, masteredSkills: 2, totalSkills: 30, lastActive: '오늘', status: 'at_risk', weeklyXp: 120, trend: 'down' },
    ],
  },
  {
    id: '2', name: '5학년 4반', grade: 5, joinCode: 'B8X2M9', isActive: true, createdAt: '2026-03-01',
    students: [
      { id: 's13', name: '오지원', level: 10, xp: 2380, accuracy: 90, streak: 8, masteredSkills: 15, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 520, trend: 'up' },
      { id: 's14', name: '신유진', level: 9, xp: 2100, accuracy: 85, streak: 6, masteredSkills: 12, totalSkills: 30, lastActive: '오늘', status: 'active', weeklyXp: 460, trend: 'flat' },
      { id: 's15', name: '황태영', level: 8, xp: 1900, accuracy: 82, streak: 4, masteredSkills: 11, totalSkills: 30, lastActive: '어제', status: 'idle', weeklyXp: 380, trend: 'flat' },
      { id: 's16', name: '송민아', level: 7, xp: 1600, accuracy: 76, streak: 0, masteredSkills: 8, totalSkills: 30, lastActive: '2일 전', status: 'idle', weeklyXp: 200, trend: 'down' },
      { id: 's17', name: '임재현', level: 5, xp: 1050, accuracy: 58, streak: 0, masteredSkills: 3, totalSkills: 30, lastActive: '4일 전', status: 'at_risk', weeklyXp: 60, trend: 'down' },
    ],
  },
];

const STATUS_CONFIG = {
  active: { label: '활동 중', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', dot: 'bg-green-500' },
  idle: { label: '미활동', color: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400', dot: 'bg-gray-400' },
  at_risk: { label: '주의', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', dot: 'bg-red-500' },
};

export default function ClassroomsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedClass, setExpandedClass] = useState<string | null>(classrooms[0]?.id ?? null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  function copyCode(code: string, id: string) {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success('참여 코드가 복사되었습니다.');
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">학급 관리</h1>
          <p className="text-muted-foreground mt-1">학급을 만들고 학생 현황을 관리하세요</p>
        </div>
        <Dialog>
          <DialogTrigger className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-medium gap-1.5 h-10 px-4 shadow-sm hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" /> 학급 만들기
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>새 학급 만들기</DialogTitle>
            </DialogHeader>
            <form className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="class-name">학급 이름</Label>
                <Input id="class-name" placeholder="예: 5학년 3반" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label>학년 선택</Label>
                <div className="grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setSelectedGrade(g)}
                      className={cn(
                        'rounded-xl border-2 py-2.5 text-sm font-semibold transition-all',
                        selectedGrade === g
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-primary/40'
                      )}
                    >
                      {g}학년
                    </button>
                  ))}
                </div>
              </div>
              <Button type="button" className="w-full h-11" onClick={() => toast.success('학급이 생성되었습니다!')}>
                만들기
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Classroom Cards */}
      <div className="space-y-4">
        {classrooms.map((cls) => {
          const isExpanded = expandedClass === cls.id;
          const activeCount = cls.students.filter(s => s.status === 'active').length;
          const atRiskCount = cls.students.filter(s => s.status === 'at_risk').length;
          const avgAccuracy = Math.round(cls.students.reduce((s, st) => s + st.accuracy, 0) / cls.students.length);
          const avgXp = Math.round(cls.students.reduce((s, st) => s + st.xp, 0) / cls.students.length);
          const activityRate = Math.round((activeCount / cls.students.length) * 100);

          return (
            <Card key={cls.id} className="shadow-sm overflow-hidden">
              {/* Header */}
              <div
                className="flex items-center gap-4 p-5 cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => setExpandedClass(isExpanded ? null : cls.id)}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm">
                  <Users className="h-6 w-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-lg">{cls.name}</p>
                    {atRiskCount > 0 && (
                      <Badge variant="destructive" className="text-[10px] h-5">
                        {atRiskCount}명 주의
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {cls.students.length}명</span>
                    <span className="flex items-center gap-1"><UserCheck className="h-3 w-3" /> {activeCount}명 활동</span>
                    <span className="flex items-center gap-1"><Target className="h-3 w-3" /> {avgAccuracy}%</span>
                  </div>
                </div>

                {/* Join code */}
                <div className="hidden sm:flex items-center gap-2">
                  <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/30 dark:to-violet-900/30 border border-indigo-200 dark:border-indigo-800 px-4 py-2">
                    <p className="text-[10px] text-muted-foreground mb-0.5">참여 코드</p>
                    <p className="text-lg font-mono font-black tracking-wider text-indigo-700 dark:text-indigo-300">
                      {cls.joinCode}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); copyCode(cls.joinCode, cls.id); }}>
                    {copiedId === cls.id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>

                {isExpanded ? <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />}
              </div>

              {/* Mobile join code */}
              <div className="sm:hidden px-5 pb-3">
                <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/30 dark:to-violet-900/30 border border-indigo-200 dark:border-indigo-800 px-3 py-2">
                  <div>
                    <p className="text-[10px] text-muted-foreground">참여 코드</p>
                    <p className="text-base font-mono font-black tracking-wider text-indigo-700 dark:text-indigo-300">{cls.joinCode}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto" onClick={() => copyCode(cls.joinCode, cls.id)}>
                    {copiedId === cls.id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Expanded: Stats + Student List */}
              {isExpanded && (
                <div className="border-t">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-4 gap-3 p-5 bg-muted/20">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{activityRate}%</p>
                      <p className="text-[10px] text-muted-foreground">활동률</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{avgAccuracy}%</p>
                      <p className="text-[10px] text-muted-foreground">평균 정답률</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-indigo-600">{avgXp.toLocaleString()}</p>
                      <p className="text-[10px] text-muted-foreground">평균 XP</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-500">{atRiskCount}</p>
                      <p className="text-[10px] text-muted-foreground">주의 필요</p>
                    </div>
                  </div>

                  {/* Student List */}
                  <div className="p-5 pt-3">
                    <p className="text-sm font-semibold mb-3">학생 목록</p>
                    <div className="space-y-2">
                      {cls.students
                        .sort((a, b) => b.xp - a.xp)
                        .map((student, i) => {
                          const statusCfg = STATUS_CONFIG[student.status];
                          return (
                            <div
                              key={student.id}
                              className={cn(
                                'flex items-center gap-3 rounded-xl border p-3 transition-colors hover:bg-muted/30',
                                student.status === 'at_risk' && 'border-red-200 bg-red-50/30 dark:bg-red-950/10',
                              )}
                            >
                              {/* Rank */}
                              <div className={cn(
                                'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                                i === 0 ? 'bg-yellow-100 text-yellow-700' :
                                i === 1 ? 'bg-gray-100 text-gray-600' :
                                i === 2 ? 'bg-orange-100 text-orange-700' :
                                'bg-muted text-muted-foreground'
                              )}>
                                {i + 1}
                              </div>

                              {/* Avatar */}
                              <div className={cn(
                                'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white text-sm font-bold',
                                student.status === 'active' ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                                student.status === 'at_risk' ? 'bg-gradient-to-br from-red-400 to-rose-600' :
                                'bg-gradient-to-br from-gray-300 to-gray-500',
                              )}>
                                {student.name.charAt(0)}
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <p className="text-sm font-semibold">{student.name}</p>
                                  <Badge className={cn('text-[9px] h-4 px-1.5', statusCfg.color)}>
                                    {statusCfg.label}
                                  </Badge>
                                  {student.trend === 'up' && <TrendingUp className="h-3 w-3 text-green-500" />}
                                  {student.trend === 'down' && <TrendingDown className="h-3 w-3 text-red-500" />}
                                </div>
                                <div className="flex items-center gap-3 mt-0.5 text-[10px] text-muted-foreground">
                                  <span>Lv.{student.level}</span>
                                  <span className="flex items-center gap-0.5"><Target className="h-2.5 w-2.5" /> {student.accuracy}%</span>
                                  <span className="flex items-center gap-0.5"><Flame className="h-2.5 w-2.5" /> {student.streak}일</span>
                                  <span className="flex items-center gap-0.5"><Clock className="h-2.5 w-2.5" /> {student.lastActive}</span>
                                </div>
                              </div>

                              {/* Mastery progress */}
                              <div className="hidden sm:block w-24 shrink-0">
                                <div className="flex justify-between text-[10px] mb-0.5">
                                  <span className="text-muted-foreground">마스터리</span>
                                  <span className="font-medium">{student.masteredSkills}/{student.totalSkills}</span>
                                </div>
                                <Progress value={(student.masteredSkills / student.totalSkills) * 100} className="h-1.5" />
                              </div>

                              {/* XP */}
                              <div className="text-right shrink-0">
                                <p className="text-sm font-bold text-primary">{student.xp.toLocaleString()}</p>
                                <p className="text-[10px] text-muted-foreground">XP</p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
