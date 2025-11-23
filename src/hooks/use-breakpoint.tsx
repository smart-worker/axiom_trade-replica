import { useState, useEffect } from "react";

export function useBreakpoint(breakpoint: number) {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleResize = () => {
      setIsMatch(mediaQuery.matches);
    };

    // Add listener on mount
    mediaQuery.addEventListener("change", handleResize);

    // Initial check
    handleResize();

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [breakpoint]);

  return isMatch;
}
