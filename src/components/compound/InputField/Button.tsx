import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { twMergeConfig } from '@/lib/tw-merge-config';

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}

export default function Button({
  className,
  iconLeft,
  iconRight,
  text,
  ...rest
}: ButtonDefaultProps) {
  return (
    <button
      className={twMergeConfig(
        // eslint-disable-next-line prettier/prettier
        `text-primary-body absolute right-0 mx-4 my-2 flex w-auto translate-y-8 cursor-pointer
        items-center justify-center rounded-full border-none bg-transparent text-[1.1rem]
        focus:outline-primary-lavender`,
        className
      )}
      {...rest}
    >
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
}
