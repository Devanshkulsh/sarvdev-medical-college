import React, { useState } from "react";
import Banner from "../../components/shared/Banner";
import { ChevronDown } from "lucide-react";
import { CollegeInfrastructureData } from "../../data/collegeInfrastructure";
import { HospitalInfrastructureData } from "../../data/hospitalInfrastructure";

const IntroductionWithInfrastructure = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const renderBlock = (block, idx) => {
    switch (block.type) {
      case "heading":
        return (
          <h4 key={idx} className="text-sm font-semibold text-foreground mt-4">
            {block.content}
          </h4>
        );

      case "text":
        return (
          <p
            key={idx}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            {block.content}
          </p>
        );

      case "table":
        return (
          <div key={idx} className="overflow-x-auto mt-4">
            <table className="w-full border border-black/10 text-sm">
              <thead className="bg-[#8B1E1E]/10">
                <tr>
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="border px-3 py-2 text-left font-semibold text-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="even:bg-white">
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="border px-3 py-2 text-muted-foreground"
                      >
                        {cell || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Top Banner */}
      <Banner
        title="Hospital Infrastructure"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hospital Infrastructure" },
        ]}
      />

      {/* ================= HOSPITAL INTRODUCTION ================= */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E]">
                Hospital Introduction
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                Maha Mrityunjay Ayurvedic Hospital
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Maha Mrityunjay Ayurvedic Hospital functions as a teaching and
                clinical training hospital attached to Sarvdev Ayurvedic Medical
                College. The hospital is equipped with OPD, IPD, Panchakarma,
                diagnostic, and emergency services to support both patient care
                and academic learning.
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                The hospital infrastructure is developed in accordance with
                NCISM norms, ensuring adequate clinical exposure, modern
                facilities, and a holistic healthcare environment rooted in
                Ayurvedic principles.
              </p>
            </div>

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/hospital/1.webp"
                alt="Hospital Building"
                className="rounded-xl object-cover h-40 w-full shadow-sm"
              />
              <img
                src="/hospital/2.webp"
                alt="Hospital OPD"
                className="rounded-xl object-cover h-40 w-full shadow-sm"
              />
              <img
                src="/hospital/3.webp"
                alt="Panchakarma Unit"
                className="rounded-xl object-cover h-40 w-full shadow-sm"
              />
              <img
                src="/hospital/4.webp"
                alt="Hospital Facilities"
                className="rounded-xl object-cover h-40 w-full shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE ACCORDIONS ================= */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADING */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Hospital Infrastructure Details
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
              Detailed overview of hospital facilities, departments, and
              infrastructure supporting clinical training and patient care.
            </p>
          </div>

          {/* ACCORDIONS */}
          <div className="space-y-4">
            {HospitalInfrastructureData.map((rule, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-lg border border-black/5 bg-[hsl(40_35%_94%)] shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-foreground">
                      {rule.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#8B1E1E] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-black/5 space-y-4">
                      {rule.blocks.map(renderBlock)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroductionWithInfrastructure;
