import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/Topbar";
import ContactSticky from "./components/ContactSticky";
import { Navbar } from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Footer } from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import DepartmentWiseList from "./pages/faculty/teachingStaff/DepartmentWiseList";
import MonthlyAttendance from "./pages/faculty/teachingStaff/MonthlyAttendance";
import NTDepartmentWiseList from "./pages/faculty/nonTeachingStaff/NTDepartmentWiseList";
import NTMonthlyAttendance from "./pages/faculty/nonTeachingStaff/NTMonthlyAttendance";
import HSDepartmentWiseList from "./pages/faculty/hospitalStaff/HSDepartmentWiseList";
import HSMonthlyAttendance from "./pages/faculty/hospitalStaff/HSMonthlyAttendance";
import OrganizationChart from "./pages/faculty/OrganizationChart";
import Introduction from "./pages/college/Introduction";
import Infrastructure from "./pages/college/Infrastructure";
import IntroductionWithInfrastructure from "./pages/hospital/IntroductionWithInfrastructure";
import Charges from "./pages/hospital/Charges";
import DepartmentWiseClinicalMaterialsAndFacilities from "./pages/hospital/DepartmentWiseClinicalMaterialsAndFacilities";
import PatientMonthlyAttendance from "./pages/hospital/PatientMonthlyAttendance";
import Courses from "./pages/college/Courses";
import ListOfStudents from "./pages/students-corner/ListOfStudents";
import StudentMonthlyAttendance from "./pages/students-corner/StudentMonthlyAttendance";
import NewsAll from "./pages/news/NewsAll";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import Commiittee from "./pages/committee/Commiittee";
import FloatingButtons from "./components/FloatingButtons";
import NCISMPage from "./components/NCISMPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/faculty/teachingStaff/department-wise-list"
          element={<DepartmentWiseList />}
        />
        <Route
          path="/faculty/teachingStaff/monthly-attendance"
          element={<MonthlyAttendance />}
        />
        <Route
          path="/faculty/non-teaching/department-wise-list"
          element={<NTDepartmentWiseList />}
        />
        <Route
          path="/faculty/non-teaching/monthly-attendance"
          element={<NTMonthlyAttendance />}
        />
        <Route
          path="/faculty/hospital-staff/department-wise-list"
          element={<HSDepartmentWiseList />}
        />
        <Route
          path="/faculty/hospital-staff/monthly-attendance"
          element={<HSMonthlyAttendance />}
        />
        <Route path="/faculty/org-chart" element={<OrganizationChart />} />
        <Route path="/college/introduction" element={<Introduction />} />
        <Route path="/college/infrastructure" element={<Infrastructure />} />
        <Route path="/college/courses" element={<Courses />} />
        <Route
          path="/hospital/introduction"
          element={<IntroductionWithInfrastructure />}
        />
        <Route path="/hospital/charges" element={<Charges />} />
        <Route
          path="/hospital/department-wise-clinical-materials-and-facilities"
          element={<DepartmentWiseClinicalMaterialsAndFacilities />}
        />
        <Route
          path="/hospital/attendance/patient-monthly-attendance"
          element={<PatientMonthlyAttendance />}
        />
        <Route
          path="/hospital/attendance/ksharsutra"
          element={<PatientMonthlyAttendance />}
        />
        <Route
          path="/hospital/attendance/ot"
          element={<PatientMonthlyAttendance />}
        />
        <Route
          path="/hospital/attendance/pathology"
          element={<PatientMonthlyAttendance />}
        />
        <Route
          path="/hospital/attendance/xray-usg"
          element={<PatientMonthlyAttendance />}
        />
        <Route path="students/list/2024-25" element={<ListOfStudents />} />
        <Route
          path="/students/attendance/2024-25"
          element={<StudentMonthlyAttendance />}
        />
        <Route path="/news/all" element={<NewsAll />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/committee/co-curricular" element={<Commiittee />} />
        <Route path="/committee/hrd" element={<Commiittee />} />
        <Route path="/committee/research" element={<Commiittee />} />
        <Route path="/committee/iqac" element={<Commiittee />} />
        <Route path="/committee/academic" element={<Commiittee />} />
        <Route path="/committee/student-council" element={<Commiittee />} />
        <Route path="/committee/grievance" element={<Commiittee />} />
        <Route path="/committee/harassment" element={<Commiittee />} />
        <Route path="/committee/anti-ragging" element={<Commiittee />} />
        <Route path="/committee/student-support" element={<Commiittee />} />
        <Route path="/committee/career" element={<Commiittee />} />
        <Route path="/ncism" element={<NCISMPage />} />
      </Routes>
      <FloatingButtons />
      <ContactSticky />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
