import React from "react";
import { FileText, ExternalLink, Download } from "lucide-react";

const PDFViewer = ({
  pdfUrl,
  title = "Document Preview",
  height = "700px",
  className = "",
}) => {
  if (!pdfUrl) {
    return (
      <div className="text-sm text-muted-foreground">
        PDF not available
      </div>
    );
  }

  return (
    <div className={`w-full rounded-xl border border-black/10 bg-white shadow-sm ${className}`}>
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b bg-[#8B1E1E]/5">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#8B1E1E]" />
          <h2 className="text-sm sm:text-base font-semibold text-foreground">
            {title}
          </h2>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md
                       border border-[#8B1E1E]/20 text-[#8B1E1E]
                       hover:bg-[#8B1E1E]/10 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Open
          </a>

          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md
                       bg-[#8B1E1E] text-white
                       hover:bg-[#8B1E1E]/90 transition"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>

      {/* PDF FRAME */}
      <div className="w-full overflow-hidden">
        <iframe
          src={pdfUrl}
          title={title}
          width="100%"
          height={height}
          className="w-full border-0"
        />
      </div>
    </div>
  );
};

export default PDFViewer;
