import { useLayoutEffect, useState } from 'react';

export function useDeviceDetect() {
  const MAX_DESKTOP = 1024;
  const MAX_TABLET = 767;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    const determineDeviceType = () => {
      const width = window.innerWidth;

      if (width < MAX_TABLET) {
        setIsTablet(false);
        setIsDesktop(false);
        setIsMobile(true);
        return;
      }
      if (width >= MAX_TABLET && width < MAX_DESKTOP) {
        setIsMobile(false);
        setIsDesktop(false);
        setIsTablet(true);
        return;
      }
      if (width >= MAX_DESKTOP) {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
        return;
      }
    };
    determineDeviceType();

    const handleResize = () => {
      determineDeviceType();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
