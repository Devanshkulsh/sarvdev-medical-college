import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Clock,
  Youtube,
} from "lucide-react";

export default function ContactSection() {
  const mapsLink = "https://maps.app.goo.gl/KpTA4jSoN2tLMaQeA";

  const mapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.005235748696!2d83.20265887526256!3d26.000645877202594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991bd9808a051fd%3A0xaa9a23dd0b59c79b!2sSarvdev%20Ayurvedic%20medical%20college%20and%20Maha%20Mrityunjai%20Hospital%20itaura%20chandeshwer%20Azamgarh!5e0!3m2!1sen!2sin!4v1765646849975!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-[#8B1E1E]/10 text-[#8B1E1E]">
            <Clock className="w-3 h-3" />
            Get in Touch
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#2A1E1A]">
            Contact Us
          </h2>

          <p className="mt-3 text-[#6B5A52]">
            Have a question about admissions, courses or hospital services?
            Reach out to us using the details below.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-[#E6E1DD] shadow-sm bg-white">
            <div className="w-full h-auto md:h-72 lg:h-96">
              <iframe
                title="Sarvdev Map"
                src={mapsEmbedSrc}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Location map"
              />
            </div>
          </div>

          {/* Contact Card */}
          <div className="rounded-xl border border-[#E6E1DD] shadow-sm bg-white">
            <div className="h-auto md:h-72 lg:h-96 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#2A1E1A] mb-3">
                  Contact details
                </h3>

                <div className="space-y-4 text-sm text-[#6B5A52]">
                  <a
                    href="tel:+919415257492"
                    className="flex items-center gap-3 hover:text-[#8B1E1E] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#8B1E1E]" />
                    <span>+91 94152 57492 (For other queries)</span>
                  </a>

                  <a
                    href="tel:+919198762108"
                    className="flex items-center gap-3 hover:text-[#8B1E1E] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#8B1E1E]" />
                    <span>+91 91987 62108 (For admissions)</span>
                  </a>

                  <a
                    href="mailto:sdayurvedamh@gmail.com"
                    className="flex items-center gap-3 hover:text-[#8B1E1E] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#8B1E1E]" />
                    <span>sdayurvedamh@gmail.com</span>
                  </a>

                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 transition-colors"
                  >
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[#8B1E1E]" />

                    <address
                      className="
      not-italic leading-relaxed
      text-[#6B5A52]
      transition-colors
      group-hover:text-[#8B1E1E]
    "
                    >
                      Itaura Chandeshwer
                      <br />
                      Azamgarh, Uttar Pradesh — 276128
                    </address>
                  </a>
                </div>
              </div>

              {/* Socials + Office time */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <a
                    href="https://www.facebook.com/p/Sarvdev-Ayurvedic-medical-college-61569381983714/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-[#8B1E1E]/10 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-[#2A1E1A]" />
                  </a>

                  <a
                    href="https://www.instagram.com/sarvdevayurvediccollege/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-[#8B1E1E]/10 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-[#2A1E1A]" />
                  </a>

                  <a
                    href="https://www.youtube.com/@SarvdevAyurvediccollege"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-[#8B1E1E]/10 transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-[#2A1E1A]" />
                  </a>
                </div>

                <div className="text-sm text-[#6B5A52] text-center sm:text-right">
                  <span className="font-medium text-[#2A1E1A]">
                    Office hours:
                  </span>{" "}
                  Mon—Sat, 9:00 AM — 5:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
