import { BenefitCard } from './BenefitCard';

import Credit from '@/style/icons/credit';
import CreditCard from '@/style/icons/creditCard';
import DataAnalysis from '@/style/icons/dataAnalysis';
import LifeInsurance from '@/style/icons/lifeInsurance';

export function Benefit() {
  return (
    <div className="flex w-full items-center justify-center py-[5rem]">
      <div className="mx-auto grid w-full max-w-[57.938rem] grid-cols-2 gap-[3.438rem]">
        <BenefitCard
          icon={<LifeInsurance />}
          title={'Autenticação e Proteção Contra Fraudes'}
          description={
            'Garanta a autenticidade de seus clientes e minimize os riscos de fraude com as soluções perfeitas para o seu negócio.'
          }
        />

        <BenefitCard
          icon={<Credit />}
          title={'Inteligência e Segurança na Concessão de Crédito'}
          description={
            'Aumente a precisão e a segurança na análise de riscos ao conceder crédito com nossas soluções avançadas.'
          }
        />
        <BenefitCard
          icon={<CreditCard />}
          title={'Gestão de Cobrança e Recuperação de Dívidas'}
          description={
            'Aprimore os processos de recuperação de dívidas com uma gestão inteligente e eficaz de seus clientes.'
          }
        />
        <BenefitCard
          icon={<DataAnalysis />}
          title={'Autenticação e Proteção Contra Fraudes'}
          description={
            'Garanta a autenticidade de seus clientes e minimize os riscos de fraude com as soluções perfeitas para o seu negócio.'
          }
        />
      </div>
    </div>
  );
}
