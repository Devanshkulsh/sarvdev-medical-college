import React, { useState, useMemo } from "react";
import Banner from "../components/shared/Banner";
import testimonials from "../data/testimonials";

const ITEMS_PER_PAGE = 6;

const TestimonialsPage = () => {
  const [viewMode, setViewMode] = useState("all"); // all | paginated
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const paginatedTestimonials = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return testimonials.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  const visibleTestimonials =
    viewMode === "all" ? testimonials : paginatedTestimonials;

  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <Banner
        title="Testimonials"
        subtitle="What Students & Patients Say About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
              Testimonials
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[color:var(--text-primary)]">
              Real Experiences, Real Trust
            </h2>

            <p className="mt-3 text-[color:var(--text-muted)]">
              Genuine feedback from our students, patients, and well-wishers
              reflecting our commitment to Ayurvedic education and healthcare.
            </p>
          </div>

          {/* ===== VIEW TABS ===== */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => {
                setViewMode("all");
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
                viewMode === "all"
                  ? "bg-[color:var(--brand-primary)] text-white"
                  : "bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)]/20"
              }`}
            >
              View All
            </button>

            <button
              onClick={() => {
                setViewMode("paginated");
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
                viewMode === "paginated"
                  ? "bg-[color:var(--brand-primary)] text-white"
                  : "bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)]/20"
              }`}
            >
              Paginated View
            </button>
          </div>

          {/* ===== TESTIMONIALS GRID ===== */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((t) => (
              <blockquote
                key={t.id}
                className="relative bg-white border border-[color:var(--brand-soft)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Decorative Quote */}
                <svg
                  className="absolute -top-3 -left-3 w-10 h-10 text-[color:var(--brand-highlight)]/10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.17 6.17A5 5 0 0 1 12 4v6H6a2 2 0 0 1 1.17-3.83zM17.17 6.17A5 5 0 0 1 22 4v6h-6a2 2 0 0 1 1.17-3.83z" />
                </svg>

                <div className="flex items-start gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    onError={(e) => {
                      const styles = getComputedStyle(document.documentElement);
                      const bg = styles
                        .getPropertyValue("--avatar-bg")
                        .replace("#", "")
                        .trim();
                      const color = styles
                        .getPropertyValue("--avatar-text")
                        .replace("#", "")
                        .trim();
                      e.currentTarget.src =
                        "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(t.name) +
                        `&background=${bg}&color=${color}`;
                    }}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[color:var(--brand-primary)]/15"
                  />

                  <div className="flex-1">
                    <p className="text-sm text-[color:var(--text-muted)] mb-3">“{t.quote}”</p>

                    <p className="text-sm font-semibold text-[color:var(--text-primary)]">
                      {t.name}
                    </p>

                    <p className="text-xs text-[color:var(--text-muted)]">{t.role}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
                    Verified
                  </span>
                </div>
              </blockquote>
            ))}
          </div>

          {/* ===== PAGINATION ===== */}
          {viewMode === "paginated" && totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {/* PREVIOUS */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 h-9 rounded-md text-sm font-semibold transition
        ${
          currentPage === 1
            ? "bg-[color:var(--avatar-bg)] text-[color:var(--text-muted)] cursor-not-allowed"
            : "bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)]/20"
        }`}
              >
                Prev
              </button>

              {/* PAGE NUMBERS */}
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`h-9 w-9 rounded-md text-sm font-semibold transition
            ${
              currentPage === page
                ? "bg-[color:var(--brand-primary)] text-white shadow"
                : "bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)]/20"
            }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* NEXT */}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 h-9 rounded-md text-sm font-semibold transition
        ${
          currentPage === totalPages
            ? "bg-[color:var(--avatar-bg)] text-[color:var(--text-muted)] cursor-not-allowed"
            : "bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)]/20"
        }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;

