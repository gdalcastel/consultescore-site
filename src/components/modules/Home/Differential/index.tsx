import Image from 'next/image';

import { DifferentialCard } from './DifferentialCard';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import BubbleOrangeGridTwo from '@/style/icons/bubbleOrangeGridTwo';
import FullControl from '@/style/icons/fullControl';
import Precision from '@/style/icons/precision';
import Standardization from '@/style/icons/standardization';

export function Differenctial() {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-t from-[#F1F5F9] to-[#FFFFFF] py-[4.625rem]">
      <div className="mx-auto grid w-full grid-cols-[39.063rem,38.188rem] place-content-center items-center gap-3">
        <div className="flex w-full flex-col items-start gap-[2rem]">
          <div className="flex w-full flex-col items-start gap-6">
            <p className="mb-2 font-poppins text-[1.5rem] font-bold text-black">
              Precisão e Segurança nas Análises de Risco para Concessão de Crédito
            </p>
            <p className="my-6 font-poppins text-sm font-normal text-black">
              Garanta decisões mais confiáveis com nossas ferramentas aprimoradas. Você pode
              minimizar riscos, proteger sua empresa contra inadimplência e fortalecer a confiança
              no processo de aprovação de crédito.
            </p>
            <p className="font-poppins text-sm font-normal text-black">
              Veja abaixo alguns dos nossos diferencias:
            </p>
          </div>
          <div className="space-y-2">
            <DifferentialCard
              icon={<Standardization />}
              title={'Padronização e Eficiência'}
              description={
                'Simplifique suas consultas com uma API desenvolvida que elimina o tempo de desenvolvimento e reduz a zero o risco de erro.'
              }
            />
            <DifferentialCard
              icon={<FullControl />}
              title={'Controle Total e Flexibilidade'}
              description={
                'Plataforma para múltiplos operadores, controle completo via dashboard e acesso ilimitado (sem restrições de horários de consultas).'
              }
            />
            <DifferentialCard
              icon={<Precision />}
              title={'Precisão e Economia'}
              description={
                'Reduza a toxicidade de consultas desnecessárias, garantindo uma experiência mais limpa e focada, sem desperdício de recursos.'
              }
            />
          </div>

          <AnchorButton
            size="md"
            text="Experimente Agora"
            className="self-center"
          />
        </div>
        <div className="relative flex h-[35.125rem] w-[38.188rem]">
          <div className="z-20 mx-auto grid h-full grid-cols-[16.563rem,12.625rem] content-center justify-center gap-4">
            <div className="flex flex-col items-center justify-end gap-[2.938rem]">
              <figure className="shadow-photo-grid relative h-[14.563rem] w-[15.313rem] rounded-[0.313rem] border-4 border-white bg-white">
                <Image
                  src="/secondGrid/photoOne.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="shadow-photo-grid relative h-[9.75rem] w-[16.563rem] rounded-[0.313rem] border-4 border-white bg-white">
                <Image
                  src="/secondGrid/photoTwo.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
            </div>

            <div className="flex flex-col items-center justify-end gap-[5.375rem] pb-3">
              <figure className="shadow-photo-grid relative h-[9.75rem] w-[12.625rem] rounded-[0.313rem] border-4 border-white bg-white">
                <Image
                  src="/secondGrid/photoThree.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
                  className="rounded-[0.313rem]"
                />
              </figure>
              <figure className="shadow-photo-grid relative h-[8.25rem] w-[12.25rem] rounded-[0.313rem] border-4 border-white bg-white">
                <Image
                  src="/secondGrid/photoFour.png"
                  alt="Pessoas em uma mesa olhando para um mesmo computador"
                  fill
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
