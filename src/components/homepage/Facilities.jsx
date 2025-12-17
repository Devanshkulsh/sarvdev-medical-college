import React from "react";
import * as LucideIcons from "lucide-react";
import facilities from "../../data/facilities";

function PillBadge({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold 
                     border border-[#8B1E1E]/30 text-[#8B1E1E] bg-[#FDF1E8]"
    >
      {children}
    </span>
  );
}

function FeatureChip({ children }) {
  return (
    <span
      className="inline-block text-xs font-medium 
                 bg-[#8B1E1E] text-white px-3 py-1 rounded-full shadow-sm 
                 transition-colors duration-200 hover:bg-[#7A1A1A]"
    >
      {children}
    </span>
  );
}

function FacilityCard({ facility }) {
  if (!facility) return null;

  const Icon = LucideIcons[facility.icon] || LucideIcons.Building2;

  return (
    <article
      className="group bg-white rounded-xl border border-transparent 
                 hover:border-[#8B1E1E]/20 shadow-sm hover:shadow-md 
                 transition-transform transform-gpu hover:-translate-y-1 
                 p-6 h-full flex flex-col"
    >
      <div className="flex items-start gap-4">
        <div className="flex-none">
          <div
            className="w-10 h-10 rounded-lg bg-[#FDF1E8] flex items-center justify-center 
                       transition-colors duration-200 group-hover:bg-[#8B1E1E]"
          >
            <Icon className="w-5 h-5 text-[#8B1E1E] group-hover:text-white transition-colors duration-200" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#2A1E1A] mb-2">
            {facility.name}
          </h3>
          <p className="text-sm text-[#6B5A52] leading-relaxed">
            {facility.description}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 flex flex-wrap gap-3">
        {Array.isArray(facility.features) &&
          facility.features.map((f) => <FeatureChip key={f}>{f}</FeatureChip>)}
      </div>
    </article>
  );
}

export default function FacilitiesSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <PillBadge>
            <LucideIcons.Building2 className="w-3 h-3 text-[#8B1E1E]" />
            Infrastructure
          </PillBadge>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#2A1E1A]">
            World-Class Facilities
          </h2>

          <p className="mt-3 text-[#6B5A52]">
            Modern infrastructure combined with traditional Ayurvedic practices.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(facilities) &&
            facilities.map((f) => (
              <FacilityCard key={f.id || f.name} facility={f} />
            ))}
        </div>
      </div>
    </section>
  );
}
