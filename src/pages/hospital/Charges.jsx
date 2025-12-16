import React, { useState } from "react";
import Banner from "../../components/shared/Banner";
import { ChevronDown } from "lucide-react";
import { CollegeChargesData } from "../../data/collegeCharges";

const Charges = () => {
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

      case "list":
        return (
          <ul key={idx} className="space-y-2">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-[#8B1E1E] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
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
                        {cell}
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
        title="College Charges"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "College Charges" },
        ]}
      />

      {/* RULES & REGULATIONS SECTION */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADING */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              College Charges
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
              Comprehensive academic, hospital, and residential Charges
              designed to support quality education, clinical training, and
              student well-being in accordance with regulatory standards.
            </p>
          </div>

          {/* ACCORDIONS */}
          <div className="space-y-4">
            {CollegeChargesData.map((rule, index) => {
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

export default Charges;
