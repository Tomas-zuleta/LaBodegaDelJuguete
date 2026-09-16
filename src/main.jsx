import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

AOS.init({
  duration: 700,
  once: false,
  mirror: true,
  offset: 40,
  easing: 'ease-out-cubic',
  delay: 80,
});
