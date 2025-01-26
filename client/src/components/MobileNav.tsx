import React, { useState, useRef, useEffect } from 'react';
import { CancelIcon, PlusIcon, MinusIcon, NavbarsIcon } from './icons';
import MobileCategoryList from './MobileCategoryList';
import { navItems } from '../constants/navItems';

const MobileNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState<{ [key: string]: boolean }>({
    ecommerce: false,
    kanban: false,
    furniture: false,
  });
  const [selected, setSelected] = useState<'furnisphere' | 'furnikids' | null>(null);
  
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleDropdown = (key: string) => {
    setDropdownStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelect = (item: 'furnisphere' | 'furnikids') => {
    setSelected(item);
  };

  return (
    <>
      <button
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
        type="button"
      >
        <NavbarsIcon className="h-7 w-7" />
      </button>
      <aside 
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed left-0 top-0 z-40 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-full sm:w-96 md:w-96 lg:hidden`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-[#222]">
          <div className="mr-2 flex h-12 items-center justify-between">
            <a
              className="group ml-2 flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleSidebar}
              href="#"
            >
              <CancelIcon className="h-7 w-7" />
            </a>
            <div className="flex items-center gap-1 pr-3">
              <span className="cursor-pointer border-b-2 border-transparent font-helvetica text-sm text-white hover:border-gray-500">
                Orders
              </span>
              <span className="border-b-2 border-transparent text-sm text-white">&</span>
              <span className="cursor-pointer border-b-2 border-transparent font-helvetica text-sm text-white hover:border-gray-500">
                Sign In
              </span>
            </div>
          </div>
          <div className="mt-1 flex h-12 gap-2">
            <div
              className={`ml-2 flex flex-1 items-center justify-center border border-gray-400 ${selected === 'furnisphere' ? 'bg-white text-black' : 'bg-dark text-white'}`}
              onClick={() => handleSelect('furnisphere')}
            >
              <p className="font-helvetica text-lg font-bold">Furni&Sphere</p>
            </div>
            <div
              className={`mr-2 flex flex-1 items-center justify-center border border-gray-400 ${selected === 'furnikids' ? 'bg-white text-black' : 'bg-dark text-white'}`}
              onClick={() => handleSelect('furnikids')}
            >
              <p className="font-helvetica text-lg font-bold">Furni&Kids</p>
            </div>
          </div>

          {selected === 'furnisphere' ? (
            <MobileCategoryList
              navItems={navItems}
              dropdownStates={dropdownStates}
              toggleDropdown={toggleDropdown}
              selected={selected}
              handleSelect={handleSelect}
            />
          ) : (
            <MobileCategoryList
              navItems={navItems}
              dropdownStates={dropdownStates}
              toggleDropdown={toggleDropdown}
              selected={selected}
              handleSelect={handleSelect}
            />
          )}
        </div>
      </aside>
    </>
  );
};

export default MobileNav;
