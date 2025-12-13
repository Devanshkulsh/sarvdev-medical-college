import React from "react";
import { Link } from "react-router-dom";

export default function Banner({
  title,
  subtitle = "",
  image = "/hero.jpg",
  breadcrumbs = [],
  heightClass = "h-56 sm:h-72 md:h-96",
  children = null,
  backgroundPosition = "center",
}) {
  const crumbs = Array.isArray(breadcrumbs) ? breadcrumbs : [];

  return (
    <header
      className={`relative w-full overflow-hidden ${heightClass} flex items-center`}
      role="banner"
      aria-label={title || "Banner"}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition,
        }}
      />

      {/* Overlay: Ayurvedic brand gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(139,30,30,0.82) 0%, rgba(122,26,26,0.62) 45%, rgba(139,30,30,0.42) 100%)",
        }}
        aria-hidden="true"
      />

      {/* CTA slot (md+) */}
      {children && (
        <div className="hidden md:flex absolute top-4 right-4 z-30">
          {children}
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center justify-center py-6 sm:py-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="inline-flex items-center gap-2 text-white/90">
              {crumbs.length === 0 ? (
                <li className="text-white/90">Home</li>
              ) : (
                crumbs.map((c, i) => {
                  const isLast = i === crumbs.length - 1;
                  return (
                    <li key={i} className="flex items-center gap-2">
                      {!isLast && c.href ? (
                        <>
                          <Link
                            to={c.href}
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            {c.label}
                          </Link>
                          <svg
                            className="w-4 h-4 text-white/60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </>
                      ) : (
                        <span
                          aria-current={isLast ? "page" : undefined}
                          className="font-semibold text-white"
                        >
                          {c.label}
                        </span>
                      )}
                    </li>
                  );
                })
              )}
            </ol>
          </nav>

          {/* Title */}
          <div className="mt-3 sm:mt-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-3 text-white/90 max-w-2xl text-sm sm:text-base">
                {subtitle}
              </p>
            )}
          </div>

          {/* Small-screen children */}
          {children && <div className="mt-4 md:hidden">{children}</div>}
        </div>
      </div>
    </header>
  );
}
