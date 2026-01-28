import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 1. Imagen de la Corredora (Usa una foto real de ella aquí) */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute top-4 left-4 w-full h-full border-4 border-blue-100 rounded-lg -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Foto Corredora"
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
          </div>

          {/* 2. Texto de Presentación */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">
              Sobre Mí
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Más que una corredora,
              <br />
              tu aliada inmobiliaria.
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Hola, soy <strong>[Nombre de la Persona]</strong>. Con más de 10
              años en el mercado de [Tu Ciudad], me dedico a conectar personas
              con sus nuevos comienzos.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Entiendo que vender o arrendar una propiedad no es solo un
              trámite, es una decisión de vida. Por eso, mi enfoque es 100%
              personalizado: yo me encargo del papeleo, las visitas y la
              negociación, para que tú solo disfrutes del resultado.
            </p>

            {/* Firma o botón */}
            <div className="flex items-center gap-4">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                Hablemos por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
