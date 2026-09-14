import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero-banner">
        <div className="overlay">

          <h1>La Bodega del Juguete</h1>

          <p>
            Venta al mayor y detal <br />
            Piñatería y juguetería
          </p>

          <div className="hero-buttons">
            <Link to="/productos" className="btn">
              Ver catálogo
            </Link>

            <a
              href="https://wa.me/573226075952"
              target="_blank"
              className="btn btn-whatsapp"
            >
              Comprar por WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* SECCIONES */}
      <section className="features fade-in">
        <h2>¿Por qué elegirnos?</h2>
       <div className="features-grid">
  <div className="feature-card">🎁<p>Gran variedad</p></div>
  <div className="feature-card">💰<p>Precios al mayor</p></div>
  <div className="feature-card">🚚<p>Envíos rápidos</p></div>
  <div className="feature-card">⭐<p>Calidad garantizada</p></div>
</div>
      </section>

      <section className="categories fade-in">
        <h2>Categorías</h2>
        <div className="categories-grid">
          <div className="cat-card">🎌 Anime</div>
          <div className="cat-card">🧸 Juguetería</div>
        </div>
      </section>

      <section className="cta fade-in">
        <h2>¿Listo para comprar?</h2>
        <a href="https://wa.me/573226075952" className="btn btn-whatsapp">
          Escríbenos ahora
        </a>
      </section>
    </>
  );
}