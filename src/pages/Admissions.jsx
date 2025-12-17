import React, { useEffect, useState } from "react";
import Banner from "../components/shared/Banner";

const Admissions = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const checkFormInterval = setInterval(() => {
      const formContainer = document.getElementById("formsID7375");

      if (formContainer && formContainer.children.length > 0) {
        setFormLoaded(true);
        clearInterval(checkFormInterval);
      }
    }, 500); // check every 500ms

    return () => clearInterval(checkFormInterval);
  }, []);

  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <Banner
        title="Admissions"
        subtitle="Apply for BAMS Admission"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions" },
        ]}
      />

      {/* ===== FORM SECTION ===== */}
      <section className="py-5 bg-[hsl(40_35%_96%)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Card */}
          <div className="rounded-2xl bg-white shadow-lg border border-black/10 overflow-hidden">

            {/* Header */}
            <div className="px-6 py-5 bg-[#8B1E1E]/5 border-b">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Admission Enquiry Form
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and our admission team will contact you.
              </p>
            </div>

            {/* ⚠️ INFO MESSAGE (ONLY IF FORM NOT LOADED) */}
            {!formLoaded && (
              <div className="mx-6 mt-4 rounded-lg border border-[#F2B705]/40 bg-[#F2B705]/10 px-4 py-2">
                <p className="text-xs sm:text-sm text-[#7A5A00]">
                  If the admission form does not appear below, please reload the page.
                </p>
              </div>
            )}

            {/* Form Injected Here */}
            <div className="p-6 admission-form-scope">
              <div id="formsID7375" />
            </div>
          </div>

          {/* Note */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            By submitting this form, you agree to be contacted by the admission
            team of Sarvdev Ayurvedic Medical College.
          </p>
        </div>
      </section>
    </>
  );
};

export default Admissions;
