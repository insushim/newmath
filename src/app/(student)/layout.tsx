'use client';

import { StudentLayout } from '@/components/layout/student-layout';
import { StudentHeader } from '@/components/layout/student-header';

export default function StudentRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StudentLayout>
      <StudentHeader />
      {children}
    </StudentLayout>
  );
}
