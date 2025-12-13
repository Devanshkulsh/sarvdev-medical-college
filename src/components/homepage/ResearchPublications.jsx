import React from "react";
import { FileText, Users } from "lucide-react";
import researchPublications from "../../data/researchPublications";

export default function ResearchPublications() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                           bg-[hsl(152_59%_30%)]/10 text-[hsl(152_59%_30%)]">
            <FileText className="w-3 h-3" />
            Research Publications
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[hsl(220_14%_16%)]">
            Our Research Contributions
          </h2>

          <p className="mt-3 text-[hsl(220_9%_46%)]">
            Scholarly research articles published by our faculty in reputed
            national and international journals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchPublications.map((item) => (
            <article
              key={item.id}
              className="h-full bg-white border rounded-xl shadow-sm
                         hover:shadow-md transition flex flex-col p-6"
            >
              {/* Title */}
              <h3 className="text-base font-semibold text-[hsl(220_14%_16%)] leading-snug mb-4">
                {item.title}
              </h3>

              {/* Authors */}
              <div className="flex items-start gap-2 text-sm text-[hsl(220_9%_46%)] mb-3">
                <Users className="w-4 h-4 mt-0.5 text-[hsl(152_59%_30%)]" />
                <ul className="space-y-1">
                  {item.authors.map((author, idx) => (
                    <li key={idx}>{author}</li>
                  ))}
                </ul>
              </div>

              {/* Publisher */}
              <p className="text-xs uppercase tracking-wide text-[hsl(220_9%_46%)] mb-6">
                {item.publisher}
              </p>

              {/* Spacer to force equal height */}
              <div className="grow" />

              {/* View Button */}
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium
                           text-[hsl(152_59%_30%)] hover:underline mt-auto"
              >
                <FileText className="w-4 h-4" />
                View
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
