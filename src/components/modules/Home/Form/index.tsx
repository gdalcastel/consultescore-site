'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import ButtonDefault from '@/components/basics/Buttons/ButtonDefault';
import { InputField } from '@/components/compound/InputField';
import { SelectData } from '@/components/compound/InputField/Select';
import { BusinessSchema, SchemaBusiness } from '@/hooks/forms/schemas/business';
import { UseReactHookForm } from '@/hooks/forms/useReactHookForm';
import BubbleForm from '@/style/icons/bubbleForm';

export function Form() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const { errors, handleSubmit, register, watch } = UseReactHookForm({
    schemaZodResolver: BusinessSchema
  });

  const tel = watch('tel');

  useEffect(() => {
    console.log('tel', tel);
  }, [tel]);

  async function handleSubmitForm(data: SchemaBusiness) {
    setIsPending(true);
    console.log(data);
    setTimeout(() => {
      setIsPending(false);
    }, 5000);
  }

  return (
    <div
      id="contato"
      className="flex w-full items-center justify-center bg-gradient-to-b from-[#F1F5F9] to-[#FFFFFF]"
    >
      <div className="mx-auto grid w-full grid-cols-[46.313rem,27rem] place-content-center items-center gap-x-14">
        <div className="flex w-full flex-col items-start gap-[2rem]">
          <div className="flex w-full max-w-[27.125rem] flex-col items-start gap-4">
            <p className="font-poppins text-[1.5rem] font-semibold text-black">
              Aproveite nossas soluções para expandir o seu negócio
            </p>
            <p className="font-poppins text-sm font-normal text-[#696969]">
              Preencha o formulário e receba o contato de nossos especialistas
            </p>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit((data: any) => handleSubmitForm(data))}
            className="grid w-full grid-cols-2 flex-col gap-6 py-6"
          >
            <div>
              <InputField.Root className="max-w-[25rem]">
                <InputField.Label
                  htmlFor="name"
                  text="Nome completo:"
                  mandatory
                />
                <InputField.InputData
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  register={register('name')}
                  error={errors.name?.message}
                />
                <InputField.Error text={errors.name?.message} />
              </InputField.Root>
              <InputField.Root className="max-w-[25rem]">
                <InputField.Label
                  htmlFor="email"
                  text="E-mail:"
                  mandatory
                />
                <InputField.InputData
                  id="email"
                  type="text"
                  placeholder="Digite seu e-mail corporativo"
                  register={register('email')}
                  error={errors.email?.message}
                />
                <InputField.Error text={errors.email?.message} />
              </InputField.Root>
              <InputField.Root className="max-w-[25rem]">
                <InputField.Label
                  htmlFor="tel"
                  text="Telefone:"
                  mandatory
                />
                <InputField.InputDataMask
                  id="tel"
                  type="text"
                  mask={tel?.[5] === '9' ? '(99) 9.9999-9999' : '(99) 9999-9999'}
                  placeholder="Digite seu telefone comercial com DDD"
                  register={register('tel')}
                  error={errors.tel?.message}
                />
                <InputField.Error text={errors.tel?.message} />
              </InputField.Root>
            </div>
            <div>
              <InputField.Root className="max-w-[25rem]">
                <InputField.Label
                  htmlFor="doubt"
                  text="Qual sua dúvida?"
                  mandatory
                />
                <SelectData
                  id="doubt"
                  register={register('doubt')}
                  error={errors.doubt?.message}
                >
                  <option
                    value=""
                    hidden
                  >
                    Selecione qual é sua dúvida
                  </option>
                  <option
                    value="option1"
                    className="font-poppins text-sm font-normal text-black"
                  >
                    Option 1
                  </option>
                  <option
                    value="option2"
                    className="font-poppins text-sm font-normal text-black"
                  >
                    Option 2
                  </option>
                  <option
                    value="option3"
                    className="font-poppins text-sm font-normal text-black"
                  >
                    Option 3
                  </option>
                </SelectData>
                <InputField.Error text={errors.doubt?.message} />
              </InputField.Root>

              <InputField.Root className="max-w-[25rem]">
                <InputField.Label
                  htmlFor="cnpj"
                  text="CNPJ:"
                  mandatory
                />
                <InputField.InputDataMask
                  id="cnpj"
                  type="text"
                  mask={'99.999.999/9999-99'}
                  placeholder="Digite seu CNPJ"
                  register={register('cnpj')}
                  error={errors.cnpj?.message}
                />
                <InputField.Error text={errors.cnpj?.message} />
              </InputField.Root>
            </div>
            <ButtonDefault
              type="submit"
              size="md"
              text={isPending ? 'Enviando...' : 'Enviar Contato'}
              isLoading={isPending}
            />
          </form>
        </div>
        <div className="relative flex h-[41.188rem] w-[27rem] items-center justify-center">
          <figure className="relative z-20 h-[24.25rem] w-[18.625rem]">
            <Image
              src="/photoForm.png"
              alt="Pessoas em uma mesa olhando para um mesmo computador"
              fill
            />
          </figure>
          <div className="absolute -translate-x-[2.2rem] translate-y-[2.8rem]">
            <BubbleForm />
          </div>
        </div>
      </div>
    </div>
  );
}