import React from "react";
import Banner from "../components/shared/Banner";
import { Briefcase, Users, GraduationCap, Heart, Mail } from "lucide-react";

const VacanciesPage = () => {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <Banner
        title="Careers"
        subtitle="Join Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* ===== INTRO SECTION ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Build Your Career With Purpose
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital
              offers a professional, ethical, and growth-oriented work
              environment for educators, healthcare professionals, and
              administrative staff. Join us in shaping the future of Ayurvedic
              education and holistic healthcare.
            </p>
          </div>

          {/* ===== WHY WORK WITH US ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<GraduationCap />}
              title="Academic Excellence"
              text="Work in a regulated academic environment aligned with NCISM and university standards."
            />
            <FeatureCard
              icon={<Users />}
              title="Professional Growth"
              text="Opportunities for training, research, and continuous development."
            />
            <FeatureCard
              icon={<Heart />}
              title="Supportive Culture"
              text="Respectful, ethical, and collaborative workplace culture."
            />
            <FeatureCard
              icon={<Briefcase />}
              title="Job Stability"
              text="Transparent policies and long-term career opportunities."
            />
          </div>

          {/* ===== CURRENT OPENINGS ===== */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground text-center">
              Current Openings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <JobCard
                title="Assistant Professor (Ayurveda)"
                department="Kayachikitsa / Panchakarma / Shalya Tantra"
                qualification="MD/MS Ayurveda as per NCISM norms"
                type="Full Time"
              />

              <JobCard
                title="Medical Officer"
                department="Maha Mrityunjay Hospital"
                qualification="BAMS / MD Ayurveda"
                type="Full Time"
              />

              <JobCard
                title="Staff Nurse"
                department="Hospital Services"
                qualification="GNM / B.Sc Nursing"
                type="Full Time"
              />

              <JobCard
                title="Administrative Executive"
                department="College Administration"
                qualification="Graduate with relevant experience"
                type="Full Time"
              />
            </div>
          </div>

          {/* ===== BENEFITS ===== */}
          <div className="rounded-2xl border border-black/10 bg-[hsl(40_35%_96%)] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Employee Benefits
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li>• Competitive salary as per norms</li>
              <li>• Structured work environment</li>
              <li>• Learning & development opportunities</li>
              <li>• Respectful academic & hospital culture</li>
              <li>• Long-term career stability</li>
              <li>• Compliance with statutory regulations</li>
            </ul>
          </div>

          {/* ===== HIRING PROCESS ===== */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground text-center">
              Our Hiring Process
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StepCard
                step="Step 1"
                title="Application Submission"
                text="Submit your resume and credentials via email."
              />
              <StepCard
                step="Step 2"
                title="Screening & Interview"
                text="Shortlisted candidates are contacted for interview."
              />
              <StepCard
                step="Step 3"
                title="Final Selection"
                text="Appointment as per institutional and regulatory norms."
              />
            </div>
          </div>

          {/* ===== EQUAL OPPORTUNITY ===== */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital is an
              equal opportunity employer. Employment decisions are made without
              discrimination and strictly in accordance with statutory and
              regulatory guidelines.
            </p>
          </div>

          {/* ===== CTA ===== */}
          <div className="text-center">
            <div className="inline-block rounded-xl bg-[#8B1E1E]/10 px-8 py-6">
              <h4 className="text-lg font-bold text-foreground">
                Apply for Career Opportunities
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Send your updated resume and relevant documents to:
              </p>

              <a
                href="mailto:sdayurvedamh@gmail.com"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#8B1E1E]"
              >
                <Mail className="w-4 h-4" />
                sdayurvedamh@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ===== REUSABLE COMPONENTS ===== */

const FeatureCard = ({ icon, title, text }) => (
  <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm text-center">
    <div className="mx-auto mb-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E]">
      {icon}
    </div>
    <h4 className="text-sm font-bold text-foreground">{title}</h4>
    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
  </div>
);

const JobCard = ({ title, department, qualification, type }) => (
  <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm space-y-3">
    <h4 className="text-sm font-bold text-foreground">{title}</h4>
    <p className="text-sm text-muted-foreground">
      <strong>Department:</strong> {department}
    </p>
    <p className="text-sm text-muted-foreground">
      <strong>Qualification:</strong> {qualification}
    </p>
    <p className="text-sm text-muted-foreground">
      <strong>Employment Type:</strong> {type}
    </p>
  </div>
);

const StepCard = ({ step, title, text }) => (
  <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm text-center">
    <p className="text-xs font-semibold text-[#8B1E1E]">{step}</p>
    <h4 className="mt-2 text-sm font-bold text-foreground">{title}</h4>
    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
  </div>
);

export default VacanciesPage;
