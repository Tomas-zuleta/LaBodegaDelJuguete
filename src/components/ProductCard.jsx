export default function ProductCard({ product }) {

  const whatsappLink = `https://wa.me/573226075952?text=Hola quiero comprar ${product.name}`;

  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <a href={whatsappLink} target="_blank" className="btn btn-whatsapp">
        Comprar
      </a>
    </div>
  );
}