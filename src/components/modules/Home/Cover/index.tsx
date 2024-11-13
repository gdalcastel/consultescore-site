import Image from 'next/image';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import WaveAndBubbleDesktop from '@/style/icons/waveAndBubbleDesktop';

export function Cover() {
  return (
    <div className="relative flex h-[38.5rem] w-full shrink-0 items-center justify-center overflow-hidden">
      <div className="z-40 mx-auto grid w-full max-w-[70.5rem] grid-cols-[25.125rem,1fr] place-content-center gap-24">
        <div className="flex w-full max-w-[25.125rem] flex-col items-center justify-center">
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

        <figure className="relative h-[24.438rem] w-[39.313rem] shrink-0">
          <Image
            src="/screenDesktop.png"
            alt="Pessoas em uma mesa olhando para um mesmo computador"
            fill
            priority
          />
        </figure>
      </div>
      <div className="absolute translate-x-[2.5rem]">
        <WaveAndBubbleDesktop />
      </div>
    </div>
  );
}
