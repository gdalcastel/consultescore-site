import React from 'react';

interface DifferentialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function DifferentialCard({ description, icon, title }: DifferentialCardProps) {
  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-2 rounded-[.625rem] px-3 py-6 shadow-lg md:flex-row md:gap-7 md:pl-4 md:pr-[2rem]">
      <span className="flex shrink-0 items-center gap-2 self-start md:gap-0">
        {icon}
        <p className="block font-poppins text-sm font-semibold text-black md:hidden md:text-base">
          {title}
        </p>
      </span>
      <span className="flex h-auto w-full flex-col gap-2">
        <p className="hidden font-poppins text-sm font-semibold text-black md:block md:text-base">
          {title}
        </p>
        <p className="font-poppins text-xs font-normal text-[#696969] md:text-sm">{description}</p>
      </span>
    </div>
  );
}
