import React from 'react'

function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-semibold text-black mb-6">Nuestros Servicios</h2>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-0">
      
      {/* Servicio Desarrollos */}
      <div className="bg-celeste p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
        <img className="w-full h-32 object-cover rounded-t-xl" src="ruta-imagen-desarrollos.jpg" alt="Desarrollos" />
        <h3 className="text-xl font-semibold mb-4">Desarrollos</h3>
        <ul className="text-black text-left">
          <li>- Creamos páginas web predeterminadas y a medida</li>
          <li>- Sistemas a medida</li>
          <li>- Apps para dispositivos móviles y tablets</li>
        </ul>
      </div>
  
      {/* Servicio Tienda Online */}
      <div className="bg-violeta p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <img className="w-full h-32 object-cover rounded-t-xl" src="ruta-imagen-tienda-online.jpg" alt="Tienda Online" />
        <h3 className="text-xl font-semibold mb-4">Tienda Online</h3>
        <ul className="text-black text-left">
          <li>- Equipamiento (PC de escritorio, Notebooks)</li>
          <li>- Impresoras y accesorios</li>
          <li>- Celulares y Smartphones</li>
        </ul>
      </div>
  
      {/* Servicio Asesoría */}
      <div className="bg-celeste p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <img className="w-full h-32 object-cover rounded-t-xl" src="ruta-imagen-asesoria.jpg" alt="Asesoría" />
        <h3 className="text-xl font-semibold mb-4">Asesoría</h3>
        <ul className="text-black text-left">
          <li>- Consultorías sobre transformación digital</li>
          <li>- Planes personalizados para empresas</li>
        </ul>
      </div>
  
      {/* Servicio Branding y Marca Digital */}
      <div className="bg-violeta p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <img className="w-full h-32 object-cover rounded-t-xl" src="ruta-imagen-branding.jpg" alt="Branding y Marca Digital" />
        <h3 className="text-xl font-semibold mb-4">Branding y Marca Digital</h3>
        <ul className="text-black text-left">
          <li>- Diseño de logo, manual de marca e identidad</li>
          <li>- Normalización en redes sociales (Instagram, Facebook)</li>
          <li>- SEO de web y campañas de Google Ads</li>
        </ul>
      </div>
    </div>
  </section>
  
  )
}

export default Servicios
