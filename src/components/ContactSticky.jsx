import React from "react";
import { Phone } from "lucide-react";

/**
 * ContactSticky (Tailwind-only)
 *
 * Left: WhatsApp & Call (flush left edge)
 * Right: Apply Now (flush right edge)
 * Text reads bottom -> top (vertical)
 */
export function ContactSticky({
  phoneNumber = "+91 9415257492",
  whatsappNumber = "+919415257492",
  applyHref = "/admissions",
}) {
  const tel = phoneNumber;
  const waSanitized = (whatsappNumber || phoneNumber).replace(/\D/g, "");

  const btnBase =
    "inline-flex items-center justify-center shadow-md select-none transition-opacity hover:opacity-95";

  return (
    <>
      {/* RIGHT EDGE: Apply Now (top 45%) */}
      <a
        href={applyHref}
        aria-label="Apply Now"
        title="Apply Now"
        className={`${btnBase}
          fixed right-0 top-[45%] z-50 -translate-y-1/2
          rounded-l-lg bg-[#a03232] text-[#FFFFFF]
          px-2 py-3
          animate-pulse
          ring-2 ring-[#a03232]/40 ring-offset-2 ring-offset-white
          hover:animate-none
        `}
      >
        <span className="[writing-mode:vertical-rl] transform-[rotate(180deg)] inline-block whitespace-nowrap text-sm font-semibold">
          Apply Now
        </span>
      </a>
    </>
  );
}

export default ContactSticky;
