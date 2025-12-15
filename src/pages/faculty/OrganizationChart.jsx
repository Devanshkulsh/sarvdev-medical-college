import React from "react";

const OrganizationChart = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Chart Card */}
        <div className="rounded-xl border border-black/10 bg-white shadow-sm p-4 sm:p-6">
          <img
            src="/faculty/ochart.webp"
            alt="Organization Chart"
            className="w-full h-auto object-contain rounded-md"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;
