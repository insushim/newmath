'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Users, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

const mockClassrooms = [
  { id: '1', name: '5학년 3반', grade: 5, joinCode: 'A3F7K2', students: 28, isActive: true },
  { id: '2', name: '5학년 4반', grade: 5, joinCode: 'B8X2M9', students: 30, isActive: true },
];

export default function ClassroomsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  function copyCode(code: string, id: string) {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success('참여 코드가 복사되었습니다.');
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">학급 관리</h1>
          <p className="text-muted-foreground">학급을 만들고 학생을 관리하세요</p>
        </div>
        <Dialog>
          <DialogTrigger className="inline-flex shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-medium gap-1 h-8 px-2.5">
            <Plus className="h-4 w-4" /> 학급 만들기
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>새 학급 만들기</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="class-name">학급 이름</Label>
                <Input id="class-name" placeholder="예: 5학년 3반" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="class-grade">학년</Label>
                <div className="grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((g) => (
                    <button
                      key={g}
                      type="button"
                      className="rounded-lg border border-border py-2 text-sm font-medium hover:bg-muted"
                    >
                      {g}학년
                    </button>
                  ))}
                </div>
              </div>
              <Button type="button" className="w-full" onClick={() => toast.success('학급이 생성되었습니다!')}>
                만들기
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-3">
        {mockClassrooms.map((cls) => (
          <Card key={cls.id}>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold">{cls.name}</p>
                <p className="text-sm text-muted-foreground">{cls.students}명</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-muted px-3 py-1.5 text-sm font-mono font-bold">
                  {cls.joinCode}
                </div>
                <Button variant="ghost" size="icon" onClick={() => copyCode(cls.joinCode, cls.id)}>
                  {copiedId === cls.id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
