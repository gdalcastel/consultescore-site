import { Benefit } from '@/components/modules/Home/Benefit';
import { Cover } from '@/components/modules/Home/Cover';
import { Depoiment } from '@/components/modules/Home/Depoiment';
import { FirstStep } from '@/components/modules/Home/FirstStep';
import { Plans } from '@/components/modules/Home/Plans';
import { StepByStep } from '@/components/modules/Home/StepByStep';

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-start">
      <Cover />
      <Benefit />
      <StepByStep />
      <Plans />
      <Depoiment />
      <FirstStep />
    </main>
  );
}
