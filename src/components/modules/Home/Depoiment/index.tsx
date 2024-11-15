'use client';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper/modules';

import DepoimentCard from './DepoimentCard';

import { CarouselDesktop } from '@/components/basics/Carousel/CarouselDesktop';
import { depoimentList } from '@/utils/depoimentsList';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export function Depoiment() {
  const colorAllBubbles = 'bg-[#6667AA]';
  const currentBubbles = 'bg-[#D9D9D9]';
  return (
    <div
      id="depoimentos"
      className="flex w-full shrink-0 flex-col items-center justify-center gap-10 py-6 lg:gap-20 lg:pb-16 lg:pt-12"
    >
      <h4 className="w-full max-w-[76.25rem] text-center font-poppins text-xl font-semibold text-black md:text-[1.75rem] xl:text-start">
        Depoimentos de quem já usou
      </h4>
      <CarouselDesktop
        colorAllBubbles={colorAllBubbles}
        currentBubbles={currentBubbles}
        nameCarousel="carousel"
      >
        {depoimentList.map((depoiment) => (
          <DepoimentCard
            key={depoiment.name}
            description={depoiment.description}
            image={depoiment.image}
            name={depoiment.name}
            office={depoiment.office}
            stars={depoiment.stars}
          />
        ))}
      </CarouselDesktop>
      <div className="flex h-full w-full overflow-hidden lg:hidden">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
        >
          {depoimentList.map((depoiment) => (
            <SwiperSlide key={depoiment.name}>
              <div className="flex w-full justify-center px-5 py-5">
                <DepoimentCard
                  description={depoiment.description}
                  image={depoiment.image}
                  name={depoiment.name}
                  office={depoiment.office}
                  stars={depoiment.stars}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
