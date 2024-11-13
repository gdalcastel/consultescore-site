import { type LabelHTMLAttributes, type ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  className?: string;
  mandatory?: boolean;
  paragraph?: ReactNode;
}
export function Label({ text, className, mandatory = false, paragraph, ...rest }: LabelProps) {
  return (
    <label
      className={twMerge(
        'mb-[.5rem] flex gap-1 font-poppins text-sm font-medium text-black',
        className
      )}
      {...rest}
    >
      {paragraph}
      {text}
      <p className="font-poppins text-sm font-normal text-[#0E67C2]">{mandatory && '*'}</p>
    </label>
  );
}
