import { BenefitCard } from './BenefitCard';

import Credit from '@/style/icons/credit';
import CreditCard from '@/style/icons/creditCard';
import DataAnalysis from '@/style/icons/dataAnalysis';
import LifeInsurance from '@/style/icons/lifeInsurance';

export function Benefit() {
  return (
    <div className="flex w-full items-center justify-center py-7 lg:py-[5rem]">
      <div className="mx-auto grid w-full max-w-[57.938rem] grid-cols-1 justify-items-center gap-8 px-5 md:grid-cols-2 lg:gap-[3.438rem] lg:px-0">
        <BenefitCard
          icon={
            <>
              <LifeInsurance
                className="block lg:hidden"
                width={48}
                height={48}
              />
              <LifeInsurance className="hidden lg:block" />
            </>
          }
          title={'Autenticação e Proteção Contra Fraudes'}
          description={
            'Garanta a autenticidade de seus clientes e minimize os riscos de fraude com as soluções perfeitas para o seu negócio.'
          }
        />

        <BenefitCard
          icon={
            <>
              <CreditCard
                className="block lg:hidden"
                width={48}
                height={48}
              />
              <CreditCard className="hidden lg:block" />
            </>
          }
          title={'Gestão de Cobrança e Recuperação de Dívidas'}
          description={
            'Aprimore os processos de recuperação de dívidas com uma gestão inteligente e eficaz de seus clientes.'
          }
        />

        <BenefitCard
          icon={
            <>
              <Credit
                className="block lg:hidden"
                width={46}
                height={40}
              />
              <Credit className="hidden lg:block" />
            </>
          }
          title={'Inteligência e Segurança na Concessão de Crédito'}
          description={
            'Aumente a precisão e a segurança na análise de riscos ao conceder crédito com nossas soluções avançadas.'
          }
        />

        <BenefitCard
          icon={
            <>
              <DataAnalysis
                className="block lg:hidden"
                width={42}
                height={42}
              />
              <DataAnalysis className="hidden lg:block" />
            </>
          }
          title={'Autenticação e Proteção Contra Fraudes'}
          description={
            'Garanta a autenticidade de seus clientes e minimize os riscos de fraude com as soluções perfeitas para o seu negócio.'
          }
        />
      </div>
    </div>
  );
}
