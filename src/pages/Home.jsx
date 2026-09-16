import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero-banner" data-aos="fade-down">
        <div className="overlay">
          <div className="hero-content">
            <span className="eyebrow">Venta al mayor y detal</span>
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
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORÍAS ================= */}
      <section className="categories-modern" data-aos="fade-up">
        <h2>Categorías populares</h2>

        <div className="categories-scroll">
          <div className="cat-item">
            <div className="circle">🧸</div>
            <p>Juguetería</p>
          </div>

          <div className="cat-item">
            <div className="circle">🎉</div>
            <p>Piñatería</p>
          </div>

          <div className="cat-item">
            <div className="circle">🎌</div>
            <p>Anime</p>
          </div>

          <div className="cat-item">
            <div className="circle">🚗</div>
            <p>Carros</p>
          </div>

          <div className="cat-item">
            <div className="circle">🧩</div>
            <p>Coleccionables</p>
          </div>

          <div className="cat-item">
            <div className="circle">🎲</div>
            <p>Juegos de mesa</p>
          </div>

          <div className="cat-item">
            <div className="circle">🟢</div>
            <p>Slime</p>
          </div>

          <div className="cat-item">
            <div className="circle">🔑</div>
            <p>Llaveros</p>
          </div>

          <div className="cat-item">
            <div className="circle">🧃</div>
            <p>Squeezys</p>
          </div>

          <div className="cat-item">
            <div className="circle">🥤</div>
            <p>Termos</p>
          </div>
        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="info-section fade-in" data-aos="fade-up">
        <div className="info-container">
          <div className="info-image">
            <img src="/logo.png" alt="La Bodega del Juguete" />
          </div>

          <div className="info-text">
            <h2>Todo lo que necesitas en un solo lugar</h2>

            <div className="info-item">
              <h3>🧸 Gran variedad</h3>
              <p>Juguetes, piñatería, anime y coleccionables para todas las edades.</p>
            </div>

            <div className="info-item">
              <h3>💰 Precios al mayor</h3>
              <p>Descuentos especiales para compras por volumen.</p>
            </div>

            <div className="info-item">
              <h3>🚚 Envíos rápidos</h3>
              <p>Entregas seguras y rápidas en tu ciudad.</p>
            </div>

            <div className="info-item">
              <h3>⭐ Calidad garantizada</h3>
              <p>Productos seleccionados con excelente calidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section fade-in" data-aos="zoom-in-up">
        <h2>¿Por qué elegirnos?</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Productos disponibles</p>
          </div>

          <div className="stat-card">
            <h3>1000+</h3>
            <p>Clientes felices</p>
          </div>

          <div className="stat-card">
            <h3>24H</h3>
            <p>Envíos rápidos</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Calidad garantizada</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta fade-in" data-aos="fade-up">
        <h2>¿Listo para comprar?</h2>

        <a
          href="https://wa.me/573226075952"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          Escríbenos ahora
        </a>
      </section>
    </>
  );
}