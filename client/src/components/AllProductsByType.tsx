import React, { useRef, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { HeartIcon } from './icons';

interface AllProductsByTypeProps {
    allProducts: {
    id: number;
    label: string;
    name: string;
    price: string;
    benefits: string[];
    images: string[];
  }[];
}

export default function AllProductsByType({ allProducts }: AllProductsByTypeProps) {
  const [currentIndexes, setCurrentIndexes] = useState<{ [key: number]: number }>(() =>
    allProducts.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );

  const touchStartX = useRef<{ [key: number]: number }>({});
  const touchEndX = useRef<{ [key: number]: number }>({});

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, productId: number) => {
    touchStartX.current[productId] = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>, productId: number) => {
    touchEndX.current[productId] = e.touches[0].clientX;
  };

  const handleTouchEnd = (productId: number, totalImages: number) => {
    const distance = (touchStartX.current[productId] || 0) - (touchEndX.current[productId] || 0);
    setCurrentIndexes((prev) => {
      const currentIndex = prev[productId] || 0;
      if (distance > 50 && currentIndex < totalImages - 1) {
        return { ...prev, [productId]: currentIndex + 1 };
      } else if (distance < -50 && currentIndex > 0) {
        return { ...prev, [productId]: currentIndex - 1 };
      }
      return prev;
    });
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-x-1 gap-y-4">
        {allProducts.map((product) => (
          <div key={product.id} className="relative overflow-hidden">
            {/* Ảnh sản phẩm */}
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${(currentIndexes[product.id] || 0) * 100}%)` }}
              onTouchStart={(e) => handleTouchStart(e, product.id)}
              onTouchMove={(e) => handleTouchMove(e, product.id)}
              onTouchEnd={() => handleTouchEnd(product.id, product.images.length)}
            >
              {product.images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <img src={image} alt={product.name} className="h-54 w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="absolute right-2 top-2">
              <HeartIcon className="h-8 w-8 p-1" />
            </div>
            {/* Dots Indicator (Thanh trượt) */}
            <div className="h-[0.15rem] w-full overflow-hidden rounded-md bg-gray-300">
              <div
                className="h-2 bg-black transition-all duration-300"
                style={{
                  width: `${100 / product.images.length}%`,
                  transform: `translateX(${(currentIndexes[product.id] || 0) * 100}%)`,
                }}
              ></div>
            </div>

            {/* Product information */}
            <div className="ml-2 mt-2">
              <span className='block  font-bold text-[clamp(0.3rem,_3.5vw,_0.9rem)]'>{product.label}</span>
              <span className='block text-[clamp(0.3rem,_4vw,_1rem)]'> {product.name}</span>
              <span className='font-bold text-[clamp(0.3rem,_3.9vw,_1rem)]'>{product.price}</span>
              <div className='text-red-500 text-[clamp(0.3rem,_3.5vw,_1rem)]'>
                {product.benefits.map((benefits, index) => (
                  <span key={index} className=" block">
                    {benefits}
                  </span> 
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
