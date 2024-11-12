import { type ReactNode } from 'react';

import { twMergeConfig } from '@/lib/tw-merge-config';

interface RootProps {
  className?: string;
  children: ReactNode;
}

export default function Root({ className, children }: RootProps) {
  return (
    <div className={twMergeConfig('relative flex h-auto w-full flex-col', className)}>
      {children}
    </div>
  );
}
