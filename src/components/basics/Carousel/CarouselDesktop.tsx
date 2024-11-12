/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';

import useObserverWidthElement from '../../../hooks/useObserverWidthElement';
import useWindowSize from '../../../hooks/useWindowSize';

import ArrowLeft from '@/style/icons/arrowLeft';
import ArrowRight from '@/style/icons/arrowRight';

interface SessionAssessmentProps {
  children?: ReactNode;
  nameCarousel: string;
  colorAllBubbles: string;
  currentBubbles: string;
}

export function CarouselDesktop({
  children,
  nameCarousel,
  colorAllBubbles,
  currentBubbles
}: SessionAssessmentProps) {
  const [countDesktop, setCountDesktop] = useState<number>(0);
  const [hiddenArrowLeft, setHiddenArrowLeft] = useState<boolean>(true);
  const [hiddenArrowRight, setHiddenArrowRight] = useState<boolean>(false);
  const [bubbles, setBubbles] = useState<number[]>([]);

  const sizePage = useWindowSize();
  const lockRender1 = useRef(false);
  const lockRender2 = useRef(false);

  const WidthElement = useObserverWidthElement(nameCarousel);

  function widthCarouselResponsive(nameCarousel: string | undefined) {
    const { clientWidth }: any = document.getElementById(`${nameCarousel}`);
    return clientWidth;
  }

  function calculateWidthReal(nameCarousel: string | undefined) {
    const { scrollWidth }: any = document.getElementById(`${nameCarousel}`);
    const { clientWidth }: any = document.getElementById(`${nameCarousel}`);
    const valueWidth = scrollWidth - clientWidth;
    return valueWidth;
  }

  function createAllBubbles() {
    const widthCarousel = widthCarouselResponsive(nameCarousel);
    const valueWidth = calculateWidthReal(nameCarousel);
    const calculed = valueWidth / widthCarousel;
    const resultsBubbles = Math.ceil(calculed);
    const initialValue = 0;
    const incrementalBubble = 1;
    for (let i = initialValue; i < Number(resultsBubbles) + incrementalBubble; i++) {
      if (!i) {
        setBubbles([i]);
      }
      if (i) {
        setBubbles((prevState) => [...prevState, i]);
      }
    }
  }

  function handleHiddenButtonLeftOrRight() {
    const widthCarousel = widthCarouselResponsive(nameCarousel);
    const valueWidth = calculateWidthReal(nameCarousel);
    const stringWidthElement = WidthElement?.toString();
    const emptyCarouselWidth = '232';
    if (valueWidth === 0) {
      setHiddenArrowRight(true);
    }
    if (WidthElement && valueWidth && widthCarousel) {
      setHiddenArrowRight(false);
      const maxClickInButton = valueWidth / widthCarousel;
      const RoundMaxClickInButton = Math.ceil(Number(maxClickInButton));

      if (countDesktop >= RoundMaxClickInButton && stringWidthElement !== emptyCarouselWidth) {
        setHiddenArrowRight(true);
      }

      if (countDesktop <= 0) {
        setHiddenArrowLeft(true);
      }
    }
  }

  const scrollRight = async (count: number) => {
    setCountDesktop((prevState) => prevState + count);
    setHiddenArrowLeft(false);
    const widthCarousel = widthCarouselResponsive(nameCarousel);
    document.getElementById(`${nameCarousel}`)?.scrollBy(widthCarousel * count, 0);
    return true;
  };

  const scrollLeft = (count: number) => {
    setCountDesktop((prevState) => prevState - count);
    setHiddenArrowRight(false);
    const widthCarousel = widthCarouselResponsive(nameCarousel);
    document.getElementById(`${nameCarousel}`)?.scrollBy(-widthCarousel * count, 0);
    return true;
  };

  useEffect(() => {
    if (lockRender1.current === true) {
      handleHiddenButtonLeftOrRight();
    }
    lockRender1.current = true;
  }, [countDesktop]);

  useEffect(() => {
    if (lockRender2.current === true) {
      handleHiddenButtonLeftOrRight();
      createAllBubbles();
    }
    lockRender2.current = true;
  }, [sizePage, WidthElement]);

  return (
    <div className="z-0 hidden h-full w-full flex-col items-center justify-center sm:flex">
      <div className="relative flex h-auto w-full justify-center">
        <div className="absolute right-0 top-0 flex -translate-y-[7.5rem] gap-6">
          <button
            type="button"
            aria-label="Rolar para esquerda"
            onClick={() => scrollLeft(1)}
            className={`z-20 min-h-[48px] min-w-[48px] translate-y-[-.1rem] transform cursor-pointer items-center justify-center rounded-full border-[2px] border-[#42387F] bg-white ${
              hiddenArrowLeft ? 'invisible' : 'flex'
            }`}
          >
            <ArrowLeft />
          </button>

          <button
            type="button"
            onClick={() => scrollRight(1)}
            aria-label="Rolar para direita"
            className={`z-20 mr-[2.5rem] min-h-[48px] min-w-[48px] translate-y-[-.1rem] transform cursor-pointer items-center justify-center rounded-full border-[2px] border-[#42387F] bg-white ${
              hiddenArrowRight ? 'invisible' : 'flex'
            }`}
          >
            <ArrowRight />
          </button>
        </div>

        <div
          id={`${nameCarousel}`}
          className={
            'scroll hiddenScroll flex h-auto w-auto translate-x-[-.3rem] snap-x justify-start overflow-x-auto scroll-smooth pb-0 pt-[1rem] md:snap-none md:overflow-x-hidden md:pb-5'
          }
        >
          <div className="flex h-auto w-auto snap-x flex-row items-center gap-x-[1.5rem] pl-[8.5rem] pr-[6rem]">
            {children}
          </div>
        </div>
      </div>
      <span className="h-full] z-50 flex w-full max-w-[90rem] justify-center gap-x-[.5rem] px-[6.25rem]">
        {bubbles?.map((index) => {
          return (
            <button
              type="button"
              className="block"
              aria-label="Interação com o carrosel"
              key={index}
              onClick={() => {
                if (index > countDesktop) {
                  const numberOfBubbles = index - countDesktop;
                  scrollRight(numberOfBubbles);
                }
                if (index < countDesktop) {
                  const numberOfBubbles = Math.abs(index - countDesktop);
                  scrollLeft(numberOfBubbles);
                }
                setCountDesktop((prevState) =>
                  index > prevState
                    ? prevState + 1
                    : index === prevState
                      ? prevState
                      : prevState - 1
                );
              }}
            >
              <span
                className={`flex self-center rounded-full ${index === countDesktop ? `h-[.5rem] w-[.5rem] ${currentBubbles}` : `h-[0.375rem] w-[0.375rem] ${colorAllBubbles}`} `}
              />
            </button>
          );
        })}
      </span>
    </div>
  );
}
