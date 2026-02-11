import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ExcelViewer = ({ fileUrl, title }) => {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);

  const officeViewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
    fileUrl,
  )}`;

  /* -------- Read Excel -------- */
  useEffect(() => {
    if (!fileUrl) return;

    fetch(fileUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        const rows = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          defval: "",
        });

        const headerRowIndex = rows.findIndex((row) =>
          row.some((cell) => {
            const value = String(cell).toLowerCase();
            return (
              value.includes("sr") ||
              value.includes("roll") ||
              value.includes("name")
            );
          }),
        );

        if (headerRowIndex === -1) return;

        setHeaders(rows[headerRowIndex]);
        setData(rows.slice(headerRowIndex + 1));
      });
  }, [fileUrl]);

  /* -------- Export PDF -------- */
  const exportToPDF = () => {
    const doc = new jsPDF("l", "pt", "a4");

    if (title) {
      doc.text(title, 40, 30);
    }

    autoTable(doc, {
      head: [headers],
      body: data,
      startY: title ? 50 : 30,
      styles: {
        fontSize: 8,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [139, 30, 30], // #8B1E1E
        textColor: 255,
      },
    });

    doc.save("attendance.pdf");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {/* ===== HEADER ===== */}
        {title && (
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              {title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              View, scroll, or export the Excel data as PDF.
            </p>
          </div>
        )}

        {/* ===== TOOLBAR ===== */}
        <div className="flex flex-wrap justify-end gap-3">
          <a
            href={officeViewerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[#8B1E1E]/30 bg-white px-4 py-2 text-sm font-medium text-[#8B1E1E] hover:bg-[#8B1E1E]/10 transition"
          >
            View Full Excel
          </a>

          <button
            onClick={exportToPDF}
            className="rounded-md bg-[#8B1E1E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7A1A1A] transition"
          >
            Export to PDF
          </button>
        </div>

        {/* ===== TABLE CARD ===== */}
        <div className="rounded-2xl border border-black/10 bg-[hsl(40_35%_96%)] shadow-sm overflow-hidden">
          <div className="max-h-[75vh] overflow-auto">
            <table className="min-w-275 w-full border-collapse">
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#8B1E1E]">
                  {headers.map((h, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white">
                {data.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="even:bg-[#8B1E1E]/5 hover:bg-[#8B1E1E]/10 transition"
                  >
                    {headers.map((_, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-4 py-2 text-sm text-muted-foreground whitespace-nowrap border-b border-black/5"
                      >
                        {row[cIdx] ?? ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcelViewer;
