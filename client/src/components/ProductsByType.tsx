import React from 'react';

interface ProductsByTypeProps {
  productsByType: {
    name: string;
    link: string;
    image: string;
  }[];
}

export default function ProductsByType({ productsByType }: ProductsByTypeProps) {
  return (
    <>
      {/* Header */}
      <div className="flex h-[1rem] w-full items-center justify-between px-4 pt-8">
        <span className="text-2xl font-bold">Drinking Glasses</span>
        <span className="mr-3 lg:hidden">79 items</span>
      </div>
      {/* Scrollable Product List */}
      <div className="relative w-full">
        <div className="scrollbar-hide flex w-full items-center space-x-1 overflow-x-auto px-4">
          {productsByType.map((product, index) => (
            <div key={index} className="min-w-[9rem]">
              <a href={product.link} className="block text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-45 w-full object-cover shadow-md"
                />
                <span className="mt-2 block text-sm font-medium">{product.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
