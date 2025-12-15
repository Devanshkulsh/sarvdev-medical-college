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
import { OrganizationChart } from "./pages/faculty/OrganizationChart";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faculty/teachingStaff/department-wise-list" element={<DepartmentWiseList />}/>
        <Route path="/faculty/teachingStaff/monthly-attendance" element={<MonthlyAttendance />}/>
        <Route path="/faculty/non-teaching/department-wise-list" element={<NTDepartmentWiseList />}/>
        <Route path="/faculty/non-teaching/monthly-attendance" element={<NTMonthlyAttendance />}/>
        <Route path="/faculty/hospital-staff/department-wise-list" element={<HSDepartmentWiseList />}/>
        <Route path="/faculty/hospital-staff/monthly-attendance" element={<HSMonthlyAttendance />}/>
        <Route path="/faculty/org-chart" element={<OrganizationChart />}/>
      </Routes>
      <ContactSticky />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
