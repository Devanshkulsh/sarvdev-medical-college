import React from "react";

const CollegeIntroduction = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/college/4.webp"
              alt="College Campus"
              className="w-full h-44 sm:h-52 object-cover rounded-lg shadow-sm"
            />
            <img
              src="/college/2.webp"
              alt="Academic Block"
              className="w-full h-44 sm:h-52 object-cover rounded-lg shadow-sm"
            />
            <img
              src="/college/3.webp"
              alt="Hospital Facility"
              className="w-full h-44 sm:h-52 object-cover rounded-lg shadow-sm"
            />
            <img
              src="/college/1.webp"
              alt="Students & Classrooms"
              className="w-full h-44 sm:h-52 object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-5">
            {/* Section tag */}
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                             bg-[#8B1E1E]/10 text-[#8B1E1E]"
            >
              College Introduction
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Sarvdev Ayurvedic Medical College
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Sarvdev Ayurvedic Medical College and Maha Mrityunjay Hospital is
              a premier institution dedicated to excellence in Ayurvedic
              education, research, and healthcare services. The college is
              affiliated with Mahayogi Guru Gorakhnath AYUSH University, Uttar
              Pradesh.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With a strong focus on traditional Ayurvedic principles integrated
              with modern scientific approaches, the institution provides
              quality education, advanced clinical exposure, and holistic
              healthcare services to the community.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              The campus houses well-equipped classrooms, laboratories, an
              attached teaching hospital, and experienced faculty committed to
              nurturing future Ayurvedic professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeIntroduction;
