import React from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';
import CategoryNav from './CategoryNav';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <TopNav />
      <MainNav />
      <CategoryNav />
    </header>
  );
};

export default Header;
