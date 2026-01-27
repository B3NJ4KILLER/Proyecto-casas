import React, { useState } from "react";
// Si tienes tu imagen local: import bgImage from '../assets/casa-lujo.jpg';

const HeroSection = () => {
  // Estado para controlar la pestaña activa (Venta o Arriendo)
  const [activeTab, setActiveTab] = useState("venta");

  // URL de imagen de ejemplo (cámbiala por tu import local cuando tengas la foto)
  const bgImage =
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop";

  return (
    <div className="relative h-[700px] flex items-center justify-center">
      {/* Imagen de fondo con superposición oscura */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Capa negra semitransparente para que el texto se lea mejor */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenedor del Buscador */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Caja blanca del buscador */}
      </div>
    </div>
  );
};

export default HeroSection;
