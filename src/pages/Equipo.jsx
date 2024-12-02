

function Equipo() {
  const miembros = [
    { nombre: 'Juan Pérez', rol: 'Desarrollador', foto: 'https://via.placeholder.com/150' },
    { nombre: 'Ana García', rol: 'Diseñadora', foto: 'https://via.placeholder.com/150' },
    { nombre: 'Carlos López', rol: 'Gerente de Proyecto', foto: 'https://via.placeholder.com/150' },
    { nombre: 'María Fernández', rol: 'Marketing', foto: 'https://via.placeholder.com/150' }
  ];

  return (
    <section id="equipo" className="bg-white py-20 text-center">
  <h2 className="text-4xl font-bold text-black mb-10">Nuestro Equipo</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-7xl mx-auto justify-items-center">
    {miembros.map((miembro, index) => (
      <div key={index} className="card-container">
        <div className="card">
          {/* Frente */}
          <div className="card-front">
            <img src={miembro.foto} alt={miembro.nombre} className="rounded-full w-full h-full object-cover" />
          </div>
          {/* Reverso */}
          <div className="card-back">
            <h3 className="text-lg font-semibold">{miembro.nombre}</h3>
            <p className="text-sm">{miembro.rol}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

export default Equipo;
