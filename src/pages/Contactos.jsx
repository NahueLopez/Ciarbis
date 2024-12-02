import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

function Contactos() {
  return (
    <section id="contactos" className="relative bg-violeta py-20 text-center flex flex-col md:flex-row justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      
      <div className="z-10 flex-1 p-8 text-left text-white max-w-lg mx-auto md:mx-0">
        <h2 className="text-3xl font-semibold mb-6 text-celeste">Contáctanos</h2>
        <p className="text-xl mb-6">Estamos aquí para ayudarte, contáctanos para más información.</p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <FaMapMarkerAlt className="mr-3 text-celeste" />
            <span>Dirección: Rodríguez Peña 1660, Mar del Plata, CP7600</span>
          </li>
          <li className="flex items-center">
            <FaWhatsapp className="mr-3 text-green-500" />
            <span>Whatsapp: +54 (223) 123-4567</span>
          </li>
          <li className="flex items-center">
            <FaTelegram className="mr-3 text-blue-500" />
            <span>Telegram: @LuigiCiarbis</span>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-3 text-red-500" />
            <span>Email: info@ciarbis.com</span>
          </li>
        </ul>
        
      </div>

      <div className="z-10 flex-1 p-8 max-w-lg mx-auto md:mx-0">
        <iframe
          className="w-full h-80 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.739075456487!2d-57.55754108479332!3d-38.00550757971567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc7f7a5c8f95%3A0x5e3193d3c1a68ab5!2sRodr%C3%ADguez%20Pe%C3%B1a%201660%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contactos;
