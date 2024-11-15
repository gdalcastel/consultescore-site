import Image from 'next/image';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import GaugeHigh from '@/style/icons/gaugeHigh';
import SumSymbols from '@/style/icons/sumSymbols';

export function FirstStep() {
  return (
    <div className="flex h-auto w-full shrink-0 items-center justify-center overflow-hidden px-5 py-8 lg:py-0 xl:h-[40.5rem]">
      <div className="mx-auto grid w-full max-w-[70.5rem] grid-cols-1 place-items-center gap-0 lg:grid-cols-[30.375rem,1fr] xl:grid-cols-[1fr,30.375rem] xl:gap-24">
        <div className="relative hidden h-auto w-[39.75rem] justify-center lg:flex lg:h-[38.688rem]">
          <div className="relative hidden h-full content-center gap-4 lg:grid lg:grid-cols-[10.75rem,8rem,10rem] xl:grid-cols-[10.75rem,8rem,8rem,10rem]">
            <div className="absolute right-0 top-0 translate-x-[4rem]">
              <SumSymbols />
            </div>
            <div className="flex flex-col items-end justify-center gap-4">
              <figure className="relative h-[12rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoOne.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="relative h-[16.125rem] w-[10.75rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoTwo.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>

            <div className="hidden flex-col gap-4 xl:flex">
              <figure className="relative h-[13.25rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoThree.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="relative h-[13.438rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoFour.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="relative h-[10rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoFive.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>

            <div className="relative flex flex-col gap-4">
              <figure className="relative h-[10.688rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoSix.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="relative h-[10.688rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoSeven.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="relative h-[12rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoEight.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <figure className="relative h-[15.938rem] w-[10rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoNine.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="relative h-[10.313rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
                <Image
                  src="/firstGrid/photoTen.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="mb-8 flex w-auto gap-4 lg:hidden">
          <figure className="relative h-[12rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
            <Image
              src="/mobile/Picture02.png"
              alt="Pessoas em uma mesa olhando para um mesmo computador"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-[0.313rem]"
            />
          </figure>
          <figure className="relative h-[12rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
            <Image
              src="/mobile/Picture01.png"
              alt="Pessoas em uma mesa olhando para um mesmo computador"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-[0.313rem]"
            />
          </figure>
          <figure className="relative h-[12rem] w-[8rem] rounded-[0.313rem] shadow-photo-grid">
            <Image
              src="/mobile/Picture03.png"
              alt="Pessoas em uma mesa olhando para um mesmo computador"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-[0.313rem]"
            />
          </figure>
        </div>
        <div className="flex w-full max-w-[25.125rem] flex-col items-start md:gap-2">
          <GaugeHigh />
          <h5 className="mt-[1rem] font-poppins text-xl font-semibold text-black md:mt-[1.5rem] md:text-[1.75rem] md:font-bold">
            O Primeiro Passo para uma Saúde Financeira
          </h5>
          <p className="font-poppins text-sm font-medium text-[#42387F] md:text-base">
            Entenda Sobre Score de Crédito
          </p>
          <p className="mb-[1.5rem] font-poppins text-xs font-normal text-[#696969] md:text-sm">
            Descubra tudo o que você precisa saber sobre esse importante indicador financeiro.
            Compreenda como é calculado, quais fatores influenciam seu valor e como melhorar a
            pontuação para obter melhores condições de crédito.
          </p>
          <AnchorButton
            size="sm"
            text="Experimente Agora"
            className="flex md:hidden"
          />
          <AnchorButton
            size="md"
            text="Experimente Agora"
            className="hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
}
