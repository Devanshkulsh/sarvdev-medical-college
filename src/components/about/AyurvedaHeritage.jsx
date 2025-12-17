import React from "react";

const AyurvedaHeritage = () => {
  return (
    <div
      className="card-ayurvedic bg-[#8B1E1E]/5
            border border-[#8B1E1E]/20 rounded-lg shadow-sm p-6 space-y-4"
    >
      <h3 className="text-xl font-bold text-foreground">
        The Heritage of Ayurveda
      </h3>

      <div className="space-y-3">
        <p className="text-muted-foreground leading-relaxed">
          Ayurveda is a 5,000-year-old system of natural healing originating in
          the Vedic culture of India and now practiced worldwide.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Tibetan medicine and Traditional Chinese Medicine have roots in
          Ayurveda, and early Greek medicine embraced many Ayurvedic concepts.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Ayurveda is a science of life aimed at holistic well-being.
        </p>
      </div>
    </div>
  );
};

export default AyurvedaHeritage;
