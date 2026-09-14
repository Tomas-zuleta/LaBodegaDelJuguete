import { Link } from "react-router-dom";
export default function Precios() {
  return (
    <div className="page">
      <h1>Precios al mayor</h1>

      <p>
        En La Bodega del Juguete manejamos precios especiales para clientes
        mayoristas y minoristas.
      </p>

      <ul>
        <li>💰 Descuentos por cantidad</li>
        <li>🏪 Precios especiales para revendedores</li>
        <li>📦 Combos económicos</li>
        <li>🤝 Mejores precios del mercado</li>
      </ul>
      <Link to="/" className="back-btn">
              ⬅ Volver al inicio
            </Link>
    </div>
  );
}