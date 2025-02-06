import React, { useState, useEffect } from 'react';

export default function BackToTopBtn() {
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
    <>
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
      {/* Back to top button Desktop */}
      {isVisible && (
        <div
          className="group fixed bottom-4 right-4 hidden h-[5vw] w-[5vw] transform flex-col items-center justify-center rounded-full bg-[#f0efed] p-3 text-white shadow-xl transition-all duration-300 hover:scale-110 md:flex"
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
    </>
  );
}
