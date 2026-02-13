import React, { useState } from "react";
import { propiedades } from "../data/Propiedades";
import { Link } from "react-router-dom";

const PropertiesSection = ({ filtro, titulo }) => {
  // ESTADOS PARA LOS FILTROS
  const [filtroComuna, setFiltroComuna] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");

  // FUNCIÓN DE FILTRADO INTELIGENTE
  // Filtra primero por "Venta/Arriendo"
  // Y luego revisa si el usuario selecciono alguna comuna o categoria
  const propiedadesFiltradas = propiedades.filter((propiedad) => {
    if (filtro && propiedad.tipo !== filtro) return false;

    if (filtroComuna && propiedad.comuna !== filtroComuna) return false;

    if (filtroCategoria && propiedad.categoria !== filtroCategoria)
      return false;

    return true;
  });

  // Función para las etiquetas de estado
  const getStatusBadge = (estado) => {
    switch (estado) {
      case "vendido":
      case "arrendado":
        return (
          <span className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
            No Disponible
          </span>
        );
      case "reservado":
        return (
          <span className="bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
            Reservado
          </span>
        );
      case "nuevo":
        return (
          <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
            Nuevo
          </span>
        );
      default:
        return (
          <span className="bg-green-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
            Disponible
          </span>
        );
    }
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ENCABEZADO Y BARRA DE BÚSQUEDA */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          {/* Título dinámico */}
          <div className="w-full md:w-1/3">
            {titulo && (
              <h2 className="text-3xl font-bold text-gray-900">{titulo}</h2>
            )}
            <p className="text-gray-500 mt-2">
              {propiedadesFiltradas.length} propiedades encontradas
            </p>
          </div>

          {/* --- BARRA DE FILTROS --- */}
          <div className="w-full md:w-2/3 bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-4">
            {/* Filtro 1: Ubicación */}
            <div className="w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">
                Ubicación
              </label>
              <select
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={filtroComuna}
                onChange={(e) => setFiltroComuna(e.target.value)}
              >
                <option value="">Todas las ciudades</option>
                <option value="Copiapó">Copiapó</option>
                <option value="Caldera">Caldera</option>
                <option value="Bahía Inglesa">Bahía Inglesa</option>
              </select>
            </div>

            {/* Filtro 2: Tipo de Propiedad */}
            <div className="w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">
                Tipo
              </label>
              <select
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
              >
                <option value="">Todo tipo</option>
                <option value="Casa">Casas</option>
                <option value="Departamento">Departamentos</option>
                <option value="Terreno">Terrenos</option>
              </select>
            </div>

            {/* Botón Limpiar (Opcional, para borrar filtros rápido) */}
            {(filtroComuna || filtroCategoria) && (
              <button
                onClick={() => {
                  setFiltroComuna("");
                  setFiltroCategoria("");
                }}
                className="md:w-auto px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors self-end md:self-center h-[50px] border border-red-100"
              >
                Borrar
              </button>
            )}
          </div>
        </div>

        {/* GRID DE PROPIEDADES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propiedadesFiltradas.length > 0 ? (
            propiedadesFiltradas.map((propiedad) => (
              <div
                key={propiedad.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group relative flex flex-col"
              >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={propiedad.img}
                    alt={propiedad.titulo}
                    className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${propiedad.estado === "vendido" ? "grayscale opacity-80" : ""}`}
                  />

                  {/* Etiquetas Superiores */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {getStatusBadge(propiedad.estado)}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-900 font-bold px-3 py-1 rounded-lg text-sm shadow-sm">
                    {propiedad.precio}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                      {propiedad.categoria} en {propiedad.comuna}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {propiedad.titulo}
                  </h3>

                  <div className="mt-auto pt-4">
                    {propiedad.estado === "vendido" ||
                    propiedad.estado === "arrendado" ? (
                      <button
                        disabled
                        className="w-full bg-gray-100 text-gray-400 font-medium py-3 rounded-xl cursor-not-allowed"
                      >
                        No Disponible
                      </button>
                    ) : (
                      <Link
                        to={`/propiedad/${propiedad.id}`}
                        className="w-full block text-center bg-gray-900 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
                      >
                        Ver Detalles
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Mensaje cuando no se encuentra nada
            <div className="col-span-3 text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <div className="text-6xl mb-4">🏠❓</div>
              <h3 className="text-xl font-bold text-gray-900">
                No encontramos propiedades con esos filtros
              </h3>
              <p className="text-gray-500 mt-2">
                Intenta buscar en otra ciudad o categoría.
              </p>
              <button
                onClick={() => {
                  setFiltroComuna("");
                  setFiltroCategoria("");
                }}
                className="mt-6 text-blue-600 font-medium hover:underline"
              >
                Ver todas las propiedades
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
