'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthLayout } from '@/components/layout/auth-layout';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { GraduationCap, Users, School } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { UserRole } from '@/types/database';

const roles: { value: UserRole; label: string; icon: typeof GraduationCap; description: string }[] = [
  { value: 'student', label: '학생', icon: GraduationCap, description: '수학을 배우고 싶어요' },
  { value: 'teacher', label: '교사', icon: School, description: '학생들을 관리해요' },
  { value: 'parent', label: '학부모', icon: Users, description: '자녀 학습을 확인해요' },
];

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<'role' | 'info'>('role');
  const [role, setRole] = useState<UserRole>('student');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState(3);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: displayName,
            role,
            grade: role === 'student' ? grade : null,
          },
        },
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success('회원가입 성공! 로그인해주세요.');
      router.push('/login');
    } catch {
      toast.error('회원가입 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">회원가입</CardTitle>
          <CardDescription>
            {step === 'role' ? '어떤 역할로 가입하시나요?' : '정보를 입력해주세요'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 'role' ? (
            <div className="space-y-3">
              {roles.map((r) => (
                <button
                  key={r.value}
                  onClick={() => { setRole(r.value); setStep('info'); }}
                  className={cn(
                    'flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-colors hover:border-primary/50',
                    role === r.value ? 'border-primary bg-primary/5' : 'border-border'
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <r.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.description}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름 (닉네임)</Label>
                <Input
                  id="name"
                  placeholder="이름을 입력하세요"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="6자리 이상"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              {role === 'student' && (
                <div className="space-y-2">
                  <Label htmlFor="grade">학년</Label>
                  <div className="grid grid-cols-6 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGrade(g)}
                        className={cn(
                          'rounded-lg border py-2 text-sm font-medium transition-colors',
                          grade === g ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:bg-muted'
                        )}
                      >
                        {g}학년
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? '가입 중...' : '회원가입'}
              </Button>
              <Button type="button" variant="ghost" className="w-full" onClick={() => setStep('role')}>
                역할 다시 선택
              </Button>
            </form>
          )}
          <div className="mt-4 text-center text-sm">
            <span className="text-muted-foreground">이미 계정이 있으신가요? </span>
            <Link href="/login" className="text-primary font-medium hover:underline">
              로그인
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
