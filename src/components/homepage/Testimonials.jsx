import React from "react";
import testimonials from "../../data/testimonials";

export default function TestimonialsSection() {
  const professors = testimonials.filter((t) =>
    t.role.toLowerCase().includes("professor") ||
    t.role.toLowerCase().includes("consultant")
  );

  const students = testimonials.filter((t) =>
    t.role.toLowerCase().includes("student")
  );

  const patients = testimonials.filter((t) =>
    t.role.toLowerCase().includes("patient")
  );

  // Pick 2 from each category
  const visibleTestimonials = [
    ...professors.slice(0, 2),
    ...students.slice(0, 2),
    ...patients.slice(0, 2),
  ];
  return (
    <section className="py-12 linear-gradient(135deg, var(--brand-primary), var(--brand-highlight))">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 11.5A3.5 3.5 0 1 0 9 4.5" />
              <path d="M20 11.5A3.5 3.5 0 1 0 20 4.5" />
            </svg>
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[color:var(--text-primary)]">
            What Students & Patients Say
          </h2>

          <p className="mt-3 text-[color:var(--text-muted)]">
            Real voices that reflect our dedication to education & healthcare.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((t) => (
            <blockquote
              key={t.id}
              className="relative bg-white border border-[color:var(--brand-soft)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Decorative mark */}
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

  const bg = styles.getPropertyValue("--avatar-bg").replace("#", "").trim();
  const color = styles
    .getPropertyValue("--avatar-text")
    .replace("#", "")
    .trim();

  e.currentTarget.src =
    `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}` +
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

              <div className="mt-4 flex items-center gap-2">
                <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
                  Verified
                </span>
              </div>
            </blockquote>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 
                       bg-[color:var(--brand-primary)] text-white font-medium shadow 
                       hover:bg-[color:var(--brand-secondary)] transition"
          >
            Read More Testimonials
          </a>
        </div>
      </div>
    </section>
  );
}

