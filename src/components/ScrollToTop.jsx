import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis(); // Access the lenis instance

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // Or { offset: 0, duration: 1 }
    } else {
      // Fallback if lenis isn't ready
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, lenis]);

  return null;
}

export default ScrollToTop;
