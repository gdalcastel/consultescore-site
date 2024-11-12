import AnchorButton from '../Buttons/AnchorButton';
import { NavHeader } from './NavHeader';

import Logomarca from '@/style/icons/logomarca';

export function Header() {
  return (
    <div className="flex h-16 w-full items-center px-20 shadow-header-card">
      <Logomarca />
      <nav className="flex h-auto w-full items-center justify-end gap-8">
        <NavHeader
          text={'Planos'}
          href={'/'}
        />
        <NavHeader
          text={'Depoimentos'}
          href={'/'}
        />
        <NavHeader
          text={'FAQ'}
          href={'/'}
        />
        <NavHeader
          text={'Contato'}
          href={'/'}
        />
        <AnchorButton
          colorButton="purple"
          text="Acessar plataforma"
        />
      </nav>
    </div>
  );
}
