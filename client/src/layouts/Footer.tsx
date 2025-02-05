import React, { useState, useEffect } from 'react';
import { FiBox } from 'react-icons/fi';
import { BsChatLeftDots } from 'react-icons/bs';
import { FaRegCreditCard } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mb-10 mt-5">
      {/* History */}
      <div className="mb-[2rem] flex w-full flex-col items-center">
        {/* footer section 1 */}
        <div className="mx-4 flex flex-col items-start justify-center xl:w-3/4">
          <span className="mb-1 text-[clamp(0.3rem,_4vw,_1rem)] font-bold">
            FURNIS & SPHERE HISTORY
          </span>
          <span className="font-Helvetica inline-block text-[clamp(0.2rem,_4vw,_1rem)]">
            With over 100 stores in North America and franchise partners in 9 countries, Crate &amp;
            Barrel,{' '}
            <a href="#" className="underline">
              Crate &amp; Kids
            </a>{' '}
            and CB2 are the international destination for lasting, modern{' '}
            <a href="#" className="underline">
              furniture
            </a>
            , textiles,{' '}
            <a href="#" className="underline">
              kitchen
            </a>
            ,
            <a href="#" className="underline">
              {' '}
              tableware
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              home decor
            </a>
            .{' '}
            <button className="text-[clamp(0.2rem,_4vw,_1rem)]">
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 inline-block size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      {/* Claim offer */}
      <div className="flex h-[14rem] w-full items-center justify-center bg-dark text-white lg:h-[8rem]">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10">
          <div className="flex flex-col items-center justify-center">
            <span className="font-Helvetica text-[clamp(0.3rem,_10vw,_1.5rem)] font-bold">
              Save 10% off full-price items*
            </span>
            <span>Get alerts about new items, sales, and more.</span>
          </div>
          <div className="mt-3 flex h-[3rem] w-[10rem] items-center justify-center bg-white text-dark">
            <span className="font-Helvetica text-[clamp(0.3rem,_3.5vw,_0.8rem)] font-semibold lg:font-bold">
              CLAIM OFFER
            </span>
          </div>
        </div>
      </div>
      {/* Back to top Mobile */}
      <div
        className="block flex h-[3rem] w-full items-center justify-center hover:cursor-pointer md:hidden"
        onClick={scrollToTop}
      >
        <span className="font-Helvetica text-[clamp(0.3rem,_5vw,_1.2rem)]">Back to top</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-2 inline-block size-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </div>
      {/* Back to top Desktop */}
      {isVisible && (
        <div
          className="group fixed bottom-4 hidden h-[4rem] w-[4rem] transform flex-col items-center justify-center rounded-full border border-black bg-[#f0efed] p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 md:flex"
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="mx-auto size-6 h-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18 "
            />
          </svg>
          <span
            className={`font-Helvetica text-center font-semibold text-dark ${isHovered ? 'block' : 'hidden'} h-1/2`}
          >
            Top
          </span>
        </div>
      )}

      {/* Order and payment */}
      <div className="mb-10 mt-5 flex w-full justify-center">
        <div className="flex w-[80%] flex-col items-center justify-center space-y-10 md:w-[90%] md:flex-row md:flex-wrap md:items-end md:space-y-0 md:space-y-5 xl:w-[95%]">
          <div className="flex flex-col items-center justify-center space-y-2 md:h-[10rem] md:w-1/2 md:items-start md:justify-start xl:h-[12rem] xl:w-1/4">
            <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <FiBox className="size-10" />
              <span className="font-bold md:inline-block">Orders</span>
            </div>
            <span className="text-center md:text-left">
              Find out when your purchase will arrive or schedule a delivery.
            </span>
            <div className="flex flex-row items-center justify-center space-x-4 underline">
              <span>Track Order</span>
              <span>Schedule Delivery</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 md:h-[10rem] md:w-1/2 md:items-start md:justify-start md:pl-3 xl:h-[12rem] xl:w-1/4">
            <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <BsChatLeftDots className="size-10" />
              <span className="font-bold">Contact Us & Store Locator</span>
            </div>
            <div>
              <span>Questions? Text us: </span>
              <span>&nbsp;</span>
              <a className="underline" href="sms:(312) 779-1979">
                (312) 779-1979
              </a>
            </div>
            <div className="xl:flex-col-2 flex flex-row space-x-3 text-[0.95rem] underline xl:flex-wrap xl:space-x-0 xl:text-base">
              <span className="xl:w-1/2">Chat With Us</span>
              <span className="xl:w-1/2">Leave Feedback</span>
              <span className="xl:w-1/2">Find a Store</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 md:h-[12rem] md:w-1/2 md:items-start md:justify-start md:pl-3 xl:w-1/4">
            <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <FaRegCreditCard className="size-10" />
              <span className="font-bold">Furni & Sphere Credit Card</span>
            </div>

            <span className="text-center text-sm md:text-left">
              Earn Reward Dollars every time you shop* (excluding special financing purchases), plus
              get access to special offers and events.
            </span>
            <div className="flex flex-row items-center justify-center space-x-4 underline">
              <span>Apply Now</span>
              <span>Manage Your Account</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 md:h-[12rem] md:w-1/2 md:items-start md:justify-start md:pl-3 xl:w-1/4">
            <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <span className="font-bold">Our iOS App</span>
            </div>

            <div className="text-center text-sm md:flex md:w-full md:pl-2 md:text-left">
              <span className="md:w-3/4 xl:w-4/6">
                Shop exclusive first looks, get personalized alerts and manage your registry faster
                and easier than ever before.
              </span>

              <div className="hidden items-center justify-center md:flex md:w-1/4 xl:w-2/6">
                <img
                  className="h-[5rem]"
                  src="https://cb.scene7.com/is/image/Crate/appQRCode?bfc=on&wid=556&qlt=80&op_sharpen=1"
                  alt="App Store"
                />
              </div>
            </div>

            <div className="flex items-center justify-center pl-2 md:w-1/2 md:justify-start">
              <div className="flex w-[150px] flex-row items-center justify-center rounded-lg bg-dark p-1 text-white">
                <FaApple className="size-10 text-white xl:size-8" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-xs">Download on the</span>
                  <span className="font-bold">App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Resources */}
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
            <div className="justify-censter border-gray-DEFAULT flex w-full flex-col items-start space-y-2 border-t-2 py-4 font-helvetica md:h-[12rem] xl:h-[10rem] xl:border-none">
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
            <div className="justify-censter border-gray-DEFAULT flex w-full flex-col items-start space-y-2 border-t-2 py-4 font-helvetica md:h-[12rem] xl:h-[12rem] xl:border-none">
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
    </footer>
  );
};

export default Footer;
