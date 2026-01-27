import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      {/* El Navbar y el HeroSection se superponen gracias a las posiciones CSS */}
      <Navbar />
      <HeroSection />

      {/* Espacio temporal para las siguientes secciones */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Propiedades Destacadas
        </h2>
        <p className="text-center text-gray-500">
          Próximamente aquí las tarjetas de propiedades...
        </p>
        <div className="h-96 bg-gray-100 rounded mt-8 animate-pulse"></div>
      </section>
    </div>
  );
};

export default Home;
