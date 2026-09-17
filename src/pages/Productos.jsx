import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

const categoryFilters = {
  jugueteria: ["Figuras", "Bloques", "Cocinas"],
  pinateria: ["Decoración", "Piñatas"],
  anime: ["Dragon Ball", "Naruto", "One Piece"],
  carros: ["Control remoto", "Construcción"],
  coleccionables: ["Astronautas", "Figuras"],
  "juegos-de-mesa": ["Juegos familiares", "Rompecabezas"],
  slime: ["Brillante", "Con figuras"],
  llaveros: ["Peluche", "Coleccionables"],
  squeezys: ["Animales", "Antiestrés"],
  termos: ["Infantiles", "Deportivos"],
};

export default function Productos({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("categoria") || "all";
  const category = selectedCategory;
  const [subcategory, setSubcategory] = useState("all");
  const [search, setSearch] = useState("");
  const availableFilters = categoryFilters[category] || [];
  const activeSubcategory = availableFilters.includes(subcategory) ? subcategory : "all";

  const filteredProducts = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (activeSubcategory !== "all" && (p.anime || p.subcategory) !== activeSubcategory) return false;

    const searchText = search.trim().toLowerCase();
    if (!searchText) return true;

    return [p.name, p.category, p.anime]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(searchText));
  });

  return (
    <div style={{ padding: "20px" }} data-aos="fade-up">
      <h2>Productos</h2>

      {/* FILTROS */}
      <div className="filters">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar productos..."
          aria-label="Buscar productos"
        />

        <select
          value={category}
          onChange={(e) => {
            const nextCategory = e.target.value;
            setSearchParams(nextCategory === "all" ? {} : { categoria: nextCategory });
            setSubcategory("all");
          }}
        >
          <option value="all">Todo</option>
          {categories.map((item) => (
            <option value={item.slug} key={item.slug}>{item.name}</option>
          ))}
        </select>

        {availableFilters.length > 0 && (
          <select value={activeSubcategory} onChange={(e) => setSubcategory(e.target.value)}>
            <option value="all">Todas las opciones</option>
            {availableFilters.map((filter) => (
              <option key={filter} value={filter}>{filter}</option>
            ))}
          </select>
        )}

      </div>

      {/* PRODUCTOS */}
      <div className="products">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}