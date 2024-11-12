import React from 'react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  orderNumber: number;
}

export function Step({ description, icon, title, orderNumber }: StepProps) {
  return (
    <div className="flex h-full w-auto flex-col items-center gap-6">
      <span className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#E1DFF6] font-poppins text-lg font-bold text-[#42387F]">
        {orderNumber}
      </span>
      <div className="flex h-auto w-full max-w-[16.5rem] flex-col items-center rounded-[1.25rem] px-3 py-[1.125rem] shadow-white-card">
        <span className="shrink-0">{icon}</span>
        <p className="mb-1 mt-4 font-poppins text-lg font-bold text-black">{title}</p>
        <p className="font-poppins text-sm font-normal text-[#696969]">{description}</p>
      </div>
    </div>
  );
}
