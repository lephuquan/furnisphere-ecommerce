import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mb-10 mt-5">
      <div className="flex w-full flex-col items-center">
        {/* footer section 1 */}
        <div className="mx-4 flex flex-col items-start justify-center xl:w-3/4">
          <span className="mb-1 text-[clamp(0.3rem,_4vw,_1rem)] font-bold">
            CRATE & BARREL HISTORY
          </span>
          <span className="font-Helvetica inline-block text-[clamp(0.2rem,_4vw,_1rem)]">
            With over 100 stores in North America and franchise partners in 9 countries, Crate &amp;
            Barrel,{' '}
            <a href="#" className="underline">
              Crate &amp; Kids
            </a>{' '}
            and CB2 are the international destination for lasting, modern{' '}
            <a href="#" className="underline">
              furniture
            </a>
            , textiles,{' '}
            <a href="#" className="underline">
              kitchen
            </a>
            ,
            <a href="#" className="underline">
              {' '}
              tableware
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              home decor
            </a>
            .{' '}
            <button className="text-[clamp(0.2rem,_4vw,_1rem)]">
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 inline-block size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
