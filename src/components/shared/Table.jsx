import React, { useState } from "react";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

const Table = ({
  columns = [],
  data = [],
  showIndex = false,
  className = "",
  pageSize = 10, // ✅ pagination size (optional)
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  const renderCell = (col, row) => {
    if (col.pdfAccessor && row[col.pdfAccessor]) {
      return (
        <a
          href={row[col.pdfAccessor]}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-1
            px-3 py-1.5 rounded-md
            text-xs font-semibold
            bg-[#8B1E1E]/10 text-[#8B1E1E]
            hover:bg-[#8B1E1E]/20
            transition
          "
        >
          <Eye className="w-4 h-4" />
          View
        </a>
      );
    }

    if (typeof col.render === "function") {
      return col.render(row);
    }

    return row[col.accessor] ?? "-";
  };

  return (
    <div className={`w-full ${className}`}>
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-black/10 rounded-lg overflow-hidden">
          <thead className="bg-[#8B1E1E]/10">
            <tr>
              {showIndex && (
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B1E1E] border-b">
                  #
                </th>
              )}

              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left text-sm font-semibold text-[#8B1E1E] border-b"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white">
            {paginatedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-[#8B1E1E]/5 transition"
              >
                {showIndex && (
                  <td className="px-4 py-3 text-sm text-muted-foreground border-b">
                    {startIndex + rowIndex + 1}
                  </td>
                )}

                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-3 text-sm text-muted-foreground border-b"
                  >
                    {renderCell(col, row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {paginatedData.map((row, i) => (
          <div
            key={i}
            className="rounded-lg border border-black/10 bg-white p-4 shadow-sm"
          >
            {showIndex && (
              <div className="text-xs text-muted-foreground mb-2">
                #{startIndex + i + 1}
              </div>
            )}

            <div className="space-y-2">
              {columns.map((col, j) => (
                <div key={j} className="flex flex-col">
                  <span className="text-xs font-semibold text-[#8B1E1E]">
                    {col.header}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {renderCell(col, row)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md border disabled:opacity-40 hover:bg-[#8B1E1E]/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md text-sm font-medium border
                ${
                  currentPage === i + 1
                    ? "bg-[#8B1E1E] text-white"
                    : "hover:bg-[#8B1E1E]/10"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border disabled:opacity-40 hover:bg-[#8B1E1E]/10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
