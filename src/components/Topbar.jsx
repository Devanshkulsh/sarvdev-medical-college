import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function TopBar() {
  const phoneNumber = "+91 9415257492, +91-9198762108";
  const emailAddress = "sdayurvedamh@gmail.com";
  const address = "Azamgarh-276128, Uttar Pradesh";

  const mapsUrl = "https://maps.app.goo.gl/XDmB1E7Tv1nbp52j9";
  const permissionUrl = "/ncism";

  return (
    <div className="sticky top-0 z-40 bg-[#8B1E1E] text-white">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col sm:flex-row
            items-center sm:justify-between
            gap-2 sm:gap-6
            py-2
          "
        >
          {/* CONTACT INFO */}
          <div
            className="
              flex flex-wrap items-center justify-center
              gap-x-3 gap-y-1
              text-center
              text-xs sm:text-sm
            "
          >
            {/* Phone */}
            <div className="flex items-center gap-3 whitespace-nowrap">
              <a
                href="tel:+919415257492"
                className="flex items-center gap-1.5 hover:text-[#F2B705] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>+91 9415257492</span>
              </a>

              <span className="opacity-70">|</span>

              <a
                href="tel:+919198762108"
                className="flex items-center gap-1.5 hover:text-[#F2B705] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>+91 9198762108</span>
              </a>
            </div>

            {/* Email */}
            <a
              href={`mailto:${emailAddress}`}
              className="
                flex items-center gap-1.5
                hover:text-[#F2B705]
                transition-colors
                whitespace-nowrap
              "
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{emailAddress}</span>
            </a>

            {/* Address */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5
                hover:text-[#F2B705]
                transition-colors
                whitespace-nowrap
              "
            >
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{address}</span>
            </a>
          </div>

          {/* PERMISSION BUTTON */}
          <Link
            to="/ncism"
            className="
    mt-1 sm:mt-0
    rounded-full
    bg-white text-[#8B1E1E]
    px-4 py-1.5
    text-xs sm:text-sm
    font-semibold
    hover:bg-[#F2B705]
    hover:text-[#2A1E1A]
    transition-colors
  "
          >
            Permission Letter
          </Link>
        </div>
      </div>
    </div>
  );
}
