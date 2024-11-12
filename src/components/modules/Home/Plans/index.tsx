import { Basic } from './PlansCards/Basic';
import { Premium } from './PlansCards/Premium';
import { Professional } from './PlansCards/Professional';

export function Plans() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center justify-center">
      <h3 className="font-poppins text-[1.75rem] font-semibold text-black">
        Passo a Passo com Consultescore
      </h3>
      <p className="mt-2 font-poppins text-sm font-normal text-[#696969]">
        Siga esses passos e otimize suas consultas de crédito.
      </p>
      <div className="mb-20 mt-14 flex h-full w-full items-center justify-center gap-6">
        <Basic />
        <Professional />
        <Premium />
      </div>
    </div>
  );
}
