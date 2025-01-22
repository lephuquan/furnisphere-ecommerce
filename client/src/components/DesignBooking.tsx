import React from 'react';
import ShopTheRoomBtn from './ShopTheRoomBtn';

export default function DesignBooking() {
  return (
    <>
      <a
        className="relative block aspect-[16/24] w-full bg-[url('https://cb.scene7.com/is/image/Crate/cb_mHP_20250101_5DD?bfc=on&wid=780&qlt=80&op_sharpen=1')] bg-cover bg-center md:hidden"
        href="https://thedesigndesk.co.uk/book-now"
      >
        <div className="absolute inset-0 flex flex-col items-center bg-black bg-opacity-5">
          <h1 className="mt-[19%] text-[2.8rem] font-bold text-white">TheDesignDesk</h1>
          <p className="mt-1 h-[2px] w-[10rem] bg-white"></p>
          <h3 className="w-[22rem] text-center text-[1.8rem] font-bold text-white">
            any project, any budget
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline-block size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
            and it's 100% free
          </h3>
          <p className="mt-2 flex h-[3rem] w-[19rem] items-center justify-center rounded-full border border-white bg-white px-4 py-2 text-[1rem] font-bold text-dark">
            Book your free appointment today
          </p>
        </div>
      </a>
      <div className="relative mb-[2rem] hidden aspect-[14/8] w-[96%] bg-[url('https://cb.scene7.com/is/image/Crate/cb_dHP_20250101_DesignDesk?bfc=on&wid=1376&qlt=80&op_sharpen=1')] bg-cover bg-center md:block">
        <a
          href="https://thedesigndesk.co.uk/book-now"
        >
          <div className="absolute inset-0 flex flex-col items-center bg-black bg-opacity-5 2xl:space-y-2">
            <p className="mt-[15vw] text-[3.5vw] font-bold text-white xl:mt-[14%] xl:text-[2.8rem] 2xl:mt-[16%]">
              TheDesignDesk
            </p>
            <p className="mt-[0.5vw] h-[2px] w-[10vw] bg-white"></p>
            <h3 className="w-[100vw] text-center text-[3vw] font-bold text-white xl:w-full xl:text-[2.2rem]">
              any project, any budget
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
              and it's 100% free
            </h3>
            <p className="mt-[0.5vw] flex h-[4vw] w-[24vw] items-center justify-center rounded-full border border-white bg-white px-4 py-2 text-[1.4vw] font-bold text-dark xl:text-[1.2rem]">
              Book Your Free Appointment
            </p>
          </div>
        </a>
        <ShopTheRoomBtn className="ml-[1.6vw] absolute bottom-[3vw] h-[3vw] border-1 border-[#222]" />
      </div>
    </>
  );
}
