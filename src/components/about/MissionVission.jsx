import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mission */}
      <div className="card-ayurvedic bg-card rounded-lg border shadow-sm p-6 space-y-4">
        <div className="p-3 bg-primary/10 rounded-xl w-fit">
          <Target className="h-6 w-6 text-primary" />
        </div>

        <h3 className="text-xl font-bold text-foreground">Our Mission</h3>

        <p className="text-muted-foreground">
          The mission of Maha Mrityunjay Ayurvedic Hospital is to improve the
          health of our community and the global community.
        </p>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            "To be the world's preeminent Ayurvedic healthcare institution",
            "To educate budding healthcare professionals",
            "To cultivate trust, honesty, mutual respect and compassion",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Vision */}
      <div className="card-ayurvedic bg-card rounded-lg border shadow-sm p-6 space-y-4">
        <div className="p-3 bg-primary/10 rounded-xl w-fit">
          <Eye className="h-6 w-6 text-primary" />
        </div>

        <h3 className="text-xl font-bold text-foreground">Our Vision</h3>

        <div className="space-y-3">
          <p className="text-muted-foreground">
            To impart quality education and tap the hidden potential of young
            minds by inculcating theoretical knowledge and practical skills.
          </p>

          <p className="text-muted-foreground">
            Elevating Ayurveda education standards through quality teaching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
