import React from "react";
import {
  Building2,
  BedDouble,
  UtensilsCrossed,
  ShieldCheck,
  BookOpenCheck,
  Zap,
} from "lucide-react";

const hostelFacilities = [
  {
    title: "Hostel Buildings",
    description:
      "Separate and well-constructed hostel buildings for boys and girls with adequate accommodation capacity.",
  },
  {
    title: "Hostel Rooms",
    description:
      "Spacious, well-ventilated rooms designed to provide a comfortable living environment for students.",
  },
  {
    title: "Mess Facility",
    description:
      "Hygienic and nutritious meals are provided through an in-house mess following disciplined meal schedules.",
  },
  {
    title: "Security & Discipline",
    description:
      "Round-the-clock supervision by wardens with security arrangements ensuring safety and discipline.",
  },
  {
    title: "Recreation & Study Areas",
    description:
      "Common rooms and study areas are available to promote healthy interaction and focused learning.",
  },
  {
    title: "Water & Power Supply",
    description:
      "Uninterrupted water and electricity supply ensuring convenience for students at all times.",
  },
];

const iconByTitle = {
  "Hostel Buildings": Building2,
  "Hostel Rooms": BedDouble,
  "Mess Facility": UtensilsCrossed,
  "Security & Discipline": ShieldCheck,
  "Recreation & Study Areas": BookOpenCheck,
  "Water & Power Supply": Zap,
};

const HostelInfrastructure = () => {
  return (
    <section className="py-12 bg-[color:var(--bg-neutral)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[color:var(--text-primary)]">
            Hostel Infrastructure
          </h2>

          {/* Description */}
          <p className="text-sm text-[color:var(--text-muted)]">
            Facilities provided for safe, comfortable, and disciplined student
            accommodation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostelFacilities.map((item, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-xl border border-[color:var(--brand-soft)]/60
                shadow-sm hover:shadow-md transition
                overflow-hidden
              "
            >
              {/* Icon */}
              <div className="relative h-44 overflow-hidden bg-linear-to-br from-[color:var(--avatar-bg)] via-[color:var(--bg-neutral)] to-white">
                <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-[color:var(--brand-highlight)]/35 blur-lg" />
                <div className="absolute right-8 bottom-8 h-16 w-16 rounded-full bg-[color:var(--brand-primary)]/20 blur-md" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative rounded-2xl border border-[color:var(--brand-soft)]/70 bg-white/80 px-6 py-5 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                    {(() => {
                      const Icon = iconByTitle[item.title] || Building2;
                      return (
                        <Icon className="h-12 w-12 text-[color:var(--brand-primary)] animate-pulse" />
                      );
                    })()}
                    <div className="absolute -bottom-3 left-1/2 h-3 w-16 -translate-x-1/2 rounded-full bg-black/15 blur-sm" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent Bar */}
              <div className="h-1 bg-[color:var(--brand-primary)]/80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostelInfrastructure;

