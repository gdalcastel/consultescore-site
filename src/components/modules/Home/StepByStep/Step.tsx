import React from 'react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  orderNumber: number;
}

export function Step({ description, icon, title, orderNumber }: StepProps) {
  return (
    <div className="flex h-auto w-auto flex-col items-center gap-6 xl:h-full">
      <span className="hidden h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-full bg-[#E1DFF6] font-poppins text-lg font-bold text-[#42387F] md:flex">
        {orderNumber}
      </span>
      <div className="flex h-full w-full max-w-[16.5rem] items-center gap-4 rounded-[1.25rem] px-3 py-[1.125rem] shadow-xl md:flex-col md:gap-0">
        <span className="hidden shrink-0 md:block">{icon}</span>
        <span className="flex h-[2rem] w-[2rem] shrink-0 items-center justify-center rounded-full bg-[#E1DFF6] font-poppins text-xs font-bold text-[#42387F] md:hidden">
          {orderNumber}
        </span>
        <span className="flex flex-col">
          <p className="mb-0 mt-0 text-start font-poppins text-sm font-bold text-black md:mb-1 md:mt-4 md:text-center md:text-lg">
            {title}
          </p>
          <p className="text-start font-poppins text-xs font-normal text-[#696969] md:text-sm">
            {description}
          </p>
        </span>
      </div>
    </div>
  );
}
