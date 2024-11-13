import { type InputHTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

interface PropsCheck extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Check({ className, ...rest }: PropsCheck) {
  return (
    <input
      type="checkbox"
      className={twMerge(
        'accent-primary-dark-blue focus:outline-primary-lavender h-4 w-4',
        className
      )}
      {...rest}
    />
  );
}
