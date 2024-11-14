import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ description, icon, title }: BenefitCardProps) {
  return (
    <div className="flex w-full max-w-[26.688rem] shrink-0 items-center gap-7">
      <span className="shrink-0">{icon}</span>
      <span className="flex h-auto w-full max-w-[19.813rem] flex-col gap-2">
        <p className="font-poppins text-sm font-semibold text-black lg:text-base">{title}</p>
        <p className="font-poppins text-xs font-normal text-[#696969] lg:text-sm">{description}</p>
      </span>
    </div>
  );
}
