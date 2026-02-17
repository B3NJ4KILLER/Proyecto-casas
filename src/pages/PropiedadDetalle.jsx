import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { propiedades } from "../data/Propiedades";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PropiedadDetalle = () => {
  const { id } = useParams();
  const propiedad = propiedades.find((p) => p.id === parseInt(id));

  const [imagenActiva, setImagenActiva] = useState(
    propiedad ? propiedad.img : "",
  );

  if (!propiedad) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Propiedad no encontrada
          </h2>
          <Link to="/" className="text-blue-600 hover:underline mt-4 block">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  // Si la propiedad no tiene el array "imagenes", usamos solo la "img" principal en una lista para que no falle
  const galeria = propiedad.imagenes || [propiedad.img];

  return (
    <>
      <Navbar />

      <div className="pt-24 min-h-screen bg-gray-50 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={propiedad.tipo === "Venta" ? "/comprar" : "/arrendar"}
            className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-6 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Volver a {propiedad.tipo === "Venta" ? "Ventas" : "Arriendos"}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* --- COLUMNA IZQUIERDA: GALERÍA --- */}
            <div className="space-y-4">
              {/* 1. IMAGEN GRANDE ACTIVA */}
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-2xl shadow-xl h-[500px] bg-gray-200">
                <img
                  src={imagenActiva}
                  alt={propiedad.titulo}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${propiedad.estado === "vendido" ? "grayscale" : ""}`}
                />
              </div>

              {/* 2. MINIATURAS (GRID) */}
              {/* Solo se muestran si hay más de 1 imagen */}
              {galeria.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {galeria.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setImagenActiva(img)} // Al hacer clic, cambiamos la foto grande
                      className={`relative rounded-lg overflow-hidden h-24 border-2 transition-all ${imagenActiva === img ? "border-blue-600 ring-2 ring-blue-100" : "border-transparent opacity-70 hover:opacity-100"}`}
                    >
                      <img
                        src={img}
                        alt={`Vista ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* COLUMNA DERECHA: INFO (Igual que antes) */}
            <div className="flex flex-col h-full">
              <div className="mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">
                  {propiedad.categoria} en {propiedad.comuna}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {propiedad.titulo}
              </h1>

              <p className="text-3xl font-bold text-yellow-600 mb-6">
                {propiedad.precio}
              </p>

              {/* --- DESCRIPCIÓN DINÁMICA --- */}
              <div className="prose text-gray-600 mb-8 leading-relaxed">
                <p>
                  {propiedad.descripcion ||
                    "Esta es una excelente oportunidad. Contáctanos para conocer más detalles sobre las características de esta propiedad y agendar una visita."}
                </p>
              </div>

              {/* --- DETALLES TÉCNICOS DINÁMICOS --- */}
              {/* Cambiamos a md:grid-cols-4 para que quepan los datos nuevos uno al lado del otro */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-y border-gray-200 py-6">
                <div>
                  <span className="block text-gray-400 text-sm">Estado</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {propiedad.estado}
                  </span>
                </div>

                <div>
                  <span className="block text-gray-400 text-sm">Operación</span>
                  <span className="font-semibold text-gray-900">
                    {propiedad.tipo}
                  </span>
                </div>

                {/* Si la propiedad tiene "habitaciones" en la base de datos, mostramos esta cajita */}
                {propiedad.habitaciones && (
                  <div>
                    <span className="block text-gray-400 text-sm">
                      Habitaciones
                    </span>
                    <span className="font-semibold text-gray-900">
                      {propiedad.habitaciones}
                    </span>
                  </div>
                )}

                {/* Si la propiedad tiene "banos", mostramos esta cajita */}
                {propiedad.banos && (
                  <div>
                    <span className="block text-gray-400 text-sm">Baños</span>
                    <span className="font-semibold text-gray-900">
                      {propiedad.banos}
                    </span>
                  </div>
                )}

                {/* Si la propiedad tiene "m2", mostramos esta cajita */}
                {propiedad.m2 && (
                  <div>
                    <span className="block text-gray-400 text-sm">
                      Superficie
                    </span>
                    <span className="font-semibold text-gray-900">
                      {propiedad.m2} m²
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-auto space-y-3">
                {propiedad.estado === "vendido" ||
                propiedad.estado === "arrendado" ? (
                  <button
                    disabled
                    className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl cursor-not-allowed"
                  >
                    Propiedad No Disponible
                  </button>
                ) : (
                  <>
                    <a
                      href={`https://wa.me/56993048412?text=Hola, me interesa la propiedad: ${propiedad.titulo} (${propiedad.precio})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      {/* Icono WhatsApp */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Consultar por WhatsApp
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PropiedadDetalle;
