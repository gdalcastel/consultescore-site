import React from 'react';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import AlertCircle from '@/style/icons/alertCircle';
import Check from '@/style/icons/check';
import User from '@/style/icons/user';
import X from '@/style/icons/x';

export function Basic() {
  return (
    <div className="z-10 flex h-auto w-full max-w-[22.5rem] shrink-0 flex-col rounded-[1.25rem] bg-white px-8 py-6 shadow-white-card md:h-[32.125rem]">
      <span className="flex h-auto w-full items-center gap-3">
        <span className="hidden shrink-0 md:block">{<User />}</span>
        <span className="block shrink-0 md:hidden">
          {
            <User
              width={28}
              height={28}
            />
          }
        </span>
        <p className="font-poppins text-sm font-semibold text-black sm:text-base">Basic</p>
      </span>
      <div className="mb-8 mt-4 flex h-[1px] w-full shrink-0 bg-[#FBBC04]" />
      <span className="flex w-full flex-col">
        <p className="font-poppins text-[.625rem] font-light text-[#333333] md:text-xs">
          Consulta avulsa
        </p>
        <p className="font-poppins text-2xl font-bold text-black md:text-[2rem]">R$14,99</p>
      </span>
      <div className="mt-6 flex flex-col gap-2">
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">
            Pontuação Score de Crédito
          </p>
        </span>
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">
            Informações perfil consumidor
          </p>
        </span>
        <span className="flex items-center gap-2">
          <Check />
          <p className="font-poppins text-sm font-normal text-[#333333]">Relatório detalhado</p>
        </span>
        <span className="flex items-center gap-2">
          <X />
          <p className="font-poppins text-sm font-normal text-[#949494]">Exportação de relatório</p>
        </span>
        <span className="flex items-center gap-2">
          <X />
          <p className="font-poppins text-sm font-normal text-[#949494]">Acesso a plataforma</p>
        </span>
        <span className="flex items-center gap-2">
          <X />
          <p className="font-poppins text-sm font-normal text-[#949494]">Score Analytics</p>
        </span>
      </div>
      <span className="mb-6 mt-5 flex items-center gap-2">
        <AlertCircle />
        <p className="font-poppins text-[.625rem] font-medium text-[#949494] md:text-xs">
          Válido para uma consulta única.
        </p>
      </span>
      <AnchorButton
        text={'Selecionar'}
        className="max-w-full"
        size="md"
      />
    </div>
  );
}
