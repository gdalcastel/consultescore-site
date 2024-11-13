'use client';

import { forwardRef, useState, type SelectHTMLAttributes } from 'react';
import {
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  type UseFormRegisterReturn
} from 'react-hook-form';

import { ChevronDownIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  register?: UseFormRegisterReturn;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const SelectData = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, register, error, children, ...rest }, ref) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      if (e.target.value !== '') {
        setIsSelected(true); // Verifica se uma opção foi selecionada
      }
    };
    return (
      <div className="relative w-full max-w-[25rem]">
        <select
          ref={ref}
          onBlur={handleBlur}
          className={twMerge(
            // eslint-disable-next-line prettier/prettier
            `font-poppins flex h-[2.5rem] w-full cursor-pointer rounded-[.625rem] bg-white px-4 text-sm 
            focus:border-none focus:outline focus:outline-2 focus:outline-[#0E67C2]
            ${error ? 'border-[2px] border-red-500' : 'border-[1px] border-[#C1C1C1]'} appearance-none pr-8`,
            className
          )}
          required
          {...register}
          {...rest}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform">
          <ChevronDownIcon className="text-[#0E67C2]" />
        </span>
      </div>
    );
  }
);

SelectData.displayName = 'SelectData';
