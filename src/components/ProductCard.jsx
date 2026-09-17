import { Link } from "react-router-dom";

const formatPrice = (price) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

const handleImageError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = "/logo.png";
};

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card">
      <Link to={`/productos/${product.id}`} className="product-card-link">
        <img src={product.image} alt={product.name} onError={handleImageError} />
        <h3>{product.name}</h3>
        <p>{formatPrice(product.price)}</p>
      </Link>

      <button type="button" className="btn" onClick={() => onAddToCart(product)}>
        Agregar al carrito
      </button>
    </article>
  );
}