import { useState, useEffect } from 'react';

const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR safety, though this is Vite)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.matchMedia(`(max-width: ${breakpoint}px)`).matches);
      };

      // Check on mount
      checkMobile();

      // Add resize listener
      window.addEventListener('resize', checkMobile);

      // Cleanup listener on unmount
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, [breakpoint]);

  return isMobile;
};

export default useMobile;
