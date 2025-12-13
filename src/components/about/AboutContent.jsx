import React from "react";

const AboutContent = () => {
  return (
    <div className="card-ayurvedic bg-card rounded-lg border shadow-sm p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          About Sarvdev Ayurvedic Medical College
        </h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Sarvdev Ayurvedic Medical College and Maha Mrityunjay Hospital is
            affiliated with Mahayogi Guru Gorakhnath AYUSH University, Uttar Pradesh.
            The institution is committed to giving quality education and healthcare
            facilities to the society.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The Hospital is successfully running out-patient departments in
            Kayachikitsa, Kaumarbhritya, Panchkarma, Prasuti &amp; Stri Roga,
            Shalakya Tantra, Shalya Tantra, Swasthavritta, and Physiotherapy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;