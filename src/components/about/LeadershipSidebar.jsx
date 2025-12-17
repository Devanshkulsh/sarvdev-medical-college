import React from "react";
import facultyData from "../../data/faculty";

const LeadershipSidebar = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-foreground">Our Leadership</h3>

      <div className="space-y-4">
        {facultyData.leadership.map((leader) => (
          <div
            key={leader.id}
            className="card-ayurvedic bg-card rounded-lg border shadow-sm p-5 text-center space-y-3"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-16 h-16 rounded-full mx-auto object-cover bg-muted"
            />

            <div>
              <h4 className="text-sm font-semibold text-foreground">
                {leader.name}
              </h4>
              <p className="text-xs text-primary">{leader.designation}</p>
            </div>

            {leader.message && (
              <p className="text-xs text-muted-foreground line-clamp-3">
                {leader.message}
              </p>
            )}
          </div>
        ))}

        {/* Vice Chancellor */}
        <div className="card-ayurvedic bg-card rounded-lg border border-primary/30 shadow-sm p-5 text-center space-y-3">
          <img
            src={facultyData.vicechancellor.image}
            alt={facultyData.vicechancellor.name}
            className="w-16 h-16 rounded-full mx-auto object-cover bg-muted"
          />

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {facultyData.vicechancellor.name}
            </h4>
            <p className="text-xs text-primary">
              {facultyData.vicechancellor.designation}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-1">
            {facultyData.vicechancellor.qualifications.map((q) => (
              <span
                key={q}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSidebar;
