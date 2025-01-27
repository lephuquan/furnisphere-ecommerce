import React from 'react';
import { RightArrow } from './icons';

const productsOfMobile = [
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250115_Celebrate_Easter?bfc=on&wid=472&qlt=80&op_sharpen=1',
    title: 'Glassware',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_NA_Lighting?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Lighting',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250115_Celebrate_Passover?bfc=on&wid=472&qlt=80&op_sharpen=1',
    title: 'Dinnerware collections',
  },
];
export default function DinnerCollections() {
  return (
    <>
      {/* Mobile screen */}
      <div className="block flex aspect-[21/25] h-[23rem] w-full flex-row overflow-x-auto md:hidden md:h-96 lg:h-[28rem] xl:h-[34rem] 2xl:h-[42rem]">
        {productsOfMobile.map((product, index) => (
          <div
            key={index}
            className="mr-2 flex h-[90%] w-[17rem] shrink-0 flex-col items-center sm:w-[19rem] md:h-full md:w-52 lg:w-[18rem] xl:w-[22rem] 2xl:w-[26rem]"
          >
            <img className="h-full w-full" src={product.src} alt={product.title} />
            <p className="mt-2 flex flex-row items-center font-helvetica text-sm">
              {product.title.toUpperCase()}
              <RightArrow className="inline-block size-3 h-full" />
            </p>
          </div>
        ))}
      </div>
      {/* PC screen */}
      <div className="hidden w-4/5 md:flex  justify-center">
        <div className="flex flex-row items-center space-x-4">
          <div className="flex w-1/2 flex-col items-center">
            <img src={productsOfMobile[0].src} alt={productsOfMobile[0].title} />
            <span className="text-lg">
              {productsOfMobile[0].title}
              <RightArrow className="inline-block size-[1vw]" />
            </span>
          </div>
          <div className="flex w-1/2 flex-col items-center 2xl:items-start">
            <img
              className="w-[30vw] 2xl:w-[26vw]"
              src={productsOfMobile[2].src}
              alt={productsOfMobile[1].title}
            />
            <span className="text-lg 2xl:ml-[7rem]">
              {productsOfMobile[2].title}
              <RightArrow className="inline-block size-[1vw] h-full" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
