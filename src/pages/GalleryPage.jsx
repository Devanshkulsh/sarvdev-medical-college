import React, { useState, useMemo } from "react";
import Banner from "../components/shared/Banner";
import { galleryTabs, galleryImages } from "../data/galleryPage";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredImages = useMemo(() => {
    if (activeTab === "all") {
      return Object.values(galleryImages).flat();
    }
    return galleryImages[activeTab] || [];
  }, [activeTab]);

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
          {filteredImages.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filteredImages.map((src, index) => (
                <div
                  key={index}
                  className="break-inside-avoid overflow-hidden rounded-xl border border-black/10 shadow-sm"
                >
                  <img
                    src={src}
                    alt="Gallery"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              No images available for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
