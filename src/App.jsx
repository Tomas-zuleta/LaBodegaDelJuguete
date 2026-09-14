import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

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
      <Navbar />

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
    </BrowserRouter>
  );
}

<a
  href="https://wa.me/573226075952"
  target="_blank"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    textDecoration: "none",
    fontSize: "20px"
  }}
>
  💬
</a>

export default App;