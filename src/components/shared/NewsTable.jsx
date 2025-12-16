import React from "react";
import { PlusCircle, Download } from "lucide-react";

const NewsTable = ({ data }) => {
  return (
    <div className="overflow-x-auto border border-black/10 rounded-lg">
      <table className="w-full text-sm">
        {/* HEADER */}
        <thead className="bg-[hsl(90_45%_90%)] text-foreground">
          <tr>
            <th className="px-4 py-3 text-left w-20">Sr. No.</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-left w-56">Details</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-white">
          {data.map((item, index) => (
            <tr key={item.id} className="border-t">
              {/* SR NO */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <PlusCircle className="w-4 h-4 text-[#0f766e]" />
                  {index + 1}
                </div>
              </td>

              {/* DESCRIPTION */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span>{item.description}</span>
                  {item.isNew && (
                    <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              </td>

              {/* DETAILS */}
              <td className="px-4 py-3">
                {item.attachment ? (
                  <a
                    href={item.attachment}
                    download
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    Click to download attachment
                  </a>
                ) : (
                  <span className="text-muted-foreground">
                    No Attachment
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsTable;
