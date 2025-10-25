"use client"; // Agregado para usar hooks en app router

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Ropa() { // Cambié el nombre de la función a Ropa, asumiendo que es para esa página
  const images = [
    '/imagen1.jpeg', // Cambiado a .jpeg
    '/imagen2.jpeg',
    '/imagen3.jpeg',
    '/imagen4.jpeg',
    '/imagen5.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado para controlar si el carrusel está pausado

  // Animación automática cada 3 segundos, solo si no está pausado
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-pink-50 text-black font-sans mt-4"> {/* Cambiado justify-center a justify-start y agregado mt-4 para subir */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <h1 className="text-3xl font-bold mb-4">Nuestros Conjuntos</h1>
        <div className="relative flex items-center justify-center w-full max-w-2xl">
          {/* Flecha izquierda (fuera de la imagen, sin círculo) */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 text-black text-6xl hover:text-gray-600 transition-colors duration-300 cursor-pointer bg-transparent border-none"
          >
            ←
          </button>
          {/* Contenedor del carrusel */}
          <div
            className="relative w-full h-[700px] overflow-hidden shadow-2xl cursor-pointer"
            onClick={togglePause} // Toggle pausa al hacer click
          >
            {/* Ícono de pausa semitransparente arriba a la derecha */}
            {isPaused && (
              <div className="absolute top-4 right-4 z-20 opacity-70">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-lg"
                >
                  <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                  <rect x="14" y="4" width="4" height="16" fill="currentColor" />
                </svg>
              </div>
            )}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full h-[700px] flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    width={600}
                    height={700}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Flecha derecha (fuera de la imagen, sin círculo) */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 text-black text-6xl hover:text-gray-600 transition-colors duration-300 cursor-pointer bg-transparent border-none"
          >
            →
          </button>
        </div>
        {/* Indicadores opcionales */}
        <div className="mt-4 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
