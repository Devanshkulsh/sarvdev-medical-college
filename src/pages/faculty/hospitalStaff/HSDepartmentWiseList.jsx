import React from "react";
import { HospitalStaffDepartmentWiseListData } from "../../../data/hsDepartmentWiseList";
import Table from "../../../components/shared/Table";

const HSDepartmentWiseList = () => {
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Designation", accessor: "designation" },
    { header: "Working Department", accessor: "workingDepartment" },
    { header: "DOA", accessor: "doa" },
    { header: "Qualification", accessor: "qualification" },
    { header: "Father", accessor: "father" },
    { header: "Nature of Appointment", accessor: "natureOfAppointment" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* PAGE HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Department-wise Hospital Staff
          </h1>
        </div>

        <Table
          columns={columns}
          data={HospitalStaffDepartmentWiseListData}
          showIndex
        />
      </div>
    </section>
  );
};

export default HSDepartmentWiseList;
