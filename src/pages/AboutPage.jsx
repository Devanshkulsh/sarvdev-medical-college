import React from "react";
import Banner from "../components/shared/Banner";
import AboutContent from "../components/about/AboutContent";
import MissionVision from "../components/about/MissionVission";
import AyurvedaHeritage from "../components/about/AyurvedaHeritage";
import LeadershipSidebar from "../components/about/LeadershipSidebar";

const AboutPage = () => {
  return (
    <>
      {/* HERO / BANNER */}
      <Banner
        title="About Us"
        subtitle="Discover our history, mission and values"
        image="/images/about-hero.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* MAIN CONTENT */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="
              grid grid-cols-1 lg:grid-cols-[2.2fr_1fr]
              gap-10 lg:gap-14
              items-start
            "
          >
            {/* LEFT COLUMN */}
            <div className="space-y-10">
              <AboutContent />
              <MissionVision />
              <AyurvedaHeritage />
            </div>

            {/* RIGHT COLUMN */}
            <aside className="lg:sticky lg:top-28">
              <LeadershipSidebar />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
