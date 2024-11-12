import { type LabelHTMLAttributes, type ReactNode } from 'react';

import { twMergeConfig } from '@/lib/tw-merge-config';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  className?: string;
  mandatory?: boolean;
  paragraph?: ReactNode;
}
export function Label({ text, className, mandatory = false, paragraph, ...rest }: LabelProps) {
  return (
    <label
      className={twMergeConfig(
        'font-montserrat text-body-default text-primary-body mb-[.5rem] flex gap-1 font-medium',
        className
      )}
      {...rest}
    >
      {paragraph}
      {text}
      <p className="text-primary-pink">{mandatory && '*'}</p>
    </label>
  );
}
