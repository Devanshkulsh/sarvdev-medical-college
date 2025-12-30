import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/homepage/hero.webp"
          alt="Ayurvedic Medical Education"
          className="w-full h-full object-cover"
        />
        <div
          className="
    absolute inset-0
    bg-linear-to-b
    sm:bg-linear-to-r
    from-[#8B1E1E]/55
    via-[#8B1E1E]/15
    to-[#8B1E1E]/10
  "
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom px-4 sm:px-8 lg:px-12 py-16 md:py-28">
        <div className="max-w-3xl space-y-4 md:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F2B705]/20 text-[#F2B705] border border-[#F2B705]/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#F2B705] rounded-full animate-pulse" />
            Admission Open 2025-26
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Welcome to <span className="text-[#F2B705]">Sarvdev</span>
            <br className="hidden sm:block" />
            Ayurvedic Medical College
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-white/90 font-light">
            & Maha Mrityunjay Hospital
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
            A premier institution for Ayurvedic education affiliated with{" "}
            <strong className="text-white">
              Mahayogi Guru Gorakhnath AYUSH University, Uttar Pradesh
            </strong>
            . Committed to excellence in ancient healing wisdom.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-2 mb-16 sm:mb-0">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#8B1E1E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium shadow hover:bg-[#7A1A1A] transition-colors"
            >
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              Apply for Admission
            </Link>

            <a
              href="tel:+919198762108"
              className="inline-flex items-center justify-center gap-2 rounded-md px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium transition-colors
             bg-white text-[#8B1E1E] border border-transparent
             sm:bg-white/20 sm:text-white sm:border-white/40 sm:backdrop-blur
             hover:sm:bg-[#F2B705] hover:sm:text-[#2A1E1A]"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-inner">
        <div className="container-custom px-3 sm:px-6 lg:px-12 py-3 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <StatItem
              icon={
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#8B1E1E]" />
              }
              value="Est. 2018"
              label="Year Established"
            />

            <StatItem
              icon={
                <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#8B1E1E]" />
              }
              value="60+"
              label="Hospital Beds"
            />

            <StatItem
              icon={
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#8B1E1E]" />
              }
              value="BAMS"
              label="Course Offered"
            />

            <StatItem
              icon={
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#8B1E1E]" />
              }
              value="24/7"
              label="Emergency Services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon, value, label }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <div className="shrink-0 flex items-center justify-center">{icon}</div>

      <div className="leading-tight flex flex-col justify-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#2A1E1A]">
          {value}
        </p>
        <p className="text-xs sm:text-sm text-[#6B5A52]">{label}</p>
      </div>
    </div>
  );
}
