import React from "react";
import facultyData from "../../data/faculty";

const LeadershipSidebar = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">
        Our Leadership
      </h3>

      {facultyData.leadership.map((leader) => (
        <div
          key={leader.id}
          className="rounded-xl border border-primary/20 bg-white p-5 text-center space-y-3 shadow-sm"
        >
          <img
            src={leader.image}
            alt={leader.name}
            className="w-20 h-20 rounded-full mx-auto object-cover bg-muted"
          />

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {leader.name}
            </h4>
            <p className="text-xs text-primary">
              {leader.designation}
            </p>
          </div>

          {leader.message && (
            <p className="text-xs text-muted-foreground line-clamp-3">
              {leader.message}
            </p>
          )}
        </div>
      ))}

      {/* Vice Chancellor */}
      <div className="rounded-xl border border-primary/40 bg-white p-5 text-center space-y-3 shadow-sm">
        <img
          src={facultyData.vicechancellor.image}
          alt={facultyData.vicechancellor.name}
          className="w-20 h-20 rounded-full mx-auto object-cover bg-muted"
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
              className="px-2 py-0.5 rounded-full text-[10px] font-medium
                         bg-primary/10 text-primary"
            >
              {q}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default LeadershipSidebar;
