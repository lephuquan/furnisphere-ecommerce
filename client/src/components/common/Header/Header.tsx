import React from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';
import CategoryNav from './CategoryNav';
import HighlightsNav from './HighlightsNav';
import HotDealsNav from './HotDealsNav';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <TopNav />
      <MainNav />
      <HighlightsNav />
      <CategoryNav />
    </header>
  );
};

export default Header;
