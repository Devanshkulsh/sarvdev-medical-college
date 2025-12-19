import React from "react";
import Banner from "../components/shared/Banner";
import { FileText, Info } from "lucide-react";

const ResultsPage = () => {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <Banner
        title="Student Results"
        subtitle="Examination Results & Academic Performance"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Results" }]}
      />

      {/* ===== CONTENT SECTION ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* INTRO */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Examination Results
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Official examination results of BAMS students as declared by the
              affiliating university.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Course" value="BAMS (Ayurveda)" />
            <InfoCard
              title="University"
              value="Mahayogi Guru Gorakhnath AYUSH University"
            />
            <InfoCard title="Result Format" value="Official PDF Document" />
          </div>

          {/* IMPORTANT NOTE */}
          <div className="rounded-xl border border-[#F2B705]/40 bg-[#F2B705]/10 p-5 flex gap-4 items-start">
            <Info className="text-[#8B1E1E] mt-0.5" />
            <p className="text-sm text-[#7A5A00]">
              Results are published for reference only. Students must rely on
              original marksheets issued by the university for official use.
            </p>
          </div>

          {/* ===== RESULT CARDS ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard
              title="BAMS Results – Batch 2024–25"
              description="University Examination Results (Professional Year)"
              pdfUrl="/results/dummy.pdf"
            />

            {/* You can add more cards easily later */}
            {/* 
            <ResultCard
              title="BAMS Results – Batch 2023–24"
              description="Annual Examination Results"
              pdfUrl="/results/bams-2023-24.pdf"
            /> 
            */}
          </div>

          {/* FOOTNOTE */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground">
              For re-evaluation, correction, or clarification, students must
              contact the university examination department through official
              channels only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

/* ===== REUSABLE COMPONENTS ===== */

const InfoCard = ({ title, value }) => (
  <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm text-center">
    <p className="text-xs font-semibold text-muted-foreground uppercase">
      {title}
    </p>
    <p className="mt-2 text-sm font-bold text-[#8B1E1E]">{value}</p>
  </div>
);

const ResultCard = ({ title, description, pdfUrl }) => (
  <div className="rounded-2xl border border-black/10 bg-[hsl(40_35%_96%)] p-6 shadow-sm flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>

    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-6 inline-flex items-center justify-center gap-2
        rounded-md px-4 py-2
        bg-[#8B1E1E] text-white
        text-sm font-semibold
        hover:bg-[#7A1A1A]
        transition
      "
    >
      <FileText className="w-4 h-4" />
      View Result PDF
    </a>
  </div>
);

export default ResultsPage;
