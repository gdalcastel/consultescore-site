// 'use client';
// import { type InputHTMLAttributes } from 'react';
// import {
//   type FieldError,
//   type FieldErrorsImpl,
//   type Merge,
//   type UseFormRegisterReturn
// } from 'react-hook-form';
// import InputMask from 'react-input-mask';

// import { twMerge } from 'tailwind-merge';

// interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
//   className?: string;
//   placeholder: string;
//   type: string;
//   register: UseFormRegisterReturn;
//   id: string;
//   mask: string;
//   error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
//   field?: boolean;
// }
// export function InputDataMask({ className, register, field, mask, error, ...rest }: LabelProps) {
//   return (
//     <InputMask
//       alwaysShowMask={false}
//       mask={mask}
//       autoComplete="off"
//       className={twMerge(
//         // eslint-disable-next-line prettier/prettier
//         `placeholder:text-[#949494] flex h-[2.5rem] w-full max-w-[25rem] rounded-[.625rem] px-4
//           font-montserrat text-sm text-black placeholder:font-poppins placeholder:text-sm placeholder:font-normal
//           focus:outline focus:outline-2 focus:outline-[#0E67C2] focus:border-none
//         ${error && 'border-[2px] border-red-500'}
//         ${!field && !error && 'border-[1px] border-[#C1C1C1]'}`,
//         className
//       )}
//       {...register}
//     >
//       {(inputProps) => (
//         <input
//           {...inputProps}
//           {...rest} // Qualquer outra propriedade adicional
//         />
//       )}
//     </InputMask>
//   );
// }

'use client';
import { type InputHTMLAttributes, forwardRef } from 'react';
import {
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  type UseFormRegisterReturn
} from 'react-hook-form';
import InputMask from 'react-input-mask-next';

import { twMerge } from 'tailwind-merge';

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

// Use forwardRef para compatibilidade com React 18
export const InputDataMask = forwardRef<HTMLInputElement, LabelProps>(
  ({ className, register, field, mask, error, ...rest }, ref) => {
    return (
      <InputMask
        mask={mask}
        alwaysShowMask={false}
        autoComplete="off"
        {...register}
        {...rest}
        inputRef={ref} // Passar o ref aqui
        className={twMerge(
          `font-montserrat flex h-[2.5rem] w-full max-w-[25rem] rounded-[.625rem] px-4 text-sm text-black placeholder:font-poppins placeholder:text-sm placeholder:font-normal placeholder:text-[#949494] focus:border-none focus:outline focus:outline-2 focus:outline-[#0E67C2] ${
            error ? 'border-[2px] border-red-500' : !field ? 'border-[1px] border-[#C1C1C1]' : ''
          }`,
          className
        )}
      />
    );
  }
);

InputDataMask.displayName = 'InputDataMask';
