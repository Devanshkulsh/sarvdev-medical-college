import Banner from "../components/shared/Banner";
import AboutIntro from "../components/about/AboutIntro";
import MissionVision from "../components/about/MissionVission";
import AyurvedaHeritage from "../components/about/AyurvedaHeritage";
import LeadershipSidebar from "../components/about/LeadershipSidebar";
import AffiliationCard from "../components/about/AffiliationCard";
import RulesRegulations from "../components/about/RulesRegulations";
import CollegeCouncil from "../components/about/CollegeCouncil";

export default function About() {
  return (
    <>
      {/* Top Banner */}
      <Banner
        title="About Us"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* LEFT: Content */}
            <div className="lg:col-span-2 space-y-10">
              <AboutIntro />
              <MissionVision />
              <AyurvedaHeritage />
            </div>

            {/* RIGHT: Sidebar */}
            <div className="lg:col-span-1 -mt-5 space-y-6">
              <LeadershipSidebar />
              <AffiliationCard />
            </div>

          </div>
        </div>
        <CollegeCouncil />
        <RulesRegulations />
      </section>
    </>
  );
}
