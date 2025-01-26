import React from 'react';
import { ChevronDoubleRight } from './icons';

interface HotDealsNavProps {
  className?: string;
}

const HotDealsNav: React.FC<HotDealsNavProps> = ({ className }) => {
  return (
    <nav className={`${className} h-14 w-full bg-[#485164]`}>
      <div className="h-full w-full items-center lg:mx-auto">
        <ul className="flex h-full w-full items-center justify-start overflow-x-auto lg:overscroll-none lg:whitespace-normal whitespace-nowrap text-sm font-medium text-white md:justify-between">
          <li className="mx-2 flex-none cursor-pointer items-center justify-center border-r-2 border-white px-2 leading-3 md:flex md:h-1/2 md:flex-1">
            <div className="flex h-full items-center justify-center gap-2">
              <div className="flex h-full flex-col items-center justify-center">
                <a href="/">
                  <p>Up to 60% off Warehouse Sale</p>
                  <p>Final Weekend!</p>
                </a>
              </div>
              <ChevronDoubleRight className="size-4" />
            </div>
          </li>

          <li className="mx-2 flex-none cursor-pointer items-center justify-center border-r-2 border-white px-2 leading-3 md:flex md:h-1/2 md:flex-1">
            <div className="flex h-full items-center justify-center gap-2">
              <div className="flex h-full flex-col items-center justify-center">
                <a href="/">
                  <p>1500+ New Spring Arrivals</p>
                </a>
              </div>
              <ChevronDoubleRight className="size-4" />
            </div>
          </li>
          <li className="mx-2 flex-none cursor-pointer items-center justify-center border-r-2 border-white px-2 leading-3 md:flex md:h-1/2 md:flex-1">
            <div className="flex h-full items-center justify-center gap-2">
              <div className="flex h-full flex-col items-center justify-center">
                <a href="/">
                  <p>Win a $20,000 Honeymoon Getaway</p>
                </a>
              </div>
              <ChevronDoubleRight className="size-4" />
            </div>
          </li>
          <li className="x-2 flex-none cursor-pointer items-center justify-center px-2 leading-3 md:flex md:h-1/2 md:flex-1">
            <div className="flex h-full items-center justify-center gap-2">
              <div className="flex h-full flex-col items-center justify-center">
                <p>Up to 20% off Bedding + Ships Free</p>
                <p>Final Weekend!</p>
              </div>
              <ChevronDoubleRight className="size-4" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HotDealsNav;
