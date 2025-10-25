import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-purple-300 to-purple-400 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Descripción */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="font-bold text-lg mb-2">Celeste Bebe Moda Infantil</h3>
          <p className="text-sm mb-1">
            Ropa infantil de calidad para los más pequeños de la casa.
          </p>
          <p className="text-sm">
            Diseños únicos y cómodos para bebés y niños.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="md:w-1/3 text-center">
          <h4 className="font-semibold mb-2">Enlaces Rápidos</h4>
          <nav className="text-sm space-y-1">
            <Link href="/" className="block hover:text-pink-500 transition-colors">
              Inicio
            </Link>
            <Link href="/ropa" className="block hover:text-pink-500 transition-colors">
              Ropa
            </Link>
            <Link href="/horario" className="block hover:text-pink-500 transition-colors">
              Horario
            </Link>
            <Link href="/contacto" className="block hover:text-pink-500 transition-colors">
              Contacto
            </Link>
          </nav>
        </div>

        {/* Contacto y redes sociales */}
        <div className="md:w-1/3 text-center md:text-right">
          <h4 className="font-semibold mb-2">Síguenos</h4>
          <div className="flex justify-center md:justify-end space-x-4 mb-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="https://wa.me/626945238" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
          </div>
          <p className="text-sm">Contacto: <strong>626 945 238</strong></p>
        </div>
      </div>

      {/* Línea horizontal */}
      <hr className="my-6 border-white border-opacity-30" />

      {/* Pie de página */}
      <p className="text-center text-xs">&copy; 2023 Celeste Bebe Moda Infantil. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
