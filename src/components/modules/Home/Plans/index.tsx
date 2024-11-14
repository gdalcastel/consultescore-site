import { Basic } from './PlansCards/Basic';
import { Premium } from './PlansCards/Premium';
import { Professional } from './PlansCards/Professional';

import SumSymbols from '@/style/icons/sumSymbols';

export function Plans() {
  return (
    <div
      id="planos"
      className="flex w-full shrink-0 flex-col items-center justify-center px-5 pt-6"
    >
      <h3 className="font-poppins text-xl font-semibold text-black md:text-[1.75rem]">
        Conheça nossos planos
      </h3>
      <p className="mt-2 max-w-[30rem] text-center font-poppins text-sm font-normal text-[#696969] lg:max-w-full">
        Explore nossas opções de planos flexíveis que atendem às necessidades de diferentes tipos de
        negócios.
      </p>
      <div className="relative mb-20 mt-14 flex h-full w-full max-w-[72.313rem] flex-wrap-reverse items-center justify-center gap-6">
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
