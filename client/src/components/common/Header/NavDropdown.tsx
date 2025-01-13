import React from 'react';

interface NavSection {
  title?: string;
  items?: string[];
  dropdownImage?: {
    src: string,
    alt: string,
    description: string,
  },
}

interface NavDropdownProps {
  sections: NavSection[];
  dropdownImage?: {
    src: string,
    alt: string,
    description: string,
  },
}

const NavDropdown: React.FC<NavDropdownProps> = ({ sections, dropdownImage }) => {
  return (
    <div className="invisible absolute left-1/2 w-4/5 -translate-x-1/2 border border-[#ccc] bg-white opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
      <div className="mx-[5rem]">
        <div className="flex justify-center gap-[2rem]">
          {sections.map((section) => (
            <div className="my-[2rem] flex flex-col items-start font-helvetica" key={section.title}>
              <h3 className="mb-4 flex font-bold text-base underline min-w-max flex-shrink-0">{section.title}</h3>
              <ul className="space-y-2">
                {section.items ? (
                  section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 text-sm hover:underline hover:decoration-gray-600">
                        {item}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>No items available</li>
                )}
              </ul>
            </div>
          ))}
          <div className="col-span-1 my-[2rem] w-[20rem]">
            <img src={dropdownImage?.src} alt={dropdownImage?.alt} />
            <p className="font-helvetica text-sm font-semibold mt-[1rem]">{dropdownImage?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
