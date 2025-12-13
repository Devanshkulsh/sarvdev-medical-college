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
          className="absolute inset-0 bg-linear-to-r 
          from-[hsl(152_59%_30%)]/80 
          via-[hsl(152_56%_42%)]/60 
          to-[hsl(152_56%_42%)]/50"
        />
      </div>

      {/* Content - ensure it's above overlay with z-20 */}
      <div className="relative z-20 container-custom px-4 sm:px-8 lg:px-12 py-16 md:py-28">
        <div className="max-w-3xl space-y-4 md:space-y-8 animate-fade-in">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[hsl(44_91%_63%)]/20 text-[hsl(44_91%_63%)] border border-[hsl(44_91%_63%)]/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[hsl(44_91%_63%)] rounded-full animate-pulse" />
            Admission Open 2024-25
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Welcome to <span className="text-[hsl(44_91%_63%)]">Sarvdev</span>
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
            </strong>. 
            Committed to excellence in ancient healing wisdom.
          </p>

          {/* CTA Buttons - Added margin-bottom for mobile */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-2 mb-16 sm:mb-0">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[hsl(152_59%_30%)] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium shadow hover:bg-[hsl(152_59%_30%)]/90 transition-colors"
            >
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              Apply for Admission
            </Link>

            {/* CONTACT: solid white on mobile for visibility, translucent/outlined on sm+ */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium transition-colors
                         bg-white text-[hsl(152_59%_30%)] border border-transparent
                         sm:bg-white/20 sm:text-white sm:border-white/40 sm:backdrop-blur
                         hover:sm:bg-[hsl(44_91%_63%)] hover:sm:text-[hsl(220_14%_16%)]"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar - Position it with more bottom margin on mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-inner">
        <div className="container-custom px-3 sm:px-6 lg:px-12 py-3 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">

            <StatItem
              icon={<Building2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[hsl(152_59%_30%)]" />}
              value="Est. 2018"
              label="Year Established"
            />

            <StatItem
              icon={<Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[hsl(152_59%_30%)]" />}
              value="60+"
              label="Hospital Beds"
            />

            <StatItem
              icon={<GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[hsl(152_59%_30%)]" />}
              value="BAMS"
              label="Course Offered"
            />

            <StatItem
              icon={<ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[hsl(152_59%_30%)]" />}
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
      <div className="shrink-0 flex items-center justify-center">
        {icon}
      </div>

      <div className="leading-tight flex flex-col justify-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[hsl(220_14%_16%)]">
          {value}
        </p>
        <p className="text-xs sm:text-sm text-[hsl(220_9%_46%)]">
          {label}
        </p>
      </div>
    </div>
  );
}