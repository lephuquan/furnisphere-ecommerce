import React from 'react';
import { ChevronDoubleRight } from '../../icons';

const HotDealsNav = () => {
  return (
    <nav className="h-14 bg-[#485164]">
      <div className="container mx-auto h-full items-center">
        <ul className="flex h-full items-center justify-between text-sm font-medium text-white">
          <li className="flex-1 items-center border-r-2 border-white leading-3 cursor-pointer">
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-center">
                <p>Up to 60% off Warehouse Sale</p>
                <p>Final Weekend!</p>
              </div>
              <ChevronDoubleRight className="size-4" />
            </div>
          </li>
          <li className="flex-1 items-center border-r-2 border-white leading-3 cursor-pointer">
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-center">
                <p>1500+ New Spring Arrivals</p>
              </div>
              <ChevronDoubleRight className="size-4" />
            </div>
          </li>
          <li className="flex-1 items-center border-r-2 border-white leading-3 cursor-pointer">
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-center">
                <p>Win a $20,000 Honeymoon Getaway</p>
              </div>
              <ChevronDoubleRight className="size-4" />
            </div>
          </li>
          <li className="flex-1 items-center leading-3 cursor-pointer">
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-center">
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
