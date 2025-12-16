import React from "react";
import Banner from "../components/shared/Banner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.005235748696!2d83.20265887526256!3d26.000645877202594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991bd9808a051fd%3A0xaa9a23dd0b59c79b!2sSarvdev%20Ayurvedic%20Medical%20College%20and%20Maha%20Mrityunjay%20Hospital!5e0!3m2!1sen!2sin!4v1765558945369";

  return (
    <>
      {/* ===== BANNER ===== */}
      <Banner
        title="Contact Us"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* INTRO */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Get in Touch With Us
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              For admissions, academics, hospital services, or general enquiries,
              feel free to contact Sarvdev Ayurvedic Medical College & Maha
              Mrityunjay Hospital.
            </p>
          </div>

          {/* MAP + DETAILS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm">
              <iframe
                src={mapSrc}
                title="College Location"
                className="w-full h-85 lg:h-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            {/* DETAILS */}
            <div className="rounded-2xl border border-black/10 bg-[hsl(40_35%_96%)] p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Contact Information
              </h3>

              <InfoItem icon={<Phone />} title="Phone" text="+91 94152 57492, +91 91987 62108" />
              <InfoItem icon={<Mail />} title="Email" text="sdayurvedamh@gmail.com" />
              <InfoItem
                icon={<MapPin />}
                title="Address"
                text="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital,
                Itaura Chandeshwer, Azamgarh, Uttar Pradesh – 276128"
              />
              <InfoItem icon={<Clock />} title="Office Hours" text="Monday – Saturday | 9:00 AM – 5:00 PM" />

              {/* SOCIAL */}
              <div className="pt-5 border-t border-black/10">
                <p className="text-sm font-semibold mb-3 text-foreground">
                  Connect With Us
                </p>
                <div className="flex gap-4">
                  <SocialIcon href="https://www.facebook.com/p/Sarvdev-Ayurvedic-medical-college-61569381983714/" icon={<Facebook />} />
                  <SocialIcon href="https://www.instagram.com/sarvdevayurvediccollege/" icon={<Instagram />} />
                  <SocialIcon href="https://www.youtube.com/@SarvdevAyurvediccollege" icon={<Youtube />} />
                </div>
              </div>
            </div>
          </div>

          {/* HOW TO REACH */}
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">
              How to Reach the Campus
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><span className="font-semibold text-foreground">By Road:</span> Well connected via Azamgarh city road network.</li>
              <li><span className="font-semibold text-foreground">By Rail:</span> Nearest railway station – Azamgarh Junction.</li>
              <li><span className="font-semibold text-foreground">By Air:</span> Nearest airport – Gorakhpur / Varanasi.</li>
            </ul>
          </div>

          {/* ===== FORM + RIGHT STACK ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT — FORM */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-center text-foreground">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-center text-muted-foreground">
                We’ll respond to your enquiry at the earliest.
              </p>

              <form className="mt-8 space-y-5">
                <Input label="Full Name" placeholder="Enter your name" />
                <Input label="Email Address" placeholder="Enter your email" />
                <Input label="Phone Number" placeholder="Enter your phone number" />

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="mt-1 w-full rounded-md border border-black/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#8B1E1E] py-3 text-sm font-semibold text-white hover:bg-[#7A1A1A] transition"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* RIGHT — STACKED CARDS */}
            <div className="space-y-6">
              {/* CAMPUS VISIT */}
              <div className="rounded-2xl bg-[#8B1E1E]/10 px-6 py-6 text-center">
                <h4 className="text-sm font-bold text-foreground">
                  Campus Visit & Admission Enquiry
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Students and parents are welcome to visit the campus during
                  office hours for counselling, infrastructure inspection, and
                  hospital facility overview. Prior appointment is recommended.
                </p>
              </div>

              {/* EMERGENCY CARD */}
              <div className="rounded-2xl border border-[#8B1E1E]/30 bg-[#8B1E1E]/10 px-6 py-6 text-center shadow-sm">
                <h4 className="text-sm sm:text-base font-bold text-[#8B1E1E]">
                  Maha Mrityunjay Hospital
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  24×7 Emergency & OPD Services Available
                </p>
                <div className="mt-3 flex justify-center gap-3">
                  <span className="inline-flex rounded-full bg-[#8B1E1E]/20 px-4 py-1 text-xs font-semibold text-[#8B1E1E]">
                    Emergency Care
                  </span>
                  <span className="inline-flex rounded-full bg-[#8B1E1E]/20 px-4 py-1 text-xs font-semibold text-[#8B1E1E]">
                    OPD Services
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

/* ===== SMALL REUSABLE PARTS ===== */

const InfoItem = ({ icon, title, text }) => (
  <div className="flex gap-4 items-start">
    <div className="p-2 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E]">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#8B1E1E]/10 hover:bg-[#8B1E1E]/20 transition"
  >
    <span className="text-[#8B1E1E]">{icon}</span>
  </a>
);

const Input = ({ label, placeholder }) => (
  <div>
    <label className="text-sm font-medium text-foreground">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-1 w-full rounded-md border border-black/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30"
    />
  </div>
);

export default ContactPage;
