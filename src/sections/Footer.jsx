import content from '../data/content.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { social } = content;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="font-display font-bold text-2xl" style={{color: 'hsl(var(--brand))'}}>
              {content.brand}
            </h3>
            <p className="footer-tagline">
              Más que belleza, tu momento de paz
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#servicios">Manicure</a></li>
                <li><a href="#servicios">Uñas en Gel</a></li>
                <li><a href="#servicios">Maquillaje</a></li>
                <li><a href="#servicios">Peinados</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Información</h4>
              <ul>
                <li><a href="#sobre">Sobre nosotros</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Síguenos</h4>
              <div className="social-links">
                <a 
                  href={social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href={social.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} {content.brand}. Todos los derechos reservados.</p>
          </div>
          <div className="footer-legal">
            <a href="#" aria-label="Aviso de privacidad">Aviso de Privacidad</a>
            <a href="#" aria-label="Términos y condiciones">Términos y Condiciones</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: hsl(var(--ink));
          color: hsl(var(--white));
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-tagline {
          color: hsl(var(--white) / 0.7);
          margin-top: 0.5rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .footer-section h4 {
          font-weight: 600;
          margin-bottom: 1rem;
          color: hsl(var(--brand-light));
        }

        .footer-section ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-section a {
          color: hsl(var(--white) / 0.8);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color var(--transition-base);
        }

        .footer-section a:hover {
          color: hsl(var(--brand-light));
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: hsl(var(--white) / 0.1);
          border-radius: 50%;
          transition: all var(--transition-base);
        }

        .social-links a:hover {
          background: hsl(var(--brand));
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid hsl(var(--white) / 0.1);
        }

        .footer-copyright p {
          color: hsl(var(--white) / 0.6);
          font-size: 0.875rem;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          color: hsl(var(--white) / 0.6);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color var(--transition-base);
        }

        .footer-legal a:hover {
          color: hsl(var(--brand-light));
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-links {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          
          .footer-legal {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;