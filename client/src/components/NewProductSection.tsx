import React from 'react';

const products = [
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_NA_SofasSectionals?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Sofa & sectionals',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_NA_CoffeeTables?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Coffee tables',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_NA_AccentChairs_v2?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Accent chairs',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_NA_Pillows?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Pillows',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_NA_Botanicals?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Botanicals',
  },
  {
    src: 'https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_NA_Lighting?bfc=on&wid=840&qlt=80&op_sharpen=1',
    title: 'Botanicals',
  },
];
const NewProductSection = () => {
  return (
    <>
      <img
        className="block w-full md:hidden"
        src="https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202452/1821/001/034.png"
        alt=""
      />
      <img
        className="hidden h-[5rem] w-full md:block"
        src="https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202452/3147/001/004.png"
        alt=""
      />
      <div className="flex aspect-[21/25] h-[23rem] w-full flex-row overflow-x-auto md:h-96 lg:h-[28rem] xl:h-[34rem] 2xl:h-[42rem]">
        {products.map((product, index) => (
          <div
            key={index}
            className="mr-2 flex h-[90%] w-[17rem]  shrink-0 flex-col items-center sm:w-[19rem] md:h-full md:w-52 lg:w-[18rem] xl:w-[22rem] 2xl:w-[26rem]"
          >
            <img className="h-full w-full" src={product.src} alt={product.title} />
            <p className="mt-2 font-helvetica text-base font-bold">
              {product.title}{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block size-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProductSection;
