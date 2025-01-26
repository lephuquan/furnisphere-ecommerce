import React, { useEffect } from 'react';

const LordIconComponent: React.FC = () => {
  useEffect(() => {
    // Ensure the lord-icon elements are initialized
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <lord-icon
      src="https://cdn.lordicon.com/jeuxydnh.json"
      trigger="hover"
      style={{ width: '250px', height: '250px' }}
    ></lord-icon>
  );
};

export default LordIconComponent; 