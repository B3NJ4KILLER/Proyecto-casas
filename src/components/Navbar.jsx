import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Importamos NavLink

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función de estilos: decide si poner la línea blanca (border-white) o no
  const navLinkStyles = ({ isActive }) => {
    return `text-sm font-medium uppercase tracking-wider px-1 py-2 border-b-2 transition-all duration-300 ${
      isActive
        ? "text-white border-white" // ESTADO ACTIVO: Línea y texto blanco
        : "text-gray-200 border-transparent hover:text-white hover:border-gray-300" // INACTIVO: Sin línea
    }`;
  };

  return (
    // Nav principal: Añadí 'h-24' y 'flex items-center' para centrar todo mejor verticalmente
    <nav className="absolute backdrop-blur-xs top-0 left-0 w-full z-50 bg-transparent h-24 flex items-center border-b border-b-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          {/* --- LOGO --- */}
          <Link
            to="/"
            className="flex items-center text-white font-bold text-2xl z-50 tracking-widest"
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
            VISTA <span className="font-light ml-2">PROPIEDADES</span>
          </Link>

          {/* --- MENÚ DE ESCRITORIO --- */}
          {/* Aquí aplicamos NavLink y navLinkStyles */}
          <div className="hidden md:flex space-x-10 items-center text-shadow-lg/20">
            <NavLink to="/" className={navLinkStyles} end>
              Inicio
            </NavLink>
            <NavLink to="/comprar" className={navLinkStyles}>
              Comprar
            </NavLink>
            <NavLink to="/arrendar" className={navLinkStyles}>
              Arrendar
            </NavLink>
            <NavLink to="/contacto" className={navLinkStyles}>
              Contacto
            </NavLink>
          </div>

          {/* --- BOTÓN HAMBURGUESA (Móvil) --- */}
          <div className="md:hidden z-50 flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
      <div
        className={`
        md:hidden absolute top-0 left-0 w-full bg-gray-950/95 backdrop-blur-sm shadow-xl transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 visible pt-28 pb-10" : "opacity-0 invisible h-0 py-0 overflow-hidden"}
      `}
      >
        <div className="flex flex-col items-center space-y-6 text-white text-lg font-medium">
          {/* En móvil también usamos NavLink para indicar activo con color amarillo */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
            end
          >
            Inicio
          </NavLink>
          <NavLink
            to="/comprar"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            Comprar
          </NavLink>
          <NavLink
            to="/arrendar"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            Arrendar
          </NavLink>
          <NavLink
            to="/vender"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            Vender
          </NavLink>
          <NavLink
            to="/nosotros"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
