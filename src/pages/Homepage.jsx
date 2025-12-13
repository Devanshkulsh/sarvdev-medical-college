import React from "react";
import { Hero } from "../components/homepage/Hero";
import AboutSection from "../components/homepage/AboutSection";
import Videos from "../components/homepage/Videos";
import FacilitiesSection from "../components/homepage/Facilities";
import Testimonials from "../components/homepage/Testimonials";
import GallerySection from "../components/homepage/GallerySection";
import NewsSection from "../components/homepage/NewsSection";
import ContactSection from "../components/homepage/ContactSection";
import ResearchPublications from "../components/homepage/ResearchPublications";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Videos />
      <FacilitiesSection />
      <Testimonials />
      <ResearchPublications />
      <GallerySection />
      <NewsSection />
      <ContactSection />
    </div>
  );
};

export default Homepage;
