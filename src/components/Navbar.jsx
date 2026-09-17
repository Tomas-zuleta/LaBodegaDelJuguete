import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <span>La Bodega del Juguete</span>
      </div>

      {/* LINKS */}
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/carrito" className="cart-link" aria-label={`Carrito con ${cartCount} productos`}>
          🛒 <span>Carrito</span><strong>{cartCount}</strong>
        </Link>
      </nav>

    </header>
  );
}