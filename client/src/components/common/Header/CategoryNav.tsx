import React from 'react';

const CategoryNav: React.FC = () => {
  return (
    <nav className="border-b border-gray-200 bg-[#222]">
      <div className="container mx-auto">
        <ul className="flex justify-center">
          {[
            'Furniture',
            'Outdoor',
            'Tabletop & Bar',
            'Kitchen',
            'Bedding',
            'Bath',
            'Decor & Pillows',
            'Rugs',
            'Lighting',
            'Window',
            'Gifts',
            'SALE',
            'Furni&kids',
          ].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="block px-5 py-2"
              >
                <div
                  className={`border-b-2 border-transparent pb-1 text-sm font-medium ${item === 'SALE' ? 'text-red-500' : 'text-white'} hover:border-white`}
                >
                  {item}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
