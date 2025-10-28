// components/ContactSection.tsx
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna izquierda: Tarjeta de contacto */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full tremble">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h2>
              <p className="text-gray-700 mb-2">
                <strong>Correo Electrónico:</strong> bertha76@hotmail.es
              </p>
              <p className="text-gray-700">
                <strong>Teléfono:</strong> +34 626 945 238
              </p>
            </div>
          </div>
          
          {/* Columna derecha: Tarjeta con Google Maps */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full tremble">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ubicación de la Tienda</h2>
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.9097810931517!2d-4.993869723330558!3d36.48389507233909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732a161c22cf93%3A0x13a34ba6e5ff736a!2sCeleste%20Beb%C3%A9!5e0!3m2!1ses!2ses!4v1761297412763!5m2!1ses!2ses"
                  width="100%"
                  height="300"
                  className="rounded-lg"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Tienda"
                  style={{ pointerEvents: 'none' }}
                ></iframe>
                <a
                  href="https://www.google.com/maps/place/Celeste+Bebé/@36.483895,-4.99387,17z/data=!3m1!4b1!4m6!3m5!1s0xd732a161c22cf93:0x13a34ba6e5ff736a!8m2!3d36.483895!4d-4.99387!16s%2Fg%2F11c1q8z8z8?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Espacio en blanco al final para que el footer llegue al final */}
      <div className="h-32"></div>
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

export default ContactSection;
