function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white ">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Fondo animado con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-violeta to-celeste bg-fixed animate-background"></div>

        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Somos CIARBIS</h1>
          <p className="text-md md:text-xl mb-6">Soluciones Informáticas, Transformación digital y Branding</p>
          
          {/*<a
            href="#servicios"
            className="relative bg-violeta text-white py-2 px-6 rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-celeste scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
            <span className="relative">Ver Servicios</span>
          </a>
          */}
        </div>

        {/* Rombo animado con luz */}
        <div className="diamond"></div>

      </section>
    </div>
  );
}

export default Home;
