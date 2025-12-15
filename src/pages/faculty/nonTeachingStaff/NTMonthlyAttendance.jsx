import React from "react";
import Table from "../../../components/shared/Table";
import { NonTeachingMonthlyAttendance } from "../../../data/ntMonthlyAttendance";

const NTMonthlyAttendance = () => {
  const columns = [
    {
      header: "S.No.",
      accessor: "sno",
    },
    {
      header: "Month",
      accessor: "month",
    },
    {
      header: "Year",
      accessor: "year",
    },
    {
      header: "View",
      pdfAccessor: "pdf",
    },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Monthly Attendance
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Month-wise attendance records in PDF format.
          </p>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          data={NonTeachingMonthlyAttendance}
          showIndex={false}
        />
      </div>
    </section>
  );
};

export default NTMonthlyAttendance;
