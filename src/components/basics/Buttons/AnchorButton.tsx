'use client';
import { AnchorHTMLAttributes, type ReactNode } from 'react';

import { type VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'font-poppins flex cursor-pointer w-full shrink-0 font-medium items-center justify-center gap-2 rounded-xl px-6 transition-transform duration-200 will-change-transform will-change-brightness active:transform active:brightness-90',
  variants: {
    size: {
      sm: 'text-sm max-w-[12.938rem] h-[2.5rem]',
      md: 'text-sm max-w-[18.75rem] h-[2.813rem]'
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
  isLoading,
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
      <span className={`${isLoading ? 'animate-pulse' : 'animate-none'}`}>{text}</span>
      {iconRight}
    </a>
  );
}
