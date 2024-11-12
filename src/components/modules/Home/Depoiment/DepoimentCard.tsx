import Image from 'next/image';

import Star from '@/style/icons/star';

export interface CardPersonProps {
  name: string;
  office: string;
  stars: number;
  description: string;
  image: string;
}

export default function DepoimentCard({
  name,
  office,
  stars,
  description,
  image
}: CardPersonProps) {
  const starArray = [1, 2, 3, 4, 5];
  return (
    <div className="border-visiu-gray-50 shadow-visiu-17 mb-4 flex h-[23.188rem] w-[25.75rem] snap-center snap-always flex-col gap-3 gap-[2rem] rounded-[.625rem] border-[1px] bg-white p-[2rem]">
      <div className="flex flex-col gap-4">
        <span className="flex pb-2 pt-1">
          {starArray.map((starValue) => {
            return (
              <Star
                key={starValue}
                className={`text-base ${
                  starValue > stars ? 'text-visiu-gray-50' : 'text-visiu-yellow-100'
                }`}
              />
              // <VscStarFull
              //   key={starValue}
              //   className={`text-base ${
              //     starValue > stars ? 'text-visiu-gray-50' : 'text-visiu-yellow-100'
              //   }`}
              // />
            );
          })}
        </span>
        <p className="font-poppins text-sm font-normal text-black">{description}</p>
      </div>
      <div className="flex gap-4">
        <figure className="shadow-visiu-18 relative flex h-[4rem] min-w-[4rem] overflow-hidden rounded-full">
          <Image
            loading="lazy"
            src={image}
            alt="foto usuário"
            fill
            object-fit="cover"
          />
        </figure>
        <span className="flex flex-col">
          <h1 className="font-poppins text-lg font-semibold text-black">{name}</h1>
          <h1 className="font-poppins text-sm font-normal text-[#475569]">{office}</h1>
        </span>
      </div>
    </div>
  );
}
