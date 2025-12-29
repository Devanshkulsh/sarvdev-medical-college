import React from "react";
import { FileText, Download } from "lucide-react";

const CollegeCouncil = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            College Council
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            Details of the College Council constituted as per institutional and
            regulatory guidelines.
          </p>
        </div>

        {/* Card */}
        <div
          className="
            card-ayurvedic
            bg-[#8B1E1E]/5
            border border-[#8B1E1E]/20
            rounded-xl
            shadow-sm
            p-6 sm:p-8
            text-center
            space-y-5
          "
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full bg-[#8B1E1E]/10 flex items-center justify-center">
              <FileText className="w-7 h-7 text-[#8B1E1E]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
            College Council Composition
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The document contains information about the members of the College
            Council, their designations, and roles in academic and
            administrative decision-making.
          </p>

          {/* PDF Button */}
          <div className="flex justify-center">
            <a
              href="/about/CC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-md px-5 py-3
                bg-[#8B1E1E] text-white
                text-sm font-semibold
                shadow hover:bg-[#721818]
                transition
              "
            >
              <Download className="w-4 h-4" />
              View / Download PDF
            </a>
          </div>

          {/* Optional note */}
          <p className="text-xs text-muted-foreground">
            * Updated as per NCISM / University norms
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeCouncil;
