import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Hospital", href: "/hospital" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const importantLinks = [
  {
    label: "Ministry of AYUSH",
    href: "https://ayush.gov.in/",
    icon: "/footer/ayush.png",
  },
  {
    label: "NCISM India",
    href: "https://ncismindia.org/",
    icon: "/footer/ccim.png",
  },
  {
    label: "MGGAU",
    href: "https://mggaugkp.ac.in/",
    icon: "footer/mggaug.png",
  },
  {
    label: "UP Scholarship",
    href: "https://scholarship.up.nic.in/",
    icon: "footer/up.png",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const siteName = "Sarvdev Ayurvedic Medical College & Hospital";
  const affiliation =
    "Mahayogi Guru Gorakhnath AYUSH University, Uttar Pradesh";
  const phones = ["+91 9415257492", "+91 9198762108"];
  const email = "sdayurvedamh@gmail.com";
  const address = {
    line1: "Itaura Chandeshwer",
    city: "Azamgarh",
    state: "Uttar Pradesh",
    pincode: "276128",
  };
  const socialLinks = {
    facebook:
      "https://www.facebook.com/p/Sarvdev-Ayurvedic-medical-college-61569381983714/",
    instagram: "https://www.instagram.com/sarvdevayurvediccollege/",
    youtube: "https://www.youtube.com/@SarvdevAyurvediccollege",
  };

  return (
    <footer className="bg-[hsl(152_59%_30%)] text-white">
      {/* Main Footer */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 max-w-7xl">
        {/* use a little tighter gaps on small screens and expand on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-start">
          {/* About Section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Sarvdev Logo"
                className="h-14 w-14 bg-white rounded-lg p-1 object-contain"
              />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {siteName}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Affiliated with {affiliation}. Committed to excellence in
              Ayurvedic education and healthcare.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base font-semibold border-b border-white/20 pb-2 text-white">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/85 hover:text-[hsl(44_91%_63%)] transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(44_91%_63%)] inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base font-semibold border-b border-white/20 pb-2 text-white">
              Contact Us
            </h3>

            <div className="space-y-2 text-sm">
              <a
                href={`tel:${phones[0]}`}
                className="flex items-start gap-3 text-white/85 hover:text-[hsl(44_91%_63%)] transition-colors py-1"
              >
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <div className="leading-tight">
                  {phones.map((p, i) => (
                    <div key={i}>{p}</div>
                  ))}
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-white/85 hover:text-[hsl(44_91%_63%)] transition-colors py-1"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="leading-tight">{email}</span>
              </a>

              <div className="flex items-start gap-3 text-white/85 py-1">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <address className="not-italic leading-relaxed text-sm">
                  {address.line1}
                  <br />
                  {address.city}, {address.state}
                  <br />
                  {address.pincode}
                </address>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base font-semibold border-b border-white/20 pb-2 text-white">
              Important Links
            </h3>

            {/* Icons row: centered on mobile, left on md+; horizontal scroll allowed on very small screens */}
            <div className="py-2 md:py-0">
              <div className="flex items-center md:items-start justify-start md:justify-start gap-3 overflow-x-auto no-scrollbar">
                <div className="flex gap-3 whitespace-nowrap px-2 md:px-0">
                  {importantLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white p-2 rounded-lg hover:shadow-lg transition-all flex items-center justify-center"
                      title={link.label}
                      style={{ minWidth: 48 }}
                    >
                      <img
                        src={link.icon}
                        alt={link.label}
                        className="h-8 w-auto object-contain mx-auto md:mx-0"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 md:pt-4">
              <h4 className="text-sm font-medium mb-2 text-white">Follow Us</h4>
              <div className="flex gap-2">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-[hsl(44_91%_63%)] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-[hsl(44_91%_63%)] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-[hsl(44_91%_63%)] hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
          {/* Use a 3-column grid on md+ so items stay in left/center/right columns,
              but collapse to a single column on small screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-sm text-white/70">
            <div className="text-center md:text-left">
              <span>
                © {currentYear} {siteName}. All rights reserved.
              </span>
            </div>

            <div className="text-center md:text-center">
              <span>Affiliated with {affiliation}</span>
            </div>

            <div className="text-center md:text-right">
              <span className="mr-1">Developed &amp; Managed by</span>
              <a
                href="https://ntechzy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(44_91%_63%)] hover:underline font-medium"
              >
                Ntechzy Pvt. Ltd.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
