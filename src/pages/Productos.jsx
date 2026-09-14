import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Productos() {
  return (
    <div className="products">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}