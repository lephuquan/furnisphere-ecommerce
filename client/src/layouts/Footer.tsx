import React, { useState, useEffect } from 'react';

import HistorySection from '../components/HistorySection';
import ClaimOfferSection from '../components/ClaimOfferSection';
import BackToTopBtn from '../components/BackToTopBtn';
import OrderAndPaymentInfoSection from '../components/OrderAndPaymentInfoSection';
import HelpResourceSection from '../components/HelpResourceSection';
import TermsAndPoliciesSection from '../components/TermsAndPoliciesSection';

const Footer: React.FC = () => {
  return (
    <footer className="mb-5 mt-5">
      <HistorySection />

      <ClaimOfferSection />

      <BackToTopBtn />

      <OrderAndPaymentInfoSection />

      <HelpResourceSection />

      <TermsAndPoliciesSection />
    </footer>
  );
};

export default Footer;
