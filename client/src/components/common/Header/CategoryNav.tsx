import React, { useState } from 'react';
import NavDropdown from './NavDropdown';
import CategoryDropdown from './CategoryDropdown';

interface NavItem {
  name: string;
  dropdownContent?: {
    sections: {
      title: string;
      links: string[];
    }[];
    dropdownImage?: {
      src: string;
      alt: string;
      description: string;
    };
  };
}

const navItems: NavItem[] = [
  {
    name: 'Furniture',
    dropdownContent: {
      sections: [
        {
          title: 'Living Room Furniture',
          links: [
            'Sofa & Sectional Collections',
            'Sofas',
            'Sectional Sofas',
            'Accent Chairs',
            'Sleeper Sofas',
            'Coffee Tables',
            'Console Tables',
            'End Tables',
            'TV Stands & Media Consoles',
            'Chaise Lounges & Daybeds',
            'Ottomans & Benches',
            'Leather Furniture',
            'Game Tables',
          ],
        },
        {
          title: 'Dining Room & Kitchen Furniture',
          links: [
            'Dining Tables',
            'Dining Chairs',
            'Bar & Counter Stools',
            'Dining Benches & Banquettes',
            'Buffets & Sideboards',
            'Kitchen Islands',
            'Bar Carts & Bar Cabinets',
          ],
        },
        {
          title: 'Storage & Modular Furniture',
          links: [
            'TV Stands & Media Consoles',
            'Bookcases & Shelves',
            'Storage Cabinets',
            'Floating Shelves',
            'Modular Storage Collections',
          ],
        },
        {
          title: 'Bedroom Furniture',
          links: [
            'Beds & Headboards',
            'Dressers & Chests',
            'Nightstands',
            'Bedroom Benches',
            'Mattresses & Box Springs',
            'Cribs & Bassinets',
            'Kids Beds',
          ],
        },
        {
          title: 'Bathroom Furniture',
          links: ['Bathroom Vanities', 'Bathroom Storage', 'Bathroom Hardware', 'Bath Faucets'],
        },
        {
          title: 'Home Office Furniture',
          links: [
            'Home Office New & Bestselling',
            'Desks',
            'Office Chairs',
            'Filing Cabinets & Credenzas',
            'Bookcases & Shelves',
            'Office Accessories',
            'Small Space Home Office',
            'Kids Desks & Desk Chairs',
          ],
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
      // standalone: [
      //   'New Furniture',
      //   'In-Stock Furniture'
      // ]
    },
  },
  { name: 'Tabletop & Bar' },
  { name: 'Kitchen' },
  { name: 'Bedding' },
  { name: 'Bath' },
  { name: 'Decor & Pillows' },
  { name: 'Rugs' },
  { name: 'Lighting' },
  { name: 'Window' },
  { name: 'Gifts' },
  { name: 'SALE' },
  { name: 'Crate&Kids' },
];

const CategoryNav = () => {
  return (
    <nav className="relative bg-[#222]">
      <div className="container mx-auto">
        <ul className="flex justify-center">
          {navItems.map((item) => (
            <li key={item.name} className="group">
              <a
                href={`/${item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="block px-5 py-1"
              >
                <div
                  className={`border-b-2 border-transparent py-1 text-sm font-medium ${item.name === 'SALE' ? 'text-red-500' : 'text-white'} transition-colors duration-200 hover:border-white`}
                >
                  {item.name}
                </div>
              </a>
              {item.dropdownContent && (
                <CategoryDropdown
                  sections={item.dropdownContent.sections} // Ensure this is an array of sections
                  dropdownImage={item.dropdownContent.dropdownImage}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>

    // <nav className="bg-[#222]">
    //   <div className="container mx-auto">
    //     <ul className="flex justify-center">
    //       {navItems.map((item) => (
    //         <li
    //           key={item.name}
    //           className="relative"
    //           onMouseEnter={() => setActiveDropdown(item.name)}
    //           onMouseLeave={() => setActiveDropdown(null)}
    //         >
    //           <a
    //             href={`/${item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
    //             className="block px-5 py-2"
    //           >
    //             <div
    //               className={`border-b-2 border-transparent py-1 text-sm font-medium
    //                 ${item.name === 'SALE' ? 'text-red-500' : 'text-white'}
    //                 hover:border-white transition-colors duration-200`}
    //             >
    //               {item.name}
    //             </div>
    //           </a>

    //           {activeDropdown === item.name && item.dropdownContent && (
    //             <div className="absolute w-screen left-0 top-full bg-red-500 shadow-lg">
    //               <div className="container mx-auto px-4 py-8">
    //                 <div className="flex">

    //                   {/* Sections with categories */}
    //                   <div className="columns-4 gap-8">
    //                     {item.dropdownContent.sections.map((section) => (
    //                       <div key={section.title} className="mb-8 break-inside-avoid">
    //                         <h3 className="mb-2 font-medium text-gray-900">
    //                           {section.title}
    //                         </h3>
    //                         <div className="flex flex-col">
    //                           {section.links.map((link) => (
    //                             <a
    //                               key={link}
    //                               href="#"
    //                               className="py-1 text-gray-600 hover:text-gray-800"
    //                             >
    //                               {link}
    //                             </a>
    //                           ))}
    //                         </div>
    //                       </div>
    //                     ))}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default CategoryNav;
