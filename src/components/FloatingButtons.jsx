import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
      {/* ===== PHONE (BOTTOM LEFT) ===== */}
      <a
        href="tel:+919415257492"
        aria-label="Call Us"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
                   bg-[#8B1E1E] text-white shadow-lg
                   hover:bg-[#7A1A1A] transition-all"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* ===== WHATSAPP (BOTTOM RIGHT) ===== */}
      <a
        href="https://wa.me/919415257492"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
                   bg-[#25D366] text-white shadow-lg
                   hover:bg-[#1EBE5D] transition-all"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </>
  );
};

export default FloatingButtons;
