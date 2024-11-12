import { type HTMLProps } from 'react';

import { twMergeConfig } from '@/lib/tw-merge-config';
import { twMerge } from 'tailwind-merge';

interface ErrorProps extends HTMLProps<HTMLParagraphElement> {
  text: any;
  className?: string;
}
export function Error({ text, className, ...rest }: ErrorProps) {
  return (
    <div
      className={twMergeConfig(
        'font-montserrat text-body-ss text-notification-red mt-1 h-[1rem] self-end font-semibold',
        className
      )}
      {...rest}
    >
      {text}
    </div>
  );
}
