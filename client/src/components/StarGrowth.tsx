import React, { useEffect, useState, useRef } from 'react';

const StarGrowth: React.FC<{ className?: string }> = ({ className }) => {
  const [visibleStars, setVisibleStars] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // when component is shown in viewport, start it
            setVisibleStars(0); // Reset stars before start
            setTimeout(() => {
              // start active star from left to right
              const interval = setInterval(() => {
                setVisibleStars((prev) => {
                  if (prev < 5) {
                    return prev + 1;
                  }
                  clearInterval(interval);
                  return prev;
                });
              }, 500); // each start is shown in 0.5s
            }, 100); // mensure active after when in viewport
          } else {
            // when component do not in viewport, reset stars
            setVisibleStars(0);
          }
        });
      },
      { threshold: 0.5 } // view when 50% of component in viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`flex space-x-2 ${className}`}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-[2vw] h-[2vw] transition-opacity duration-1000 ${index < visibleStars ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transitionDelay: `${index * 0.5}s`, // Delay for each stars
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarGrowth;
