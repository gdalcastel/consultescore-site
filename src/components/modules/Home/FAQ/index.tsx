import AccordionFAQ from '@/components/modules/Home/FAQ/AccordionFAQ';

export function FAQ() {
  return (
    <div
      id="faq"
      className="flex w-full shrink-0 flex-col items-center justify-center gap-4 py-[4.375rem]"
    >
      <p className="font-poppins text-[1.75rem] font-semibold text-black">Perguntas frequentes</p>
      <p className="max-w-[30.625rem] text-center font-poppins text-sm font-normal text-[#696969]">
        Aqui você encontrará respostas para as dúvidas mais comuns sobre nossos produtos e
        serviços..
      </p>
      <div className="mt-12 flex h-full w-full max-w-[80.125rem] items-start justify-center gap-6">
        <div className="flex w-full flex-col gap-6">
          <AccordionFAQ
            title={'Com que frequência devo verificar meu Score de crédito?'}
            text={`
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. 
                Mi dolor in id sed duis vestibulum nunc. 
                Ut dictum ut maecenas phasellus habitasse id. 
                Ut maecenas id lacus consectetur neque sed est odio at.
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. Mi dolor in id sed duis vestibulum nunc. Ut dictum ut maecenas phasellus 
              `}
          />
          <AccordionFAQ
            title={'O que fazer se encontrar um erro no meu relatório de crédito?'}
            text={`
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. 
                Mi dolor in id sed duis vestibulum nunc. 
                Ut dictum ut maecenas phasellus habitasse id. 
                Ut maecenas id lacus consectetur neque sed est odio at.
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. Mi dolor in id sed duis vestibulum nunc. Ut dictum ut maecenas phasellus 
              `}
          />
          <AccordionFAQ
            title={'Qual a diferença entre os planos da Consultescore?'}
            text={`
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. 
                Mi dolor in id sed duis vestibulum nunc. 
                Ut dictum ut maecenas phasellus habitasse id. 
                Ut maecenas id lacus consectetur neque sed est odio at.
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. Mi dolor in id sed duis vestibulum nunc. Ut dictum ut maecenas phasellus 
              `}
          />
        </div>
        <div className="flex w-full flex-col gap-6">
          <AccordionFAQ
            title={'O que devo fazer se meu Score de crédito está baixo?'}
            text={`
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. 
                Mi dolor in id sed duis vestibulum nunc. 
                Ut dictum ut maecenas phasellus habitasse id. 
                Ut maecenas id lacus consectetur neque sed est odio at.
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. Mi dolor in id sed duis vestibulum nunc. Ut dictum ut maecenas phasellus 
              `}
          />
          <AccordionFAQ
            title={'Tenho permissão para consultar outros CPFs ou CNPJs?'}
            text={`
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. 
                Mi dolor in id sed duis vestibulum nunc. 
                Ut dictum ut maecenas phasellus habitasse id. 
                Ut maecenas id lacus consectetur neque sed est odio at.
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. Mi dolor in id sed duis vestibulum nunc. Ut dictum ut maecenas phasellus 
              `}
          />
          <AccordionFAQ
            title={'Posso cancelar um plano depois de contratá-lo?'}
            text={`
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. 
                Mi dolor in id sed duis vestibulum nunc. 
                Ut dictum ut maecenas phasellus habitasse id. 
                Ut maecenas id lacus consectetur neque sed est odio at.
                Lorem ipsum dolor sit amet consectetur. Semper elit dictumst aliquet donec. Mi dolor in id sed duis vestibulum nunc. Ut dictum ut maecenas phasellus 
              `}
          />
        </div>
      </div>
    </div>
  );
}
