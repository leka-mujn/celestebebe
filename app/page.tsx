"use client"; // Agregado para usar hooks en app router

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Ropa() { // Cambié el nombre de la función a Ropa, asumiendo que es para esa página
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0); // Estado para la altura de la ventana
  const [isPaused, setIsPaused] = useState(false); // Estado para controlar si el hero está pausado
  const [heroOpacity, setHeroOpacity] = useState(1); // Estado para la opacidad del hero en animación automática

  // Event listener para el scroll y altura de la ventana
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Inicializar altura de la ventana
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animación automática de desvanecimiento del hero cada 3 segundos, solo si no está pausado
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setHeroOpacity((prev) => (prev > 0 ? prev - 0.1 : 1)); // Desvanece gradualmente y reinicia
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const images = [
    '/imagen1.jpeg', // Cambiado a .jpeg
    '/imagen2.jpeg',
    '/imagen3.jpeg',
    '/imagen4.jpeg',
    '/imagen5.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false); // Estado para controlar si el carrusel está pausado

  // Animación automática cada 3 segundos, solo si no está pausado
  useEffect(() => {
    if (!isCarouselPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isCarouselPaused, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleCarouselPause = () => {
    setIsCarouselPaused((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-pink-50 text-black font-sans">
      {/* Hero section (ocupa toda la pantalla, se desvanece automáticamente y permite pausa al hacer clic) */}
      <div
        ref={heroRef}
        className="fixed inset-0 z-50 cursor-pointer"
        onClick={togglePause} // Toggle pausa al hacer click
        style={{
          opacity: isPaused ? heroOpacity : (windowHeight > 0 ? Math.max(1 - scrollY / (windowHeight * 0.8), 0) : 1), // Mezcla de animación automática y scroll-based
          zIndex: scrollY > windowHeight / 2 ? 0 : 50, // Cuando se scrollea más de la mitad de la ventana, el hero va detrás para permitir superposición
          pointerEvents: scrollY > windowHeight / 2 ? 'none' : 'auto' // Desactiva clics en el hero cuando baja de z-index (para que el footer funcione)
        }}
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
          className="relative w-full h-full bg-no-repeat bg-center bg-pink-50 md:bg-[url('/facebook.png')] md:bg-[length:100%_100%]" 
        >
          {/* Overlay reducido para mejor visibilidad, solo en escritorio */}
          <div className="absolute inset-0 bg-transparent opacity-0 md:bg-black md:opacity-30"></div>
          
          {/* Contenido del hero */}
          <div className="relative z-10 flex items-center justify-start h-full px-8">
            <div className="text-gray-500 md:text-white max-w-lg">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                Celeste Bebe Moda Infantil
              </h1>
              <p className="text-xl drop-shadow-md">
                Ropa infantil de calidad para los más pequeños de la casa.
              </p>
              <button 
                onClick={() => router.push('/ropa')} 
                className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg"
              >
                Ver ropa
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Espacio para permitir scroll y ver el carrusel */}
      <div className="h-screen"></div> {/* Altura de la pantalla para permitir scroll */}

      {/* Carrusel abajo del hero (se ve al scrollear y se superpone al hero cuando este se desvanece y va detrás) */}
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
              onClick={toggleCarouselPause} // Toggle pausa al hacer click
            >
              {/* Ícono de pausa semitransparente arriba a la derecha */}
              {isCarouselPaused && (
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
    </div>
  );
}
