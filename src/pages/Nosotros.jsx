const team = [
  {
    name: "Ana Gómez",
    role: "Gerente general",
    description: "Encargada de liderar la experiencia de compra y la atención al cliente.",
    color: "#dbeafe",
  },
  {
    name: "Daniel Ríos",
    role: "Especialista en inventario",
    description: "Cuida la variedad de productos y asegura que siempre haya novedades.",
    color: "#dcfce7",
  },
  {
    name: "Laura Pérez",
    role: "Atención comercial",
    description: "Relaciona con clientes, pedidos y servicio personalizado por WhatsApp.",
    color: "#fef3c7",
  },
];

export default function Nosotros() {
  return (
    <section className="about-page" data-aos="fade-up">
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
              <div className="avatar" style={{ background: person.color }}>
                {person.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3>{person.name}</h3>
              <p className="role">{person.role}</p>
              <p>{person.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}