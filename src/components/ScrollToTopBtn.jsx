import React, { useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastVisibility = useRef(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const shouldBeVisible = window.scrollY > 300;

          // 🔥 update state ONLY if value changed
          if (lastVisibility.current !== shouldBeVisible) {
            lastVisibility.current = shouldBeVisible;
            setIsVisible(shouldBeVisible);
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-40
        bg-blue-600 text-white p-3 rounded-full shadow-lg
        transition-all duration-300 ease-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
        hover:bg-blue-700
      `}
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTopBtn;
