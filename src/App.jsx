import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import ProductDetail from "./pages/ProductDetail";
import Contacto from "./pages/Contacto";
import Variedad from "./pages/Variedad";
import Precios from "./pages/Precios";
import Envios from "./pages/Envios";
import Calidad from "./pages/Calidad";

function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("la-bodega-carrito")) || [];
    } catch {
      return [];
    }
  });
  const [notice, setNotice] = useState("");

  useEffect(() => {
    localStorage.setItem("la-bodega-carrito", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!notice) return undefined;

    const timeoutId = window.setTimeout(() => setNotice(""), 2800);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  const addToCart = (product) => {
    setNotice(`${product.name} se agrego al carrito`);
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((currentCart) =>
      currentCart
        .map((item) => item.id === productId ? { ...item, quantity } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos onAddToCart={addToCart} />} />
            <Route path="/productos/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route
              path="/carrito"
              element={
                <Cart
                  cart={cart}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              }
            />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/variedad" element={<Variedad />} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/envios" element={<Envios />} />
            <Route path="/calidad" element={<Calidad />} />
          </Routes>
        </main>

        {/* BOTÓN WHATSAPP */}
        <a
          href="https://wa.me/573226075952"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          💬
        </a>

        <Footer />

        {notice && (
          <div className="cart-toast" role="status" aria-live="polite">
            <span aria-hidden="true">✓</span>
            {notice}
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;