import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import Product360Viewer from "../components/Product360Viewer";

const formatPrice = (price) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => String(item.id) === productId);

  if (!product) {
    return (
      <section className="product-detail not-found">
        <h1>Producto no encontrado</h1>
        <Link to="/productos" className="btn">Volver a productos</Link>
      </section>
    );
  }

  const wholesalePrice = Math.round((product.price * 0.9) / 1000) * 1000;
  const categoryName = product.subcategory || product.anime || "Producto";

  return (
    <section className="product-detail">
      <button type="button" className="back-button" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="product-detail-layout">
        <Product360Viewer product={product} />

        <div className="product-detail-content">
          <span className="section-label">{categoryName}</span>
          <h1>{product.name}</h1>
          <div className="product-prices">
            <div className="price-option retail-price">
              <span>Precio al detal</span>
              <strong>{formatPrice(product.price)}</strong>
              <small>Compra individual</small>
            </div>
            <div className="price-option wholesale-price">
              <span>Precio al mayor</span>
              <strong>{formatPrice(wholesalePrice)}</strong>
              <small>Desde 6 unidades</small>
            </div>
          </div>
          <p className="product-detail-description">
            Producto seleccionado de nuestra tienda. Ideal para regalar, coleccionar o disfrutar.
            Confirma disponibilidad y detalles de entrega al realizar tu pedido.
          </p>

          <dl className="product-specifications">
            <div>
              <dt>Categoría</dt>
              <dd>{product.category}</dd>
            </div>
            {product.anime && (
              <div>
                <dt>Línea</dt>
                <dd>{product.anime}</dd>
              </div>
            )}
          </dl>

          <button type="button" className="btn" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}