import React from 'react';

const HighlightsNav: React.FC = () => {
  return (
    <nav>
      <div className="container mx-auto"></div>
      <ul className="flex justify-center ">
        {[
          'NEW!',
          'WEDDING',
          'FREE DESIGN SERVICE',
          'TRADE PROGRAM',
          'IN-TOCK',
          'BEST SELLERS',
          'LUNAR NEW YEAR',
          "VALENTINE'S DAY",
        ].map((item) => (
          <li key={item}>
            <a
              href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="block px-5 py-1 text-xs font-semibold font-helvetica text-gray-700 "
            >
              <div className='hover:bg-gray-100 border-b-2 border-transparent pb-1 hover:border-[#222]'>{item}</div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HighlightsNav;
