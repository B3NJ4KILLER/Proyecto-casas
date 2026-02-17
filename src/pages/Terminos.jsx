import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terminos = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Términos y Condiciones
          </h1>
          <div className="prose text-gray-600 space-y-6">
            <p>
              Bienvenido al sitio web de <strong>Vista Propiedades</strong>. Al
              acceder y utilizar este sitio, usted acepta estar sujeto a los
              siguientes términos y condiciones. Si no está de acuerdo con
              alguno de ellos, le rogamos no utilizar nuestra plataforma.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8">
              1. Información de Propiedades (Cláusula de Exención)
            </h2>
            <p>
              La información, fotografías, precios, dimensiones (m2) y
              disponibilidad de las propiedades publicadas en este sitio web son
              de <strong>carácter referencial e informativo</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Los precios y valores (UF, CLP) pueden ser modificados por los
                propietarios en cualquier momento y sin previo aviso.
              </li>
              <li>
                Las superficies indicadas son aproximadas y deben ser
                verificadas por el interesado o su tasador.
              </li>
              <li>
                La disponibilidad de las propiedades (en venta o arriendo) está
                sujeta a confirmación al momento de la consulta.
              </li>
            </ul>
            <p>
              Vista Propiedades no se responsabiliza por errores tipográficos o
              desactualizaciones involuntarias en las fichas de las propiedades.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8">
              2. Transacciones Inmobiliarias
            </h2>
            <p>
              Este sitio web opera como un catálogo virtual. Ninguna reserva,
              compra o contrato de arriendo se perfecciona a través de esta
              plataforma. Toda transacción inmobiliaria requerirá la firma
              física o digital avanzada de los documentos legales
              correspondientes (Promesa de Compraventa, Contrato de Arriendo,
              Escritura Pública) previa revisión de antecedentes.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8">
              3. Propiedad Intelectual
            </h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, logotipos,
              diseño y fotografías de las propiedades (salvo aquellas
              proporcionadas por terceros o bancos de imágenes), son propiedad
              de Vista Propiedades y están protegidos por las leyes de propiedad
              intelectual. Prohibida su reproducción total o parcial sin
              autorización.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8">
              4. Enlaces a terceros
            </h2>
            <p>
              Nuestro sitio web puede contener enlaces a redes sociales
              (WhatsApp, Instagram, Facebook). No nos hacemos responsables por
              las políticas de privacidad o el contenido de dichos sitios
              externos.
            </p>

            <p className="text-sm text-gray-400 mt-10">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terminos;
