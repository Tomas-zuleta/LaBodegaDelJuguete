import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <h1>La Bodega del Juguete</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}