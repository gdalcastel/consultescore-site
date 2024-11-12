'use client';
import { type InputHTMLAttributes } from 'react';
import {
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  type UseFormRegisterReturn
} from 'react-hook-form';
import InputMask from 'react-input-mask';

import { twMergeConfig } from '@/lib/tw-merge-config';

interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  id: string;
  mask: string;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  field?: boolean;
}
export function InputDataMask({ className, register, field, mask, error, ...rest }: LabelProps) {
  return (
    <InputMask
      alwaysShowMask={false}
      mask={mask}
      autoComplete="off"
      className={twMergeConfig(
        // eslint-disable-next-line prettier/prettier
        `font-montserrat text-primary-body placeholder:font-montserrat placeholder:text-pr placeholder:text-primary-dark-grey
        focus:outline-primary-lavender flex h-[2.5rem] w-full max-w-[25rem] rounded-[.625rem] px-2 text-body-default placeholder:text-body-default
        placeholder:font-normal focus:outline focus:outline-4 md:rounded-[.4rem]
        ${error && 'border-[2px] border-notification-red'} 
        ${!field && !error && 'border-[1px] border-primary-medium-grey'}`,
        className
      )}
      {...register}
      {...rest}
    />
  );
}
