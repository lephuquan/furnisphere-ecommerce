import React from 'react';

interface NavSection {
  title: string;
  items?: string[];
}

interface CategoryDropdownProps {
  sections: NavSection[];
  dropdownImage?: {
    src: string;
    alt: string;
    description: string;
    CollectionesAndPromotiones?: {
      title: string;
      link?: string;
    }[];
  };
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ sections, dropdownImage }) => {
  return (
    <div className="invisible absolute left-1/2 w-[70rem] -translate-x-1/2 transform border border-[#ccc] bg-white opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100 max-h-[25rem] overflow-y-scroll ">
      <div className="mx-[2rem] max-w-7xl px-4 py-8">
        <div className="flex justify-center">
          <div className="columns-4">
            {sections.map((section) => (
              <div className="font-helvetica mb-4 break-inside-avoid" key={section.title}>
                <h3 className="mb-2 hover:underline hover:decoration-gray-900 text-sm font-bold text-gray-900">{section.title}</h3>
                <div className="flex flex-col">
                  {section.items ? (
                    section.items.map((link) => (
                      <a key={link} href="#" className="py-1 text-gray-600 text-sm hover:underline hover:decoration-gray-600">
                        {link}
                      </a>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
            {dropdownImage && (
              <div className="col-span-1 my-[2rem]">
                <img src={dropdownImage.src} alt={dropdownImage.alt} />
                <p className="mt-[1rem] font-helvetica text-sm font-semibold">
                  {dropdownImage.description}
                </p>
                {dropdownImage.CollectionesAndPromotiones && (
                  <div className="flex flex-col">
                    {dropdownImage.CollectionesAndPromotiones.map((promotion) => (
                      <a key={promotion.title} href={promotion.link} className="py-1 text-gray-600 text-sm hover:underline hover:decoration-gray-600">
                        {promotion.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
