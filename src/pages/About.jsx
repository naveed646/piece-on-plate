import React from "react";
import HeroSection from "../components/aboutusComp/HeroSection";
import MainContent from "../components/aboutusComp/MainContent";
import Crads from "../components/aboutusComp/Crads";

function AboutUs() {
  return (
    <div className="min-h-screen w-full  text-black bg-black bg-opacity-80 relative">

      <HeroSection/>

      {/* Content of it.. */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 py-20">
        <MainContent/>  
        <Crads/>

       
      </div>
    </div>
  );
}

export default AboutUs;
