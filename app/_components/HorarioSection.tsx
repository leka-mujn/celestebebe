// app/_components/HorarioSection.tsx
import React from 'react';

const HorarioSection = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Tarjeta más grande con animación de temblor al hacer hover, ahora como tabla */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mx-auto tremble">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Horario de Atención</h3>
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
      <style jsx>{`
        @keyframes tremble {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-5px, -5px); }
          50% { transform: translate(5px, 5px); }
          75% { transform: translate(-5px, 5px); }
        }
        .tremble:hover {
          animation: tremble 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HorarioSection;
