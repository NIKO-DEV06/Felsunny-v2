import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <main className="bg-[#121212] flex flex-col">
      <Hero />
      <AboutSection />
      <ServicesSection />
    </main>
  );
};

export default HomePage;
