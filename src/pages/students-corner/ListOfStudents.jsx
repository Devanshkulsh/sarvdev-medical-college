import React from "react";
import Banner from "../../components/shared/Banner";
// import PDFViewer from "../../components/shared/PDFViewer";
import ExcelViewer from "../../components/shared/ExcelViewer";

const ListOfStudents = () => {
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
          {/* Excel VIEWER */}
          <ExcelViewer
            title="Student List (Academic Year 2024–2025)"
            fileUrl="https://res.cloudinary.com/dhlqc0ymy/raw/upload/v1770809698/batch2425_NEW_t1ai5k.xlsx"
          />
        </div>
      </section>
    </>
  );
};

export default ListOfStudents;
