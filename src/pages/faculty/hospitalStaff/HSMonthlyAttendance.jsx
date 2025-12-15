import React from "react";
import Table from "../../../components/shared/Table";
import {
  HospitalStaffMonthlyAttendance24,
  HospitalStaffMonthlyAttendance25,
} from "../../../data/hsMonthlyAttendance";

const HSMonthlyAttendance = () => {
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* PAGE HEADING */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Monthly Attendance
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Month-wise attendance records in PDF format.
          </p>
        </div>

        {/* ===== Attendance 2025 ===== */}
        <div className="space-y-4">
          <div className="bg-[#8B1E1E]/10 border-l-4 border-[#8B1E1E] px-4 py-3 rounded">
            <h2 className="text-lg font-bold text-[#2A1E1A]">
              Attendance of Hospital Staff – 2025
            </h2>
          </div>

          <Table
            columns={columns}
            data={HospitalStaffMonthlyAttendance25}
            showIndex={false}
          />
        </div>

        {/* ===== Attendance 2024 ===== */}
        <div className="space-y-4">
          <div className="bg-[#8B1E1E]/10 border-l-4 border-[#8B1E1E] px-4 py-3 rounded">
            <h2 className="text-lg font-bold text-[#2A1E1A]">
              Attendance of Hospital Staff – 2024
            </h2>
          </div>

          <Table
            columns={columns}
            data={HospitalStaffMonthlyAttendance24}
            showIndex={false}
            pageSize={12}
          />
        </div>

      </div>
    </section>
  );
};

export default HSMonthlyAttendance;
