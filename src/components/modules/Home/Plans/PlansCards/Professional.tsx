import React from 'react';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import AlertCircle from '@/style/icons/alertCircle';
import Check from '@/style/icons/check';
import ProfessionalIcon from '@/style/icons/professionalIcon';

export function Professional() {
  return (
    <div className="z-10 flex h-auto w-full max-w-[22.5rem] shrink-0 flex-col rounded-[1.25rem] bg-white px-8 py-6 shadow-white-card md:h-[32.125rem]">
      <div className="flex">
        <span className="flex h-auto w-full items-center gap-3">
          <span className="hidden shrink-0 md:block">{<ProfessionalIcon />}</span>
          <span className="block shrink-0 md:hidden">
            {
              <ProfessionalIcon
                width={28}
                height={28}
              />
            }
          </span>
          <p className="font-poppins text-sm font-semibold text-black sm:text-base">Profissional</p>
        </span>
        <span className="flex items-center rounded-full bg-[#E1DFF6] px-3 py-1 font-poppins text-[.625rem] font-medium text-[#42387F] md:text-xs">
          Popular
        </span>
      </div>
      <div className="mb-6 mt-4 flex h-[1px] w-full shrink-0 bg-[#94A3B8]" />
      <span className="flex w-full flex-col">
        <p className="font-poppins text-[.625rem] font-light text-[#333333] md:text-xs">Mensal</p>
        <p className="font-poppins text-2xl font-bold text-black md:text-[2rem]">R$49,90</p>
      </span>
      <div className="mt-8 flex flex-col gap-2">
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">Relatórios detalhados</p>
        </span>
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">
            Consultas Scores de Crédito em instituições (ex. Serasa e Boa vista)
          </p>
        </span>
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">
            Exportação de relatórios
          </p>
        </span>
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">
            Horário de consultas ilimitado
          </p>
        </span>
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">Score Analytics</p>
        </span>
      </div>
      <span className="mb-6 mt-10 flex items-center gap-2">
        <AlertCircle />
        <p className="font-poppins text-[.625rem] font-medium text-[#949494] md:text-xs">
          Válido para uma consulta única.
        </p>
      </span>
      <AnchorButton
        text={'Selecionar'}
        className="max-w-full"
        colorButton="purple"
        size="md"
      />
    </div>
  );
}
