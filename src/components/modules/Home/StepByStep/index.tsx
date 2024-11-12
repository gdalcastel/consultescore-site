import { Step } from './Step';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import Invoice from '@/style/icons/invoice';
import Like from '@/style/icons/like';
import StrategyDevelopment from '@/style/icons/strategyDevelopment';
import Web from '@/style/icons/web';

export function StepByStep() {
  return (
    <div className="flex h-[37rem] w-full shrink-0 flex-col items-center justify-center bg-gradient-to-b from-[#F1F5F9] to-[#FFFFFF] py-[5rem]">
      <h2 className="font-poppins text-[1.75rem] font-semibold text-black">
        Passo a Passo com Consultescore
      </h2>
      <p className="mt-2 font-poppins text-sm font-normal text-[#696969]">
        Siga esses passos e otimize suas consultas de crédito.
      </p>
      <div className="mb-20 mt-14 flex h-[15.25rem] w-full items-stretch justify-center gap-6">
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
        size="md"
      />
    </div>
  );
}
