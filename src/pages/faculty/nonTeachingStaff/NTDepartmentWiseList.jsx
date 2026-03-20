import React from "react";
import ExcelViewer from "../../../components/shared/ExcelViewer";

const NTDepartmentWiseList = () => {

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Non Teaching Staff
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Department-wise list of non-teaching staff from the official Excel
            upload.
          </p>
        </div>

        <ExcelViewer
          fileUrl="/faculty/non-teaching-staff/non-teaching-staff.xlsx"
        />
      </div>
    </section>
  );
};

export default NTDepartmentWiseList;
