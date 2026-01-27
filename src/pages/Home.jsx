import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white">
      {/* 1. Navbar y Portada */}
      <Navbar />
      <HeroSection />
      {/* 2. Sección "Sobre Mí" */}
      <AboutSection />
      {/* 3. Sección "Mi Método" */}
      <ProcessSection />
      {/* 5. FOOTER AL FINAL */}
      <Footer /> {/* <--- 2. ÚSALO AQUÍ */}
    </div>
  );
};

export default Home;
