import { Link } from "react-router-dom";
export default function Envios() {
  return (
    <div className="page">
      <h1>Envíos rápidos</h1>

      <p>
        Realizamos envíos seguros y rápidos para que recibas tus productos sin problemas.
      </p>

      <ul>
        <li>🚚 Envíos a toda la ciudad</li>
        <li>📦 Empaque seguro</li>
        <li>⏱ Entregas rápidas</li>
        <li>📍 Seguimiento de pedidos</li>
      </ul>
      <Link to="/" className="back-btn">
              ⬅ Volver al inicio
            </Link>
    </div>
  );
}