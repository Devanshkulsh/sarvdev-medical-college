import React from "react";
import Banner from "../components/shared/Banner";

const Admissions = () => {
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

            {/* Form Injected Here */}
            <div className="p-6 sm:p-6 admission-form-scope">
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
