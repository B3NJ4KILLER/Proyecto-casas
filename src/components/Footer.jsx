import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* COLUMNA 1: MARCA Y REDES */}
          <div>
            <Link
              to="/"
              className="flex items-center text-white font-bold text-2xl mb-4 tracking-widest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mr-2 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.336-1.133.875-1.434L12 13.171l2.875 1.52c.54.301.875.813.875 1.434V21m-9.75 0h13.5M3 21v-4.875c0-.621.336-1.133.875-1.434L12 3.371l8.125 11.32c.54.301.875.813.875 1.434V21m-3.75 0h-9M12 15.75a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z"
                />
              </svg>
              VISTA <span className="font-light ml-2">PROPIEDADES</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Tu aliada experta en el mercado inmobiliario. Conectamos personas
              con hogares y oportunidades de inversión con total transparencia y
              seguridad.
            </p>
            {/* Íconos sociales */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition duration-300"
              >
                {/* Instagram Icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition duration-300"
              >
                {/* Facebook Icon */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition duration-300"
              >
                {/* LinkedIn/Web Icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-yellow-500 inline-block pb-1">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/comprar"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Propiedades en Venta
                </Link>
              </li>
              <li>
                <Link
                  to="/arrendar"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Propiedades en Arriendo
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-yellow-500 inline-block pb-1">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  Av. Apoquindo 6400, Of. 205,
                  <br />
                  Las Condes, Santiago.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">+56 9 9304 8412</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">
                  contacto@vistapropiedades.cl
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR (COPYRIGHT) */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Vista Propiedades. Todos los
            derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
