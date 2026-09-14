import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
        <span>La Bodega del Juguete</span>
      </div>

      {/* LINKS */}
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

    </header>
  );
}