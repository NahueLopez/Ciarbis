import React from 'react';

function Clientes() {
  return (
    <section id="clientes" className="relative bg-celeste py-20 text-center">
    <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
    <div className="relative z-10">
      <h2 className="text-3xl font-semibold text-violeta mb-6">Nuestros Clientes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center mx-auto max-w-7xl justify-items-center">
        <div><img src="https://via.placeholder.com/150" alt="Cliente 1" className="w-40 h-40 mx-auto" /></div>
        <div><img src="https://via.placeholder.com/150" alt="Cliente 2" className="w-40 h-40 mx-auto" /></div>
        <div><img src="https://via.placeholder.com/150" alt="Cliente 3" className="w-40 h-40 mx-auto" /></div>
        <div><img src="https://via.placeholder.com/150" alt="Cliente 4" className="w-40 h-40 mx-auto" /></div>
        <div><img src="https://via.placeholder.com/150" alt="Cliente 5" className="w-40 h-40 mx-auto" /></div>
        <div><img src="https://via.placeholder.com/150" alt="Cliente 6" className="w-40 h-40 mx-auto" /></div>
        <div><img src="https://via.placeholder.com/150" alt="Cliente 7" className="w-40 h-40 mx-auto" /></div>
        <div><img src="https://via.placeholder.com/150" alt="Cliente 8" className="w-40 h-40 mx-auto" /></div>
        <div><img src="https://via.placeholder.com/150" alt="Cliente 9" className="w-40 h-40 mx-auto" /></div>
      </div>
    </div>
  </section>
  
  );
}

export default Clientes;
