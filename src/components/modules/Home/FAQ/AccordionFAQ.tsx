import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface AccordionFAQ {
  title: string;
  text: string;
}

export default function AccordionFAQ({ title, text }: AccordionFAQ) {
  return (
    <Accordion.Root
      className="h-auto w-full max-w-[39rem] rounded-lg bg-[#F6F6F6] shadow-lg"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item value="1">
        <Accordion.Header className="flex w-full flex-col">
          <Accordion.Trigger className="AccordionTrigger flex h-[5.688rem] w-full max-w-[39rem] items-center justify-between rounded-[.625rem] bg-[#F6F6F6] px-[2rem] py-3 text-left">
            <p className="font-poppins text-base font-medium text-black">{title}</p>
            <div className="shrink-0">
              <ChevronDownIcon
                width={26}
                height={26}
                className="AccordionChevron aria-hidden text-[#0E67C2]"
              />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent flex w-full max-w-[39rem] flex-col bg-[#F6F6F6] px-[2rem]">
          <div className="flex h-px w-full shrink-0 bg-[#D9D9D9]" />
          <div className="py-6 font-poppins text-sm font-normal text-[#696969]">{text}</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
