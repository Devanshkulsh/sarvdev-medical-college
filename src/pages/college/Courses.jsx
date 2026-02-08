import React from "react";
import Banner from "../../components/shared/Banner";

const Courses = () => {
  return (
    <>
      {/* ===== TOP BANNER ===== */}
      <Banner
        title="Courses Offered"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />

      {/* ===== COURSE CONTENT ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* ===== INTRO WITH IMAGE ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Bachelor of Ayurvedic Medicine & Surgery (BAMS)
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                The Bachelor of Ayurvedic Medicine and Surgery (BAMS) is a
                professional undergraduate degree program focused on the
                traditional system of medicine—Ayurveda—integrated with modern
                medical sciences. The program aims to develop skilled Ayurvedic
                physicians capable of delivering holistic healthcare.
              </p>
            </div>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden border border-black/10 shadow-sm">
              <img
                src="/courses/bams.webp"
                alt="BAMS Course"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* ===== HIGHLIGHTS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Course Duration", value: "5.5 Years" },
              { title: "Internship", value: "1 Year Compulsory" },
              { title: "Eligibility", value: "10+2 (PCB)" },
              { title: "Affiliation", value: "As per NCISM" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-black/10 bg-[hsl(40_35%_94%)] p-6 text-center shadow-sm"
              >
                <h4 className="text-sm font-semibold text-muted-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-lg font-bold text-[color:var(--brand-primary)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* ===== COURSE DETAILS ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-foreground">
                Course Structure
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The BAMS program is divided into professional phases covering
                classical Ayurvedic texts along with modern anatomy, physiology,
                pathology, pharmacology, surgery, gynecology, and extensive
                clinical training.
              </p>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Pre-Clinical Subjects (Samhita, Sharir)</li>
                <li>• Para-Clinical Subjects (Dravyaguna, Rasa Shastra)</li>
                <li>• Clinical Subjects (Kayachikitsa, Panchakarma)</li>
                <li>• Hospital-based clinical exposure</li>
                <li>• Compulsory Rotatory Internship</li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="rounded-xl border border-black/10 bg-[hsl(40_35%_94%)] p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Career Opportunities
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Ayurvedic Medical Officer</li>
                <li>• Private Ayurvedic Practitioner</li>
                <li>• Panchakarma Specialist</li>
                <li>• Research & Academics</li>
                <li>• Hospital & Wellness Consultant</li>
                <li>• Higher Education (MD/MS Ayurveda)</li>
              </ul>
            </div>
          </div>

          {/* ===== CTA BUTTON ===== */}
          <div className="text-center">
            <button
              onClick={() => (window.location.href = "/admissions")} // 🔁 change link if needed
              className="
                inline-flex items-center justify-center
                rounded-xl px-10 py-4
                bg-[color:var(--brand-primary)] text-white
                font-semibold text-sm
                hover:bg-[color:var(--brand-secondary)]
                transition
                shadow-md
              "
            >
              Admissions Open for BAMS
            </button>

            <p className="mt-3 text-xs text-muted-foreground">
              Admission subject to eligibility & counseling as per regulatory
              norms
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;

