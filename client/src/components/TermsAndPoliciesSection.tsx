import React from 'react';

export default function TermsAndPoliciesSection() {
  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center md:mt-3">
      <div className="border-gray-DEFAULT w-[90%] border-t-2 pt-5 sm:w-[75%] xl:w-[95%]">
        <div className="mb-2 grid grid-cols-2 items-baseline space-y-2 text-sm text-gray-neutral underline md:flex md:flex-row md:flex-wrap md:gap-x-4">
          <span>Terms of use</span>
          <span>Privacy</span>
          <span>Site Index</span>
          <span>Ad Choices</span>
          <span>Cookie Settings</span>
          <span>CA Supply Chains Act</span>
          <span>Do Not Sell or Share My Personal Information</span>
          <span>*Credit Card Tems</span>
        </div>
        <span className="text-sm text-gray-neutral">
          © 2025 All rights reserved. If you are using a screen reader and are having problems
          using this website, please call (000) 000-0000 for assistance.
        </span>
        <div className="flex items-center justify-center">
          <p className="my-4 text-base font-bold">SALE 10% OFF FULL PRICE ITEMS*</p>
        </div>
      </div>
    </div>
  );
}
