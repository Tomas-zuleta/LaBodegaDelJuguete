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

      {/* SECCIONES FEATURES */}
      <section id="features" className="features fade-in">
        <h2>¿Por qué elegirnos?</h2>

       <div className="features-grid">
  <Link to="/variedad" className="feature-card">
    🎁<p>Gran variedad</p>
  </Link>

  <Link to="/precios" className="feature-card">
    💰<p>Precios al mayor</p>
  </Link>

  <Link to="/envios" className="feature-card">
    🚚<p>Envíos rápidos</p>
  </Link>

  <Link to="/calidad" className="feature-card">
    ⭐<p>Calidad garantizada</p>
  </Link>
</div>
      </section>

      {/* SECCIONES DETALLADAS */}
      <section id="variedad" className="info-section fade-in">
        <h2>Gran variedad</h2>
        <p>Tenemos juguetes, piñatería, anime y mucho más para todas las edades.</p>
      </section>

      <section id="precios" className="info-section fade-in">
        <h2>Precios al mayor</h2>
        <p>Ofrecemos precios especiales para compras al por mayor con excelentes descuentos.</p>
      </section>

      <section id="envios" className="info-section fade-in">
        <h2>Envíos rápidos</h2>
        <p>Realizamos envíos rápidos y seguros a toda la ciudad y el país.</p>
      </section>

      <section id="calidad" className="info-section fade-in">
        <h2>Calidad garantizada</h2>
        <p>Todos nuestros productos son seleccionados con altos estándares de calidad.</p>
      </section>

      {/* CATEGORÍAS */}
      <section className="categories fade-in">
        <h2>Categorías</h2>
        <div className="categories-grid">
          <div className="cat-card">🎌 Anime</div>
          <div className="cat-card">🧸 Juguetería</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta fade-in">
        <h2>¿Listo para comprar?</h2>
        <a href="https://wa.me/573226075952" className="btn btn-whatsapp">
          Escríbenos ahora
        </a>
      </section>
    </>
  );
}