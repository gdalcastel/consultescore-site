'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import {
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  type UseFormRegisterReturn
} from 'react-hook-form';

import { twMerge } from 'tailwind-merge';

interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  register?: UseFormRegisterReturn;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  field?: boolean;
}

// Use forwardRef para permitir que o React Hook Form gerencie o ref
export const InputData = forwardRef<HTMLInputElement, LabelProps>(
  ({ className, register, error, field, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          // eslint-disable-next-line prettier/prettier
          `placeholder:text-[#949494] flex h-[2.5rem] w-full max-w-[25rem] rounded-[.625rem] px-4
          font-poppins text-sm text-black placeholder:font-poppins placeholder:text-sm placeholder:font-normal
          focus:outline focus:outline-2 focus:outline-[#0E67C2] focus:border-none
          ${error ? 'border-[2px] border-red-500' : !field ? 'border-[1px] border-[#C1C1C1]' : ''}
          `,
          className
        )}
        autoComplete="off"
        {...register}
        {...rest}
      />
    );
  }
);

// Adicione uma displayName para depuração
InputData.displayName = 'InputData';
