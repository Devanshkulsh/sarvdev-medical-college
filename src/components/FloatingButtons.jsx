import React, { useState, useRef, useEffect } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "9198762108";

const presetMessages = [
  "Hello, I want to know about BAMS admission.",
  "Hi, please share fee structure and eligibility details.",
  "I want to visit the college campus. Please guide.",
  "I have a query regarding hospital services.",
];

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  /* Close menu on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sendMessage = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
      "_blank"
    );
    setOpen(false);
  };

  return (
    <>
      {/* ===== PHONE (BOTTOM LEFT) ===== */}
      <a
        href="tel:9198762108"
        aria-label="Call Us"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
                   bg-[#8B1E1E] text-white shadow-lg
                   hover:bg-[#7A1A1A] transition-all"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* ===== WHATSAPP MENU ===== */}
      <div ref={menuRef} className="fixed bottom-5 right-5 z-50">
        {/* Menu */}
        {open && (
          <div className="mb-3 w-64 rounded-xl bg-white shadow-xl border border-black/10 overflow-hidden">
            <div className="px-4 py-2 bg-[#25D366] text-white font-semibold text-sm">
              How can we help you?
            </div>

            <ul className="divide-y">
              {presetMessages.map((msg, i) => (
                <li key={i}>
                  <button
                    onClick={() => sendMessage(msg)}
                    className="w-full text-left px-4 py-3 text-sm text-[#2A1E1A]
                               hover:bg-[#25D366]/10 transition"
                  >
                    {msg}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full
                     bg-[#25D366] text-white shadow-lg
                     hover:bg-[#1EBE5D] transition-all"
        >
          <FaWhatsapp className="h-7 w-7" />
        </button>
      </div>
    </>
  );
};

export default FloatingButtons;
