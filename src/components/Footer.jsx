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
  { label: "Courses", href: "/college/courses" },
  { label: "NCISM", href: "/ncism" },
  { label: "Faculty", href: "/faculty/teachingStaff/department-wise-list" },
  { label: "College", href: "/college/introduction" },
  { label: "Hospital", href: "/hospital/introduction" },
  { label: "Student's Corner", href: "students/list/2024-25" },
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
    <footer className="bg-[#8B1E1E] text-white">
      {/* Main Footer */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-start">
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Sarvdev Logo"
                className="h-14 w-14 bg-white rounded-lg p-1 object-contain"
              />
            </Link>

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
            <h3 className="text-base font-semibold border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/85 hover:text-[#F2B705] transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F2B705]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base font-semibold border-b border-white/20 pb-2">
              Contact Us
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3 text-sm text-white/85 py-1">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />

                <div className="flex flex-col">
                  {phones.map((p, i) => (
                    <a
                      key={i}
                      href={`tel:${p.replace(/\s+/g, "")}`}
                      className="hover:text-[#F2B705] transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-white/85 hover:text-[#F2B705] transition-colors py-1"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {email}
              </a>

              <a
  href="https://maps.app.goo.gl/XDmB1E7Tv1nbp52j9"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-3 text-white/85 py-1 hover:text-[#F2B705] transition-colors"
>
  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
  <address className="not-italic leading-relaxed">
    {address.line1}
    <br />
    {address.city}, {address.state}
    <br />
    {address.pincode}
  </address>
</a>

            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base font-semibold border-b border-white/20 pb-2">
              Important Links
            </h3>

            <div className="flex gap-3 py-2 overflow-x-auto no-scrollbar">
              {importantLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-lg hover:shadow-lg transition-all"
                  title={link.label}
                  style={{ minWidth: 48 }}
                >
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="h-8 w-auto object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-2">Follow Us</h4>
              <div className="flex gap-2">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href={
                      i === 0
                        ? socialLinks.facebook
                        : i === 1
                        ? socialLinks.instagram
                        : socialLinks.youtube
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-[#F2B705] hover:text-[#8B1E1E] transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/70">
            <div className="text-center md:text-left">
              © {currentYear} {siteName}. All rights reserved.
            </div>
            <div className="text-center">Affiliated with {affiliation}</div>
            <div className="text-center md:text-right">
              Developed &amp; Managed by{" "}
              <a
                href="https://ntechzy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2B705] hover:underline font-medium"
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
