import React, { useState } from "react";
import Banner from "../components/shared/Banner";
import { FileText } from "lucide-react";
import { noticesData, noticeCategories } from "../data/noticesData";

const NoticesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNotices =
    activeCategory === "All"
      ? noticesData
      : noticesData.filter((n) => n.category === activeCategory);

  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <Banner
        title="Notices & Announcements"
        subtitle="Official Notifications, Circulars & Updates"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Notices" }]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* INTRO */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Official Notices
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              All official notifications issued by the college and hospital
              administration.
            </p>
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-3">
            {noticeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-[#8B1E1E] text-white"
                    : "bg-[#8B1E1E]/10 text-[#8B1E1E] hover:bg-[#8B1E1E]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-xl border border-black/10 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#8B1E1E]/10 text-[#8B1E1E]">
                <tr>
                  <th className="px-4 py-3 text-left">Notice</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Issued By</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((notice) => (
                    <tr
                      key={notice.id}
                      className={`border-t ${
                        notice.important ? "bg-[#F2B705]/10" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {notice.title}
                        {notice.important && (
                          <span className="ml-2 text-xs font-semibold text-[#8B1E1E]">
                            (Important)
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-3 text-muted-foreground">
                        {notice.category}
                      </td>

                      <td className="px-4 py-3 text-muted-foreground">
                        {notice.issuedBy}
                      </td>

                      <td className="px-4 py-3 text-muted-foreground">
                        {notice.date}
                      </td>

                      <td className="px-4 py-3 text-center">
                        <a
                          href={notice.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold
                                     bg-[#8B1E1E]/10 text-[#8B1E1E]
                                     hover:bg-[#8B1E1E]/20 transition"
                        >
                          <FileText className="w-4 h-4" />
                          View
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 py-6 text-center text-muted-foreground"
                    >
                      No notices available for this category.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* FOOTNOTE */}
          <p className="text-xs text-center text-muted-foreground max-w-3xl mx-auto">
            Notices published here are official communications of the
            institution. Students are advised to read them carefully.
          </p>
        </div>
      </section>
    </>
  );
};

export default NoticesPage;
