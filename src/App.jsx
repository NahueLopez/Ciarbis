import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Clientes from './pages/Clientes';
import Equipo from './pages/Equipo';
import Contactos from './pages/Contactos';

function App() {
  return (
    <div>
      <Navbar /> 
      <Home />
      {<Servicios />}
      {<Clientes />}
      {<Equipo />}
      {<Contactos />}
      {<Footer />}
    </div>
  );
}

export default App;
