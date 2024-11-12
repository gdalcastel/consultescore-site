import Image from 'next/image';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';

export function Cover() {
  return (
    <div className="flex h-[38.5rem] w-full shrink-0 items-center justify-center">
      <div className="mx-auto grid w-full max-w-[70.5rem] grid-cols-[25.125rem,1fr] gap-24">
        <div className="flex w-full max-w-[25.125rem] flex-col items-center">
          <h1 className="font-poppins text-[2rem] font-bold text-black">
            Transforme a gestão de suas consultas de crédito com eficiência e precisão.
          </h1>
          <p className="mb-8 mt-4 font-poppins text-base font-normal text-[#696969]">
            Padronize processos, elimine erros e otimize o gerenciamento das suas análises de
            crédito, tudo em um único lugar.
          </p>
          <AnchorButton
            size="md"
            text="Experimente Agora"
          />
        </div>
        <figure className="relative h-full max-h-[21.875rem] w-full max-w-[39.313rem]">
          <Image
            src="/imageDesktop.png"
            alt="Pessoas em uma mesa olhando para um mesmo computador"
            fill
            objectFit="contain"
          />
        </figure>
      </div>
    </div>
  );
}
