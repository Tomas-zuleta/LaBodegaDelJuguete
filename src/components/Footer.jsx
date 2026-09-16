import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>La Bodega del Juguete</h2>
          <p>Venta al mayor y detal</p>
          <p>Piñatería y juguetería</p>
        </div>

        <div className="footer-section">
          <h3>Enlaces</h3>
          <a href="/">Inicio</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/productos">Productos</a>
          <a href="/contacto">Contacto</a>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📍 Medellín</p>
          <p>📞 3226075952</p>
        </div>

        {/* REDES CON ICONOS 🔥 */}
        <div className="footer-section">
          <h3>Síguenos</h3>

          <div className="socials">
  <a href="#"><FaFacebook /> Facebook</a>
  <a href="#"><FaInstagram /> Instagram</a>
  <a href="#"><SiTiktok /> TikTok</a>
</div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 La Bodega del Juguete
      </div>

    </footer>
  );
}