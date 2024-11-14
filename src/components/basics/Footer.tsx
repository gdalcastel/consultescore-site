import Language from '@/style/icons/language';

export function Footer() {
  return (
    <div className="flex min-h-[6rem] w-full flex-col items-start justify-between bg-[#00366C] px-4 py-3 md:flex-row md:items-center md:px-20 md:py-0">
      <p className="font-poppins text-white">
        CONSULTE<strong>SCORE</strong>
      </p>
      <p className="font-poppins text-sm font-normal text-[#E2E8F0]">
        consultescore @ 2024. Todos os direitos reservados.
      </p>
      <span className="hidden items-center gap-[2rem] md:flex">
        <p className="font-poppins text-sm font-normal text-[#E2E8F0]">Termos & Condições</p>
        <span className="flex items-center gap-2">
          <Language />
          <p className="font-poppins text-sm font-normal text-[#E2E8F0]">PT</p>
        </span>
      </span>
    </div>
  );
}
