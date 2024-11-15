'use client';
import { AnchorHTMLAttributes, type ReactNode } from 'react';

import { type VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'font-poppins max-w-[18.75rem] text-center flex cursor-pointer w-full shrink-0 items-center justify-center gap-2 rounded-xl transition-transform duration-200 will-change-transform will-change-brightness active:transform active:brightness-90',
  variants: {
    size: {
      sm: 'text-xs font-medium h-[2.5rem] px-[.625rem]',
      md: 'text-sm font-medium h-[2.813rem] px-6'
    },
    colorButton: {
      yellow: 'bg-[#FFCF52] text-black',
      purple: 'bg-[#A69FEC] text-white',
      blue: 'bg-[#0E67C2] text-white'
    }
  },
  defaultVariants: {
    size: 'sm',
    colorButton: 'yellow'
  }
});

type ButtonVariants = VariantProps<typeof button>;

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonVariants {
  className?: string;
  text: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  isLoading?: boolean;
}

export default function AnchorButton({
  className,
  iconLeft,
  iconRight,
  text,
  size,
  colorButton,
  ...rest
}: AnchorButtonProps) {
  return (
    <a
      className={button({ size, colorButton, className })}
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {iconLeft}
      {text}
      {iconRight}
    </a>
  );
}
