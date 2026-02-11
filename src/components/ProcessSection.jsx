import React from "react";

// --- 1. DATOS: Aquí definimos el texto y los íconos de cada tarjeta ---
const steps = [
  {
    id: "01",
    title: "Evaluación",
    subtitle: "Comercial",
    // Icono: Gráfico subiendo (Tasación)
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
    // Convertimos la descripción en puntos breves para el menú lateral
    features: [
      "Visita a la propiedad",
      "Análisis de mercado",
      "Precio real de venta",
      "Estrategia comercial",
    ],
  },
  {
    id: "02",
    title: "Marketing",
    subtitle: "y Filtros",
    // Icono: Ojo / Visibilidad
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    features: [
      "Fotos de Calidad",
      "Filtro de interesados",
      "Revisión Dicom",
      "Seguridad en visitas",
    ],
  },
  {
    id: "03",
    title: "Gestión",
    subtitle: "Legal",
    // Icono: Documento / Contrato
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    features: [
      "Redacción contratos",
      "Trámites notariales",
      "Protección legal",
      "Entrega de llaves",
    ],
  },
];

// --- 2. COMPONENTE DE LA TARJETA (El diseño complejo que pediste) ---
const ProcessCard = ({ step }) => {
  return (
    <div className="product-card w-full max-w-[320px] mx-auto h-[400px] rounded-2xl shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group border border-gray-100 hover:border-blue-200 hover:shadow-2xl">
      {/* TÍTULOS (Efecto de texto doble capa) */}
      <div className="para uppercase text-center leading-none z-40 mt-8">
        <p
          style={{
            WebkitTextStroke: "1px rgb(200, 200, 200)",
            WebkitTextFillColor: "transparent",
          }}
          className="z-10 font-bold text-3xl -mb-6 tracking-wider text-gray-200 select-none"
        >
          {step.title}
        </p>
        <p className="font-bold text-3xl tracking-wider text-blue-900 z-30 relative">
          {step.title}
        </p>
        <p className="text-sm text-yellow-600 font-medium tracking-widest mt-2 uppercase">
          {step.subtitle}
        </p>
      </div>

      {/* ICONO CENTRAL (Círculo animado) */}
      <div
        className="w-[180px] h-[180px] flex items-center justify-center relative z-20 
        after:absolute after:h-1 after:w-full after:opacity-0 after:bg-blue-50 after:top-1/2 after:left-0 
        after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 
        after:group-hover:w-full after:group-hover:h-full after:group-hover:top-0 after:group-hover:left-0 
        after:group-hover:translate-x-0 after:group-hover:translate-y-0 after:group-hover:rounded-full 
        after:transition-all after:duration-500 transition-all duration-300"
      >
        {/* SVG del paso */}
        <div className="w-20 h-20 text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
          {step.icon}
        </div>
      </div>

      {/* TOOLTIP LATERAL (Lista deslizable) */}
      <div className="tooltips absolute top-0 left-0 -translate-x-[150%] h-full p-6 flex flex-col items-start justify-center gap-4 transition-all duration-500 group-hover:translate-x-0 bg-white/95 backdrop-blur-sm w-full z-50 border-r-4 border-yellow-500">
        <p className="text-blue-900 font-bold text-xl uppercase tracking-wider mb-2">
          Incluye:
        </p>
        <ul className="flex flex-col items-start gap-3 w-full">
          {step.features.map((feature, idx) => (
            <li
              key={idx}
              className="inline-flex gap-3 items-center w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Check Icon pequeño */}
              <div className="min-w-[16px]">
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={3}
                  className="stroke-yellow-500"
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={14}
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-600 text-left leading-tight">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- 3. SECCIÓN PRINCIPAL (El contenedor que tenías) ---
const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título de la sección */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Cómo trabajamos juntos?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Mi proceso está diseñado para quitarte el estrés de encima. Yo me
          ocupo de los detalles técnicos, tú de la decisión final.
        </p>

        {/* Reemplazamos tu GRID antiguo por las nuevas CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {steps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
