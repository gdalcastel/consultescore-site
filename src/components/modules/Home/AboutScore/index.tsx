import { ScoreCard } from './ScoreCard';

import GaugeHigh from '@/style/icons/gaugeHigh';
import GaugeLow from '@/style/icons/gaugeLow';
import GaugeMedium from '@/style/icons/gaugeMedium';
import GaugeRegular from '@/style/icons/gaugeRegular';

export function AboutScore() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center justify-center bg-gradient-to-b from-[#F1F5F9] to-[#FFFFFF] py-[4.188rem]">
      <div className="flex w-full max-w-[69.438rem] flex-col items-start gap-2">
        <h6 className="mb-2 mt-[1.5rem] font-poppins text-[1.75rem] font-bold text-black">
          O que é um Score de Crédito?
        </h6>
        <p className="font-poppins text-base font-normal text-[#696969]">
          Um score de crédito é uma pontuação numérica que reflete a sua credibilidade como
          consumidor em relação ao uso de crédito.
        </p>
        <p className="my-6 mb-[1.5rem] font-poppins text-sm font-normal text-black">
          Ele é calculado com base em informações do seu histórico financeiro, como pagamentos de
          contas, dívidas atuais, histórico de crédito, e outros fatores. Essa pontuação é usada por
          instituições financeiras, como bancos e empresas de crédito, para avaliar o risco de
          conceder empréstimos ou crédito a você. Em geral, quanto mais alto o seu score de crédito,
          maior a chance de você ser considerado um bom pagador e, portanto, mais fácil pode ser
          conseguir crédito em condições favoráveis.
        </p>
        <p className="mb-[1.5rem] font-poppins text-sm font-normal text-black">
          Veja abaixo como funciona a pontuação para um{' '}
          <strong className="font-poppins">Score alto, médio, regular ou baixo:</strong>
        </p>
      </div>
      <div className="mb-20 mt-12 flex w-full items-stretch justify-center gap-6">
        <ScoreCard
          icon={<GaugeLow />}
          title={'100-350'}
          description={'Sua chance de aprovação está muito baixa'}
          grade={'Baixo'}
        />
        <ScoreCard
          icon={<GaugeRegular />}
          title={'350-450'}
          description={'Sua chance de aprovação está baixa'}
          grade={'Regular'}
        />
        <ScoreCard
          icon={<GaugeMedium />}
          title={'500-750'}
          description={'Sua chance de aprovação está alta'}
          grade={'Médio'}
        />
        <ScoreCard
          icon={<GaugeHigh />}
          title={'800-1000'}
          description={'Sua chance de aprovação está muito alta'}
          grade={'Alto'}
        />
      </div>
    </div>
  );
}
