// src/components/homepage/GallerySection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import images from "../../data/gallery";

export default function GallerySection() {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;
    const slides = Array.from(slider.querySelectorAll(".gallery-slide"));
    if (!slides.length) return;

    const scrollToIndex = (i) => {
      const slide = slides[i % slides.length];
      if (slide) {
        slider.scrollTo({
          left: slide.offsetLeft,
          behavior: "smooth",
        });
      }
    };

    const intervalMs = 3000;
    let t = null;

    const start = () => {
      if (t) clearInterval(t);
      t = setInterval(() => {
        if (paused) return;
        index = (index + 1) % slides.length;
        scrollToIndex(index);
      }, intervalMs);
    };

    const startTimeout = setTimeout(start, 600);

    const onEnter = () => setPaused(true);
    const onLeave = () => setPaused(false);

    slider.addEventListener("mouseenter", onEnter);
    slider.addEventListener("mouseleave", onLeave);
    slider.addEventListener("touchstart", onEnter, { passive: true });
    slider.addEventListener("touchend", onLeave);

    return () => {
      clearTimeout(startTimeout);
      if (t) clearInterval(t);
      slider.removeEventListener("mouseenter", onEnter);
      slider.removeEventListener("mouseleave", onLeave);
      slider.removeEventListener("touchstart", onEnter);
      slider.removeEventListener("touchend", onLeave);
    };
  }, [isMobile, paused]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-[#8B1E1E]/10 text-[#8B1E1E]">
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 7v10a2 2 0 0 0 2 2h14" />
              <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
              <path d="M7 11h10" />
            </svg>
            Gallery
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#2A1E1A]">
            Campus & Life — A Visual Tour
          </h2>

          <p className="mt-2 text-[#6B5A52] max-w-xl mx-auto">
            Pictures from classrooms, labs, hospital, herbal garden and student
            life.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg h-48 md:h-56 bg-gray-100"
              >
                <img
                  src={src}
                  alt={`gallery-${idx}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden mt-2">
          <div ref={sliderRef} className="w-full overflow-hidden">
            <div
              className="flex gap-3 pb-4 px-2"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                overflowX: "auto",
              }}
            >
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="gallery-slide shrink-0 w-[84%] sm:w-[70%] rounded-lg overflow-hidden scroll-snap-align-start"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="relative h-56 bg-gray-100">
                    <img
                      src={src}
                      alt={`gallery-mobile-${idx}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-3 left-3 rounded-md p-2 bg-white/60 backdrop-blur-sm">
                      <svg
                        className="w-5 h-5 text-[#8B1E1E]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 7v10a2 2 0 0 0 2 2h14" />
                        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pager dots */}
            <div className="flex items-center justify-center gap-2 mt-3">
              {images.map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-[#6B5A52]/30 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium shadow-sm
                       bg-[#8B1E1E] text-white hover:bg-[#7A1A1A] transition"
            aria-label="See more gallery"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}
