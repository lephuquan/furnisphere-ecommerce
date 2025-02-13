import React from 'react';

export default function Breadcrumbs() {
  return (
    <div className="flex h-10 h-[3rem] w-full items-center overflow-x-auto border-b border-gray-500">
      <div className="ml-2 flex w-full flex-row gap-4 text-gray-neutral">
        <span className="lg:underline">Drinkware & bar Tools</span>
        <span className="mx-1 lg:hidden">/</span>
        <span className="mx-1 hidden lg:inline-block"> {' > '} </span>
        <span className="border-b-2 border-gray-500">Wine Glasses</span>
      </div>
    </div>
  );
}
