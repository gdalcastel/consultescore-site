import React from 'react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  grade: 'Baixo' | 'Regular' | 'Médio' | 'Alto';
}

export function ScoreCard({ description, icon, title, grade }: StepProps) {
  const styleGrade = {
    Baixo: 'text-[#696969] bg-[#F6F6F6]',
    Regular: 'text-[#42387F] bg-[#E1DFF6]',
    Médio: 'text-[#099652] bg-[#DAFFED]',
    Alto: 'text-[#0E67C2] bg-[#DFEEF6]'
  };

  return (
    <div className="relative flex h-auto w-full max-w-[9.625rem] flex-col items-center gap-2 rounded-[1.25rem] px-4 py-[1rem] shadow-md lg:max-w-[16.5rem] lg:gap-0 lg:px-6 lg:shadow-white-card">
      <span
        className={`static right-0 top-0 flex h-auto w-auto shrink-0 translate-x-0 translate-y-0 items-center justify-center rounded-full px-3 py-2 font-poppins text-xs font-medium lg:absolute lg:-translate-x-[0.875rem] lg:translate-y-[0.875rem] ${styleGrade[grade]}`}
      >
        {grade}
      </span>
      <span className="shrink-0">{icon}</span>
      <p className="mb-0 mt-0 font-poppins text-base font-bold text-black lg:mb-1 lg:mt-4 lg:text-lg">
        {title}
      </p>
      <p className="text-center font-poppins text-xs font-normal text-[#696969] lg:text-sm">
        {description}
      </p>
    </div>
  );
}
