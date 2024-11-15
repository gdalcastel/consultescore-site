import Image from 'next/image';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import WaveAndBubbleDesktop from '@/style/icons/waveAndBubbleDesktop';
import WaveAndBubbleMobile from '@/style/icons/waveAndBubbleMobile';

export function Cover() {
  return (
    <div className="relative flex h-auto w-full shrink-0 items-center justify-center overflow-hidden pb-[2rem] pt-14 lg:h-[38.5rem] lg:py-0">
      <div className="z-40 mx-auto grid w-full max-w-[70.5rem] grid-cols-1 place-content-center justify-items-center gap-[2rem] px-5 lg:grid-cols-[25.125rem,1fr] lg:gap-24 lg:px-8">
        <div className="flex w-full max-w-[25.125rem] flex-col items-center justify-center">
          <h1 className="font-poppins text-xl font-semibold text-black md:text-[2rem] md:font-bold">
            Transforme a gestão de suas consultas de crédito com eficiência e precisão.
          </h1>
          <p className="mb-8 mt-4 font-poppins text-sm font-normal text-[#696969] md:text-base">
            Padronize processos, elimine erros e otimize o gerenciamento das suas análises de
            crédito, tudo em um único lugar.
          </p>
          <AnchorButton
            size="md"
            text="Experimente Agora"
            className="hidden md:flex"
          />
          <AnchorButton
            size="sm"
            text="Experimente Agora"
            className="flex md:hidden"
          />
        </div>

        <Image
          src="/screenDesktop.png"
          alt="Pessoas em uma mesa olhando para um mesmo computador"
          width={629}
          height={391}
          priority
          className="hidden md:flex"
        />

        <Image
          src="/screenDesktop.png"
          alt="Pessoas em uma mesa olhando para um mesmo computador"
          width={320}
          height={198}
          priority
          className="flex md:hidden"
        />
      </div>
      <div className="absolute hidden translate-x-[2.5rem] lg:flex">
        <WaveAndBubbleDesktop />
      </div>
      <div className="absolute flex -translate-y-[1rem] translate-x-[20rem] lg:hidden">
        <WaveAndBubbleMobile />
      </div>
    </div>
  );
}
