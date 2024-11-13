import React from 'react';

interface DifferentialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function DifferentialCard({ description, icon, title }: DifferentialCardProps) {
  return (
    <div className="flex w-full shrink-0 items-center gap-7 rounded-[.625rem] py-6 pl-4 pr-[2rem] shadow-lg">
      <span className="shrink-0">{icon}</span>
      <span className="flex h-auto w-full flex-col gap-2">
        <p className="font-poppins text-base font-semibold text-black">{title}</p>
        <p className="font-poppins text-sm font-normal text-[#696969]">{description}</p>
      </span>
    </div>
  );
}
