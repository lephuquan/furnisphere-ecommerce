import React from 'react';

const CategoryNav: React.FC = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto">
        <ul className="flex">
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
          ].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="block px-5 py-4 font-medium text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
