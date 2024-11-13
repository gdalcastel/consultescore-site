import { type HTMLProps } from 'react';

import { twMerge } from 'tailwind-merge';

interface ErrorProps extends HTMLProps<HTMLParagraphElement> {
  text: any;
  className?: string;
}
export function Error({ text, className, ...rest }: ErrorProps) {
  return (
    <div
      className={twMerge(
        'mt-1 h-[1rem] self-end font-poppins text-[.625rem] font-medium text-red-500',
        className
      )}
      {...rest}
    >
      {text}
    </div>
  );
}
