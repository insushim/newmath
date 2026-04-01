'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Plus, Users, Copy, Check, ChevronDown, ChevronUp,
  Flame, Target, Clock, Star, Sparkles, BookOpen, Inbox,
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Student {
  id: string;
  display_name: string;
  grade: number;
  total_xp: number;
  current_streak: number;
  level: number;
  updated_at: string;
}

export default function ClassroomsPage() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [className, setClassName] = useState('');

  // Fetch real students from API
  useEffect(() => {
    fetch('/api/teacher/stats')
      .then(r => r.json())
      .then(data => setStudents(data.students ?? []))
      .catch(() => setStudents([]))
      .finally(() => setLoading(false));
  }, []);

  // Generate a simple join code (in production, this would be stored in DB)
  const joinCode = 'MV' + Math.random().toString(36).substring(2, 6).toUpperCase();

  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    toast.success('참여 코드가 복사되었습니다.');
    setTimeout(() => setCopiedCode(false), 2000);
  }

  function timeAgo(dateStr: string): string {
    if (!dateStr) return '-';
    const diff = Date.now() - new Date(dateStr).getTime();
    const min = Math.floor(diff / 60000);
    if (min < 1) return '방금 전';
    if (min < 60) return `${min}분 전`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}시간 전`;
    const day = Math.floor(hr / 24);
    return `${day}일 전`;
  }

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">학급 관리</h1>
          <p className="text-muted-foreground mt-1">학생 현황을 확인하고 관리하세요</p>
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
                <Input
                  id="class-name"
                  placeholder="예: 5학년 3반"
                  className="h-11"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
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
                          : 'border-border hover:border-primary/40',
                      )}
                    >
                      {g}학년
                    </button>
                  ))}
                </div>
              </div>
              <Button type="button" className="w-full h-11" onClick={() => toast.success('학급 기능은 곧 제공됩니다! (DB 테이블 준비 중)')}>
                만들기
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Students Overview */}
      <Card className="shadow-sm">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-lg">전체 학생</p>
                <p className="text-xs text-muted-foreground">{students.length}명 등록됨</p>
              </div>
            </div>
          </div>

          {students.length > 0 ? (
            <div className="space-y-2">
              {students.map((student, i) => (
                <div
                  key={student.id}
                  className="flex items-center gap-3 rounded-xl border p-3 transition-colors hover:bg-muted/30"
                >
                  {/* Rank */}
                  <div className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                    i === 0 ? 'bg-yellow-100 text-yellow-700' :
                    i === 1 ? 'bg-gray-100 text-gray-600' :
                    i === 2 ? 'bg-orange-100 text-orange-700' :
                    'bg-muted text-muted-foreground',
                  )}>
                    {i + 1}
                  </div>

                  {/* Avatar */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-white text-sm font-bold">
                    {student.display_name.charAt(0)}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{student.display_name}</p>
                    <div className="flex items-center gap-3 mt-0.5 text-[10px] text-muted-foreground">
                      <span>Lv.{student.level}</span>
                      <span>{student.grade}학년</span>
                      <span className="flex items-center gap-0.5"><Flame className="h-2.5 w-2.5" /> {student.current_streak}일</span>
                      <span className="flex items-center gap-0.5"><Clock className="h-2.5 w-2.5" /> {timeAgo(student.updated_at)}</span>
                    </div>
                  </div>

                  {/* XP */}
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-primary">{student.total_xp.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground">XP</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center py-12">
              <div className="rounded-2xl bg-muted/50 p-4 mb-4">
                <Inbox className="h-10 w-10 text-muted-foreground/40" />
              </div>
              <h3 className="text-base font-semibold mb-1">아직 학생이 없어요</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                학생이 매쓰버스에 가입하면 여기에 자동으로 표시됩니다.
                아래의 안내를 참고하세요.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* How to invite students */}
      <Card className="border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 to-transparent shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3 shrink-0">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-base">학생 초대 방법</h3>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold mt-0.5">1</span>
                  <span>학생에게 <strong className="text-foreground">mathverse.simssijjang.workers.dev</strong> 접속을 안내합니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold mt-0.5">2</span>
                  <span>학생이 <strong className="text-foreground">"학생"</strong> 역할로 회원가입합니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold mt-0.5">3</span>
                  <span>진단 테스트를 완료하면 자동으로 학년에 맞는 학습이 시작됩니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold mt-0.5">4</span>
                  <span>이 대시보드에서 학생들의 학습 현황을 실시간으로 확인할 수 있어요.</span>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
