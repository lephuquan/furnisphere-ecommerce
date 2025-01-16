import React from 'react';

interface MinusIconProps {
  onClick?: () => void;
  className?: string;
}

const MinusIcon: React.FC<MinusIconProps> = ({ onClick, className }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
  </svg>
);

export default MinusIcon;
