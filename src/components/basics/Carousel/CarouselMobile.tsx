import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

interface SessionAssessmentProps {
  children?: ReactNode;
  nameCarousel: string;
  totalNumberCard: number;
  colorAllBubbles: string;
  currentBubbles: string;
}

const debounce = (func: any, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export function CarouselMobile({
  children,
  nameCarousel,
  totalNumberCard,
  colorAllBubbles,
  currentBubbles
}: SessionAssessmentProps) {
  const rulesNumber = Array.from({ length: totalNumberCard }, (_, index) => index);
  const [countMobile, setCountMobile] = useState<number>(0);

  const myDivRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    debounce(() => {
      if (!myDivRef.current) return;

      const scrolledPixels = myDivRef.current.scrollLeft;
      const imageWidth = 360;
      const scrollRatio = scrolledPixels / (imageWidth * totalNumberCard);
      const activeBubbleIndex = Math.round(scrollRatio * totalNumberCard);

      setCountMobile(activeBubbleIndex);
    }, 100),
    [totalNumberCard]
  );

  useEffect(() => {
    const divRefCurrent = myDivRef.current;
    if (divRefCurrent) {
      divRefCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (divRefCurrent) {
        divRefCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className="z-0 flex h-full w-full flex-col items-center justify-center sm:hidden">
      <div className="relative flex h-auto w-full justify-center">
        <div
          id={nameCarousel}
          ref={myDivRef}
          className="hiddenScroll flex h-auto w-auto snap-x snap-mandatory justify-start overflow-x-auto pb-0 pt-[1rem]"
        >
          <div className="flex h-auto w-auto snap-x snap-mandatory flex-row items-center gap-x-[1.5rem] pl-[8.5rem] pr-[6rem]">
            {children}
          </div>
        </div>
      </div>
      <span className="z-50 flex w-full max-w-[90rem] justify-center gap-x-[.5rem] px-[6.25rem]">
        {rulesNumber.map((index) => (
          <div
            className="block"
            key={index}
          >
            <span
              className={`flex self-center rounded-full ${index === countMobile ? `h-[.5rem] w-[.5rem] ${currentBubbles}` : `h-[0.375rem] w-[0.375rem] ${colorAllBubbles}`} `}
            />
          </div>
        ))}
      </span>
    </div>
  );
}
