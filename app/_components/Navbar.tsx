"use client";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú móvil
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex relative z-60">
      {/* Contenedor principal de la navegación, dividido en dos partes: navegación y sociales */}
      <div className="container p-2 w-3/4">
        {/* Elemento nav principal: en desktop tiene sombra, bordes redondeados, ancho máximo y fondo degradado; en móvil, solo tiene estos estilos cuando el menú está abierto para simular el tamaño original */}
        <nav
          className={`md:shadow-md md:rounded-4xl md:max-w-2xl md:mx-auto md:bg-linear-to-l md:from-pink-300 md:to-purple-400 ${
            isOpen
              ? "shadow-md rounded-4xl max-w-2xl mx-auto bg-linear-to-l from-pink-300 to-purple-400"
              : ""
          }`}
        >
          <div className="container flex mx-auto p-4 justify-around items-center">
            {/* Botón hamburguesa para móviles: solo visible en móvil, con fondo degradado pequeño cuando el menú no está abierto */}
            <div
              className={`md:hidden ${
                !isOpen
                  ? "bg-linear-to-l from-pink-300 to-purple-400 rounded-lg p-2"
                  : ""
              } mr-auto`}
            >
              <button
                onClick={toggleMenu}
                className="text-xl font-bold text-white hover:text-black"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            {/* Enlaces de navegación: visibles solo en desktop, centrados con espacio entre ellos */}
            <div className="hidden md:flex justify-center space-x-6">
              <Link
                href="/"
                className="text-xl font-bold text-white hover:text-black hover:underline"
              >
                Inicio
              </Link>
              <Link
                href="/ropa"
                className="text-xl font-bold text-white hover:text-black hover:underline"
              >
                Ropa
              </Link>
              <Link
                href="/horario"
                className="text-xl font-bold text-white hover:text-black hover:underline"
              >
                Horario
              </Link>
              <Link
                href="/contactos"
                className="text-xl font-bold text-white hover:text-black hover:underline"
              >
                Contacto
              </Link>
            </div>
          </div>
          {/* Menú desplegable para móviles: aparece solo cuando isOpen es true, con fondo degradado y enlaces */}
          {isOpen && (
            <div className="md:hidden p-2 ml-4">
              <Link
                href="/"
                className="block text-xl font-bold text-white hover:text-black hover:underline py-1"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                href="/ropa"
                className="block text-xl font-bold text-white hover:text-black hover:underline py-1"
                onClick={toggleMenu}
              >
                Ropa
              </Link>
              <Link
                href="/horario"
                className="block text-xl font-bold text-white hover:text-black hover:underline py-1"
                onClick={toggleMenu}
              >
                Horario
              </Link>
              <Link
                href="/contactos"
                className="block text-xl font-bold text-white hover:text-black hover:underline py-1"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
              {/* Redes sociales dentro del menú móvil: iconos de Instagram, Facebook y WhatsApp */}
              <div className="flex justify-around mt-2">
                <Link
                  href="https://www.instagram.com/moda_infantil_celeste_bebe/"
                  className="text-xl font-bold text-white hover:text-black hover:underline"
                  onClick={toggleMenu}
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.facebook.com/marisa.hdez.1983/"
                  className="text-xl font-bold text-white hover:text-black hover:underline"
                  onClick={toggleMenu}
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://wa.me/626945238"
                  className="text-xl font-bold text-white hover:text-black hover:underline"
                  onClick={toggleMenu}
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Contenedor de iconos sociales: visible solo en desktop */}
      <div className="container p-2 w-1/4 hidden md:block">
        <nav className="bg-linear-to-l from-pink-300 to-purple-400 shadow-2xs rounded-4xl max-w-78 mx-auto">
          <div className="container flex mx-auto p-4 justify-around items-center">
            {/* Enlaces a redes sociales: Instagram, Facebook y WhatsApp */}
            <Link
              href="https://www.instagram.com/moda_infantil_celeste_bebe/"
              className="text-xl font-bold text-white hover:text-black hover:underline"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/marisa.hdez.1983/"
              className="text-xl font-bold text-white hover:text-black hover:underline"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://wa.me/626945238"
              className="text-xl font-bold text-white hover:text-black hover:underline"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
