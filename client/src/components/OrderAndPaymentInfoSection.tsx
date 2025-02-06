import React from 'react';
import { FiBox } from 'react-icons/fi';
import { BsChatLeftDots } from 'react-icons/bs';
import { FaRegCreditCard } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa6';

export default function OrderAndPaymentInfoSection() {
  return (
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
          <div className="flex flex-row items-center text-sm justify-center space-x-4 underline">
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
          <div className="xl:flex-col-2 text-sm flex flex-row space-x-3 text-[0.95rem] underline xl:flex-wrap xl:space-x-0 xl:text-base">
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
          <div className="flex flex-row items-center text-sm justify-center space-x-4 underline">
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
  );
}
