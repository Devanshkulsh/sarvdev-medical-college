import React, { useState, useMemo, useEffect } from "react";
import Banner from "../components/shared/Banner";
import { galleryTabs, galleryImages } from "../data/galleryPage";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const INITIAL_VISIBLE = 9;

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  /* 🔍 LIGHTBOX STATE */
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* SHOW MORE STATE */
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredImages = useMemo(() => {
    if (activeTab === "all") {
      return Object.values(galleryImages).flat();
    }
    return galleryImages[activeTab] || [];
  }, [activeTab]);

  /* Reset visible count when tab changes */
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeTab]);

  const visibleImages =
    activeTab === "all"
      ? filteredImages.slice(0, visibleCount)
      : filteredImages;

  /* 🧠 Keyboard controls */
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, currentIndex]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Banner
        title="Photo Gallery"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {galleryTabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 py-2 rounded-md text-sm font-semibold transition
                    ${
                      isActive
                        ? "bg-[#8B1E1E] text-white"
                        : "bg-[#8B1E1E]/10 text-[#8B1E1E] hover:bg-[#8B1E1E]/20"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Masonry */}
          {visibleImages.length > 0 ? (
            <>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                {visibleImages.map((src, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="
                      group cursor-pointer break-inside-avoid
                      overflow-hidden rounded-xl border border-black/10 shadow-sm
                      relative
                    "
                  >
                    <img
                      src={src}
                      alt="Gallery"
                      className="
                        w-full h-auto object-cover
                        transition-transform duration-500
                        group-hover:scale-110
                      "
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div
                      className="
                        absolute inset-0
                        bg-black/30 opacity-0
                        group-hover:opacity-100
                        transition
                      "
                    />
                  </div>
                ))}
              </div>

              {/* SHOW MORE BUTTON (ONLY FOR ALL TAB) */}
              {activeTab === "all" &&
                visibleCount < filteredImages.length && (
                  <div className="flex justify-center pt-6">
                    <button
                      onClick={() =>
                        setVisibleCount((prev) => prev + INITIAL_VISIBLE)
                      }
                      className="
                        px-6 py-3 rounded-md
                        bg-[#8B1E1E] text-white
                        font-semibold text-sm
                        hover:bg-[#7A1A1A]
                        transition
                      "
                    >
                      Show More
                    </button>
                  </div>
                )}
            </>
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              No images available for this category.
            </p>
          )}
        </div>
      </section>

      {/* ===== LIGHTBOX VIEWER ===== */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#F2B705]"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-[#F2B705]"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={filteredImages[currentIndex]}
            alt="Gallery Preview"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-[#F2B705]"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
