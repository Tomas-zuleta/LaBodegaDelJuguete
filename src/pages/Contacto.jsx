export default function Contacto() {
  return (
    <section className="contact-page" data-aos="fade-up">
      <div className="contact-layout">
        <div className="contact-map-card">
          <span className="section-label">Nuestra ubicación</span>
          <h2>Visítanos</h2>

          <div className="map-frame">
            <iframe
              title="Ubicación de La Bodega del Juguete"
              src="https://www.google.com/maps?q=La+Bodega+del+Juguete&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <div className="schedule-box">
            <h3>Horarios de atención</h3>
            <ul>
              <li><span>Lunes a viernes</span><strong>8:30 AM - 6:30 PM</strong></li>
              <li><span>Sábado</span><strong>8:30 AM - 6:30 PM</strong></li>
              <li><span>Domingo</span><strong>Cerrado</strong></li>
            </ul>
          </div>
        </div>

        <div className="contact-info-card">
          <span className="section-label">Contacto</span>
          <h2>La Bodega del Juguete</h2>
          <p className="contact-description">
            Encuentra juguetes, piñatería, anime, coleccionables y más en un solo lugar.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <h3>Dirección</h3>
                <p>Medellín - La Candelaria, Colombia</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">📞</span>
              <div>
                <h3>WhatsApp</h3>
                <p>+57 322 607 5952</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">⏰</span>
              <div>
                <h3>Atención</h3>
                <p>Respuesta rápida durante horario laboral</p>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <a
              href="https://wa.me/573226075952"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Chatear por WhatsApp
            </a>
            <a href="tel:+573226075952" className="btn btn-secondary">
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}