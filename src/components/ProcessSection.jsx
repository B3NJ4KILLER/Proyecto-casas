import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Evaluación Comercial",
      desc: "Visito tu propiedad, analizo el mercado y definimos juntos el mejor precio real para vender o arrendar rápido.",
    },
    {
      id: "02",
      title: "Marketing y Filtro",
      desc: "No llevo a cualquiera a tu casa. Filtro a los interesados (Revisión Dicom, liquidaciones) para garantizar seguridad.",
    },
    {
      id: "03",
      title: "Gestión Legal",
      desc: "Redacto contratos, coordino notaría y me aseguro de que todas las cláusulas te protejan a ti y a tu patrimonio.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Cómo trabajamos juntos?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Mi proceso está diseñado para quitarte el estrés de encima. Yo me
          ocupo de los detalles técnicos, tú de la decisión final.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-left relative overflow-hidden group"
            >
              {/* Número grande de fondo */}
              <span className="absolute -right-4 -top-4 text-9xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors">
                {step.id}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-6">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
