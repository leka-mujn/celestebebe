'use client'; // Necesario para usar hooks en componentes de cliente

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50">
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
  );
}
