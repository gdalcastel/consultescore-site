'use client';

import { type Dispatch, type SetStateAction, useRef, useState, forwardRef } from 'react';
import { type FieldError, type Merge, type FieldErrorsImpl } from 'react-hook-form';

import UseCloseSelect from '../../../hooks/useCloseSelect';

import { twMergeConfig } from '@/lib/tw-merge-config';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SelectProps {
  list: string[];
  className?: string;
  placeholder: string;
  widthRoot?: string;
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  optionsClassNameRoot?: string;
  optionsIconRight?: string;
  optionsIconLeft?: string;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  maxHeightOptions?: string;
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      list,
      value,
      setValue,
      className,
      optionsClassNameRoot,
      widthRoot,
      placeholder,
      optionsIconLeft,
      optionsIconRight,
      error,
      maxHeightOptions
    },
    ref
  ) => {
    const [openOrClose, setOpenOrClose] = useState<boolean>(false);

    function closeSelect() {
      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.focus();
      }
      setOpenOrClose(false);
    }

    const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const openButtonRef = useRef<HTMLButtonElement | null>(null);

    const { selectRef } = UseCloseSelect(closeSelect);

    return (
      <div
        ref={selectRef}
        className={twMergeConfig('relative w-full', widthRoot)}
      >
        <button
          type="button"
          ref={ref as any}
          className={twMergeConfig(
            `relative z-40 flex h-[2.5rem] w-full cursor-pointer items-center justify-between rounded-[.625rem] px-4 py-2 ${openOrClose ? 'outline-primary-lavender rounded-[.625rem] rounded-b-[0rem] rounded-t-[.6250rem] border-none outline outline-4' : 'focus:outline-primary-lavender rounded-[.625rem] focus:border-none focus:outline focus:outline-4'} ${!openOrClose && error && 'border-notification-red border-[2px]'} ${!openOrClose && !error && 'border-primary-medium-grey border-[1px]'}`,
            className
          )}
          onMouseDown={() => {
            setOpenOrClose((prevState) => !prevState);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              setOpenOrClose((prevState) => !prevState);
              setTimeout(() => {
                buttonRefs.current[0]?.focus();
              }, 100);
            }
          }}
        >
          <p
            className={`font-montserrat text-body-default font-normal ${value ? 'text-primary-body' : 'text-primary-dark-grey'}`}
          >
            {value || placeholder}
          </p>
          <ChevronUp className={`${openOrClose ? 'block' : 'hidden'} text-primary-body`} />
          <ChevronDown className={`${openOrClose ? 'hidden' : 'block'} text-primary-body`} />
        </button>
        <div
          className={`bg-primary-white absolute z-[60] -ml-1 flex h-auto w-full translate-y-[-7px] transform flex-col rounded-b-[.650rem] ${openOrClose ? 'border-primary-lavender flex border-x-[4px] border-b-[4px]' : 'hidden'} box-content`}
        >
          <div className="flex h-auto w-full pb-1 pl-3 pr-10">
            <hr className="bg-primary-semi-light-grey flex h-px w-full" />
          </div>
          <div
            className={twMergeConfig(
              'scrollLight mb-1 flex h-auto max-h-[10rem] w-full flex-col overflow-y-scroll',
              maxHeightOptions
            )}
          >
            {list.map((option: string, index: number) => {
              return (
                <button
                  key={index}
                  type="button"
                  id="option"
                  ref={(el) => (buttonRefs.current[index] = el)}
                  className={twMergeConfig(
                    `text-primary-medium-grey hover:text-primary-body focus:text-primary-body relative flex h-auto w-full gap-3 gap-x-[1rem] self-start border-none py-[.4rem] pl-4 pr-1 font-normal hover:font-medium focus:font-medium ${Number(list?.length) - 1 === index ? 'rounded-b-[.650rem]' : 'rounded-b-0'}`,
                    optionsClassNameRoot
                  )}
                  onClick={() => {
                    setValue(option);
                    closeSelect();
                  }}
                  onKeyDown={(e) => {
                    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                      const currentIndex = buttonRefs.current.findIndex(
                        (el) => el === e.currentTarget
                      );
                      const isUpOrLeft = e.key === 'ArrowUp' || e.key === 'ArrowLeft';
                      const nextIndex = isUpOrLeft ? currentIndex - 1 : currentIndex + 1;

                      if (nextIndex >= 0 && nextIndex < list.length) {
                        const nextItem = buttonRefs.current[nextIndex];
                        const nextItemRect: any = nextItem?.getBoundingClientRect();
                        const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();

                        if (
                          parentRect &&
                          (nextItemRect.bottom > parentRect.bottom ||
                            nextItemRect.top < parentRect.top)
                        ) {
                          nextItem?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                        nextItem?.focus();
                      }

                      e.preventDefault();
                      return;
                    }

                    if (e.key === 'Enter') {
                      setValue(option);
                      closeSelect();
                      return;
                    }

                    if (e.key === 'Tab' || e.key === 'Escape') {
                      closeSelect();
                    }
                  }}
                >
                  {optionsIconLeft}
                  <p className={'font-montserrat text-body-s'}>{option}</p>
                  {optionsIconRight}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
