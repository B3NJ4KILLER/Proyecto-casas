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
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Pestañas Superiores (Venta / Arriendo) */}
          <div className="flex">
            <button
              className={`px-6 py-3 font-semibold text-sm transition-colors ${activeTab === "venta" ? "bg-white text-gray-800 border-t-4 border-blue-600" : "bg-gray-100 text-gray-500 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("venta")}
            >
              Venta
            </button>
            <button
              className={`px-6 py-3 font-semibold text-sm transition-colors ${activeTab === "arriendo" ? "bg-white text-gray-800 border-t-4 border-blue-600" : "bg-gray-100 text-gray-500 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("arriendo")}
            >
              Arriendo
            </button>
          </div>

          {/* Campos del formulario */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Tipo de Propiedad */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Tipo
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600 bg-white">
                <option>Casa</option>
                <option>Departamento</option>
                <option>Terreno</option>
              </select>
            </div>

            {/* Región */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Región
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600 bg-white">
                <option>Metropolitana</option>
                <option>Valparaíso</option>
              </select>
            </div>

            {/* Comuna */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Comuna
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600 bg-white">
                <option>Todas</option>
                <option>Las Condes</option>
                <option>Providencia</option>
              </select>
            </div>

            {/* Precio Máx + Botón */}
            <div className="flex space-x-2">
              <div className="flex-grow">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Precio Máx
                </label>
                <input
                  type="text"
                  placeholder="UF 10.000"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              {/* Botón color dorado/mostaza como la imagen */}
              <button className="bg-[#Cca45e] hover:bg-[#b89350] text-white font-bold py-3 px-6 rounded-lg transition self-end h-[50px] mt-auto">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
