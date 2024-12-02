import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navLinkClass = (id) =>
    `block py-2 px-4 hover:text-black ${
      activeSection === id ? 'text-black underline' : 'text-white'
    }`;

  return (
    <footer className="bg-gradient-to-r from-violeta to-celeste text-white p-6 w-full shadow-2xl">
      {/* Sección del Newsletter */}
      <div className="max-w-6xl mx-auto">
        <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div>
            <h3 className="text-lg font-bold mb-2">¡Suscríbete a nuestro Newsletter!</h3>
            <p className="text-sm">Entérate de las promociones y recibe información de tu interés.</p>
          </div>
          <input
            type="email"
            placeholder="Escribe tu email"
            className="p-2 border rounded-md w-full md:flex-grow"
          />
          <a
            href="#servicios"
            className="relative bg-violeta text-white py-2 px-6 rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-celeste scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
            <span className="relative">Suscribirme</span>
          </a>
        </form>
      </div>

      <hr className="my-6 border-white" />

      {/* Sección de páginas y logo */}
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div className="text-center flex flex-col items-center space-y-4 w-full">
          <img src="/logo.png" alt="Logo" className="h-auto w-32 mx-auto" />
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/Ciarbis" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="h-6 w-6 text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com/ciarbis" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-6 w-6 text-pink-500 hover:text-pink-700" />
            </a>
            <a href="https://www.linkedin.com/company/ciarbis/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6 w-6 text-blue-700 hover:text-blue-900" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Páginas</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#home" className={navLinkClass('home')}>Home</a></li>
            <li><a href="#servicios" className={navLinkClass('servicios')}>Servicios</a></li>
            <li><a href="#clientes" className={navLinkClass('clientes')}>Clientes</a></li>
            <li><a href="#equipo" className={navLinkClass('equipo')}>Equipo</a></li>
            <li><a href="#contactos" className={navLinkClass('contactos')}>Contactos</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto px-4 text-sm text-center space-y-4 md:space-y-0 mt-8">
        <p>Términos y condiciones</p>
        <p>Trabajá con nosotros</p>
        <p>Políticas de privacidad</p>
        <p>Ayuda</p>
      </div>

      <hr className="my-6 border-white" />

      <div className="flex flex-col md:flex-row justify-between mx-auto max-w-7xl text-center md:text-left">
        <div className="mb-4">
          <p>#deMardelAlMundo</p>
          <p>Miembros y Sponsors de ATICMA</p>
        </div>
        <div>
          <p>Copyright © 2020-2024 | CIARBIS® | Todos los derechos reservados</p>
          <p>Soluciones Informáticas, Digitales y Branding</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
