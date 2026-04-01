'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Plus, Users, Copy, Check, ChevronDown, ChevronUp,
  Flame, Target, Clock, Sparkles, Inbox, Download,
  UserPlus, Eye, EyeOff, Printer,
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Student {
  id: string;
  display_name: string;
  email: string;
  grade: number;
  total_xp: number;
  current_streak: number;
  level: number;
  updated_at: string;
}

interface Classroom {
  id: string;
  name: string;
  grade: number;
  join_code: string;
  is_active: number;
  students: Student[];
}

interface CreatedStudent {
  name: string;
  loginId: string;
  password: string;
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return '-';
  const diff = Date.now() - new Date(dateStr).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return '방금 전';
  if (min < 60) return `${min}분 전`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}시간 전`;
  return `${Math.floor(hr / 24)}일 전`;
}

export default function ClassroomsPage() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedClass, setExpandedClass] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Create classroom dialog
  const [createOpen, setCreateOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newGrade, setNewGrade] = useState<number | null>(null);
  const [studentCount, setStudentCount] = useState(30);
  const [prefix, setPrefix] = useState('');
  const [creating, setCreating] = useState(false);

  // Result dialog
  const [resultOpen, setResultOpen] = useState(false);
  const [createdStudents, setCreatedStudents] = useState<CreatedStudent[]>([]);
  const [createdClassInfo, setCreatedClassInfo] = useState<{ name: string; joinCode: string } | null>(null);
  const [showPasswords, setShowPasswords] = useState(false);

  const fetchClassrooms = useCallback(() => {
    fetch('/api/teacher/classroom')
      .then(r => r.json())
      .then(data => {
        setClassrooms(data.classrooms ?? []);
        if (data.classrooms?.length > 0 && !expandedClass) {
          setExpandedClass(data.classrooms[0].id);
        }
      })
      .catch(() => setClassrooms([]))
      .finally(() => setLoading(false));
  }, [expandedClass]);

  useEffect(() => { fetchClassrooms(); }, [fetchClassrooms]);

  async function handleCreate() {
    if (!newName.trim() || !newGrade) {
      toast.error('학급 이름과 학년을 선택하세요.');
      return;
    }
    setCreating(true);
    try {
      const res = await fetch('/api/teacher/classroom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName.trim(), grade: newGrade, studentCount, prefix: prefix.trim() || undefined }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(`${newName} 학급이 생성되었습니다!`);
        setCreateOpen(false);
        setCreatedStudents(data.students ?? []);
        setCreatedClassInfo({ name: data.classroom.name, joinCode: data.classroom.joinCode });
        if (data.students?.length > 0) {
          setResultOpen(true);
        }
        setNewName('');
        setNewGrade(null);
        setStudentCount(30);
        setPrefix('');
        fetchClassrooms();
      } else {
        toast.error(data.error ?? '생성 실패');
      }
    } catch {
      toast.error('오류가 발생했습니다.');
    } finally {
      setCreating(false);
    }
  }

  function copyCode(code: string, id: string) {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success('참여 코드가 복사되었습니다.');
    setTimeout(() => setCopiedId(null), 2000);
  }

  function copyAllAccounts() {
    if (!createdClassInfo) return;
    const lines = [
      `[ ${createdClassInfo.name} ] 학생 계정 목록`,
      `접속 주소: mathverse.simssijjang.workers.dev`,
      '',
      '이름\t아이디(이메일)\t비밀번호',
      ...createdStudents.map(s => `${s.name}\t${s.loginId}\t${s.password}`),
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    toast.success('전체 계정 정보가 클립보드에 복사되었습니다.');
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">학급 관리</h1>
          <p className="text-muted-foreground mt-1">학급을 만들고 학생 계정을 관리하세요</p>
        </div>

        {/* Create Classroom Dialog */}
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-medium gap-1.5 h-10 px-4 shadow-sm hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" /> 학급 만들기
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>새 학급 만들기</DialogTitle>
            </DialogHeader>
            <div className="space-y-5 mt-2">
              <div className="space-y-2">
                <Label htmlFor="cls-name">학급 이름</Label>
                <Input
                  id="cls-name"
                  placeholder="예: 5학년 3반"
                  className="h-11"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>학년</Label>
                <div className="grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setNewGrade(g)}
                      className={cn(
                        'rounded-xl border-2 py-2.5 text-sm font-semibold transition-all',
                        newGrade === g ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-primary/40',
                      )}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prefix">아이디 접두어</Label>
                <Input
                  id="prefix"
                  placeholder="예: math5ban"
                  className="h-11"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  아이디: <strong>{(prefix || '접두어').toLowerCase()}01</strong>, <strong>{(prefix || '접두어').toLowerCase()}02</strong>, ... 형식으로 생성됩니다.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="student-count">학생 수 (일괄 계정 생성)</Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="student-count"
                    type="number"
                    min={0}
                    max={50}
                    className="h-11 w-24"
                    value={studentCount}
                    onChange={(e) => setStudentCount(Math.min(50, Math.max(0, Number(e.target.value))))}
                  />
                  <span className="text-sm text-muted-foreground">명 (최대 50명)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  0으로 설정하면 빈 학급만 생성됩니다. 학생 계정은 나중에도 추가할 수 있어요.
                </p>
              </div>

              <div className="rounded-xl bg-muted/50 p-3 text-xs text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">최소 개인정보 원칙</p>
                <p>학생 계정은 <strong>번호 기반 아이디 + 4자리 비밀번호</strong>로 자동 생성됩니다.</p>
                <p>실명, 전화번호, 이메일 등 개인정보를 수집하지 않습니다.</p>
                <p>생성 후 학생이 직접 이름(별명)을 변경할 수 있습니다.</p>
              </div>

              <Button onClick={handleCreate} disabled={creating} className="w-full h-11">
                {creating ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    생성 중...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    학급 + {studentCount}명 계정 생성
                  </span>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Created students result dialog */}
      <Dialog open={resultOpen} onOpenChange={setResultOpen}>
        <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              학생 계정 생성 완료!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3">
              <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                이 정보를 꼭 저장하세요!
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                비밀번호는 다시 확인할 수 없습니다. 복사하거나 인쇄해 두세요.
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={copyAllAccounts} className="gap-1.5">
                <Copy className="h-3.5 w-3.5" /> 전체 복사
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowPasswords(!showPasswords)} className="gap-1.5">
                {showPasswords ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                {showPasswords ? '비밀번호 숨기기' : '비밀번호 보기'}
              </Button>
            </div>

            <div className="rounded-xl border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="text-left px-3 py-2 font-medium text-xs">이름</th>
                    <th className="text-left px-3 py-2 font-medium text-xs">아이디(이메일)</th>
                    <th className="text-left px-3 py-2 font-medium text-xs">비밀번호</th>
                  </tr>
                </thead>
                <tbody>
                  {createdStudents.map((s, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-3 py-2 font-medium">{s.name}</td>
                      <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{s.loginId}</td>
                      <td className="px-3 py-2 font-mono text-xs">
                        {showPasswords ? s.password : '••••'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-muted/50 p-3 text-xs text-muted-foreground">
              <p><strong>접속 방법:</strong> mathverse.simssijjang.workers.dev → 로그인 → 아이디/비밀번호 입력</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Classroom list */}
      {classrooms.length === 0 ? (
        /* Empty state */
        <Card className="shadow-sm">
          <CardContent className="flex flex-col items-center text-center py-16">
            <div className="rounded-2xl bg-muted/50 p-5 mb-4">
              <Inbox className="h-12 w-12 text-muted-foreground/40" />
            </div>
            <h3 className="text-lg font-bold mb-2">아직 학급이 없어요</h3>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
              "학급 만들기"를 클릭하면 학급과 학생 계정을 한번에 생성할 수 있어요.
              학생 수만 입력하면 자동으로 아이디와 비밀번호가 만들어집니다.
            </p>
            <Button onClick={() => setCreateOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" /> 첫 학급 만들기
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {classrooms.map((cls) => {
            const isExpanded = expandedClass === cls.id;
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
                      <Badge variant="secondary" className="text-[10px]">{cls.grade}학년</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{cls.students.length}명</p>
                  </div>

                  {/* Join code */}
                  <div className="hidden sm:flex items-center gap-2" onClick={e => e.stopPropagation()}>
                    <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/30 dark:to-violet-900/30 border border-indigo-200 dark:border-indigo-800 px-4 py-2">
                      <p className="text-[10px] text-muted-foreground">참여 코드</p>
                      <p className="text-lg font-mono font-black tracking-wider text-indigo-700 dark:text-indigo-300">{cls.join_code}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => copyCode(cls.join_code, cls.id)}>
                      {copiedId === cls.id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>

                  {isExpanded ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                </div>

                {/* Expanded: Students */}
                {isExpanded && (
                  <div className="border-t">
                    {cls.students.length > 0 ? (
                      <div className="p-5 space-y-2">
                        <p className="text-sm font-semibold mb-3">학생 목록 ({cls.students.length}명)</p>
                        {[...cls.students].sort((a, b) => {
                          const numA = parseInt(a.display_name.match(/\d+/)?.[0] ?? '0');
                          const numB = parseInt(b.display_name.match(/\d+/)?.[0] ?? '0');
                          return numA - numB;
                        }).map((student, i) => (
                          <div key={student.id} className="flex items-center gap-3 rounded-xl border p-3 hover:bg-muted/30 transition-colors">
                            <div className={cn(
                              'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                              i === 0 ? 'bg-yellow-100 text-yellow-700' :
                              i === 1 ? 'bg-gray-100 text-gray-600' :
                              i === 2 ? 'bg-orange-100 text-orange-700' :
                              'bg-muted text-muted-foreground',
                            )}>
                              {i + 1}
                            </div>
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-white text-sm font-bold">
                              {student.display_name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold">{student.display_name}</p>
                              <div className="flex items-center gap-3 mt-0.5 text-[10px] text-muted-foreground">
                                <span>Lv.{student.level}</span>
                                <span className="flex items-center gap-0.5"><Flame className="h-2.5 w-2.5" /> {student.current_streak}일</span>
                                <span className="flex items-center gap-0.5"><Clock className="h-2.5 w-2.5" /> {timeAgo(student.updated_at)}</span>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-sm font-bold text-primary">{student.total_xp.toLocaleString()}</p>
                              <p className="text-[10px] text-muted-foreground">XP</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 text-center">
                        <p className="text-sm text-muted-foreground">아직 학생이 없습니다.</p>
                        <p className="text-xs text-muted-foreground mt-1">참여 코드를 학생에게 공유하세요.</p>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* How to guide */}
      <Card className="border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 to-transparent shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3 shrink-0">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-base">이용 안내</h3>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold mt-0.5">1</span>
                  <span><strong className="text-foreground">"학급 만들기"</strong>에서 학급 이름, 학년, 학생 수를 입력하세요.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold mt-0.5">2</span>
                  <span>학생 계정이 자동 생성됩니다. <strong className="text-foreground">아이디/비밀번호를 저장</strong>하세요.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold mt-0.5">3</span>
                  <span>학생에게 접속 주소와 계정을 나눠주면 바로 학습을 시작합니다.</span>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
