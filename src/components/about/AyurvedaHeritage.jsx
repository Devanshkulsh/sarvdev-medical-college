import React from "react";

const AyurvedaHeritage = () => {
  return (
    <div
      className="
        card-ayurvedic
        bg-[hsl(140_20%_96%)]
        p-8
        space-y-4
      "
    >
      <h3 className="text-xl font-semibold text-foreground">
        The Heritage of Ayurveda
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        Ayurveda is a 5,000-year-old system of natural healing originating in
        the Vedic culture of India and now practiced worldwide.
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed">
        Tibetan medicine and Traditional Chinese Medicine have roots in Ayurveda,
        and early Greek medicine embraced many Ayurvedic concepts.
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed">
        Ayurveda is a science of life aimed at holistic well-being.
      </p>
    </div>
  );
};

export default AyurvedaHeritage;
