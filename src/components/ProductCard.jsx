import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

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
    <article className="card" data-aos="fade-up">
      <div className="product-media">
        <Link to={`/productos/${product.id}`} className="product-image-link" aria-label={`Ver ${product.name}`}>
          <img src={product.image} alt={product.name} onError={handleImageError} />
        </Link>
        <Link
          to={`/productos/${product.id}`}
          className="product-preview"
          aria-label={`Ver detalles de ${product.name}`}
          title="Ver producto"
        >
          <FaEye aria-hidden="true" />
        </Link>
      </div>

      <Link to={`/productos/${product.id}`} className="product-card-link">
        <h3>{product.name}</h3>
        <p>{formatPrice(product.price)}</p>
      </Link>

      <button type="button" className="btn" onClick={() => onAddToCart(product)}>
        Agregar al carrito
      </button>
    </article>
  );
}