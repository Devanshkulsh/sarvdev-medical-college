import React from "react";
import Banner from "../../components/shared/Banner";
import PDFViewer from "../../components/shared/PDFViewer";

const ListOfStudents2526 = () => {
  return (
    <>
      {/* ===== TOP BANNER ===== */}
      <Banner
        title="List of Students"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Students" },
          { label: "List of Students" },
        ]}
      />

      {/* ===== CONTENT ===== */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* PAGE HEADING */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Batch 2025-26
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Official student list as per academic records
            </p>
          </div>

          {/* PDF VIEWER */}
          <PDFViewer
            title="BAMS Students List – Batch 2025-26"
            pdfUrl="/students/list/batch2526.pdf"
            height="800px"
          />
        </div>
      </section>
    </>
  );
};

export default ListOfStudents2526;
