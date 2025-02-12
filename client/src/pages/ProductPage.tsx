import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ProductPage() {
  const options = ['Most Relevant', 'Price, low to high', 'Price, high to low', 'New', 'Top Rate'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="flex w-full flex-col items-center space-y-4 lg:w-[95%]">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        {/* ProductTitle */}
        <div className="flex h-[4rem] w-full flex-row items-center justify-center">
          <div className="ml-2 w-3/5">
            <span className="text-2xl font-bold">Drinking Glasses</span>
          </div>
          <div className="flex h-full w-2/5 items-center justify-end">
            <span className="mr-3 lg:hidden">79 items</span>
          </div>
        </div>
        {/* FilterOptions */}
        <div className="flex h-[3rem] w-full flex-row items-center overflow-x-auto">
          <div className="ml-2 flex h-[80%] min-w-fit items-center justify-center space-x-2 border-r-2 border-gray px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <span className="inline">Filter & Sort</span>
          </div>
          <div className="ml-2 flex h-full min-w-fit flex-row items-center space-x-2">
            <div className="border-whtie flex h-[80%] min-w-fit items-center justify-center rounded-md border bg-gray p-2">
              <span>View All</span>
            </div>
            <div className="flex h-[80%] min-w-fit items-center justify-center rounded-md border border-gray bg-white p-2">
              <span>Free Pickup</span>
            </div>
            <div className="flex h-[80%] min-w-fit items-center justify-center rounded-md border border-gray bg-white p-2">
              <span>In Stock</span>
            </div>
            <div className="flex h-[80%] min-w-fit items-center justify-center rounded-md border border-gray bg-white p-2">
              <span>Ship Within 4 weeks</span>
            </div>
          </div>
          <div className="ml-auto flex hidden h-[90%] w-[15rem] flex-row items-center justify-center lg:flex">
            <span className="w-1/3">79 items</span>
            <div className="w-2/3">
              <select
                id="simple-select"
                value={selectedOption}
                onChange={handleChange}
                className="w-full  border border-gray-500 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                {options.map((option, index) => (
                  <option key={index} value={option} className="border text-[clamp(0.3rem,_3.5vw,_0.7rem)] border-gray-500 text-sm">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* ProductList */}
      </div>
    </div>
  );
}
