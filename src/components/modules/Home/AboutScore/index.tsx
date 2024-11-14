import { ScoreCard } from './ScoreCard';

import AnchorButton from '@/components/basics/Buttons/AnchorButton';
import GaugeHigh from '@/style/icons/gaugeHigh';
import GaugeLow from '@/style/icons/gaugeLow';
import GaugeMedium from '@/style/icons/gaugeMedium';
import GaugeRegular from '@/style/icons/gaugeRegular';

export function AboutScore() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center justify-center bg-gradient-to-b from-[#F1F5F9] to-[#FFFFFF] px-5 pb-14 pt-7 lg:py-[4.188rem]">
      <div className="flex w-full max-w-[69.438rem] flex-col items-start gap-2">
        <h6 className="mb-2 mt-[1.5rem] font-poppins text-xl font-semibold text-black md:text-[1.75rem] md:font-bold">
          O que é um Score de Crédito?
        </h6>
        <p className="font-poppins text-sm font-normal text-[#696969] md:text-base">
          Um score de crédito é uma pontuação numérica que reflete a sua credibilidade como
          consumidor em relação ao uso de crédito.
        </p>
        <p className="my-6 mb-[1.5rem] font-poppins text-xs font-normal text-black md:text-sm">
          Ele é calculado com base em informações do seu histórico financeiro, como pagamentos de
          contas, dívidas atuais, histórico de crédito, e outros fatores. Essa pontuação é usada por
          instituições financeiras, como bancos e empresas de crédito, para avaliar o risco de
          conceder empréstimos ou crédito a você. Em geral, quanto mais alto o seu score de crédito,
          maior a chance de você ser considerado um bom pagador e, portanto, mais fácil pode ser
          conseguir crédito em condições favoráveis.
        </p>
        <p className="mb-[1.5rem] font-poppins text-xs font-normal text-black md:text-sm">
          Veja abaixo como funciona a pontuação para um{' '}
          <strong className="font-poppins">Score alto, médio, regular ou baixo:</strong>
        </p>
      </div>
      <div className="my-8 grid grid-cols-2 place-content-center items-stretch justify-center gap-2 sm:flex md:mb-20 md:mt-12 md:w-full md:gap-6">
        <ScoreCard
          icon={
            <>
              <GaugeLow className="hidden md:block" />
              <GaugeLow
                width={62}
                height={39}
                className="block md:hidden"
              />
            </>
          }
          title={'100-350'}
          description={'Sua chance de aprovação está muito baixa'}
          grade={'Baixo'}
        />
        <ScoreCard
          icon={
            <>
              <GaugeRegular className="hidden md:block" />
              <GaugeRegular
                width={62}
                height={39}
                className="block md:hidden"
              />
            </>
          }
          title={'350-450'}
          description={'Sua chance de aprovação está baixa'}
          grade={'Regular'}
        />
        <ScoreCard
          icon={
            <>
              <GaugeMedium className="hidden md:block" />
              <GaugeMedium
                width={62}
                height={39}
                className="block md:hidden"
              />
            </>
          }
          title={'500-750'}
          description={'Sua chance de aprovação está alta'}
          grade={'Médio'}
        />
        <ScoreCard
          icon={
            <>
              <GaugeHigh className="hidden md:block" />
              <GaugeHigh
                width={62}
                height={39}
                className="block md:hidden"
              />
            </>
          }
          title={'800-1000'}
          description={'Sua chance de aprovação está muito alta'}
          grade={'Alto'}
        />
      </div>
      <AnchorButton
        size="sm"
        text="Experimente Agora"
        className="flex max-w-[18.75rem] md:hidden"
      />
    </div>
  );
}
