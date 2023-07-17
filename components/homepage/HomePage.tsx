import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";

const HomePage = () => {
  return (
    <main className="bg-[#121212] flex flex-col">
      <Hero />
      <AboutSection />
    </main>
  );
};

export default HomePage;
