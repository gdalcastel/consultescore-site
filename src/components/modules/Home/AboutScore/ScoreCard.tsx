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
    <div className="relative flex h-auto w-full max-w-[16.5rem] flex-col items-center rounded-[1.25rem] px-6 py-[1rem] shadow-white-card">
      <span className="shrink-0">{icon}</span>
      <p className="mb-1 mt-4 font-poppins text-lg font-bold text-black">{title}</p>
      <p className="text-center font-poppins text-sm font-normal text-[#696969]">{description}</p>
      <span
        className={`absolute right-0 top-0 flex h-auto w-auto shrink-0 -translate-x-[0.875rem] translate-y-[0.875rem] items-center justify-center rounded-full px-3 py-2 font-poppins text-xs font-medium ${styleGrade[grade]}`}
      >
        {grade}
      </span>
    </div>
  );
}
