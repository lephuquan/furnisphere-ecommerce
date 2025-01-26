import React from 'react';
import { AnimationTransportIcon, BulletPointIcon, DiamondIcon } from './icons';
import { MdPlayArrow } from 'react-icons/md';
import StarGrowth from './StarGrowth';
import { HiOutlineBell } from 'react-icons/hi';

export default function ShopStoreFuniture() {
  return (
    <>
      {/* Mobile screen */}
      <div className="block flex w-full flex-col items-center md:hidden">
        <div className="relative flex w-full flex-col items-center justify-center">
          {/* Video background */}
          <video
            className="absolute left-0 top-0 h-full w-full object-cover px-4"
            src="https://s7d5.scene7.com/is/content/Crate/Video/cb_mHP_20250101_Bedding.mp4"
            autoPlay
            loop
            muted
            playsInline // Iphone
            webkit-playsinline="true" // Iphone
          ></video>

          {/* Video content */}
          <div className="relative z-10 flex aspect-[15/24] w-full flex-col items-center pt-[40vw]">
            <button className="absolute right-[10vw] top-[4vw] flex h-[8vw] w-[31vw] items-center justify-center rounded-full bg-white px-1 text-base font-bold text-dark transition">
              <span className="inline-block">
                <AnimationTransportIcon className="mr-[2vw] inline-block h-full" />
                <span className="inline-block text-[3.5vw]">Ships Free</span>
              </span>
            </button>
          </div>
        </div>
        {/* Behind video content */}
        <span className="mt-[2vw] text-[7vw] font-bold">for your best rest ever</span>
        <button className="mt-[2vw] rounded-full border border-dark bg-white px-[5vw] py-[1vw] text-base font-bold text-dark transition">
          Shop All Bedding
        </button>
      </div>

      {/* PC screen */}
      <div className="relative flex hidden aspect-[46/23] w-full flex-col bg-[url('https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_Bedding?bfc=on&wid=1376&qlt=80&op_sharpen=1')] bg-cover bg-center md:block">
        <button className="absolute right-[2vw] top-[2vw] flex h-[3.5vw] w-[13vw] items-center justify-center rounded-full bg-white px-2">
          <AnimationTransportIcon className="mr-[1vw] inline-block flex h-full items-center" />
          <span className="text-center text-[1.5vw] font-bold text-dark">Ships Free</span>
        </button>
        <div className="absolute top-[7.5vw] flex w-[19vw] flex-col items-center justify-center text-[1.3vw] text-white">
          <img
            className="brightness-100 invert" //[invert brightness-10] filter from black to white
            src="https://cb.scene7.com/is/content/Crate/svg-icon-csr-bug-organic"
            alt="tree icon"
          />
          <p className="mt-[1.2vw] w-[12vw] text-center text-[1.4vw] font-bold">
            <BulletPointIcon className="mr-2 inline-block size-[1vw]" />
            <span>New Sunwashed Hues</span>
          </p>
          <p className="ml-[1.6vw] w-[9vw]">
            Organic cotton, natural linen, earth-friendly hemp & more.
          </p>
        </div>
      </div>
    </>
  );
}
