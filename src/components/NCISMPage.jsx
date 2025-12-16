import React from "react";
import Banner from "../components/shared/Banner";
import { Eye } from "lucide-react";

/* ===== NCISM DOCUMENTS DATA ===== */
const ncismDocuments = [
  {
    title: "State NOC",
    description:
      "No Objection Certificate issued by the State Government for establishment and operation of the college.",
    url: "/ncism/state-noc.pdf", // pdf / image / external link
  },
  {
    title: "University Affiliation",
    description:
      "Affiliation letter granted by Mahayogi Guru Gorakhnath AYUSH University.",
    url: "/ncism/university-affiliation.pdf",
  },
  {
    title: "Permission Letter by Government of India",
    description:
      "Permission letter issued by the Ministry of AYUSH, Government of India.",
    url: "https://www.ayush.gov.in", // external link example
  },
];

const NCISMPage = () => {
  return (
    <>
      {/* ===== TOP BANNER ===== */}
      <Banner
        title="NCISM"
        subtitle="National Commission for Indian System of Medicine"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "NCISM" },
        ]}
      />

      {/* ===== CONTENT SECTION ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Statutory Approvals & Permissions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Official approvals, affiliations, and permissions issued by
              regulatory authorities as per NCISM and Government norms.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ncismDocuments.map((doc, index) => (
              <div
                key={index}
                className="
                  rounded-2xl border border-black/10
                  bg-[hsl(40_35%_96%)]
                  p-6 shadow-sm hover:shadow-md transition
                  flex flex-col justify-between
                "
              >
                {/* CONTENT */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                {/* ACTION */}
                <div className="pt-5">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      rounded-md px-4 py-2
                      bg-[#8B1E1E]/10 text-[#8B1E1E]
                      text-sm font-semibold
                      hover:bg-[#8B1E1E]/20
                      transition
                    "
                  >
                    <Eye className="w-4 h-4" />
                    View Document
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default NCISMPage;
