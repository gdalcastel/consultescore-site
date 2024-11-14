import Image from 'next/image';

import { DifferentialCard } from './DifferentialCard';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import BubbleOrangeGridTwo from '@/style/icons/bubbleOrangeGridTwo';
import FullControl from '@/style/icons/fullControl';
import Precision from '@/style/icons/precision';
import Standardization from '@/style/icons/standardization';

export function Differenctial() {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-t from-[#F1F5F9] to-[#FFFFFF] px-5 py-10 lg:py-[4.625rem]">
      <div className="mx-auto grid w-full grid-cols-1 place-content-center items-center gap-3 xl:grid-cols-[39.063rem,38.188rem]">
        <div className="flex w-full flex-col items-center gap-[2rem] xl:items-start">
          <div className="flex w-full max-w-[50rem] flex-col items-start gap-3 md:gap-6 xl:max-w-full">
            <p className="mb-2 font-poppins text-xl font-semibold text-black md:text-[1.5rem] md:font-bold">
              Precisão e Segurança nas Análises de Risco para Concessão de Crédito
            </p>
            <p className="mb-6 mt-1 font-poppins text-sm font-normal text-black md:my-6">
              Garanta decisões mais confiáveis com nossas ferramentas aprimoradas. Você pode
              minimizar riscos, proteger sua empresa contra inadimplência e fortalecer a confiança
              no processo de aprovação de crédito.
            </p>
            <p className="font-poppins text-sm font-normal text-black">
              Veja abaixo alguns dos nossos diferencias:
            </p>
          </div>
          <div className="mx-0 max-w-full space-y-2 md:mx-auto md:max-w-[50rem]">
            <DifferentialCard
              icon={
                <>
                  <Standardization className="hidden md:block" />
                  <Standardization
                    width={32}
                    height={32}
                    className="block md:hidden"
                  />
                </>
              }
              title={'Padronização e Eficiência'}
              description={
                'Simplifique suas consultas com uma API desenvolvida que elimina o tempo de desenvolvimento e reduz a zero o risco de erro.'
              }
            />
            <DifferentialCard
              icon={
                <>
                  <FullControl className="hidden md:block" />
                  <FullControl
                    width={32}
                    height={32}
                    className="block md:hidden"
                  />
                </>
              }
              title={'Controle Total e Flexibilidade'}
              description={
                'Plataforma para múltiplos operadores, controle completo via dashboard e acesso ilimitado (sem restrições de horários de consultas).'
              }
            />
            <DifferentialCard
              icon={
                <>
                  <Precision className="hidden md:block" />
                  <Precision
                    width={32}
                    height={32}
                    className="block md:hidden"
                  />
                </>
              }
              title={'Precisão e Economia'}
              description={
                'Reduza a toxicidade de consultas desnecessárias, garantindo uma experiência mais limpa e focada, sem desperdício de recursos.'
              }
            />
          </div>
          <AnchorButton
            size="sm"
            text="Experimente Agora"
            className="flex self-center md:hidden"
          />
          <AnchorButton
            size="md"
            text="Experimente Agora"
            className="hidden self-center md:flex"
          />
        </div>
        <div className="relative hidden h-[35.125rem] w-[38.188rem] xl:flex">
          <div className="z-20 mx-auto grid h-full grid-cols-[16.563rem,12.625rem] content-center justify-center gap-4">
            <div className="flex flex-col items-center justify-end gap-[2.938rem]">
              <figure className="relative h-[14.563rem] w-[15.313rem] rounded-[0.313rem] border-4 border-white bg-white shadow-photo-grid">
                <Image
                  src="/secondGrid/photoOne.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="100vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="relative h-[9.75rem] w-[16.563rem] rounded-[0.313rem] border-4 border-white bg-white shadow-photo-grid">
                <Image
                  src="/secondGrid/photoTwo.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="100vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>

            <div className="flex flex-col items-center justify-end gap-[5.375rem] pb-3">
              <figure className="relative h-[9.75rem] w-[12.625rem] rounded-[0.313rem] border-4 border-white bg-white shadow-photo-grid">
                <Image
                  src="/secondGrid/photoThree.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="100vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="relative h-[8.25rem] w-[12.25rem] rounded-[0.313rem] border-4 border-white bg-white shadow-photo-grid">
                <Image
                  src="/secondGrid/photoFour.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  sizes="100vw"
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>
          </div>
          <div className="absolute translate-x-[1.2rem] translate-y-[2rem]">
            <BubbleOrangeGridTwo />
          </div>
        </div>
      </div>
    </div>
  );
}
