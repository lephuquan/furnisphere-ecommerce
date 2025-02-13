import React from 'react';
import { FaUser, FaMapMarkerAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { LogoIcon, SearchIcon } from '../components/icons';
import MobileNav from '../components/MobileNav';
import HighlightsNav from '../components/HighlightsNav';
import CategoryNav from '../components/CategoryNav';

const Sidebar: React.FC = () => {
  return (
    <>
      {/* PC Sidebar */}
      <div className="hidden px-5 py-4 lg:block">
        <div className="mx-auto flex items-center justify-between">
          <div className="max-w-md flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="What can we help you find?"
                className="w-full rounded-md border border-gray-400 px-4 py-2 pr-10 focus:border-gray-500 focus:outline-none"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="mx-8">
            <LogoIcon className="h-10" />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer border-b-2 border-transparent font-helvetica text-sm text-[#222] hover:border-gray-500">
                Orders
              </span>
              <span className="border-b-2 border-transparent text-sm">&</span>
              <span className="cursor-pointer border-b-2 border-transparent font-helvetica text-sm text-[#222] hover:border-gray-500">
                Sign In
              </span>
            </div>
            <button className="flex items-center gap-2 border-b-4 border-transparent pb-1 hover:border-[#222]">
              <FaUser />
            </button>
            <button className="flex items-center gap-2 border-b-4 border-transparent pb-1 hover:border-[#222]">
              <FaMapMarkerAlt />
            </button>
            <div className="flex items-center gap-2">
              <button className="border-b-4 border-transparent pb-1 hover:border-[#222]">
                <FaHeart />
              </button>
              <span className="border-b-4 border-transparent pb-1">2</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="border-b-4 border-transparent pb-1 hover:border-[#222]">
                <FaShoppingCart />
              </button>
              <span className="border-b-4 border-transparent pb-1">2</span>
            </div>
          </div>
        </div>
      </div>
      <HighlightsNav className="hidden lg:block" />
      <CategoryNav className="hidden lg:block" />

      {/* Mobile Sidebar */}
      <div className="flex w-full items-center justify-between px-2 py-4 lg:hidden">
        <div className="flex w-full flex-1 items-center justify-start gap-1">
          <div className="h-full items-center gap-2">
            <MobileNav />
          </div>
          <div className="h-full items-center gap-2">
            <button className="ml-1 flex h-11 w-auto items-center gap-2 border-b-4 border-transparent pb-1 hover:border-[#222]">
              <FaMapMarkerAlt className="my-auto mt-2 h-6 w-6 lg:h-10 lg:w-10" />
            </button>
          </div>
        </div>
        <div className="flex-2 flex w-full items-center justify-center gap-1">
          <div className="flex items-center justify-center">
            <LogoIcon className="h-10 w-full" />
          </div>
        </div>
        <div className="flex w-full flex-1 items-center justify-end gap-1">
          <button className="mr-3 h-11 w-auto items-center gap-2 border-b-4 border-transparent pb-1 hover:border-[#222]">
            <FaUser className="h-6 w-6 lg:h-10 lg:w-10" />
          </button>
          <button className="mr-2 h-11 w-auto items-center gap-2 border-b-4 border-transparent pb-1 hover:border-[#222]">
            <FaShoppingCart className="h-6 w-6 lg:h-10 lg:w-10" />
          </button>
        </div>
      </div>
      <div className="w-full px-5 py-2 bg-gray-200 border-y border-gray-400 lg:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="What can we help you find?"
            className="h-12 w-full rounded-md border border-gray-500 px-4 py-2 pr-10 focus:border-gray-500 focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <SearchIcon className="h-7 w-7 text-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
