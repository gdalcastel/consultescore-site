'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { type FieldError, type FieldErrorsImpl, type Merge } from 'react-hook-form';

import { twMergeConfig } from '@/lib/tw-merge-config';

interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string; // Usaremos o valor que o Controller vai passar
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função que o Controller vai passar para controle
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  field?: boolean;
}

// Usar forwardRef para o React Hook Form poder gerenciar o ref
export const InputData = forwardRef<HTMLInputElement, LabelProps>(
  ({ className, error, field, value, onChange, ...rest }, ref) => {
    return (
      <input
        ref={ref} // Aplique o ref aqui
        className={twMergeConfig(
          `placeholder:text-pr font-montserrat text-body-default text-primary-body placeholder:font-montserrat placeholder:text-body-default placeholder:text-primary-dark-grey focus:outline-primary-lavender flex h-[2.5rem] w-full max-w-[25rem] rounded-[.625rem] px-4 placeholder:font-normal focus:border-none focus:outline focus:outline-4 ${error ? 'border-notification-red border-[2px]' : !field ? 'border-primary-medium-grey border-[1px]' : ''}`,
          className
        )}
        autoComplete="off"
        value={value} // O valor que o Controller irá controlar
        onChange={onChange} // Função de onChange que o Controller irá controlar
        {...rest} // Outras props do input
      />
    );
  }
);

// Definindo o nome do componente para debug
InputData.displayName = 'InputData';
