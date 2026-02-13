// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import PropertiesSection from "../components/PropertiesSection";

// const Arrendar = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="pt-24">
//         {/* Aquí usamos el componente con el filtro "Arriendo" */}
//         <PropertiesSection filtro="Arriendo" titulo="Propiedades en Arriendo" />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Arrendar;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertiesSection from "../components/PropertiesSection";
import imagenArrendar from "../assets/arrendar.avif";

const Arrendar = () => {
  return (
    <>
      <Navbar />

      {/* --- HEADER DINÁMICO DE "ARRIENDO" --- */}
      <div className="relative h-[400px] flex items-center justify-center">
        {/* Imagen de Fondo (Tema: Interior / Arriendo) */}
        <img
          src={imagenArrendar}
          alt="Propiedades en Arriendo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Arrendar
          </h1>
          <p className="text-xl text-gray-200">
            Flexibilidad y comodidad para tu estilo de vida
          </p>
        </div>
      </div>

      {/* --- SECCIÓN DE PROPIEDADES --- */}
      <PropertiesSection filtro="Arriendo" titulo="" />

      <Footer />
    </>
  );
};

export default Arrendar;
