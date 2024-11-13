import Image from 'next/image';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import GaugeHigh from '@/style/icons/gaugeHigh';
import SumSymbols from '@/style/icons/sumSymbols';

export function FirstStep() {
  return (
    <div className="flex h-[40.5rem] w-full shrink-0 items-center justify-center">
      <div className="mx-auto grid w-full max-w-[70.5rem] grid-cols-[1fr,30.375rem] place-items-center gap-24">
        <div className="relative h-[38.688rem] w-[39.75rem]">
          <div className="relative grid h-full grid-cols-[10.75rem,8rem,8rem,10rem] content-center gap-4">
            <div className="absolute right-0 top-0 translate-x-[4rem]">
              <SumSymbols />
            </div>
            <div className="flex flex-col items-end justify-center gap-4">
              <figure className="shadow-photo-grid relative h-[12rem] w-[8rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoOne.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="shadow-photo-grid relative h-[16.125rem] w-[10.75rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoTwo.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>

            <div className="flex flex-col gap-4">
              <figure className="shadow-photo-grid relative h-[13.25rem] w-[8rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoThree.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="shadow-photo-grid relative h-[13.438rem] w-[8rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoFour.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="shadow-photo-grid relative h-[10rem] w-[8rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoFive.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>

            <div className="relative flex flex-col gap-4">
              <figure className="shadow-photo-grid relative h-[10.688rem] w-[8rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoSix.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="shadow-photo-grid relative h-[10.688rem] w-[8rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoSeven.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="shadow-photo-grid relative h-[12rem] w-[8rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoEight.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <figure className="shadow-photo-grid relative h-[15.938rem] w-[10rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoNine.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="shadow-photo-grid relative h-[10.313rem] w-[8rem] rounded-[0.313rem]">
                <Image
                  src="/firstGrid/photoTen.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[25.125rem] flex-col items-start gap-2">
          <GaugeHigh />
          <h5 className="mt-[1.5rem] font-poppins text-[1.75rem] font-bold text-black">
            O Primeiro Passo para uma Saúde Financeira
          </h5>
          <p className="font-poppins text-base font-medium text-[#42387F]">
            Entenda Sobre Score de Crédito
          </p>
          <p className="mb-[1.5rem] font-poppins text-sm font-normal text-[#696969]">
            Descubra tudo o que você precisa saber sobre esse importante indicador financeiro.
            Compreenda como é calculado, quais fatores influenciam seu valor e como melhorar a
            pontuação para obter melhores condições de crédito.
          </p>
          <AnchorButton
            size="md"
            text="Experimente Agora"
          />
        </div>
      </div>
    </div>
  );
}
