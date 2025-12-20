import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const AdmissionFormModal = () => {
  const [open, setOpen] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  // Show modal on first page load (per session)
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("admissionFormShown");

    if (!alreadyShown) {
      setOpen(true);
      sessionStorage.setItem("admissionFormShown", "true");
    }
  }, []);

  // Detect LMS form load
  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      const formContainer = document.getElementById("formsID7375");

      if (formContainer && formContainer.children.length > 0) {
        setFormLoaded(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black/60 flex items-center justify-center px-4">
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-[#8B1E1E]"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="px-6 py-5 bg-[#8B1E1E]/5 border-b">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Admission Enquiry
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Apply for BAMS Admission – Sarvdev Ayurvedic Medical College
          </p>
        </div>

        {/* Info message if form not loaded */}
        {!formLoaded && (
          <div className="mx-6 mt-4 rounded-lg border border-[#F2B705]/40 bg-[#F2B705]/10 px-4 py-2">
            <p className="text-xs sm:text-sm text-[#7A5A00]">
              If the admission form does not appear, please wait or reload the page.
            </p>
          </div>
        )}

        {/* LMS Form */}
        <div className="p-6 admission-form-scope max-h-[70vh] overflow-y-auto">
          <div id="formsID7375" />
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormModal;
