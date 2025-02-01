import { useState, useEffect } from 'react';
import { breakpoints } from 'theme/breakpoints';

export const useBreakpoints = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const sortedBreakpoints = breakpoints.sort((a, b) => a.breakpoint - b.breakpoint);
  let size = sortedBreakpoints.find((x) => width < x.breakpoint);
  size = size || sortedBreakpoints[sortedBreakpoints.length - 1];

  return {
    size,
    isXXLarge: size.name === 'xxl',
    isXLarge: size.name === 'xl',
    isLarge: size.name === 'lg',
    isMedium: size.name === 'md',
    isSmall: size.name === 'sm',
    isXSmall: size.name === 'xs',
    width,
  };
};
