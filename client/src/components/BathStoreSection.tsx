import React from 'react';
import { MdPlayArrow } from 'react-icons/md';
import { DiamondIcon, RightArrow } from './icons';

export default function BathStoreSection() {
  return (
    <>
      {/* Mobile screen */}
      <div className="relative block flex w-full flex-col items-center justify-center md:hidden">
        <a href="/bath">
          <img
            src="https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202502/2953/001/010.jpg"
            alt=""
            className="w-full"
          />
          <img
            src="https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202502/2953/001/018.jpg"
            alt=""
            className="w-full"
          />
        </a>
      </div>

      {/* PC screen */}
      <div className="hidden aspect-[46/25] w-full justify-center px-4 md:flex md:flex-row">
        <a href="/bath" className="flex w-[65%] flex-row">
          <img
            src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202502/2953/001/029.jpg"
            alt=""
            className="aspect-[6/10] w-1/2"
          />
          <img
            src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202502/2953/001/027.jpg"
            alt=""
            className="aspect-[6/10] w-1/2"
          />
        </a>
        <div className="flex w-[35%] w-full flex-col items-center justify-center">
          <div className="flex h-[50%] items-center justify-center">
            <a href="/bath" className="flex flex-col items-center">
              <img
                src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202452/1821/001/051.jpg"
                alt=""
                className="w-[21vw] w-auto"
              />
              <div className="mt-2 flex flex-row items-center justify-center">
                <span className="text-[1.2vw]">BATH TOWELS </span>
                <RightArrow className="inline-block size-2 h-full" />
              </div>
            </a>
          </div>
          <div className="flex h-[50%] items-center justify-center">
            <a href="/bath" className="flex flex-col items-center">
              <img
                src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202452/1821/001/044.jpg"
                alt=""
                className="w-[21vw] w-auto"
              />

              <div className="mt-2 flex flex-row items-center justify-center">
                <span className="text-[1.2vw]"> BATH ACCESSORIES</span>
                <RightArrow className="inline-block size-2 h-full" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
