import React from 'react';

interface TopNavProps {
  className?: string;
}

const TopNav: React.FC<TopNavProps> = ({ className }) => {
  return (
    <div className={`${className} bg-[rgb(255,255,255)] px-5 py-2`}>
      <div className="container mx-auto flex items-center justify-between border-b border-gray-300">
        <div className="flex gap-5">
          <a
            href="/"
            className="border-b-4 border-[#000] pb-2 font-helvetica text-sm font-bold text-[#8C8989] text-black"
          >
            Furni&Sphere
          </a>
          <a
            href="/kids"
            className="border-b-4 border-transparent pb-2 font-helvetica text-sm font-bold text-[#8C8989] hover:border-[#000] hover:text-black"
          >
            Furni&kids
          </a>
          <a
            href="/cb2"
            className="border-b-4 border-transparent pb-2 font-helvetica text-sm font-bold text-[#8C8989] hover:border-[#000] hover:text-black"
          >
            CB2
          </a>
          <div className="border-b-4 border-transparent pb-2 font-helvetica text-sm font-bold text-[#8C8989] hover:border-[#000] hover:text-black">
            <a href="/hudson" className="border-r border-[#8C8989] pr-1">
              HUDSON
            </a>
            <a href="/grace" className="border-l border-[#8C8989] pl-1">
              GRACE
            </a>
          </div>
          <div className="border-b-4 border-transparent hover:border-[#000]">
            <img
              src="https://images.crateandbarrel.com/is/image/Crate/flag_US"
              alt="US"
              className="h-auto w-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
