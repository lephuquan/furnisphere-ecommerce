import React from 'react';

const products = [
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_SpringStyleEdit_Candles?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Botanicals',
    price: 'Starting at $16.95',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_SpringStyleEdit_Botanicals?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Botanicals',
    price: 'Starting at $16.95',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_mHP_20250101_7DecorSlide3_v2?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Botanicals',
    price: 'Starting at $16.95',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_SpringStyleEdit_Lighting?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Botanicals',
    price: 'Starting at $16.95',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_SpringStyleEdit_CandleHolders?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Botanicals',
    price: 'Starting at $16.95',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_mHP_20250101_7DecorSlide6_v2?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Botanicals',
    price: 'Starting at $16.95',
  },
];

const PromotionalSection = () => {
  return (
    <>
      <div className="xl auto flex h-auto max-h-[680px] w-full items-center justify-center lg:mb-3 lg:mt-0 lg:h-auto">
        <a href="/">
          <img
            className="block h-full w-full md:hidden"
            src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202503/1725/001/001.png"
            alt="deals"
          />
          <img
            className="hidden md:block"
            src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202503/1725/001/002.png"
            alt="deals"
          />
        </a>
      </div>
      <div className="flex h-[30rem] w-full flex-row overflow-x-auto md:h-96 lg:h-[28rem] xl:h-[34rem] 2xl:h-[42rem]">
        {products.map((product, index) => (
          <div
            key={index}
            className="mr-2 flex h-full w-[17rem] shrink-0 flex-col items-center sm:w-[19rem] md:h-full md:w-52 lg:w-[18rem] xl:w-[22rem] 2xl:w-[26rem]"
          >
            <img className="h-full w-full" src={product.src} alt={product.title} />
            <p className="mt-2 font-helvetica text-base font-bold">{product.title}</p>
            <p className="font-helvetica text-base">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PromotionalSection;
