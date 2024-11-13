import { type ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface RootProps {
  className?: string;
  children: ReactNode;
}

export default function Root({ className, children }: RootProps) {
  return (
    <div className={twMerge('relative flex h-auto w-full flex-col', className)}>{children}</div>
  );
}
