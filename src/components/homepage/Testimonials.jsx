import React from "react";
import testimonials from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-[hsl(152_59%_30%)]/10 text-[hsl(152_59%_30%)]">
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

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[hsl(220_14%_16%)]">
            What Students & Patients Say
          </h2>

          <p className="mt-3 text-[hsl(220_9%_46%)]">
            Real voices that reflect our dedication to education & healthcare.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="relative bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Decorative mark */}
              <svg
                className="absolute -top-3 -left-3 w-10 h-10 text-[hsl(44_91%_63%)]/10"
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
                    e.currentTarget.src =
                      "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(t.name) +
                      "&background=E6F4EA&color=1C3A24";
                  }}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[hsl(152_59%_30%)]/10"
                />

                <div className="flex-1">
                  <p className="text-sm text-[hsl(220_9%_46%)] mb-3">
                    “{t.quote}”
                  </p>

                  <p className="text-sm font-semibold text-[hsl(220_14%_16%)]">
                    {t.name}
                  </p>

                  <p className="text-xs text-[hsl(220_9%_46%)]">{t.role}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-[hsl(152_59%_30%)]/10 text-[hsl(152_59%_30%)]">
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
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-[hsl(152_59%_30%)] text-white font-medium shadow hover:bg-[hsl(152_59%_30%)]/90 transition"
          >
            Read More Testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
