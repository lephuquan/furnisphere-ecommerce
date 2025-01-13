import React from 'react';

interface NavSection {
  title: string;
  links: string[];
}

interface CategoryDropdownProps {
  sections: NavSection[];
  dropdownImage?: {
    src: string;
    alt: string;
    description: string;
  };
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ sections, dropdownImage }) => {
  return (
    <div className="w-auto invisible absolute left-1/2 top-0  -translate-x-1/2 transform border border-[#ccc] bg-red-500 opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
      <div className=" mx-auto max-w-7xl px-4 py-8">
        <div className="flex justify-center">
          <div className="columns-4">
            {sections.map((section) => (
              <div className="mb-8 break-inside-avoid" key={section.title}>
                <h3 className="mb-2 font-medium text-gray-900">{section.title}</h3>
                <div className="flex flex-col">
                  {section.links.map((link) => (
                    <a key={link} href="#" className="py-1 text-gray-600 hover:text-gray-800">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            {dropdownImage && (
              <div className="col-span-1 my-[2rem]">
                <img src={dropdownImage.src} alt={dropdownImage.alt} />
                <p className="mt-[1rem] font-helvetica text-sm font-semibold">
                  {dropdownImage.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
