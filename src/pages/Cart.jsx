import { Link, useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "573226075952";
const WHOLESALE_THRESHOLD = 12;
const WHOLESALE_RATE = 0.1;
const WHOLESALE_CATEGORIES = new Set(["jugueteria", "pinateria"]);

const formatPrice = (price) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

export default function Cart({ cart, onUpdateQuantity, onRemove, isAuthenticated }) {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const wholesaleQuantity = cart
    .filter((item) => WHOLESALE_CATEGORIES.has(item.category))
    .reduce((sum, item) => sum + item.quantity, 0);
  const wholesaleSubtotal = cart
    .filter((item) => WHOLESALE_CATEGORIES.has(item.category))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);
  const wholesaleDiscount = wholesaleQuantity >= WHOLESALE_THRESHOLD
    ? wholesaleSubtotal * WHOLESALE_RATE
    : 0;
  const total = subtotal - wholesaleDiscount;

  const sendOrderToWhatsApp = () => {
    if (!isAuthenticated) {
      navigate("/iniciar-sesion", { state: { from: "/carrito" } });
      return;
    }

    const productsMessage = cart
      .map((item) => `- ${item.name} x${item.quantity}: ${formatPrice(item.price * item.quantity)}`)
      .join("\n");
    const discountMessage = wholesaleDiscount > 0
      ? `\nDescuento mayorista (10%): -${formatPrice(wholesaleDiscount)}`
      : "";
    const message = `Hola, quiero hacer este pedido:\n${productsMessage}${discountMessage}\n\nTotal estimado: ${formatPrice(total)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!cart.length) {
    return (
      <section className="cart-page empty-cart">
        <span className="section-label">Tu selección</span>
        <h1>Tu carrito está vacío</h1>
        <p>Agrega tus productos favoritos y aquí podrás revisar tu pedido antes de enviarlo.</p>
        <Link to="/productos" className="btn">Ver productos</Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-header">
        <div>
          <span className="section-label">Tu selección</span>
          <h1>Carrito de compras</h1>
        </div>
        <Link to="/productos" className="continue-shopping">Seguir comprando</Link>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id} data-aos="fade-up">
              <img
                src={item.image}
                alt={item.name}
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/logo.png";
                }}
              />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>{formatPrice(item.price)} por unidad</p>
                <div className="quantity-control" aria-label={`Cantidad de ${item.name}`}>
                  <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label="Disminuir cantidad">-</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Aumentar cantidad">+</button>
                </div>
              </div>
              <div className="cart-item-total">
                <strong>{formatPrice(item.price * item.quantity)}</strong>
                <button type="button" className="remove-item" onClick={() => onRemove(item.id)}>Eliminar</button>
              </div>
            </article>
          ))}
        </div>

        <aside className="cart-summary" data-aos="fade-left">
          <h2>Resumen del pedido</h2>
          <div className="summary-line">
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          {wholesaleDiscount > 0 && (
            <div className="summary-line discount-line">
              <span>Descuento mayorista</span>
              <strong>-{formatPrice(wholesaleDiscount)}</strong>
            </div>
          )}
          <div className="summary-line summary-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <p className="wholesale-status">
            {wholesaleDiscount > 0
              ? "Descuento mayorista aplicado por comprar 12 o más artículos de juguetería o piñatería."
              : `Compra ${Math.max(WHOLESALE_THRESHOLD - wholesaleQuantity, 0)} artículos más de juguetería o piñatería para activar el descuento mayorista.`}
          </p>
          <p>El valor del envío se confirma por WhatsApp según tu ubicación.</p>
          <button type="button" className="btn btn-whatsapp checkout-button" onClick={sendOrderToWhatsApp}>
            {isAuthenticated ? "Comprar por WhatsApp" : "Iniciar sesión para comprar"}
          </button>
        </aside>
      </div>
    </section>
  );
}