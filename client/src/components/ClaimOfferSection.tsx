import React from 'react';

export default function ClaimOfferSection() {
  return (
    <div className="flex h-[14rem] w-full items-center justify-center bg-dark text-white lg:h-[8rem]">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10">
        <div className="flex flex-col items-center justify-center">
          <span className="font-Helvetica text-[clamp(0.3rem,_10vw,_1.5rem)] font-bold">
            Save 10% off full-price items*
          </span>
          <span>Get alerts about new items, sales, and more.</span>
        </div>
        <div className="mt-3 flex h-[3rem] w-[10rem] items-center justify-center bg-white text-dark">
          <span className="font-Helvetica text-[clamp(0.3rem,_3.5vw,_0.8rem)] font-semibold lg:font-bold">
            CLAIM OFFER
          </span>
        </div>
      </div>
    </div>
  );
}
