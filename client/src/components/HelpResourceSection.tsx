import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';

export default function HelpResourceSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="xl:border-gray-DEFAULT flex w-[90%] flex-col items-center justify-center sm:w-[75%] xl:w-[95%] xl:flex-row xl:items-start xl:border-t-2">
        <div className="justify-censter border-gray-DEFAULT flex w-full flex-col items-start space-y-2 border-t-2 py-4 font-helvetica xl:w-1/4 xl:border-none">
          <span className="font-bold">Help</span>
          <div className="flex w-full flex-row items-start text-gray-neutral xl:flex-col">
            <div className="flex w-1/2 flex-col space-y-1 text-sm">
              <span className="">Customer Service</span>
              <span className="">Return Policy</span>
              <span className="">Product Recalls</span>
              <span className="">Sign Up for Texts</span>
            </div>
            <div className="flex w-1/2 flex-col space-y-2 text-sm">
              <span className="">Account</span>
              <span className="">Shipping Information</span>
              <span className="">Email & Text Preferences</span>
            </div>
          </div>
        </div>

        <div className="justify-censter border-gray-DEFAULT flex w-full flex-col items-start space-y-2 border-t-2 py-4 font-helvetica xl:w-1/4 xl:border-none">
          <span className="font-bold">Resources</span>
          <div className="flex w-full flex-row items-start text-gray-neutral xl:flex-col">
            <div className="flex w-1/2 flex-col space-y-1 text-sm">
              <span className="">Free Design Services</span>
              <span className="">Baby Registry</span>
              <span className="">Catalogs</span>
              <span className="">Contract Grade Furniture</span>
            </div>
            <div className="flex w-1/2 flex-col space-y-2 text-sm">
              <span className="">Wedding Registry</span>
              <span className="">Gift Cards</span>
              <span className="">Trade Program</span>
            </div>
          </div>
        </div>

        <div className="justify-censter border-gray-DEFAULT flex w-full flex-col items-start space-y-2 border-t-2 py-4 font-helvetica xl:w-1/4 xl:border-none">
          <span className="font-bold">Our Company</span>
          <div className="flex w-full flex-row items-start text-gray-neutral xl:flex-col">
            <div className="flex w-1/2 flex-col space-y-1 text-sm">
              <span className="">About Us</span>
              <span className="">Responsible Design</span>
            </div>
            <div className="flex w-1/2 flex-col space-y-2 text-sm">
              <span className="">Careers</span>
              <span className="">Accessibility Statement</span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center md:flex-row xl:w-1/4 xl:flex-col">
          <div className="justify-censter border-gray-DEFAULT flex w-full flex-col items-start space-y-2 border-t-2 py-4 font-helvetica md:h-[10rem] xl:h-[10rem] xl:border-none">
            <span className="font-bold">Show us your look with:</span>
            <div className="flex w-full flex-col items-start space-y-5 text-gray-neutral">
              <div className="flex w-1/2 flex-row space-x-3 text-sm">
                <span className="underline">#FurniStyle</span>
                <span className="underline">#FurniKidsStyle</span>
              </div>
              <div className="flex w-1/2 flex-row space-x-4 text-sm text-dark">
                <a href="#">
                  <FaInstagramSquare className="size-5" />
                </a>
                <a href="#">
                  <FaTiktok className="size-5" />
                </a>
                <a href="#">
                  <FaPinterestP className="size-5" />
                </a>
                <a href="#">
                  <FaYoutube className="size-5" />
                </a>
                <a href="#">
                  <FaFacebookF className="size-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="justify-censter border-gray-DEFAULT flex w-full flex-col items-start space-y-2 border-t-2 py-4 font-helvetica md:h-[10rem] xl:h-[12rem] xl:border-none">
            <span className="font-bold">Our Brands</span>
            <div className="flex w-full flex-col items-start space-y-5 text-dark">
              <div className="flex w-1/2 flex-row space-x-2 text-2xl font-bold xl:flex-col xl:items-start xl:space-x-0">
                <span>Furni&Sphere</span>
                <span>Furni&kids</span>
              </div>

              <div className="flex w-1/2 flex-row space-x-4 text-sm text-dark">
                <div className="border-2 border-dark px-[0.5rem] py-[0.2rem]">
                  <span className="text-xl font-bold">CB2</span>
                </div>
                <div className="flex items-center text-lg font-semibold">
                  <span className="pr-2">HUDSON</span>
                  <div className="h-[80%] w-[2px] bg-dark"></div>
                  <span className="pl-2">GRACE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
