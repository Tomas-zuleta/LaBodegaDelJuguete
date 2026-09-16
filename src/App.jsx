import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Variedad from "./pages/Variedad";
import Precios from "./pages/Precios";
import Envios from "./pages/Envios";
import Calidad from "./pages/Calidad";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
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
      </div>
    </BrowserRouter>
  );
}

export default App;