import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Youtube } from "lucide-react";

const Videos = () => {
  const videos = [
    "https://www.youtube.com/embed/qsnsA_Vm2gA?si=bFsYgMtZpg3_vbs7",
    "https://www.youtube.com/embed/b_fpzYdJ8Y8?si=vQWikEHTuiyVxOin",
    "https://www.youtube.com/embed/mGs5ou-6Gj0?si=qP79gmr2UqSIjxo5",
    "https://www.youtube.com/embed/ifvHGz324tQ?si=X-pwh9UagtzQxyMW",
    "https://www.youtube.com/embed/rV6WFo5cCYg?si=fnyC8hpKB3Ns6Cd4",
    "https://www.youtube.com/embed/XAClJJtxksI?si=Wrgl4vDAASNUAPY6",
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const showMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section
      id="videos"
      className="relative z-10 bg-white py-16 md:py-4 px-4 md:px-10 lg:px-20 overflow-hidden font-poppins"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-24 w-72 h-72 bg-[#8B1E1E]/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-[#F2B705]/20 rounded-full blur-3xl opacity-40"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 md:mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-10 h-1 bg-[#8B1E1E] rounded-full"></div>
          <Youtube className="w-7 h-7 text-[#F2B705]" />
          <div className="w-10 h-1 bg-[#8B1E1E] rounded-full"></div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B1E1E] mb-3">
          Voices & Views of Sarvdev
        </h2>

        <p className="text-lg md:text-xl text-[#6B5A52] max-w-3xl mx-auto leading-relaxed">
          Student Stories · Faculty Insights · Campus Life
        </p>

        <div className="mt-8">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-[#F2B705]/10 text-[#F2B705] border border-[#F2B705]/30">
            Experience Our Campus Virtually
          </span>
        </div>
      </div>

      {/* Video Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {videos.slice(0, visibleCount).map((src, index) => (
          <motion.div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div
              className="relative w-full aspect-video rounded-xl overflow-hidden 
                         shadow-lg hover:shadow-2xl transition-all duration-500 
                         border-2 border-transparent group-hover:border-[#8B1E1E]/30
                         bg-linear-to-br from-gray-50 to-gray-100"
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                           flex items-end p-4"
              >
                <span className="text-white text-sm font-medium">
                  Watch Video {index + 1}
                </span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-14 h-14 rounded-full bg-white/90 flex items-center justify-center
                              transition-all duration-300 ${
                                hoveredIndex === index
                                  ? "scale-110"
                                  : "scale-100"
                              }`}
                >
                  <PlayCircle className="w-8 h-8 text-[#8B1E1E]" />
                </div>
              </div>

              {/* YouTube badge */}
              <div className="absolute top-3 right-3 bg-[#8B1E1E] text-white text-xs font-bold px-2 py-1 rounded">
                YouTube
              </div>

              <iframe
                src={src}
                title={`YouTube Video ${index + 1}`}
                className="w-full h-full relative z-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video number */}
            <div
              className="absolute -top-3 -left-3 w-8 h-8 rounded-full 
                         bg-[#8B1E1E] text-white flex items-center justify-center 
                         text-sm font-bold shadow-lg"
            >
              {index + 1}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More */}
      {visibleCount < videos.length && (
        <motion.div
          className="relative z-10 flex justify-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={showMore}
            className="px-8 py-3 rounded-full 
                       bg-linear-to-r from-[#8B1E1E] to-[#7A1A1A] 
                       text-white font-medium shadow-lg hover:shadow-xl
                       hover:from-[#7A1A1A] hover:to-[#6A1616] 
                       transition-all duration-300 flex items-center gap-2 group"
          >
            <span>Show More Videos</span>
            <svg
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Count */}
      <div className="relative z-10 text-center mt-8">
        <p className="text-sm text-[#6B5A52]">
          Showing {Math.min(visibleCount, videos.length)} of {videos.length}{" "}
          videos
        </p>
        <div className="w-32 h-1 bg-linear-to-r from-transparent via-[#8B1E1E] to-transparent mx-auto mt-2 rounded-full"></div>
      </div>
    </section>
  );
};

export default Videos;
