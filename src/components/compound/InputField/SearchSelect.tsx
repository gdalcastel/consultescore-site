'use client';

import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import {
  type FieldError,
  type Merge,
  type FieldErrorsImpl,
  type UseFormRegisterReturn,
  type UseFormSetValue,
  type FieldValues,
  type UseFormWatch,
  type UseFormSetFocus,
  type UseFormTrigger
} from 'react-hook-form';

import UseCloseSelect from '../../../hooks/useCloseSelect';

import SearchIcon from '@/styles/icons/refactor/searchIcon';
import { twMergeConfig } from '@/lib/tw-merge-config';

interface SearchSelectProps {
  list: string[];
  className?: string;
  placeholder: string;
  widthRoot?: string;
  value?: string | undefined;
  optionsClassNameRoot?: string;
  optionsIconRight?: string;
  optionsIconLeft?: string;
  register?: UseFormRegisterReturn;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  nameField: string;
  disable?: boolean;
  setValue: UseFormSetValue<FieldValues>;
  setFocus: UseFormSetFocus<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  trigger?: UseFormTrigger<FieldValues>;
}

export default function SearchSelect({
  list,
  value,
  className,
  optionsClassNameRoot,
  widthRoot,
  placeholder,
  register,
  optionsIconLeft,
  optionsIconRight,
  error,
  nameField,
  disable = false,
  setValue,
  setFocus,
  watch,
  trigger
}: SearchSelectProps) {
  const [openOrClose, setOpenOrClose] = useState<boolean>(false);
  const [searchHasOptions, setSearchHasOptions] = useState<string[] | undefined>();

  function closeSelect() {
    autoValidade();
    setOpenOrClose(false); // Fecha o seletor
  }

  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const { selectRef } = UseCloseSelect(closeSelect);
  const currentValue = watch(nameField);
  const currentValueLowerCase = currentValue?.toLocaleLowerCase();

  const autoValidade = async () => {
    if (trigger) {
      await trigger(nameField); // Trigger validação para o campo 'email'
    }
  };

  useEffect(() => {
    const haveOption = list?.filter((option) => {
      const optionLowerCase = option?.toLocaleLowerCase();
      return optionLowerCase?.includes(currentValueLowerCase);
    });
    if (currentValue && haveOption.length === 0) {
      setSearchHasOptions(['Nenhum resultado']);
      return;
    }
    setSearchHasOptions(currentValue ? haveOption : list);
  }, [currentValueLowerCase]);

  return (
    <div
      ref={selectRef}
      className={twMergeConfig('relative w-full', widthRoot)}
    >
      <div className="relative flex w-full">
        <input
          disabled={disable}
          autoComplete="off"
          className={twMergeConfig(
            // eslint-disable-next-line prettier/prettier
            `relative z-40 flex w-full items-center justify-between py-2 rounded-[.625rem] h-[2.5rem] font-normal px-4
          font-montserrat text-body-default text-primary-body placeholder:font-montserrat placeholder:text-body-default placeholder:font-normal placeholder:text-primary-dark-grey
          ${openOrClose ? 'rounded-b-[0rem] rounded-t-[.6250rem] border-none outline outline-4 outline-primary-lavender rounded-[.625rem]' : 'focus:border-none focus:outline focus:outline-4 focus:outline-primary-lavender rounded-[.625rem]'}
          ${!openOrClose && error && 'border-[2px] border-notification-red'} 
          ${!openOrClose && !error && 'border-[1px] border-primary-medium-grey'}`,
            className
          )}
          onClick={() => {
            setOpenOrClose((prevState) => !prevState);
          }}
          placeholder={placeholder}
          value={value}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              setOpenOrClose((prevState) => !prevState);
              return;
            }
            if (e.key === 'Tab' || e.key === 'Shift') {
              return;
            }
            setOpenOrClose(true);
          }}
          {...register}
        />
        <button
          type="button"
          disabled={disable}
          tabIndex={-1}
          className="bg-primary-white absolute right-0 z-50 m-[2px] flex h-[2.2rem] w-[2.6rem] items-center justify-end rounded-r-[.6rem] pr-4"
          onClick={() => {
            setOpenOrClose((prevState) => !prevState);
            setTimeout(() => {
              setFocus(nameField);
            }, 0);
          }}
        >
          <SearchIcon fill="var(--va-color-primary-body)" />
        </button>
      </div>

      <div
        // eslint-disable-next-line prettier/prettier
        className={`absolute bg-primary-white z-[60] h-auto w-full flex-col flex translate-y-[-7px] transform rounded-b-[.650rem] -ml-1
          ${openOrClose ? 'flex border-x-[4px] border-b-[4px] border-primary-lavender' : 'hidden'} box-content`}
      >
        <div className="fixed flex h-auto w-full pb-1 pl-3 pr-10">
          <hr className="bg-primary-semi-light-grey flex h-px w-full" />
        </div>
        <div className="scrollLight mb-1 mt-2 flex h-auto max-h-[10rem] w-full flex-col overflow-y-scroll">
          {(currentValue?.length > 0 ? searchHasOptions : list)?.map(
            (option: string, index: number) => {
              return (
                <button
                  key={index}
                  type="button"
                  id="option"
                  ref={(el) => (buttonRefs.current[index] = el)}
                  className={twMergeConfig(
                    // eslint-disable-next-line prettier/prettier
                    `relative flex h-auto w-full gap-3 gap-x-[1rem] self-start border-none pl-4 pr-1 py-[.4rem]         
                      focus:text-primary-body focus:font-medium font-normal text-primary-medium-grey hover:text-primary-body hover:font-medium
                      ${Number(list?.length) - 1 === index ? 'rounded-b-[.650rem]' : 'rounded-b-0'}`,
                    optionsClassNameRoot
                  )}
                  onMouseDown={() => {
                    if (option !== 'Nenhum resultado') {
                      setValue(nameField, option);
                    }
                    setTimeout(() => {
                      setFocus(nameField);
                    }, 0);
                    closeSelect();
                  }}
                  onKeyDown={(e) => {
                    // const totalItemsList = list.length;
                    if (
                      e.key === 'ArrowUp' ||
                      e.key === 'ArrowDown' ||
                      e.key === 'ArrowLeft' ||
                      e.key === 'ArrowRight'
                    ) {
                      const currentIndex = buttonRefs.current.findIndex(
                        (el) => el === e.currentTarget
                      );

                      // Desloca para o próximo ou anterior com base na seta pressionada
                      const isUpOrLeft = e.key === 'ArrowUp' || e.key === 'ArrowLeft';
                      const nextIndex = isUpOrLeft ? currentIndex - 1 : currentIndex + 1;

                      // Verificar se o próximo item existe e focá-lo
                      if (nextIndex >= 0 && nextIndex < list.length) {
                        const nextItem = buttonRefs.current[nextIndex];

                        // Verifica se o próximo item está fora da área visível
                        const nextItemRect: any = nextItem?.getBoundingClientRect();
                        const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();

                        // Scrolla se o próximo item estiver fora da área visível
                        if (
                          parentRect &&
                          (nextItemRect.bottom > parentRect.bottom ||
                            nextItemRect.top < parentRect.top)
                        ) {
                          nextItem?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }

                        // Focar no próximo item
                        nextItem?.focus();
                      }

                      e.preventDefault(); // Impede o comportamento padrão de scroll
                      return;
                    }

                    // if (e.key === 'Tab' && e.shiftKey === true) {
                    //   if (index === 0) return;
                    //   return;
                    // }

                    // if (e.key === 'Tab' && e.shiftKey === false) {
                    //   if (totalItemsList - 1 === index) {
                    //     closeSelect();
                    //   }
                    //   if (totalItemsList - 2 < index) return;
                    // }

                    if (e.key === 'Enter') {
                      if (option !== 'Nenhum resultado') {
                        setValue(nameField, option);
                      }
                      setTimeout(() => {
                        setFocus(nameField);
                      }, 0);
                      closeSelect();
                      return;
                    }

                    if (e.key === 'Tab') {
                      closeSelect();
                      return;
                    }
                    if (e.key === 'Escape') {
                      closeSelect();
                    }
                  }}
                >
                  {optionsIconLeft}
                  <p className={'font-montserrat text-body-s'}>{option}</p>
                  {optionsIconRight}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
