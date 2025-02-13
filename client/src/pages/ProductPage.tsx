import React, { useRef, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductsByType from '../components/ProductsByType';
import FilterProducts from './FilterProducts';
import AllProductsByType from '../components/AllProductsByType';

const allProducts = [
  {
    id: 1,
    label: 'Best value',
    name: 'Edge 15-Oz. Red Wine Glass',
    price: '$12.95',
    benefits: ['Ships free'],
    images: [
      'https://cb.scene7.com/is/image/Crate/TourRedWine24ozSSS22/$web_plp_card_mobile$/240201123539/tour-red-wine-glass.jpg',
      'https://cb.scene7.com/is/image/Crate/TourRedWine18ozAVSSF24/$web_plp_card_mobile$/250212084148/TourRedWine18ozAVSSF24.jpg',
      'https://cb.scene7.com/is/image/Crate/CB_SP25_IT_31_302_Vert_001_X_PDP/$web_plp_card_mobile$/250212084148/CB_SP25_IT_31_302_Vert_001_X_PDP.jpg',
    ],
  },
  {
    id: 2,
    label: 'Best value',
    name: 'Hip 31-Oz. Large Red Wine Glass',
    price: '$9.95',
    benefits: ['Ships free', 'Final Sale'],
    images: [
      'https://cb.scene7.com/is/image/Crate/HipRedWine31ozSSS21/$web_plp_card_mobile$/240201112923/hip-large-red-wine-glass.jpg',
      'https://cb.scene7.com/is/image/Crate/HipRedWine31ozAVSSF24/$web_plp_card_mobile_hires$/250212084152/HipRedWine31ozAVSSF24.jpg',
      'https://cb.scene7.com/is/image/Crate/HipRedWineGlassMC18/$web_plp_card_mobile$/250212084152/HipRedWineGlassMC18.jpg',
      'https://cb.scene7.com/is/image/Crate/GrandVinCarafeHipWineMY18/$web_plp_card_mobile$/250212084152/GrandVinCarafeHipWineMY18.jpg',
      'https://cb.scene7.com/is/image/Crate/StemlessWineGlassHipWineOC17/$web_plp_card_mobile$/250212084152/StemlessWineGlassHipWineOC17.jpg',
    ],
  },
  {
    id: 3,
    label: 'Best value',
    name: 'Nattie 18-Oz. Red Wine Glass',
    price: '$4.95',
    benefits: ['Ships free'],
    images: [
      'https://cb.scene7.com/is/image/Crate/NattieRedWine18ozSSS21/$web_plp_card_mobile$/240201113034/nattie-red-wine-glass.jpg',
      'https://cb.scene7.com/is/image/Crate/NattieRedWine18ozAVSSF24/$web_plp_card_mobile$/250212084133/NattieRedWine18ozAVSSF24.jpg',
      'https://cb.scene7.com/is/image/Crate/NattieWineGlassesOC15/$web_plp_card_mobile$/250212084133/NattieWineGlassesOC15.jpg',
      'https://cb.scene7.com/is/image/Crate/GrandVinCarafeNattieWineAGC17/$web_plp_card_mobile$/250212084133/GrandVinCarafeNattieWineAGC17.jpg',
      'https://cb.scene7.com/is/image/Crate/NattieWineGlassesSC17/$web_plp_card_mobile$/250212084133/NattieWineGlassesSC17.jpg',
    ],
  },
  {
    id: 4,
    label: 'Bestseller',
    name: 'Shott Zwiesel Tour 18-Oz. Red Wine Glass',
    price: '$15.95',
    benefits: ['Ships free'],
    images: [
      'https://cb.scene7.com/is/image/Crate/TourRedWine18ozSSS22/$web_plp_card_mobile$/240201123534/tour-red-wine-glass.jpg',
      'https://cb.scene7.com/is/image/Crate/TourRedWine24ozAVSSF24/$web_plp_card_mobile$/250212084152/TourRedWine24ozAVSSF24.jpg',
      'https://cb.scene7.com/is/image/Crate/CB_H22_GG_11_209_Ver_001_Alt1/$web_plp_card_mobile$/250212084152/CB_H22_GG_11_209_Ver_001_Alt1.jpg',
    ],
  },
  {
    id: 5,
    label: '',
    name: 'Tour 24-oz. Red Wine Glasses, Boxed Set of 4',
    price: 'Set Saving $49.95',
    benefits: ['Ships free'],
    images: [
      'https://cb.scene7.com/is/image/Crate/TourRedWine24ozSet4SSF24_VND/$web_plp_card_mobile$/250212084148/TourRedWine24ozSet4SSF24_VND.jpg',
      'https://cb.scene7.com/is/image/Crate/TourRedWine24ozS4AVSSF24_VND/$web_plp_card_mobile$/250212084148/TourRedWine24ozS4AVSSF24_VND.jpg',
      'https://cb.scene7.com/is/image/Crate/TourRedWine18ozAVSSF24/$web_plp_card_mobile$/250212084148/TourRedWine18ozAVSSF24.jpg',
      'https://cb.scene7.com/is/image/Crate/CB_SP25_IT_31_302_Vert_001_X_PDP/$web_plp_card_mobile$/250212084148/CB_SP25_IT_31_302_Vert_001_X_PDP.jpg',
      'https://cb.scene7.com/is/image/Crate/TourWineGlassesNC19/$web_plp_card_mobile$/250212084148/TourWineGlassesNC19.jpg',
    ],
  },
  {
    id: 6,
    label: 'Bestseller',
    name: 'Camile 23-Oz. Long-Stem Red Wine Glass',
    price: '$14.95',
    benefits: ['Ships free'],
    images: [
      'https://cb.scene7.com/is/image/Crate/CamilleRedWine23ozSSS21/$web_plp_card_mobile$/240201113034/camille-23-oz.-long-stem-wine-glass--red.jpg',
      'https://cb.scene7.com/is/image/Crate/CamilleRedWine23ozAVSSF24/$web_plp_card_mobile$/250212084148/CamilleRedWine23ozAVSSF24.jpg',
      'https://cb.scene7.com/is/image/Crate/CamilleRedWineGlassSwoonCarafeFC18/$web_plp_card_mobile$/250212084148/CamilleRedWineGlassSwoonCarafeFC18.jpg',
      'https://cb.scene7.com/is/image/Crate/CamilleWineGlassesNC15/$web_plp_card_mobile$/250212084148/CamilleWineGlassesNC15.jpg',
      'https://cb.scene7.com/is/image/Crate/CamilleWineGlassesMC17/$web_plp_card_mobile$/250212084148/CamilleWineGlassesMC17.jpg',
    ],
  },
];

const productsByType = [
  {
    name: 'Red Wine',
    link: '',
    image:
      'https://cb.scene7.com/is/image/Crate/TourRedWine24ozSSS22?bfc=on&wid=270&qlt=80&op_sharpen=1',
  },
  {
    name: 'White Wine',
    link: '',
    image:
      'https://cb.scene7.com/is/image/Crate/TourWhiteWine15ozSSS22?bfc=on&wid=270&qlt=80&op_sharpen=1',
  },
  {
    name: 'Champagne & Coupe',
    link: '',
    image:
      'https://cb.scene7.com/is/image/Crate/TourChampagneGlass8ozSSS22?bfc=on&wid=270&qlt=80&op_sharpen=1',
  },
  {
    name: 'Stemless',
    link: '',
    image:
      'https://cb.scene7.com/is/image/Crate/LulieStemlessWineGroupFSSS22?bfc=on&wid=270&qlt=80&op_sharpen=1',
  },
  {
    name: 'Acrylic & Shatterproof',
    link: '',
    image:
      'https://cb.scene7.com/is/image/Crate/AcrylicTourDrinkwareFSSS23?bfc=on&wid=270&qlt=80&op_sharpen=1',
  },
  {
    name: 'Wine tools & Accessories',
    link: '',
    image:
      'https://cb.scene7.com/is/image/Crate/LAtelierDVnOnMtnBlkCrkWlHdROF20?bfc=on&wid=270&qlt=80&op_sharpen=1',
  },
];

export default function ProductPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="flex w-full flex-col items-center space-y-4 lg:w-[95%]">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        {/* Product by type */}
        <ProductsByType productsByType={productsByType} />
        {/* FilterOptions */}
        <FilterProducts />
        {/* All products by type */}
        <AllProductsByType allProducts={allProducts} />
      </div>
    </div>
  );
}
