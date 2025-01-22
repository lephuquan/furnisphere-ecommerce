import React from 'react';
import PromotionalSection from '../../components/PromotionalSection';
import IntroducingSection from '../../components/IntroducingSection';
import NewProductSection from '../../components/NewProductSection';
import DesignBooking from '../../components/DesignBooking';
import DesignerCollection from '../../components/DesignerCollection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center space-y-4 bg-gray-100 md:pt-5 lg:pt-1 mb-[50rem]">
      <PromotionalSection />

      <IntroducingSection />

      <NewProductSection />

      <DesignBooking />

      <DesignerCollection />
    </div>
  );
}
