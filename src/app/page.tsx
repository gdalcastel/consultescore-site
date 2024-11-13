import { AboutScore } from '@/components/modules/Home/AboutScore';
import { Benefit } from '@/components/modules/Home/Benefit';
import { Cover } from '@/components/modules/Home/Cover';
import { Depoiment } from '@/components/modules/Home/Depoiment';
import { Differenctial } from '@/components/modules/Home/Differential';
import { FAQ } from '@/components/modules/Home/FAQ';
import { FirstStep } from '@/components/modules/Home/FirstStep';
import { Form } from '@/components/modules/Home/Form';
import { Plans } from '@/components/modules/Home/Plans';
import { StepByStep } from '@/components/modules/Home/StepByStep';

import { Footer } from '@/components/basics/Footer';

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-[3rem]">
      <Cover />
      <Benefit />
      <StepByStep />
      <Plans />
      <Depoiment />
      <FirstStep />
      <AboutScore />
      <Differenctial />
      <FAQ />
      <Form />
      <Footer />
    </main>
  );
}
