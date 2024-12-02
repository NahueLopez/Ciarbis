import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
      activeSection === id
        //? 'bg-gradient-to-r from-violeta to-celeste text-transparent bg-clip-text underline'
        ?'text-black underline'
        : 'text-white'
    }`;

  return (
    <nav className="bg-gradient-to-l from-violeta to-celeste text-white p-4 fixed top-0 w-full z-20 shadow-2xl rounded-b-3xl border-b-1 border-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        </div>

        {/* Menú para escritorio */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className={navLinkClass('home')}>Home</a>
          <a href="#servicios" className={navLinkClass('servicios')}>Servicios</a>
          <a href="#clientes" className={navLinkClass('clientes')}>Clientes</a>
          <a href="#equipo" className={navLinkClass('equipo')}>Equipo</a>
          <a href="#contactos" className={navLinkClass('contactos')}>Contactos</a>
        </div>

        {/* Botón de menú para pantallas pequeñas */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#home" onClick={closeMenu} className={navLinkClass('home')}>Home</a>
          <a href="#servicios" onClick={closeMenu} className={navLinkClass('servicios')}>Servicios</a>
          <a href="#clientes" onClick={closeMenu} className={navLinkClass('clientes')}>Clientes</a>
          <a href="#equipo" onClick={closeMenu} className={navLinkClass('equipo')}>Equipo</a>
          <a href="#contactos" onClick={closeMenu} className={navLinkClass('contactos')}>Contactos</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
