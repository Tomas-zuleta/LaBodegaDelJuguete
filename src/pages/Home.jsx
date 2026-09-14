import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h2>Tu mundo anime en Medellín</h2>
      <p>Figuras, mangas y coleccionables</p>

      <Link to="/productos" className="btn">
        Ver catálogo
      </Link>

      <a
        href="https://wa.me/573226075952"
        className="btn btn-whatsapp"
        target="_blank"
      >
        WhatsApp
      </a>
    </section>
  );
}