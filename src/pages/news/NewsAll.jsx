import React from "react";
import NewsTable from "../../components/shared/NewsTable";
import { NewsAllData } from "../../data/newsAll";
import Banner from "../../components/shared/Banner";

const NewsAll = () => {
  return (
    <>
      {/* ===== TOP BANNER ===== */}
      <Banner
        title="News & Announcements"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News & Announcements" },
        ]}
      />

      {/* ===== CONTENT SECTION ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Page Intro */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Latest Academic Updates
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Stay informed with the latest academic notices, calendars,
              circulars, and official announcements.
            </p>
          </div>

          {/* Reusable Table */}
          <NewsTable data={NewsAllData} />

        </div>
      </section>
    </>
  );
};

export default NewsAll;
