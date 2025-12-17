import React from "react";
import Table from "../../../components/shared/Table";
import { NonTeachingDepartmentWiseListData } from "../../../data/ntDepartmentWiseList";

const NTDepartmentWiseList = () => {
  const columns = [
    {
      header: "Emp. ID",
      accessor: "empID",
    },
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Designation",
      accessor: "designation",
    },
    {
      header: "Working Department",
      accessor: "workingDepartment",
    },
    {
      header: "Qualification",
      accessor: "qualification",
    },
    {
      header: "DOB",
      accessor: "dob",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* PAGE HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Non Teaching Staff
          </h1>
        </div>

        {/* SINGLE TABLE (✅ ONLY ONCE) */}
        <Table
          columns={columns}
          data={NonTeachingDepartmentWiseListData}
          showIndex
        />
      </div>
    </section>
  );
};

export default NTDepartmentWiseList;
