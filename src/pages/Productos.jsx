import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Productos() {
  const [category, setCategory] = useState("all");
  const [anime, setAnime] = useState("all");

  const filteredProducts = products.filter((p) => {
    if (category === "all") return true;

    if (category === "jugueteria") {
      return p.category === "jugueteria";
    }

    if (category === "anime") {
      if (anime === "all") return p.category === "anime";
      return p.anime === anime;
    }
  });

  return (
    <div style={{ padding: "20px" }} data-aos="fade-up">
      <h2>Productos</h2>

      {/* FILTROS */}
      <div className="filters">

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Todo</option>
          <option value="anime">Anime</option>
          <option value="jugueteria">Juguetería</option>
        </select>

        {category === "anime" && (
          <select onChange={(e) => setAnime(e.target.value)}>
            <option value="all">Todos los animes</option>
            <option>Dragon Ball</option>
            <option>Naruto</option>
            <option>One Piece</option>
            <option>Demon Slayer</option>
            <option>One Punch Man</option>
            <option>Caballeros del Zodiaco</option>
            <option>Jojo's Bizarre Adventure</option>
          </select>
        )}

      </div>

      {/* PRODUCTOS */}
      <div className="products">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}