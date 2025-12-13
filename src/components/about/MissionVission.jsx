import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Mission */}
      <div
        className="
          card-ayurvedic
          p-7
          space-y-5
          border border-border
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:border-primary/40
        "
      >
        <div className="p-3 bg-primary/10 rounded-xl w-fit">
          <Target className="h-6 w-6 text-primary" />
        </div>

        <h3 className="text-xl font-semibold text-foreground">
          Our Mission
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          The mission of Maha Mrityunjay Ayurvedic Hospital is to improve the
          health of our community and the global community.
        </p>

        <ul className="space-y-3 text-sm text-muted-foreground">
          {[
            "To be the world's preeminent Ayurvedic healthcare institution",
            "To educate budding healthcare professionals",
            "To cultivate trust, honesty, mutual respect and compassion",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Vision */}
      <div
        className="
          card-ayurvedic
          p-7
          space-y-5
          border border-border
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:border-primary/40
        "
      >
        <div className="p-3 bg-primary/10 rounded-xl w-fit">
          <Eye className="h-6 w-6 text-primary" />
        </div>

        <h3 className="text-xl font-semibold text-foreground">
          Our Vision
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          To impart quality education and tap the hidden potential of young
          minds by inculcating theoretical knowledge and practical skills.
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Elevating Ayurveda education standards through quality teaching.
        </p>
      </div>

    </div>
  );
};

export default MissionVision;
