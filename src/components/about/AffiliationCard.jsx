import React from "react";

const AffiliationCard = () => {
  return (
    <div className="card-ayurvedic bg-[#8B1E1E]/5
            border border-[#8B1E1E]/20 rounded-lg shadow-sm p-5 space-y-4">
      <h4 className="text-sm font-semibold text-foreground tracking-wide">
        Affiliation
      </h4>

      <div className="flex items-start gap-4">
        <img
          src="/footer/mggaug.png"
          alt="Mahayogi Guru Gorakhnath AYUSH University"
          className="w-14 h-14 object-contain bg-white rounded-md p-1 shadow-sm"
        />

        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">
            Mahayogi Guru Gorakhnath AYUSH University
          </p>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Sarvdev Ayurvedic Medical College &amp; Maha Mrityunjay Hospital
            is affiliated with Mahayogi Guru Gorakhnath AYUSH University,
            Uttar Pradesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliationCard;
