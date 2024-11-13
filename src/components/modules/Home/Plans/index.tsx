import { Basic } from './PlansCards/Basic';
import { Premium } from './PlansCards/Premium';
import { Professional } from './PlansCards/Professional';

import SumSymbols from '@/style/icons/sumSymbols';

export function Plans() {
  return (
    <div
      id="planos"
      className="flex w-full shrink-0 flex-col items-center justify-center pt-6"
    >
      <h3 className="font-poppins text-[1.75rem] font-semibold text-black">
        Passo a Passo com Consultescore
      </h3>
      <p className="mt-2 font-poppins text-sm font-normal text-[#696969]">
        Siga esses passos e otimize suas consultas de crédito.
      </p>
      <div className="relative mb-20 mt-14 flex h-full w-full max-w-[72.313rem] items-center justify-center gap-6">
        <Basic />
        <Professional />
        <Premium />
        <div className="absolute bottom-0 right-0 translate-x-[1rem] translate-y-[1rem]">
          <SumSymbols />
        </div>
      </div>
    </div>
  );
}
