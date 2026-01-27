// import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";

const Home = () => {
  return (
    <div className="bg-white">
      {/* 1. Navbar y Portada */}
      <Navbar />
      <HeroSection />

      {/* 2. Sección "Sobre Mí" (Introducción personal) */}
      <AboutSection />

      {/* 3. Sección "Mi Método" (Proceso de trabajo) */}
      <ProcessSection />

      {/* 4. Sección Propiedades Destacadas */}
    </div>
  );
};

export default Home;
