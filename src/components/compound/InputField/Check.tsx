import { type InputHTMLAttributes } from 'react';

import { twMergeConfig } from '@/lib/tw-merge-config';

interface PropsCheck extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Check({ className, ...rest }: PropsCheck) {
  return (
    <input
      type="checkbox"
      className={twMergeConfig(
        'accent-primary-dark-blue focus:outline-primary-lavender h-4 w-4',
        className
      )}
      {...rest}
    />
  );
}
