import DepoimentCard from './DepoimentCard';

import { CarouselDesktop } from '@/components/basics/Carousel/CarouselDesktop';

export function Depoiment() {
  const colorAllBubbles = 'bg-[#6667AA]';
  const currentBubbles = 'bg-[#D9D9D9]';
  return (
    <div
      id="depoimentos"
      className="flex w-full shrink-0 flex-col items-center justify-center gap-20 pb-16 pt-12"
    >
      <h4 className="w-full max-w-[76.25rem] text-start font-poppins text-[1.75rem] font-semibold text-black">
        Depoimentos de quem já usou
      </h4>
      <CarouselDesktop
        colorAllBubbles={colorAllBubbles}
        currentBubbles={currentBubbles}
        nameCarousel="carouselArena1"
      >
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
        <DepoimentCard
          description="“Utilizei o serviço de consulta de CPF e fiquei extremamente satisfeito com a experiência. Me proporcionando informações claras e detalhadas sobre meu score de crédito. 
          A consulta foi rápida e confiável, o que me ajudou a entender melhor minha situação financeira e a tomar decisões mais informadas. Recomendo a todos!”"
          image="/UserThumb.png"
          name={'dilsones'}
          office={'visiu'}
          stars={5}
        />
      </CarouselDesktop>
    </div>
  );
}
