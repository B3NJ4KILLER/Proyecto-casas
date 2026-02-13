// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import PropertiesSection from "../components/PropertiesSection";

// const Comprar = () => {
//   return (
//     <>
//       <Navbar />
//       {/* Añadimos un espacio arriba (pt-24) porque el Navbar es flotante */}
//       <div className="pt-24">
//         {/* Aquí usamos el componente con el filtro "Venta" */}
//         <PropertiesSection filtro="Venta" titulo="Propiedades en Venta" />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Comprar;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertiesSection from "../components/PropertiesSection";
import imagenCompra from "../assets/comprar.avif";

const Comprar = () => {
  return (
    <>
      <Navbar />

      {/* --- HEADER DINÁMICO DE "VENTA" --- */}
      {/* Usamos h-[400px] para que sea un encabezado bonito pero no pantalla completa */}
      <div className="relative h-[400px] flex items-center justify-center">
        {/* Imagen de Fondo (Tema: Venta / Lujo) */}
        <img
          src={imagenCompra}
          alt="Propiedades en Venta"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Capa oscura para que el texto resalte */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Título de la Página */}
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 text-shadow-lg/20">
            Comprar
          </h1>
          <p className="text-xl text-gray-200 text-shadow-lg/20">
            Encuentra el lugar donde empieza tu nueva historia
          </p>
        </div>
      </div>

      {/* --- SECCIÓN DE PROPIEDADES --- */}
      {/* Pasamos titulo="" vacío para que no repita el título abajo */}
      <PropertiesSection filtro="Venta" titulo="" />

      <Footer />
    </>
  );
};

export default Comprar;
