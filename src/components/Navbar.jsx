import React from "react";
import { Link } from "react-router-dom"; // Usamos Link en vez de <a>

const Navbar = () => {
  return (
    // 'absolute' para que quede sobre la imagen, 'bg-transparent' y texto blanco
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo (Similar al de la imagen) */}
          <Link
            to="/"
            className="flex items-center text-white font-bold text-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.336-1.133.875-1.434L12 13.171l2.875 1.52c.54.301.875.813.875 1.434V21m-9.75 0h13.5M3 21v-4.875c0-.621.336-1.133.875-1.434L12 3.371l8.125 11.32c.54.301.875.813.875 1.434V21m-3.75 0h-9M12 15.75a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z"
              />
            </svg>
            VISTA <span className="font-light ml-1">PROPIEDADES</span>
          </Link>

          {/* Enlaces de navegación (Blancos) */}
          <div className="hidden md:flex space-x-6 text-white font-medium text-sm uppercase tracking-wider">
            <Link to="/" className="hover:text-gray-300 transition">
              Inicio
            </Link>
            <Link to="/comprar" className="hover:text-gray-300 transition">
              Comprar
            </Link>
            <Link to="/arrendar" className="hover:text-gray-300 transition">
              Arrendar
            </Link>
            <Link to="/vender" className="hover:text-gray-300 transition">
              Vender
            </Link>
            <Link to="/nosotros" className="hover:text-gray-300 transition">
              Nosotros
            </Link>
            <Link to="/contacto" className="hover:text-gray-300 transition">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
