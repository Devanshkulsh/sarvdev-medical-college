// src/components/homepage/NewsSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import news from "../../data/news";

function formatDate(isoDate) {
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return isoDate;
  }
}

export default function NewsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-[#8B1E1E]/10 text-[#8B1E1E]">
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="3" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
            </svg>
            Latest Updates
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#2A1E1A]">
            News & Events
          </h2>

          <p className="mt-3 text-[#6B5A52]">
            Stay updated with the latest happenings at our institution.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="relative bg-white rounded-xl border border-transparent
                         hover:border-[#2A1E1A]/10 shadow-sm hover:shadow-md
                         transition p-6"
            >
              {/* Date + Category */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 text-[#6B5A52]">
                  <Calendar className="w-4 h-4" />
                  <time className="text-sm">{formatDate(item.date)}</time>
                </div>

                <span
                  className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full
                                 bg-[#F2B705]/10 text-[#F2B705] border border-[#F2B705]/20"
                >
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold text-[#2A1E1A]">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-3 text-[#6B5A52] text-sm leading-relaxed">
                {item.excerpt}
              </p>

              {/* Read More */}
              <div className="mt-6">
                <Link
                  to={item.slug}
                  className="inline-flex items-center gap-2 text-[#8B1E1E] font-medium hover:underline"
                  aria-label="Read more about the news"
                >
                  Read More about the Sarvdev Ayurvedic Medical college news
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/news/all"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2
                       border border-[#2A1E1A]/10 text-[#2A1E1A]
                       bg-white shadow-sm hover:shadow-md transition"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
