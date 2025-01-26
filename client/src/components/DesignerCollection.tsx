import React, { useEffect, useRef, useState } from 'react';
import ShopTheRoomBtn from './ShopTheRoomBtn';
import { BulletPointIcon } from './icons';

export default function DesignerCollection() {
  return (
    <>
      {/* Mobile screen */}
      <div className="block flex w-full flex-col items-center bg-neutral-100 px-4 py-6 md:hidden">
        <img
          className="h-auto w-full"
          src="https://cb.scene7.com/is/image/Crate/cb_mHP_20250101_6Botanicals?bfc=on&wid=708&qlt=80&op_sharpen=1"
          alt="Spring Style Edit"
        />
        <p className="mb-1 mt-1 text-lg font-semibold">@abigailahern</p>
        <div className="mb-2 text-center">
          <h1 className="text-2xl font-bold">new! the spring style edit</h1>
        </div>
        <div>
          <button className="rounded-full border-2 border-dark bg-white px-8 py-3 text-base font-bold text-dark transition">
            Shop the Collection
          </button>
        </div>
      </div>
      {/* PC screen */}
      <div className="flex hidden aspect-[46/25] w-full flex-col bg-[url('https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_SpringStyleEdit?bfc=on&wid=1440&qlt=80&op_sharpen=1')] bg-cover bg-center pt-[2.8vw] md:block">
        <div className="mb-3 ml-[4vw]">
          <h1 className="text-[2.6vw] font-bold text-white">the spring style edit</h1>
        </div>
        <div className="mb-8 ml-[4vw]">
          <button className="rounded-full bg-white px-[2vw] py-[0.5vw] text-[1.7vw] font-bold text-dark">
            Shop Now
          </button>
        </div>
        <div className="ml-[2.5vw] w-[23.5vw] text-[1.3vw] text-white">
          <p className="font-bold">
            <div className="inline-block">
              <BulletPointIcon className="mr-2 size-[1vw]" />
            </div>
            Exclusive! Abigail Ahern Collection
          </p>
          <p className="ml-[1.6vw] w-[22vw]">
            The British designer brings you elegant faux florals for the modern home.
          </p>
        </div>
      </div>
    </>
  );
}
