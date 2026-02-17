import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";

const HERO_SLIDES = [
  {
    src: "/hero/hero1.webp",
    alt: "Sarvdev Ayurvedic Medical College campus view",
  },
  {
    src: "/hero/hero2.webp",
    alt: "College building front elevation",
  },
  {
    src: "/hero/hero3.webp",
    alt: "Sarvdev campus aerial view",
  },
  // {
  //   src: "/hero/hero4.webp",
  //   alt: "College infrastructure block",
  // },
  // {
  //   src: "/hero/hero5.webp",
  //   alt: "Campus life and landscape",
  // },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        <div
          className="
            absolute inset-0
            bg-black/30
            sm:bg-black/30
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom px-4 sm:px-8 lg:px-12 py-16 md:py-28">
        <div className="max-w-3xl space-y-4 md:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-(--brand-highlight)/40 text-[color:var(--text-primary)] border border-(--brand-secondary)/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-(--brand-primary) rounded-full animate-pulse" />
            Admission Open 2025–26
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
            Welcome to <span className="text-(--brand-highlight)">Sarvdev</span>
            <br className="hidden sm:block" />
            Ayurvedic Medical College
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-white/90 font-light [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
            & Maha Mrityunjay Hospital
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
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
              className="
                inline-flex items-center justify-center gap-2
                rounded-md
                bg-(--brand-primary)
                text-white
                px-4 sm:px-6 py-2.5 sm:py-3
                text-sm sm:text-base md:text-lg
                font-medium shadow
                hover:bg-(--brand-secondary)
                transition-colors
              "
            >
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              Apply for Admission
            </Link>

            <a
              href="tel:+919198762108"
              className="
                inline-flex items-center justify-center gap-2
                rounded-md px-4 sm:px-6 py-2.5 sm:py-3
                text-sm sm:text-base md:text-lg
                font-medium transition-colors
                bg-white text-[color:var(--text-primary)]
                sm:bg-white/20 sm:text-white sm:border sm:border-white/40 sm:backdrop-blur
                hover:sm:bg-(--brand-highlight)
                hover:sm:text-[color:var(--text-primary)]
              "
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
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-(--brand-primary)" />
              }
              value="Est. 2018"
              label="Year Established"
            />

            <StatItem
              icon={
                <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-(--brand-primary)" />
              }
              value="60+"
              label="Hospital Beds"
            />

            <StatItem
              icon={
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-(--brand-primary)" />
              }
              value="BAMS"
              label="Course Offered"
            />

            <StatItem
              icon={
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-(--brand-primary)" />
              }
              value="24/7"
              label="Emergency Services"
            />
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute z-30 right-4 top-4 sm:right-6 sm:top-6 flex items-center gap-2 rounded-full bg-black/25 px-2.5 py-1.5 backdrop-blur-sm">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition ${
              index === activeSlide ? "bg-white" : "bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function StatItem({ icon, value, label }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <div className="shrink-0 flex items-center justify-center">{icon}</div>

      <div className="leading-tight flex flex-col justify-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[color:var(--text-primary)]">
          {value}
        </p>
        <p className="text-xs sm:text-sm text-[color:var(--text-muted)]">{label}</p>
      </div>
    </div>
  );
}

