import React from "react";
import Banner from "../../components/shared/Banner";
import CollegeIntroduction from "../../components/college/CollegeIntroduction";
import FacilitiesSection from "../../components/homepage/Facilities";
import HostelInfrastructure from "../../components/college/HostelInfrastructure";

const Introduction = () => {
  return (
    <>
      {/* Top Banner */}
      <Banner
        title="College & Hostel"
        subtitle="Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "College & Hostel" },
        ]}
      />
      <CollegeIntroduction />
      <FacilitiesSection />
      <HostelInfrastructure />
    </>
  );
};

export default Introduction;
