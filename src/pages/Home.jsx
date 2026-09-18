import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories } from "../data/categories";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const homeRef = useRef(null);

  useLayoutEffect(() => {
    const home = homeRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!home || reduceMotion) return undefined;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".hero-content > *", { y: 28, autoAlpha: 0, duration: 0.7, stagger: 0.1 })
        .from(".hero-logo", { scale: 0.35, x: 90, y: 30, autoAlpha: 0, rotate: 18, duration: 1.1 }, "-=0.45");

      gsap.to(".hero-logo", {
        yPercent: 5,
        rotate: -2,
        scale: 1.02,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-banner",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".overlay", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: ".hero-banner", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.from(".categories-modern h2", {
        y: 36,
        autoAlpha: 0,
        duration: 0.8,
        scrollTrigger: { trigger: ".categories-modern", start: "top 82%", toggleActions: "play none none reverse" },
      });

      gsap.from(".cat-item", {
        y: 34,
        rotate: (index) => index % 2 ? 5 : -5,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "back.out(1.4)",
        immediateRender: false,
        scrollTrigger: { trigger: ".categories-scroll", start: "top 86%", toggleActions: "play none none reverse" },
      });

      gsap.from(".info-image", {
        x: -100,
        rotate: -8,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".info-section", start: "top 76%", toggleActions: "play none none reverse" },
      });

      gsap.from(".info-text h2, .info-item", {
        x: 70,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".info-text", start: "top 78%", toggleActions: "play none none reverse" },
      });

      gsap.from(".stat-card", {
        y: 55,
        scale: 0.88,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stats-grid", start: "top 82%", toggleActions: "play none none reverse" },
      });

      gsap.from(".cta > *", {
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.14,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".cta", start: "top 84%", toggleActions: "play none none reverse" },
      });
    }, home);

    return () => context.revert();
  }, []);

  return (
    <div ref={homeRef}>
      {/* ================= HERO ================= */}
      <section className="hero-banner" data-aos="fade-down">
        <div className="hero-noise" aria-hidden="true" />
        <span className="hero-spark hero-spark-one" aria-hidden="true" />
        <span className="hero-spark hero-spark-two" aria-hidden="true" />
        <span className="hero-spark hero-spark-three" aria-hidden="true" />
        <img
          className="hero-logo"
          src="/logo.png"
          alt="La Bodega del Juguete"
        />
        <div className="overlay">
          <div className="hero-content">
            <span className="eyebrow">La Bodega Del Jueguete </span>
            <h1>Juega. Colecciona. Repite.</h1>

            <p>
              Jugueteria y Anime que convierten<br />
              cualquier día en una aventura.
            </p>

            <div className="hero-buttons">
              <Link to="/productos" className="btn">
                Ver catálogo
              </Link>

              <a
                href="https://wa.me/573226075952"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORÍAS ================= */}
      <section className="categories-modern home-reveal" data-aos="fade-up">
        <h2>Categorías populares</h2>

        <div className="categories-scroll">
          {categories.map((category) => (
            <Link
              to={`/productos?categoria=${category.slug}`}
              className="cat-item"
              key={category.slug}
            >
              <div className="circle" aria-hidden="true">{category.icon}</div>
              <div className="cat-copy">
                <p>{category.name}</p>
                <span>Explorar categoría <b aria-hidden="true">↗</b></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="info-section home-reveal" data-aos="fade-up">
        <div className="info-container">
          <div className="info-image">
            <img src="/logo.png" alt="La Bodega del Juguete" />
          </div>

          <div className="info-text">
            <h2>Todo lo que necesitas en un solo lugar</h2>

            <div className="info-item">
              <h3>🧸 Gran variedad</h3>
              <p>Juguetes, piñatería, anime y coleccionables para todas las edades.</p>
            </div>

            <div className="info-item">
              <h3>💰 Precios al mayor</h3>
              <p>Descuentos especiales para compras por volumen.</p>
            </div>

            <div className="info-item">
              <h3>🚚 Envíos rápidos</h3>
              <p>Entregas seguras y rápidas en tu ciudad.</p>
            </div>

            <div className="info-item">
              <h3>⭐ Calidad garantizada</h3>
              <p>Productos seleccionados con excelente calidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section home-reveal" data-aos="zoom-in-up">
        <h2>¿Por qué elegirnos?</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">500+</h3>
            <p>Productos disponibles</p>
          </div>

          <div className="stat-card">
            <h3 className="stat-number">1000+</h3>
            <p>Clientes felices</p>
          </div>

          <div className="stat-card">
            <h3 className="stat-number">24H</h3>
            <p>Envíos rápidos</p>
          </div>

          <div className="stat-card">
            <h3 className="stat-number">100%</h3>
            <p>Calidad garantizada</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta home-reveal" data-aos="fade-up">
        <h2>¿Listo para comprar?</h2>

        <a
          href="https://wa.me/573226075952"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          Escríbenos ahora
        </a>
      </section>
    </div>
  );
}