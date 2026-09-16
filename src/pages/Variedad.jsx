import { Link } from "react-router-dom";

export default function Variedad() {
  return (
    <div className="page" data-aos="fade-up">
      <h1>Gran variedad</h1>

      <p>
        En La Bodega del Juguete contamos con una amplia variedad de productos:
      </p>

      <ul>
        <li>Juguetes para todas las edades</li>
        <li>Piñatería temática</li>
        <li>Figuras de anime</li>
        <li>Regalos personalizados</li>
      </ul>

      <Link to="/" className="back-btn">
        ⬅ Volver al inicio
      </Link>
    </div>
  );
}