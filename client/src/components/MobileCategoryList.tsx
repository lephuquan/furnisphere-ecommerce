import React from 'react';
import { PlusIcon, MinusIcon } from './icons';
import MobileSubCategory from './MobileSubCategoryList';

interface NavItem {
  label: string;
  link: string;
  dropdownContent?: {
    sections: {
      title: string;
      items?: string[];
    }[];
    dropdownImage?: {
      src: string;
      alt: string;
      description: string;
      CollectionesAndPromotiones?: {
        title: string;
        link?: string;
      }[];
    };
  };
}

interface MobileCategoryListProps {
  navItems: NavItem[];
  dropdownStates: { [key: string]: boolean };
  toggleDropdown: (key: string) => void;
  selected: 'furnisphere' | 'furnikids' | null;
  handleSelect: (item: 'furnisphere' | 'furnikids') => void;
}

const MobileCategoryList: React.FC<MobileCategoryListProps> = ({
  navItems,
  dropdownStates,
  toggleDropdown,
  selected,
  handleSelect,
}) => {
  return (
    <ul id="category-l" className="z-10 h-full space-y-4 overflow-y-auto bg-white font-medium">
      {navItems.map((item) => (
        <li className="ml-2" key={item.label}>
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                toggleDropdown(item.label.toLowerCase());
                handleSelect(item.label.toLowerCase() as 'furnisphere' | 'furnikids');
              }}
              type="button"
              className={`group flex w-full items-center p-2 font-helvetica text-base font-bold text-gray-900 transition dark:text-dark ${selected === item.label.toLowerCase() ? 'underline' : ''}`}
            >
              {item.label}
            </button>
            {dropdownStates[item.label.toLowerCase()] ? (
              <MinusIcon className="size-7 w-10 pr-2" />
            ) : (
              <PlusIcon className="size-7 w-10 pr-2" />
            )}
          </div>
          {dropdownStates[item.label.toLowerCase()] && (
            <MobileSubCategory
              sections={item.dropdownContent?.sections}
              dropdownStates={dropdownStates}
              toggleDropdown={toggleDropdown}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileCategoryList;
