import Image from 'next/image';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import GaugeHigh from '@/style/icons/gaugeHigh';

export function FirstStep() {
  return (
    <div className="flex h-[40.5rem] w-full shrink-0 items-center justify-center">
      <div className="mx-auto grid w-full max-w-[70.5rem] grid-cols-[1fr,30.375rem] place-items-center gap-24">
        <div className="relative h-[38.688rem] w-[39.75rem] bg-slate-500">grid</div>
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
