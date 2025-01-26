import React from 'react';
import TopNav from '../components/TopNav';
import HotDealsNav from '../components/HotDealsNav';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-col bg-white">
      <HotDealsNav className="order-first lg:order-last" />
      <TopNav className="hidden lg:block" />
      <Sidebar />
    </header>
  );
};

export default Header;
