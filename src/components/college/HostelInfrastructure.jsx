import React from "react";

const hostelFacilities = [
  {
    title: "Hostel Buildings",
    image: "/hostel/hostel-building.webp",
    description:
      "Separate and well-constructed hostel buildings for boys and girls with adequate accommodation capacity within the campus.",
  },
  {
    title: "Hostel Rooms",
    image: "/hostel/hostel-rooms.webp",
    description:
      "Spacious, well-ventilated rooms designed to provide a comfortable living environment for students.",
  },
  {
    title: "Mess Facility",
    image: "/hostel/hostel-mess.webp",
    description:
      "Hygienic and nutritious meals are provided through an in-house mess following disciplined meal schedules.",
  },
  {
    title: "Security & Discipline",
    image: "/hostel/hostel-security.webp",
    description:
      "Round-the-clock supervision by wardens with security arrangements ensuring safety and discipline.",
  },
  {
    title: "Recreation & Study Areas",
    image: "/hostel/hostel-recreation.webp",
    description:
      "Common rooms and study areas are available to promote healthy interaction and focused learning.",
  },
  {
    title: "Water & Power Supply",
    image: "/hostel/hostel-utilities.webp",
    description:
      "Uninterrupted water and electricity supply ensuring convenience for students at all times.",
  },
];

const HostelInfrastructure = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Hostel Infrastructure
          </h2>

          {/* Description */}
          <p className="text-sm text-muted-foreground">
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
                bg-white rounded-xl border border-black/10
                shadow-sm hover:shadow-md transition
                overflow-hidden
              "
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-[#2A1E1A]">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent Bar */}
              <div className="h-1 bg-[#8B1E1E]/80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostelInfrastructure;
