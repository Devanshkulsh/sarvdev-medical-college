import React from "react";
import Table from "../../../components/shared/Table";
import { facultySections } from "../../../data/facultyTableData";

const DepartmentWiseList = () => {
  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Designation",
      accessor: "designation",
    },
    {
      header: "Department",
      accessor: "department",
    },
    {
      header: "Teacher Code",
      accessor: "teacherCode",
    },
    {
      header: "Qualification",
      accessor: "qualification",
    },
    {
      header: "Joining Date",
      accessor: "joiningDate",
    },
    {
      header: "Registration Board",
      accessor: "registrationBoard",
    },
    {
      header: "Registration No.",
      accessor: "registrationNo",
    },
    {
      header: "Image",
      render: (row) =>
        row.image ? (
          <img
            src={row.image}
            alt={row.name}
            className="w-16 h-20 object-cover rounded border border-black/10"
          />
        ) : (
          <span className="text-xs text-muted-foreground">—</span>
        ),
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* PAGE HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Department-wise Teaching Staff
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            List of faculty members arranged department-wise as per NCISM norms
          </p>
        </div>

        {/* DEPARTMENT SECTIONS */}
        {facultySections.map((section, index) => (
          <div key={index} className="space-y-4">
            {/* ✅ Section Header (like your screenshot) */}
            <div className="bg-[#8B1E1E]/10 border-l-4 border-[#8B1E1E] px-4 py-3 rounded">
              <h2 className="text-lg font-bold text-[#2A1E1A]">
                {section.sectionTitle}
              </h2>
            </div>

            <Table columns={columns} data={section.rows} showIndex />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentWiseList;
