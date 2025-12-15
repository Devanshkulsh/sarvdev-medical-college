import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "NCISM", href: "/ncism" },
    {
      label: "Faculty",
      children: [
        {
          label: "Teaching Staff",
          children: [
            {
              label: "Department Wise List",
              href: "/faculty/teachingStaff/department-wise-list",
            },
            {
              label: "Monthly Attendance",
              href: "/faculty/teachingStaff/monthly-attendance",
            },
          ],
        },
        {
          label: "Non Teaching Staff",
          children: [
            {
              label: "Department Wise List",
              href: "/faculty/non-teaching/department-wise-list",
            },
            {
              label: "Monthly Attendance",
              href: "/faculty/non-teaching/monthly-attendance",
            },
          ],
        },
        {
          label: "Hospital Staff",
          children: [
            {
              label: "Department Wise List",
              href: "/faculty/hospital-staff/department-wise-list",
            },
            {
              label: "Monthly Attendance",
              href: "/faculty/hospital-staff/monthly-attendance",
            },
          ],
        },
        { label: "Organization Chart", href: "/faculty/org-chart" },
      ],
    },
    {
      label: "College",
      children: [
        { label: "Introduction", href: "/college/introduction" },
        { label: "College Infrastructure", href: "/college/infrastructure" },
        { label: "Hostel Infrastructure", href: "/college/hostel" },
        { label: "Facilities", href: "/college/facilities" },
      ],
    },
    {
      label: "Hospital",
      children: [
        { label: "Introduction", href: "/hospital/introduction" },
        { label: "Charges", href: "/hospital/charges" },
        {
          label: "Clinical Materials & Facilities",
          href: "/hospital/clinical",
        },
        {
          label: "Monthly Patient Attendance",
          children: [
            { label: "OPD", href: "/hospital/attendance/opd" },
            { label: "IPD", href: "/hospital/attendance/ipd" },
            { label: "Panchakarma", href: "/hospital/attendance/panchakarma" },
            { label: "Ksharsutra", href: "/hospital/attendance/ksharsutra" },
            { label: "Operation Theater", href: "/hospital/attendance/ot" },
            { label: "Pathology", href: "/hospital/attendance/pathology" },
            { label: "X-Ray / USG", href: "/hospital/attendance/xray-usg" },
          ],
        },
      ],
    },
    {
      label: "Student's Corner",
      children: [
        {
          label: "List of Students",
          children: [
            { label: "Batch 2024-2025", href: "/students/list/2024-25" },
          ],
        },
        {
          label: "Monthly Attendance",
          children: [
            { label: "Batch 2024-2025", href: "/students/attendance/2024-25" },
          ],
        },
        { label: "Results", href: "/students/results" },
      ],
    },
    {
      label: "News",
      children: [
        { label: "Vacancies", href: "/news/vacancies" },
        { label: "News", href: "/news/all" },
        { label: "Notices", href: "/news/notices" },
      ],
    },
    {
      label: "Committee",
      children: [
        { label: "Co & Extra Curricular", href: "/committee/co-curricular" },
        { label: "HRD Committee", href: "/committee/hrd" },
        { label: "Research & Innovation", href: "/committee/research" },
        { label: "IQAC", href: "/committee/iqac" },
        { label: "Academic Committee", href: "/committee/academic" },
        { label: "Student Council", href: "/committee/student-council" },
        { label: "Grievance Redressal", href: "/committee/grievance" },
        { label: "Sexual Harassment Cell", href: "/committee/harassment" },
        { label: "Anti Ragging Cell", href: "/committee/anti-ragging" },
        { label: "Student Support", href: "/committee/student-support" },
        { label: "Career & Placement Cell", href: "/committee/career" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  /* 🎨 LOGO MATCHED COLORS */
  const primaryText = "text-[#8B1E1E]"; // Deep logo red
  const mutedBg = "bg-[#C4551A]/10"; // Soft saffron hover
  const navText = "text-[#2A1E1A]"; // Dark herbal text

  const isActive = (href) => location.pathname === href;

  const isChildActive = (children = []) =>
    children.some(
      (c) =>
        c.href === location.pathname ||
        (c.children && isChildActive(c.children))
    );

  return (
    <header className="relative w-full bg-white shadow-sm">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 gap-4">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo_bg.png"
              alt="Sarvdev Ayurvedic Medical College"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
            />
            <div className="leading-tight">
              <div className={`text-sm sm:text-xl font-bold ${primaryText}`}>
                Sarvdev Ayurvedic Medical College
              </div>
              <div className="text-[11px] text-[#2A1E1A]/60">
                &amp; Maha Mrityunjay Hospital
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-2 xl:gap-3 whitespace-nowrap">
              {navItems.map((item, i) => (
                <li key={i} className="relative group">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${navText} ${
                        isActive(item.href) ? `${mutedBg} ${primaryText}` : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={`px-3 py-2 text-sm font-medium cursor-pointer inline-flex items-center gap-1 ${
                        isChildActive(item.children) ? primaryText : navText
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  )}

                  {item.children && (
                    <ul className="absolute left-0 top-full hidden group-hover:block bg-white border shadow-md rounded-md min-w-65 z-50">
                      {item.children.map((sub, j) => (
                        <li key={j} className="relative group/sub">
                          {sub.href ? (
                            <Link
                              to={sub.href}
                              className={`flex items-center justify-between px-4 py-2 text-sm hover:bg-[#C4551A]/10 ${
                                isActive(sub.href)
                                  ? `${mutedBg} ${primaryText}`
                                  : ""
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ) : (
                            <span
                              className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-[#C4551A]/10 ${
                                isChildActive(sub.children) ? primaryText : ""
                              }`}
                            >
                              {sub.label}
                              <ChevronRight className="w-4 h-4" />
                            </span>
                          )}

                          {sub.children && (
                            <ul className="absolute left-full top-0 hidden group-hover/sub:block bg-white border shadow-md rounded-md min-w-65">
                              {sub.children.map((child, k) => (
                                <li key={k}>
                                  <Link
                                    to={child.href}
                                    className={`block px-4 py-2 text-sm hover:bg-[#C4551A]/10 ${
                                      isActive(child.href)
                                        ? `${mutedBg} ${primaryText}`
                                        : ""
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden p-2 rounded-md hover:bg-[#C4551A]/10"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  mobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <ul className="px-4 py-3 space-y-1">
            {navItems.map((item, i) => {
              const isOpen = openMobileMenu === i;
              const isParentActive = isChildActive(item.children) || isOpen;

              return (
                <li key={i} className="space-y-1">
                  {/* Parent */}
                  {item.href ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${navText} ${
                        isActive(item.href) ? `${mutedBg} ${primaryText}` : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setOpenMobileMenu(isOpen ? null : i)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm font-semibold ${
                        isParentActive ? primaryText : navText
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                  {/* Children */}
                  {item.children && isOpen && (
                    <ul className="ml-4 border-l pl-3 space-y-1">
                      {item.children.map((child, j) => {
                        const isSubOpen = openMobileSubMenu === `${i}-${j}`;

                        return (
                          <li key={j} className="space-y-1">
                            {/* Child */}
                            {child.href ? (
                              <Link
                                to={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm rounded-md hover:bg-[#C4551A]/10"
                              >
                                {child.label}
                              </Link>
                            ) : (
                              <button
                                onClick={() =>
                                  setOpenMobileSubMenu(
                                    isSubOpen ? null : `${i}-${j}`
                                  )
                                }
                                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#8B1E1E]"
                              >
                                {child.label}
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    isSubOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            )}

                            {/* Grandchildren */}
                            {child.children && isSubOpen && (
                              <ul className="ml-4 border-l pl-3 space-y-1">
                                {child.children.map((subChild, k) => (
                                  <li key={k}>
                                    <Link
                                      to={subChild.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-3 py-2 text-sm rounded-md hover:bg-[#C4551A]/10"
                                    >
                                      {subChild.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
