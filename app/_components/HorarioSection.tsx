// app/_components/HorarioSection.tsx
import React, { useRef, useEffect } from 'react';

const HorarioSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -10; // Ajusta el ángulo máximo
      const rotateY = (x - centerX) / centerX * 10; // Ajusta el ángulo máximo

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-col justify-start items-center" style={{ minHeight: 'auto', perspective: '1000px' }}> {/* Agregué perspective para el efecto 3D */}
      {/* La tabla ahora está alineada arriba, cerca del navbar, sin centrado vertical */}
      <div ref={cardRef} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mx-auto card-3d" style={{ marginTop: '10px', transformStyle: 'preserve-3d' }}> {/* Agregué ref y transformStyle */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Horario de Atención</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 min-w-[600px]">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 bg-gray-300">Día</th>
                <th className="border border-gray-300 px-4 py-2 bg-gray-300">Horario Mañana</th>
                <th className="border border-gray-300 px-4 py-2 bg-gray-300">Horario Tarde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Lunes</td>
                <td className="border border-gray-300 px-4 py-2">10:30 AM - 13:30 PM</td>
                <td className="border border-gray-300 px-4 py-2">17:00 PM - 20:00 PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Martes</td>
                <td className="border border-gray-300 px-4 py-2">10:30 AM - 13:30 PM</td>
                <td className="border border-gray-300 px-4 py-2">17:00 PM - 20:00 PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Miércoles</td>
                <td className="border border-gray-300 px-4 py-2">10:30 AM - 13:30 PM</td>
                <td className="border border-gray-300 px-4 py-2">17:00 PM - 20:00 PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Jueves</td>
                <td className="border border-gray-300 px-4 py-2">10:30 AM - 13:30 PM</td>
                <td className="border border-gray-300 px-4 py-2">17:00 PM - 20:00 PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Viernes</td>
                <td className="border border-gray-300 px-4 py-2">10:30 AM - 13:30 PM</td>
                <td className="border border-gray-300 px-4 py-2">17:00 PM - 20:00 PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Sábado</td>
                <td className="border border-gray-300 px-4 py-2">10:30 AM - 13:30 PM</td>
                <td className="border border-gray-300 px-4 py-2">Cerrado</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Domingo</td>
                <td className="border border-gray-300 px-4 py-2">Cerrado</td>
                <td className="border border-gray-300 px-4 py-2">Cerrado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Espacio en blanco al final para que el footer llegue al final */}
      <div className="h-48"></div>
      <style jsx>{`
        .card-3d {
          transition: transform 0.1s ease; /* Reduje la duración para un seguimiento más responsivo */
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .card-3d:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default HorarioSection;
