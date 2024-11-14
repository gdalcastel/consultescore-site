import AnchorButton from '../Buttons/AnchorButton';
import { NavHeader } from './NavHeader';

import Logomarca from '@/style/icons/logomarca';

export function Header() {
  return (
    <div className="z-50 flex h-16 w-full items-center px-5 shadow-header-card lg:px-20">
      <span className="block lg:hidden">
        <Logomarca
          width={120}
          height={24}
        />
      </span>
      <span className="hidden lg:block">
        <Logomarca />
      </span>

      <span className="hidden"></span>
      <nav className="flex h-auto w-full items-center justify-end gap-8">
        <NavHeader
          text={'Planos'}
          href="#planos"
        />
        <NavHeader
          text={'Depoimentos'}
          href="#depoimentos"
        />
        <NavHeader
          text={'FAQ'}
          href="#faq"
        />
        <NavHeader
          text={'Contato'}
          href="#contato"
        />
        <AnchorButton
          colorButton="purple"
          text="Acessar plataforma"
          size="sm"
          className="max-w-[8.938rem]"
        />
      </nav>
    </div>
  );
}
