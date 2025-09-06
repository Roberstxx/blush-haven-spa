import Reveal from '../components/Reveal';
import content from '../data/content.json';

const Contact = () => {
  const { contact } = content;
  const phone = content.phone.replace(/\s+/g, '');
  const message = encodeURIComponent(content.whatsappMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="section" id="contacto" style={{background: 'hsl(var(--brand-lighter) / 0.3)'}}>
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title font-display">
              Contáctanos
            </h2>
            <p className="section-subtitle">
              Estamos aquí para hacer realidad tu cita perfecta
            </p>
          </div>
        </Reveal>

        <div className="contact-content">
          <div className="contact-info">
            <Reveal delay={200}>
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Ubicación</h3>
                  <p>{contact.address}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="contact-card">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Horarios</h3>
                  <p>{contact.hours}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Teléfono</h3>
                  <p>{content.phone}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>{contact.email}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="contact-cta">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Reservar por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="contact-map">
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 'var(--radius)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Petal Bloom Beauty"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: hsl(var(--fg) / 0.7);
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: hsl(var(--card));
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-base);
        }

        .contact-card:hover {
          transform: translateY(-2px);
        }

        .contact-icon {
          font-size: 2rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--brand-lighter));
          border-radius: 50%;
          flex-shrink: 0;
        }

        .contact-card h3 {
          font-weight: 600;
          color: hsl(var(--fg));
          margin-bottom: 0.25rem;
        }

        .contact-card p {
          color: hsl(var(--fg) / 0.7);
          font-size: 0.875rem;
        }

        .contact-cta {
          margin-top: 1rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1rem;
          width: 100%;
          justify-content: center;
        }

        .contact-map {
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .contact-card {
            padding: 1rem;
          }
          
          .contact-icon {
            font-size: 1.5rem;
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;