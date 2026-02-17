import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacidad = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Política de Privacidad
          </h1>
          <div className="prose text-gray-600 space-y-6">
            <p>
              En <strong>Vista Propiedades</strong> valoramos y respetamos su
              privacidad. Esta Política de Privacidad describe cómo recopilamos,
              utilizamos y protegemos la información personal que usted nos
              proporciona a través de nuestro sitio web, en conformidad con la
              Ley N° 19.628 sobre Protección de la Vida Privada de Chile.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8">
              1. Información que recopilamos
            </h2>
            <p>
              Podemos recopilar información personal como su nombre, dirección
              de correo electrónico, número de teléfono (WhatsApp) y sus
              preferencias de búsqueda de propiedades, exclusivamente cuando
              usted nos la proporciona voluntariamente al contactarnos para
              consultas, agendar visitas o solicitar tasaciones.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8">
              2. Uso de la información
            </h2>
            <p>La información recopilada se utiliza únicamente para:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responder a sus consultas y requerimientos.</li>
              <li>
                Enviarle información sobre propiedades que coincidan con sus
                intereses.
              </li>
              <li>Coordinar visitas a propiedades en venta o arriendo.</li>
              <li>Mejorar nuestro servicio de atención al cliente.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8">
              3. Protección de datos
            </h2>
            <p>
              Sus datos son tratados con estricta confidencialidad.{" "}
              <strong>No vendemos, alquilamos ni compartimos</strong> su
              información personal con terceros para fines comerciales o de
              marketing ajenos a Vista Propiedades.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8">
              4. Sus derechos
            </h2>
            <p>
              Usted tiene el derecho de solicitar el acceso, rectificación o
              eliminación de sus datos personales en cualquier momento. Para
              ejercer estos derechos o si tiene alguna duda sobre esta política,
              por favor contáctenos a través de nuestro correo electrónico o
              número de WhatsApp provistos en el sitio web.
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

export default Privacidad;
