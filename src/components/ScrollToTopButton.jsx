import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-24 right-6 z-50
        flex items-center justify-center
        h-12 w-12 rounded-full
        bg-[#8B1E1E] text-white
        shadow-lg
        hover:bg-[#7A1A1A]
        transition-all
      "
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTopButton;
