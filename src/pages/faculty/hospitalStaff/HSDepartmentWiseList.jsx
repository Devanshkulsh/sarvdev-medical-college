import React from "react";
import ExcelViewer from "../../../components/shared/ExcelViewer";

const HSDepartmentWiseList = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* PAGE HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Department-wise Hospital Staff
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Department-wise list of hospital staff from the official Excel
            upload.
          </p>
        </div>

        <ExcelViewer fileUrl="/hospital/AnnexureHospital2026-.xlsx" />
      </div>
    </section>
  );
};

export default HSDepartmentWiseList;
