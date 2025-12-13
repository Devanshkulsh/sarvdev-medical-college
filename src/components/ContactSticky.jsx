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
      {/* LEFT EDGE: WhatsApp (top 30%) */}
      {/* <a
        href={`https://wa.me/${waSanitized}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
        className={`${btnBase} fixed left-0 top-[30%] z-50 -translate-y-1/2 rounded-r-lg bg-[hsl(152_56%_42%)] text-[hsl(0_0%_100%)] px-4 py-3`}
      >
        <span className="[writing-mode:vertical-rl] transform-[rotate(360deg)] inline-block whitespace-nowrap text-sm font-medium">
          WhatsApp
        </span>
      </a> */}

      {/* LEFT EDGE: Call (top 60%) */}
      {/* <a
        href={`tel:${tel}`}
        aria-label="Call"
        title={`Call ${tel}`}
        className={`${btnBase} fixed left-0 top-[60%] z-50 -translate-y-1/2 rounded-r-lg bg-[hsl(44_91%_63%)] text-[hsl(0_0%_100%)] px-4 py-6`}
      >
        <span className="[writing-mode:vertical-rl] transform-[rotate(360deg)] inline-block whitespace-nowrap text-sm font-medium">
          Call
        </span>
      </a> */}

      {/* RIGHT EDGE: Apply Now (top 45%) */}
      <a
        href={applyHref}
        aria-label="Apply Now"
        title="Apply Now"
        className={`${btnBase} fixed right-0 top-[45%] z-50 -translate-y-1/2 rounded-l-lg bg-[#a03232] text-[#FFFFFF] px-2 py-3`}
      >
        <span className="[writing-mode:vertical-rl] transform-[rotate(180deg)] inline-block whitespace-nowrap text-sm font-semibold">
          Apply Now
        </span>
      </a>
    </>
  );
}

export default ContactSticky;
