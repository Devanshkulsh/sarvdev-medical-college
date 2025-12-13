import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import rulesRegulations from "../../data/rulesRegulations";

const RulesRegulations = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const renderBlock = (block, idx) => {
    switch (block.type) {
      case "heading":
        return (
          <h4
            key={idx}
            className="text-sm font-semibold text-foreground mt-4"
          >
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
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(0_75%_45%)] shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );

      case "table":
        return (
          <div key={idx} className="overflow-x-auto mt-4">
            <table className="w-full border border-black/10 text-sm">
              <thead className="bg-[hsl(40_35%_90%)]">
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
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ SECTION HEADING */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Rules & Regulations
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            Institutional guidelines to ensure discipline, academic integrity,
            safety, and a healthy learning environment.
          </p>
        </div>

        {/* ACCORDIONS */}
        <div className="space-y-4">
          {rulesRegulations.map((rule, index) => {
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
                    className={`h-5 w-5 text-[hsl(0_75%_45%)] transition-transform ${
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
  );
};

export default RulesRegulations;
