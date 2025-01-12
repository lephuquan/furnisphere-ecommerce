import React from 'react';

interface NavSection {
  title: string;
  items: string[];
  image?: string;
}

interface NavDropdownProps {
  sections: NavSection[];
  image?: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ sections, image }) => {
  return (
    <div className="invisible absolute left-1/2 w-4/5 -translate-x-1/2 border border-[#ccc] bg-white opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
      <div className="mx-auto">
        <div className="grid grid-cols-4 items-start gap-8 p-6">
          {sections.map((section) => (
            <div className="flex flex-col items-start" key={section.title}>
              <h3 className="mb-4 flex font-bold">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="items-start">
            <img
              src="https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1"
              alt="sub menu image"
            />
            <p className="font-helvetica text-sm font-semibold">1500+ New Spring Arrivals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
