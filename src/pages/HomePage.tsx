import React from "react";
import HomeSection from "./homeSection/HomeSection";
import AboutSection from "./aboutSection";
import Education from "./education";
import Project from "./project";
import Contact from "./contact";
const HomePage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <Education />
      <Project />
      <Contact />
    </>
  );
};

export default HomePage;
