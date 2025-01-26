import React from 'react';
import { PlusIcon, MinusIcon } from './icons';

interface SubCategoryProps {
  sections?: {
    title: string;
    items?: string[];
  }[];
  dropdownStates: { [key: string]: boolean };
  toggleDropdown: (key: string) => void;
}

const MobileSubCategory: React.FC<SubCategoryProps> = ({
  sections,
  dropdownStates,
  toggleDropdown,
}) => {
  return (
    <ul className="ml-8 space-y-5">
      {sections?.map((section) => (
        <li
          className="flex flex-wrap items-center justify-between"
          key={section.title}
          onClick={() => toggleDropdown(section.title.toLowerCase())}
        >
          <a href="#" className="w-5/6 font-helvetica text-base text-dark">
            {section.title}
          </a>
          {section.items &&
            section.items.length > 0 &&
            (dropdownStates[section.title.toLowerCase()] ? (
              <MinusIcon className="mr-8 size-4" />
            ) : (
              <PlusIcon className="mr-8 size-4" />
            ))}
          {dropdownStates[section.title.toLowerCase()] &&
            section.items &&
            section.items.length > 0 && (
              <ul className="ml-4 mt-3 w-full space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="font-helvetica text-base text-dark">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
        </li>
      ))}
    </ul>
  );
};

export default MobileSubCategory;
