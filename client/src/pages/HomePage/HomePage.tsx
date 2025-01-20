import React from 'react';
import { ChevronDoubleRight } from '../../components/icons';

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

export default function HomePage() {
  return (
    <div className="flex h-[3000px] min-h-screen w-full flex-col items-center space-y-2 bg-gray-100 md:pt-5 lg:pt-1">
      {/* SS1 */}
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

      {/* SS2 */}
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

      {/* SS3 */}
      <div className="flex h-auto w-full justify-center">
        {/* Mobile video */}
        <div
          className="block aspect-[19/25] w-full md:hidden"
          data-style="vimeo-video"
          data-vimeo-initialized="true"
        >
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <iframe
              className="h-full w-full"
              src="https://player.vimeo.com/video/1037970705?h=da21c34104&amp;autoplay=1&amp;title=0&amp;byline=0&amp;muted=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="W25_kravet HP1_D_1680w x 970h_120524"
              data-ready="true"
              style={{ pointerEvents: 'none' }}
            ></iframe>
          </a>
        </div>

        {/* PC video */}
        <div className="hidden aspect-[43/25] w-full md:block">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <iframe
              className="h-full w-full"
              src="https://player.vimeo.com/video/1036505667?h=6d3daa96b8&amp;autoplay=1&amp;title=0&amp;byline=0&amp;muted=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="W25_kravet HP1_D_1680w x 970h_120524"
              data-ready="true"
              style={{ pointerEvents: 'none' }}
            ></iframe>
          </a>
        </div>
      </div>
    </div>
  );
}
