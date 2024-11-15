import Image from 'next/image';

import Star from '@/style/icons/star';

export interface DepoimentProps {
  name: string;
  office: string;
  stars: number;
  description: string;
  image: string;
}

export default function DepoimentCard({ name, office, stars, description, image }: DepoimentProps) {
  console.log('star', stars);
  const starArray = [1, 2, 3, 4, 5];
  return (
    <div className="border-visiu-gray-50 shadow-visiu-17 mb-4 flex h-auto w-[25.75rem] snap-center snap-always flex-col gap-3 rounded-[.625rem] border-[1px] bg-white p-[2rem] lg:h-[23.188rem] lg:gap-[2rem]">
      <div className="flex flex-col gap-4">
        <span className="flex pb-0 pt-1 lg:pb-2">
          {starArray.map((starValue) => {
            if (starValue > stars) {
              return (
                <Star
                  key={starValue}
                  fill="#cccc"
                />
              );
            }
            return <Star key={starValue} />;
          })}
        </span>
        <p className="text-left font-poppins text-xs font-normal text-black md:text-sm">
          {description}
        </p>
      </div>
      <div className="flex gap-4">
        <figure className="shadow-visiu-18 relative flex h-12 w-12 overflow-hidden rounded-full md:h-[4rem] md:w-[4rem]">
          <Image
            loading="lazy"
            src={image}
            alt="foto usuário"
            fill
            sizes="100vw"
          />
        </figure>
        <span className="flex flex-col items-start">
          <h1 className="font-poppins text-sm font-semibold text-black md:text-lg">{name}</h1>
          <h1 className="font-poppins text-xs font-normal text-[#475569] md:text-sm">{office}</h1>
        </span>
      </div>
    </div>
  );
}
