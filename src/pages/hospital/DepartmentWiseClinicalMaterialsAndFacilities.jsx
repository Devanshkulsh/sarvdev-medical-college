import React from "react";
import PDFViewer from "../../components/shared/PDFViewer";

const DepartmentWiseClinicalMaterialsAndFacilities = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* PAGE HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Department Wise Clinical Materials & Facilities
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Detailed information regarding department-wise clinical materials
            and facilities as per institutional and regulatory norms.
          </p>
        </div>

        {/* PDF VIEWER */}
        <PDFViewer
          title="Clinical Materials & Facilities Document"
          pdfUrl="/hospital/dwcm.pdf"
          height="800px"
        />
      </div>
    </section>
  );
};

export default DepartmentWiseClinicalMaterialsAndFacilities;
