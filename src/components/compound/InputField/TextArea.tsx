import { type TextareaHTMLAttributes } from 'react';
import {
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  type UseFormRegisterReturn
} from 'react-hook-form';

import { twMergeConfig } from '@/lib/tw-merge-config';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  register?: UseFormRegisterReturn;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  field?: boolean;
}

export default function TextArea({ className, register, error, field, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={twMergeConfig(
        // eslint-disable-next-line prettier/prettier
        `text-visiu-blue-150 placeholder:text-visiu-gray-100 flex w-full max-w-[25rem] resize-none
        rounded-[.625rem] border-[1px] border-[#C6C6C6] px-2 py-2 text-sm placeholder:text-sm
        placeholder:font-normal focus:outline-none
         ${error ? 'border-[2px] border-notification-red' : !field ? 'border-[1px] border-primary-medium-grey' : ''}
        `,
        className
      )}
      {...register}
      {...rest}
    />
  );
}
