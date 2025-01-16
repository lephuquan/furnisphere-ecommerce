import React from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';
import CategoryNav from './CategoryNav';
import HighlightsNav from './HighlightsNav';
import HotDealsNav from './HotDealsNav';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sticky top-0 z-50 w-full bg-white">
      <HotDealsNav className="order-first lg:order-last" />
      <TopNav className="hidden lg:block"/>
      <MainNav />
      <HighlightsNav className="hidden md:block" />
      <CategoryNav className="hidden md:block"/>
    </header>
  );
};

export default Header;
