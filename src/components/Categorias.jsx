import { useRef } from "react";
import "./categories.css";

const categories = [
  { name: "Todo", img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
  { name: "Nuevo", img: "https://cdn-icons-png.flaticon.com/512/992/992700.png" },
  { name: "Juguetería", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { name: "Peluches", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
  { name: "Carros", img: "https://cdn-icons-png.flaticon.com/512/743/743922.png" },
  { name: "Promociones", img: "https://cdn-icons-png.flaticon.com/512/929/929426.png" },
  { name: "Anime", img: "https://cdn-icons-png.flaticon.com/512/616/616554.png" },
  { name: "Naruto", img: "https://cdn-icons-png.flaticon.com/512/616/616554.png" },
  { name: "One Piece", img: "https://cdn-icons-png.flaticon.com/512/616/616554.png" }
];

export default function Categories() {
  const scrollRef = useRef();

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth"
    });
  };

  return (
    <div className="categories-section">

      <h2>Categorías</h2>

      <button className="scroll-btn left" onClick={() => scroll("left")}>‹</button>

      <div className="categories-container" ref={scrollRef}>
        {categories.map((cat, i) => (
          <div className="category-item" key={i}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>›</button>

    </div>
  );
}