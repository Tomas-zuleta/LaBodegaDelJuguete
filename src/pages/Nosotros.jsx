import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const demoVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const team = [
  {
    name: "Ana Gómez",
    role: "Gerente general",
    description: "Encargada de liderar la experiencia de compra y la atención al cliente.",
    color: "#dbeafe",
    video: demoVideo,
  },
  {
    name: "Daniel Ríos",
    role: "Especialista en inventario",
    description: "Cuida la variedad de productos y asegura que siempre haya novedades.",
    color: "#dcfce7",
    video: demoVideo,
  },
  {
    name: "Laura Pérez",
    role: "Atención comercial",
    description: "Relaciona con clientes, pedidos y servicio personalizado por WhatsApp.",
    color: "#fef3c7",
    video: demoVideo,
  },
];

export default function Nosotros() {
  const teamRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return undefined;

    const context = gsap.context(() => {
      gsap.utils.toArray(".team-card").forEach((card) => {
        const path = card.querySelector(".team-svg-path");
        const content = card.querySelectorAll(".team-reveal");

        gsap.set(path, { strokeDasharray: 460, strokeDashoffset: 460 });
        gsap.set(content, { y: 18, autoAlpha: 0 });

        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        })
          .to(path, { strokeDashoffset: 0, duration: 0.85, ease: "power2.out" })
          .to(content, { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.1, ease: "power3.out" }, "-=0.35");
      });
    }, teamRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={teamRef} className="about-page" data-aos="fade-up">
      <div className="about-hero">
        <div className="about-copy">
          <span className="section-label">Nuestra historia</span>
          <h1>Quiénes somos</h1>
          <p>
            En <strong>La Bodega del Juguete</strong> nacimos con la misión de ofrecer
            productos de calidad para familias, coleccionistas y amantes de la
            piñatería y la juguetería en Medellín.
          </p>
          <p>
            Somos una tienda con más de <strong>5 años</strong> de experiencia, fundada
            para brindar variedad, buen servicio y precios justos para clientes mayoristas
            y detallistas.
          </p>
        </div>

        <div className="about-highlight">
          <div className="highlight-box">
            <span>Desde</span>
            <strong>2019</strong>
            <small>Fundada en Medellín</small>
          </div>
        </div>
      </div>

      <div className="about-values">
        <div className="value-card">
          <h3>🎯 Misión</h3>
          <p>
            Brindar productos originales, de buena calidad y atención cercana para cada cliente.
          </p>
        </div>

        <div className="value-card">
          <h3>👁️ Visión</h3>
          <p>
            Ser la referencia favorita en Medellín para compra de juguetes, anime y piñatería.
          </p>
        </div>

        <div className="value-card">
          <h3>💚 Valores</h3>
          <p>
            Honestidad, variedad, servicio rápido y confianza en cada compra.
          </p>
        </div>
      </div>

      <div className="team-section">
        <span className="section-label">Nuestro equipo</span>
        <h2>Las personas que trabajan aquí</h2>

        <div className="team-grid">
          {team.map((person) => (
            <article key={person.name} className="team-card">
              <svg className="team-svg" viewBox="0 0 220 120" aria-hidden="true">
                <path className="team-svg-path" d="M8 94 C 48 8, 112 8, 212 94" />
              </svg>
              <div className="avatar" style={{ background: person.color }}>
                {person.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="team-reveal team-copy">
                <h3>{person.name}</h3>
                <p className="role">{person.role}</p>
                <p>{person.description}</p>
              </div>
              <div className="team-reveal team-video-wrap">
                <video
                  className="team-video"
                  src={person.video}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Video de presentación de ${person.name}`}
                />
                <span>Video de presentación</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}