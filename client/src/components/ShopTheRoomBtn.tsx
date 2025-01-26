import React, { useEffect, useRef, useState } from 'react';
import { IoPricetagOutline } from 'react-icons/io5';

const ShopTheRoomBtn: React.FC<{ className?: string }> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // useState for controlling button expansion
  const [isFullyExpanded, setIsFullyExpanded] = useState(false); // useState for after button fully expanded
  const [fadeInText, setFadeInText] = useState(false); // useState for controlling text opacity
  const elementRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setIsExpanded(true); // Start expanding the button
          }, 500); // Delay before button expansion
        } else {
          setIsVisible(false);
          setIsExpanded(false); // Reset button expansion state
          setIsFullyExpanded(false); // Reset fully expanded state
          setFadeInText(false); // Reset text fade-in state
        }
      },
      { threshold: 0.5, rootMargin: '0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  // Handle button expansion
  useEffect(() => {
    if (isExpanded) {
      const timeout = setTimeout(() => {
        setIsFullyExpanded(true);
      }, 700); // Button expansion animation duration
      return () => clearTimeout(timeout);
    }
  }, [isExpanded]);

  // Handle text opacity
  useEffect(() => {
    if (isFullyExpanded) {
      const timeout = setTimeout(() => {
        setFadeInText(true);
      }, 200); // Delay before text fades in
      return () => clearTimeout(timeout);
    }
  }, [isFullyExpanded]);

  return (
    <button
      ref={elementRef}
      className={`${className} rounded-full bg-white px-[0.2vw] py-[0.3vw] text-[1.4vw] text-dark transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isExpanded ? 'w-[14vw]' : 'w-[4vw]'} flex items-center justify-start`}
    >
      <IoPricetagOutline className="ml-[0.7vw] size-4" />
      {isFullyExpanded && (
        <span
          className={`ml-[0.4vw] font-semibold transition-opacity duration-[1000ms] ease-in-out ${
            fadeInText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Shop the room
        </span>
      )}
    </button>
  );
};

export default ShopTheRoomBtn;
