import React from 'react';
import PromotionalSection from '../../components/PromotionalSection';
import IntroducingSection from '../../components/IntroducingSection';
import NewProductSection from '../../components/NewProductSection';
import DesignBooking from '../../components/DesignBooking';
import DesignerCollection from '../../components/DesignerCollection';
import ShopBedroomFuniture from '../../components/ShopBedroomFuniture';
import ShopStoreFuniture from '../../components/ShopStoreFuniture';
import LordIconComponent from '../../components/LordIconComponent';

export default function HomePage() {
  return (
    <div className="mb-[50rem] flex min-h-screen w-full flex-col items-center space-y-4 bg-gray-100 md:pt-5 lg:pt-1">
      <PromotionalSection />

      <IntroducingSection />

      <NewProductSection />

      <DesignBooking />

      <DesignerCollection />

      <ShopBedroomFuniture />

      <ShopStoreFuniture />

      {/* <LordIconComponent /> */}

    </div>
  );
}
