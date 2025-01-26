import React from 'react';
import { DiamondIcon } from './icons';
import { MdPlayArrow } from 'react-icons/md';
import StarGrowth from './StarGrowth';

export default function DesignBooking() {
  return (
    <>
      {/* Mobile screen */}
      <div className="relative block flex w-full flex-col items-center justify-center md:hidden">
        <div className="relative flex aspect-[15/24] w-full flex-col items-center bg-[url('https://cb.scene7.com/is/image/Crate/cb_mHP_20250101_8Bedroom?bfc=on&wid=780&qlt=80&op_sharpen=1')] bg-cover bg-center pt-[40vw]">
          <button className="absolute right-[4vw] top-[4vw] flex h-[9vw] w-[33vw] items-center justify-center rounded-full bg-white px-2 text-base font-bold text-dark transition">
            <DiamondIcon className="mr-[1vw] inline-block size-[5vw]" />
            <span className="text-[3.5vw]">New Arrival</span>
          </button>
          <span className="text-[7.5vw] font-bold text-white">sustainable & buit to last</span>
          <button className="mt-[3vw] flex h-[10vw] w-[65vw] items-center justify-center rounded-full bg-white text-[4.5vw] font-bold text-dark transition">
            <span>Shop Bedroom Furniture</span>
          </button>
          <div className="absolute bottom-[-6.5vw] block h-[10vw] w-[1px] bg-[#181818]"></div>
        </div>
        <span className="mt-[9vw] text-[3.5vw] font-bold">New Finish!</span>
        <span className="w-[53vw] text-center text-[3.4vw]">
          Our top-rated Keane collection, now available in rich black{' '}
          <MdPlayArrow className="inline h-[7vw] pb-[1vw]" />
        </span>
      </div>

      {/* PC screen */}
      <div className="relative flex hidden aspect-[46/25] w-full flex-col bg-[url('https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_Bedroom?bfc=on&wid=1440&qlt=80&op_sharpen=1')] bg-cover bg-center md:block">
        <button className="absolute left-[2vw] top-[2vw] flex h-[2.9vw] w-[14vw] items-center justify-center rounded-full bg-white px-2">
          <DiamondIcon className="mr-[1vw] inline-block size-[2vw]" />
          <span className="text-[1.5vw] font-bold text-dark">New Arrival</span>
        </button>
        <div className="mt-[7vw] flex w-full flex-col items-center">
          <span className="text-[2.6vw] font-bold text-white">sustainable & buit to last</span>
          <button className="mt-[1vw] flex h-[3.7vw] w-[22vw] items-center justify-center rounded-full bg-white font-bold transition">
            <span className="text-[1.6vw] text-dark">Shop Bedroom Furniture</span>
          </button>
        </div>
        <div className="absolute bottom-[3vw] left-[4vw] flex flex-col items-center text-white">
          <StarGrowth />
          <span className="text-[1.9vw] font-bold">New Finish!</span>
          <span className="w-[29vw] text-center text-[1.7vw]">
            Our top-rated Keane collection, now available in rich black.
          </span>
        </div>
      </div>
    </>
  );
}
