import React from 'react';
import NavDropdown from './NavDropdown';

interface NavItem {
  label: string;
  sections?: {
    title?: string;
    items?: string[];
  }[];
  dropdownImage?: string;
}

const navItems: NavItem[] = [
  {
    label: 'New!',
    sections: [
      {
        title: 'Top New Categories',
        items: [
          'Spring 2025 New Arrivals',
          'Sofas & Sectionals',
          'Dining Tables',
          'Wine Glasses',
          'Serveware',
          'Coffee & Espresso',
          'Pillows & Throws',
          'Duvet Covers',
          'Rugs',
          'Window',
          'Home Renovation',
        ],
      },
      {
        title: 'Trending',
        items: [
          'Best Sellers',
          'New Arrivals',
          'Passport to Italy',
          'The Spring Style Edit',
          'Our Flagship Virtual Store',
          'The Personalization Shop',
          'Sustainable & Quality Design',
          '#CrateStyle',
        ],
      },
      {
        title: 'Collabs',
        items: [
          ' Athena Calderone',
          'Gaby Dalkin',
          'Laura Kim',
          'Leanne Ford',
          'Eric Adjepong',
          'Becki Owens',
          'Holly Blakey',
          'Emily Henderson',
          'Jake Arnold',
        ],
      },
    ],
    dropdownImage:
      'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
  },
  {
    label: 'Wedding Registry',
    sections: [
      {
        title: 'The Wedding Registry',
        items: ['Get Started', 'Create a Registry', 'Find a Registry', 'Manage My Registry'],
      },
      {
        title: 'Tips & Advice',
        items: [
          'Most-Loved Gifts',
          'FREE Gifts & Perks',
          'Real Registries',
          'One-Click Registries',
          'Registry Checklist',
          'Find Your Tabletop Style',
          'Most Forgotten Registry Items',
          'Private Registry Events',
          'FREE Design Services',
          'Wedding Registry Guides',
          'Refer a Friend, Get $100',
        ],
      },
      {
        title: 'Top Categories',
        items: [
          'Kitchen Appliances & Electrics',
          'Cookware',
          'Dinnerware',
          'Kitchen Tools & Accessories',
          'Flatware',
          'Cutlery',
          'Bakeware',
          'Serveware',
          'Drinkware & Bar Tools',
          'Bedding',
          'Bath',
          'Table Linens',
          'Decor',
          'Shop All',
        ],
      },
    ],
    dropdownImage: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
  },
  {
    label: 'Free Design Services',
  },
  {
    label: 'Trade Program',
  },
  {
    label: 'In-Stock',
  },
  {
    label: 'Best Sellers',
  },
  {
    label: 'Lunar New Year',
  },
  {
    label: "Valentine's Day",
  },
];

const HighlightsNav: React.FC = () => {
  return (
    <nav className="relative bg-white">
      <div className="container mx-auto">
        <ul className="flex justify-center">
          {navItems.map((item) => (
            <li key={item.label} className="group">
              <a
                href={`/${item.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="block px-5 py-1"
              >
                <div className="border-b-2 border-transparent pb-1 font-helvetica text-xs font-semibold text-gray-700 hover:border-[#222] hover:bg-gray-100">
                  {item.label.toUpperCase()}
                </div>
              </a>
              {item.sections && (
                <NavDropdown sections={item.sections} dropdownImage={item.dropdownImage} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HighlightsNav;
