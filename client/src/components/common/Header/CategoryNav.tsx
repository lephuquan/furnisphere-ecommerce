import React, { useState } from 'react';
import NavDropdown from './HighlightsDropdown';
import CategoryDropdown from './CategoryDropdown';

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

const navItems: NavItem[] = [
  {
    label: 'Furniture',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'New Furniture',
        },
        {
          title: 'In-Stock Furniture',
        },
        {
          title: 'Living Room Furniture',
          items: [
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
          items: [
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
          items: [
            'TV Stands & Media Consoles',
            'Bookcases & Shelves',
            'Storage Cabinets',
            'Floating Shelves',
            'Modular Storage Collections',
          ],
        },
        {
          title: 'Bedroom Furniture',
          items: [
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
          items: ['Bathroom Vanities', 'Bathroom Storage', 'Bathroom Hardware', 'Bath Faucets'],
        },
        {
          title: 'Home Office Furniture',
          items: [
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
        {
          title: 'Entryway Furniture',
          items: [
            'Entryway Tables',
            'Chests & Cabinets',
            'Entryway Benches & Mudroom Storage',
            'Entryway Decor',
            'Floating Shelves',
          ],
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
        CollectionesAndPromotiones: [
          {
            title: 'Spring 2025 New Arrivals',
            link: 'https://assets.weimgs.com/weimgs/rk/images/dp/ecm/202501/0470/001/003.jpg',
          },
          {
            title: 'Furniture starting at $99',
            link: 'https://assets.weimgs.com/weimgs/rk/images/dp/ecm/202501/0470/001/003.jpg',
          },
        ],
      },
    },
  },
  {
    label: 'Outdoor',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'All Outdoor',
        },
        {
          title: 'Outdoor Furniture Collections',
        },
        {
          title: 'Outdoor Furniture Collections',
          items: [
            'Outdoor Sofas',
            'Outdoor Sectionals',
            'Outdoor Lounge Chairs',
            'Outdoor Adirondack Chairs',
            'Outdoor Chaise Lounges',
            'Outdoor Coffee Tables',
            'Outdoor Side Tables',
            'Outdoor Ottomans',
            'Outdoor Patio Umbrellas',
            'Patio Furniture Covers',
            'Fire Pits & Tables',
          ],
        },
        {
          title: 'Outdoor Dining & Kitchen Furniture',
          items: [
            'Outdoor Dining Tables',
            'Outdoor Dining Chairs',
            'Outdoor Dining Benches',
            'Outdoor Counter Stools',
            'Outdoor Kitchen Furniture',
            'Patio Umbrellas',
            'Outdoor Furniture Sets',
            'Patio Furniture Covers',
          ],
        },
        {
          title: 'Outdoor Kitchen & Entertaining',
          items: [
            'Shop All',
            'Barbecue & Grilling',
            'Pizza Tools & Ovens',
            'Melamine Dinnerware',
            'Acrylic Drinkware',
            'Outdoor Serveware',
            'Outdoor Placemats',
            'Beverage Tubs',
            'Outdoor Cookware & Gadgets',
            'Picnic Accessories & Coolers',
          ],
        },
        {
          title: 'Outdoor Decor',
          items: [
            'All Outdoor Decor',
            'Outdoor Planters',
            'Lanterns & Lighting',
            'Fire Pits & Tables',
            'Pillows',
            'Rugs',
            'Outdoor Games',
            'Address Numbers & Mailboxes',
          ],
        },
        {
          title: 'Patio Umbrellas',
        },
        {
          title: 'Quick Ship & In-Stock Outdoor Furniture',
        },
        {
          title: 'Buying Guides & Styling Ideas',
          items: [
            'Outdoor Patio Decorating Ideas',
            'Rooftop Patio Makeover by The Design Desk',
            'Cali-Modern Paradise by The Design Desk',
            'The Definitive Backyard Fire Pit Guide',
            'Outdoor Furniture Care Guide',
            'Outdoor Furniture Care Guide',
          ],
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Tabletop & Bar',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'New Tabletop & Bar',
        },
        {
          title: 'Dinnerware',
          items: [
            'Dinnerware Sets',
            'Dinner Plates',
            'Pasta & Cereal Bowls',
            'Salad Plates',
            'Melamine Dinnerware',
            'Appetizer & Dessert Plates',
            'Charger Plates & Server Plates',
          ],
        },
        {
          title: 'Serveware',
          items: [
            'Serving Bowls & Baskets',
            'Cheese Boards & Knives',
            'Serving Platters & Trays',
            'Cake Plates & Stands',
            'Serving Utensils',
            'Serveware Collections',
          ],
        },
        {
          title: 'Drinkware & Bar Tools',
          items: [
            'Wine Glasses',
            'Champagne Flutes',
            'Drinking Glasses',
            'Cocktail Glasses',
            'Decanters, Carafes & Pitchers',
            'Drink Dispensers & Beverage Tubs',
            'Bar Tools & Accessories',
            'Coffee Mugs & Tea Cups',
            'Acrylic Glasses',
            'Water Bottles',
            'Refrigerators, Wine & Beer Fridges',
            'Drinkware Collections',
          ],
        },
        {
          title: 'Flatware',
          items: [
            'Flatware Sets',
            'Flatware Organizers',
            'Open Stock Flatware',
            'Flatware Serveware',
          ],
        },
        {
          title: 'Table Linens',
          items: [
            'Napkins',
            'Placemats',
            'Table Runners',
            'Tablecloths',
            'Napkin Rings & Place Card Holders',
            'Table Linens by Color',
          ],
        },
        {
          title: 'Outdoor Entertaining',
        },
        {
          title: 'Popular Entertaining Collections',
          items: [
            'Marin Artisanal Tabletop Collection',
            'Aspen Tabletop Collection',
            'Mercer Tabletop Collection',
            'Tour Tabletop Collection',
            'Craft Minimalist Tabletop Collection',
          ],
        },
        {
          title: 'Table Linens',
          items: [
            'Buying Guides & Tips',
            'Types of Wine Glasses Guide',
            'Types of Cocktail Glasses Guide',
            '12 Must-Have Essentials for Hosting',
          ],
        },
        {
          title: 'Bar Cabinets & Bar Carts',
        },
        {
          title: 'Clearance Tabletop & Bar',
        },
        {
          title: 'Everyday Entertaining Starting at $4.95',
        },
        {
          title: 'Wedding Registry',
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Kitchen',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'Up to 35% off Top Kitchen Brands',
        },
        {
          title: 'New Kitchen',
        },
        {
          title: 'Kitchen Appliances & Electrics',
          items: [
            'Coffee, Espresso & Tea',
            'Toasters',
            'Toaster Ovens',
            'Air Fryers',
            'Blenders',
            'Juicers',
            'Mixers & Attachments',
            'Food Processors',
            'Slow Cookers & Pressure Cookers',
            'Waffle Makers',
            'Indoor Grills & Skillets',
            'Pizza Ovens & Tools',
            'Refrigerators, Wine & Beer Fridges',
            'Specialty Appliances',
          ],
        },
        {
          title: 'Coffee, Espresso, & Tea',
          items: [
            'Espresso Machines',
            'Coffee Makers',
            'Coffee Grinders',
            'Pour Over & French Press',
            'Teapots & Tea Kettles',
            'Iced Coffee',
            'Coffee & Tea Accessories',
            'Coffee Mugs & Teacups',
            'Coffee Beans',
          ],
        },
        {
          title: 'Cookware',
          items: [
            'Cookware Sets',
            'Frying Pans & Skillets',
            'Dutch Ovens & Braisers',
            'Pizza Tools & Ovens',
            'Stock & Soup Pots',
            'Saucepans & Sauciers',
            'Saute Pans',
            'Specialty Cookware',
            'Roasters & Lasagna Pans',
            'Griddles & Grill Pans',
            'Cookware by Material',
          ],
        },
        {
          title: 'Kitchen Linens',
          items: ['Kitchen Dish Towels', 'Oven Mitts & Pot Holders', 'Kitchen Aprons'],
        },
        {
          title: 'Grilling',
        },
        {
          title: 'Gourmet Food & Candy',
        },
        {
          title: 'Shop by Brand',
        },
        {
          title: 'Kitchen Exclusives',
          items: [
            'KitchenAid',
            'Breville',
            'Le Creuset',
            'All-Clad',
            'Wüsthof',
            'Oxo',
            'The Kitchen by Crate',
            'Shop All',
          ],
        },
        {
          title: 'Clearance Kitchen',
        },
        {
          title: ' Kitchen Buying Guides',
          items: [
            'Cookware Buying Guide',
            'Types of Knives Buying Guide',
            'Kitchen Essentials',
            'Kitchen Gadget Essentials',
            '8 Types of Coffee Makers',
            'How to Organize a Pantry',
            'Kitchen Organization Ideas',
            'Best Home Espresso Machines',
            'How to Sharpen Kitchen Knives',
          ],
        },
        {
          title: 'Wedding Registry',
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Bedding',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'The Bedding Event: Up to 20% off',
        },
        {
          title: 'Bedding',
          items: [
            'View All',
            'Duvet Covers',
            'Quilts & Coverlets',
            'New! Comforters',
            'Sheet Sets',
            'Pillow Shams & Pillowcases',
            'Bed Blankets',
            'Throw Pillows',
            'Bedding Sets',
          ],
        },
        {
          title: 'Bedding Essentials',
          items: ['Duvet Inserts', 'Bed Pillow Inserts', 'Mattress Pads'],
        },
        {
          title: 'Shop by Fabric',
          items: [
            'Organic Cotton: Relaxed & Supersoft',
            'Linen: Airy & Breathable',
            'Hemp: Soft & Lightweight',
            'Jersey: Cozy & Casual',
            'Percale: Cool & Crisp',
            'Sateen: Silky & Luxurious',
            'Flannel: Warm & Comfy',
          ],
        },
        {
          title: 'Shop Bedding by Color',
        },
        {
          title: 'Shop Bedding by Collection',
        },
        {
          title: 'New Bedding',
        },
        {
          title: 'Cleaning & Laundry',
          items: ['Laundry & Hampers', 'Fans & Air Purifiers', 'Vacuums'],
        },
        {
          title: 'Bedding Guides & Trending Ideas',
          items: [
            'How to Layer a Bed',
            'How to Put on a Duvet Cover',
            'The Ultimate White Bedding',
            'Bedding Bestsellers',
          ],
        },
        {
          title: 'Up to 60% off Bedding',
        },
        {
          title: 'Baby & Kids Bedding and Bath',
        },
        {
          title: 'Wedding Registry',
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Bath',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'Bath Linens & Towels',
          items: [
            'Bath Towels',
            'Bath Rugs & Mats',
            'Bath Towel Bundles',
            'Shower Curtains & Rings',
            'Bathrobes & Slippers',
          ],
        },
        {
          title: 'Bath Accessories & Storage',
          items: [
            'Bath Storage',
            'Laundry Hampers & Accessories',
            'Wastebaskets',
            'Bathroom Cleaning',
          ],
        },
        {
          title: 'Bath Hardware',
          items: [
            'Bath Faucets',
            'Towel Bars & Hooks',
            'Towel Rings',
            'Toilet Paper Holders',
            'Cabinet Pulls',
            'Cabinet Knobs',
            'View All',
          ],
        },
        {
          title: 'Bath Furniture',
          items: ['Bath Lighting', 'Bath Mirrors', 'Bath Vanities'],
        },
        {
          title: 'Bath Scents',
          items: ['Scented Candles & Diffusers', 'Soaps & Lotions'],
        },
        {
          title: 'Shop by Brand',
          items: ['Blomus', 'Brabantia', 'Kohler', 'SimpleHuman', 'Steele'],
        },
        {
          title: 'Buying Guides & Styling Ideas',
          items: [
            "Emily Henderson's Favorite Bathroom Styles",
            'Modern Bathroom Decor Ideas & Tips',
          ],
        },
        {
          title: 'Best Sellers',
        },
        {
          title: 'New Bath',
        },
        {
          title: 'Bath Clearance Sale',
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Rugs',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'All Rugs',
        },
        {
          title: 'Performance Rugs',
        },
        {
          title: 'Rugs by Type',
          items: ['Area Rugs', 'Indoor-Outdoor Rugs', 'Runner Rugs', 'Door Mats', 'Rug Pads'],
        },
        {
          title: 'Rugs by Size',
          items: [
            '6x9 Rugs',
            '8x10 Rugs',
            '9x12 Rugs',
            '10x14 Rugs',
            '12x15 Rugs',
            'Oversized Rugs',
          ],
        },
        {
          title: 'Rugs by Room',
          items: [
            'Living Room Rugs',
            'Kitchen Rugs',
            'Bedroom Rugs',
            'Home Office Rugs',
            'Dining Room Rugs',
            'Outdoor Rugs',
          ],
        },
        {
          title: 'Rugs by Color',
          items: [
            'Neutral Rugs',
            'Cream & Ivory Rugs',
            'Beige Rugs',
            'Blue Rugs',
            'Grey Rugs',
            'Black Rugs',
            'Brown Rugs',
            'Undyed Natural Rugs',
            'Green Rugs',
          ],
        },
        {
          title: 'Rugs by Material',
          items: ['Performance Rugs', 'Viscose Rugs', 'Jute & Sisal Rugs'],
        },
        {
          title: 'Rugs by Style',
          items: [
            'Solid Rugs',
            'Patterned Rugs',
            'Traditional Rugs',
            'Moroccan Rugs',
            'Contemporary Rugs',
            'Textured Rugs',
          ],
        },
        {
          title: 'Best Sellers',
        },
        {
          title: 'New Rugs',
        },
        {
          title: 'Quick Ship & In-Stock Rugs',
        },
        {
          title: 'Rug Collections',
        },
        {
          title: 'Vacuums',
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Lighting',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'Ceiling Lighting',
          items: ['Pendant Lighting & Chandeliers', 'Flush Mount Lighting', 'Ceiling Fans'],
        },
        {
          title: 'Table & Floor Lamps',
          items: ['Table Lamps', 'Desk Lamps', 'Floor Lamps', 'Shop All'],
        },
        {
          title: 'Wall Sconces',
        },
        {
          title: 'Lighting by Room',
          items: [
            'Bedroom Lighting',
            'Dining Room Lighting',
            'Bathroom Lighting',
            'Living Room Lighting',
            'Kitchen Lighting',
            'Entryway Lighting Fixtures',
            'Outdoor Lighting',
          ],
        },
        {
          title: 'Lighting Best Sellers Back In-Stock',
        },
        {
          title: 'New Lighting',
        },
        {
          title: 'All Lighting',
        },
        {
          title: 'Baby & Kids Lighting',
        },
        {
          title: 'Light Bulbs',
        },
        {
          title: 'Sale Lighting',
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Window',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'All Window Curtains',
        },
        {
          title: 'Blackout Curtains',
        },
        {
          title: 'Sheer Curtains',
        },
        {
          title: 'Window Curtain Hardware',
        },
        {
          title: 'Window Curtains by Fabric',
          items: ['Velvet Curtains', 'Linen Curtains', 'Cotton Curtains', 'Silk Curtains'],
        },
        {
          title: 'Window Curtain Collections',
        },
        {
          title: 'Window Curtains by Color',
          items: [
            'White Window Curtains',
            'Grey Window Curtains',
            'Beige Window Curtains',
            'Blue Window Curtains',
          ],
        },
        {
          title: 'Buying Guides and Styling Ideas',
          items: ['How to Hang Curtains', 'How to Choose Curtains'],
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Gifts',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'Bestselling Gifts',
        },
        {
          title: 'Kitchen Gifts',
        },
        {
          title: 'Gifts for the Home',
        },
        {
          title: 'Gifts By Price',
          items: ['Gifts Under $25', 'Gifts Under $50', 'Gifts Under $100', 'Gifts Under $250'],
        },
        {
          title: 'Wine & Cocktail Gifts',
        },
        {
          title: 'Coffee & Tea Gifts',
        },
        {
          title: 'Holiday Candy Gifts',
        },
        {
          title: 'Personalized Gifts',
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Sale',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
    dropdownContent: {
      sections: [
        {
          title: 'End-of-Year Warehouse Sale: Up to 60% off',
          items: [
            'Shop All Clearance',
            'Holiday',
            'Furniture',
            'Rugs',
            'Tabletop',
            'Kitchen',
            'Decor & Pillows',
            'Lighting',
            'Bedding',
            'Bath',
            'Curtains',
            'Outdoor',
          ],
        },
        {
          title: 'The Bedding Event: Up to 20% off',
          items: [
            'Shop All',
            'Duvet Covers, Quilts & Blankets',
            'Sheet Sets',
            'Bedding Essentials',
          ],
        },
        {
          title: 'Up to 35% off Top Kitchen Brands',
          items: [
            'Bestsellers on Sale',
            'Up to $300 off Breville® Barista Espresso Machines',
            'Up to $150 off Select KitchenAid® Electrics',
            'Over 40% Off Le Creuset Cookware & Bakeware',
            'Up to 20% off Select Cuisinart Kitchen Electrics',
            'Up to 45% off Select Staub Cast Iron',
            'Up to $150 off Select Philips Espresso Machines',
            'Up to 40% off Select Staub Bakeware',
            'Over 20% off Select Global Cutlery',
            'Up to 45% off Select Zwilling Cutlery',
            'Up to 60% off Kitchen Clearance',
            'Save Big on Top-Selling Kitchen Items',
          ],
        },
      ],
      dropdownImage: {
        src: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241219_Sofa_NEW?wid=478&qlt=60&op_sharpen=1',
        alt: '1500+ New Spring Arrivals',
        description: '1500+ New Spring Arrivals',
      },
    },
  },
  {
    label: 'Crate&Kids',
    link: 'https://cb.scene7.com/is/image/Crate/cb_dFO_20241024_Monogramming',
  },
];

const CategoryNav = () => {
  return (
    <nav className="relative bg-[#222]">
      <div className="container mx-auto">
        <ul className="flex justify-center">
          {navItems.map((item) => (
            <li key={item.label} className="group">
              <a
                href={`/${item.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="block px-5 py-1"
              >
                <div
                  className={`border-b-2 border-transparent py-1 text-sm font-medium ${item.label === 'SALE' ? 'text-red-500' : 'text-white'} transition-colors duration-200 hover:border-white`}
                >
                  {item.label}
                </div>
              </a>
              {item.dropdownContent && (
                <CategoryDropdown
                  sections={item.dropdownContent.sections}
                  dropdownImage={item.dropdownContent.dropdownImage}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
