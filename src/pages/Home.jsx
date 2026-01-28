import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";
import PropertiesSection from "../components/PropertiesSection";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Navbar y Portada */}
      <Navbar />
      <HeroSection />
      {/* Sección "Sobre Mí" */}
      <AboutSection />
      {/* Sección "Mi Método" */}
      <ProcessSection />
      {/* FOOTER AL FINAL */}
      <Footer /> {/* <---ÚSALO AQUÍ */}
    </div>
  );
};

export default Home;
