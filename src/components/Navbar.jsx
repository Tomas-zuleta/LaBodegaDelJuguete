import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useLayoutEffect(() => {
    if (!menuRef.current) return undefined;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (isMobile) {
      return () => {
        document.body.style.overflow = "";
      };
    }

    const menuItems = menuRef.current.querySelectorAll("a");
    gsap.fromTo(
      menuItems,
      { y: -12, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.06, ease: "power2.out" }
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src="/logo.png" alt="La Bodega del Juguete" />
        <span>La Bodega <b>del Juguete</b></span>
      </Link>

      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        ref={menuRef}
        className={`nav-links${menuOpen ? " is-open" : ""}`}
      >
        <Link to="/" className="menu-brand" onClick={closeMenu}>
          <img src="/logo.png" alt="La Bodega del Juguete" />
          <span>La Bodega<br /><b>del Juguete</b></span>
        </Link>

        <div className="menu-list">
          <Link to="/" onClick={closeMenu}><span>Inicio</span><i aria-hidden="true">↗</i></Link>
          <Link to="/nosotros" onClick={closeMenu}><span>Nosotros</span><i aria-hidden="true">?</i></Link>
          <Link to="/productos" onClick={closeMenu}><span>Productos</span><i aria-hidden="true">▣</i></Link>
          <Link to="/contacto" onClick={closeMenu}><span>Contacto</span><i aria-hidden="true">✉</i></Link>
          <Link to="/carrito" className="cart-link" aria-label={`Carrito con ${cartCount} productos`} onClick={closeMenu}>
            <span>Carrito</span>
            <span className="cart-icon-wrap">
              <i aria-hidden="true">🛒</i>
              {cartCount > 0 && <strong>{cartCount}</strong>}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}