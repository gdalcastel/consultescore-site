import { Step } from './Step';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import Invoice from '@/style/icons/invoice';
import Like from '@/style/icons/like';
import StrategyDevelopment from '@/style/icons/strategyDevelopment';
import Web from '@/style/icons/web';

export function StepByStep() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center justify-center bg-gradient-to-b from-[#F1F5F9] to-[#FFFFFF] px-5 py-6 lg:py-[5rem] xl:h-[37rem]">
      <h2 className="max-w-[15.438rem] text-center font-poppins text-xl font-semibold text-black md:max-w-full md:text-[1.75rem]">
        Passo a Passo com Consultescore
      </h2>
      <p className="mt-2 max-w-[15.438rem] text-center font-poppins text-sm font-normal text-[#696969] md:max-w-full">
        Siga esses passos e otimize suas consultas de crédito.
      </p>
      <div className="my-8 flex h-auto w-full flex-wrap items-stretch justify-center gap-4 sm:max-w-[38rem] lg:mb-20 lg:mt-14 lg:gap-6 xl:h-[15.25rem] xl:max-w-full">
        <Step
          icon={<StrategyDevelopment />}
          title={'Selecionar Plano'}
          description={'Escolha o plano ideal para suas necessidades financeiras.'}
          orderNumber={1}
        />
        <Step
          icon={<Web />}
          title={'Dashboard e Plataforma'}
          description={'Acesse painéis e relatórios detalhados em nossa plataforma.'}
          orderNumber={2}
        />
        <Step
          icon={<Invoice />}
          title={'Consultas Padronizadas'}
          description={'Realize consultas rápidas com análise de crédito confiável.'}
          orderNumber={3}
        />
        <Step
          icon={<Like />}
          title={'Decisões Assertivas'}
          description={'Tome decisões seguras com base em dados precisos e claros.'}
          orderNumber={4}
        />
      </div>
      <AnchorButton
        text={'Experimente Agora'}
        size="sm"
        className="flex max-w-[18.75rem] sm:hidden"
      />
      <AnchorButton
        text={'Experimente Agora'}
        size="md"
        className="hidden sm:flex"
      />
    </div>
  );
}
