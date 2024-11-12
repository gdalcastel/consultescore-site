'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import {
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  type UseFormRegisterReturn
} from 'react-hook-form';

import { twMergeConfig } from '@/lib/tw-merge-config';

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
        ref={ref} // Aplique o ref aqui
        className={twMergeConfig(
          // eslint-disable-next-line prettier/prettier
          `placeholder:text-pr flex h-[2.5rem] w-full max-w-[25rem] rounded-[.625rem] px-4
          font-montserrat text-body-default text-primary-body placeholder:font-montserrat
          placeholder:text-body-default placeholder:font-normal placeholder:text-primary-dark-grey
          focus:outline focus:outline-4 focus:outline-primary-lavender focus:border-none
          ${error ? 'border-[2px] border-notification-red' : !field ? 'border-[1px] border-primary-medium-grey' : ''}
          `,
          className
        )}
        autoComplete="off"
        {...register} // Mantenha o spread dos registros
        {...rest} // Mantenha o spread de outras propriedades
      />
    );
  }
);

// Adicione uma displayName para depuração
InputData.displayName = 'InputData';
