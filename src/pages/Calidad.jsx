import { Link } from "react-router-dom";
export default function Calidad() {
  return (
    <div className="page" data-aos="fade-up">
      <h1>Calidad garantizada</h1>

      <p>
        Nos aseguramos de ofrecer productos de alta calidad para nuestros clientes.
      </p>

      <ul>
        <li> Productos seleccionados</li>
        <li> Materiales resistentes</li>
        <li> Control de calidad</li>
        <li> Satisfacción garantizada</li>
      </ul>
      <Link to="/" className="back-btn">
              ⬅ Volver al inicio
            </Link>
    </div>
  );
}