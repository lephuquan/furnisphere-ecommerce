import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../constants/navItems';

export default function Breadcrumbs() {
  return (
    <div className="flex h-10 h-[3rem] w-full items-center overflow-x-auto border-b-2 border-gray-500">
      <div className="ml-2 flex w-full flex-row gap-4 text-gray-neutral">
        <span className="w-3/4 lg:underline">
          Drinkware & bar Tools
          <span className="mx-1 lg:hidden">/</span>
          <span className="mx-1 lg:inline-block"> {' > '} </span> Wine Glasses
        </span>
      </div>
    </div>
  );
}
