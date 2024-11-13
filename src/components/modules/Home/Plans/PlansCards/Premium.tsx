import React from 'react';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import Business from '@/style/icons/business';
import Check from '@/style/icons/check';

export function Premium() {
  return (
    <div className="z-10 flex h-[34.438rem] w-[24.125rem] max-w-[22.5rem] shrink-0 flex-col rounded-[1.25rem] border-4 border-[#C3E1FF] bg-white px-8 py-[1.625rem] shadow-white-card">
      <div className="flex">
        <span className="flex h-auto w-full items-center gap-3">
          <span className="shrink-0">{<Business />}</span>
          <p className="font-poppins text-base font-semibold text-black">Premium</p>
        </span>
        <span className="flex w-auto shrink-0 items-center rounded-full bg-[#DFEEF6] px-3 py-1 font-poppins text-xs font-medium text-[#0E67C2]">
          Custo Benefício
        </span>
      </div>
      <div className="mb-8 mt-4 flex h-[1px] w-full shrink-0 bg-[#94A3B8]" />
      <span className="flex w-full flex-col">
        <p className="font-poppins text-xs font-light text-[#333333]">Mensal</p>
        <p className="font-poppins text-[2rem] font-bold text-black">R$119,90</p>
      </span>
      <div className="mb-[2rem] mt-8 flex flex-col gap-2">
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
            Acesso ilimitado a plataforma
          </p>
        </span>
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">Exportação de relatório</p>
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
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">
            Múltiplos operadores na plataforma{' '}
          </p>
        </span>
      </div>
      <AnchorButton
        text={'Selecionar'}
        className="max-w-full"
        colorButton="blue"
        size="md"
      />
    </div>
  );
}
