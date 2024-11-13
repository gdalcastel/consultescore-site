import AnchorButton from '../Buttons/AnchorButton';
import { NavHeader } from './NavHeader';

import Logomarca from '@/style/icons/logomarca';

export function Header() {
  return (
    <div className="z-50 flex h-16 w-full items-center px-20 shadow-header-card">
      <Logomarca />
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
        />
      </nav>
    </div>
  );
}
