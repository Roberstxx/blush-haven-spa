import { useState, useEffect } from 'react';
import content from '../data/content.json';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#portafolio', label: 'Portafolio' },
    { href: '#opiniones', label: 'Opiniones' },
    { href: '#sobre', label: 'Sobre nosotros' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#contacto', label: 'Contacto' }
  ];

  const phone = content.phone.replace(/\s+/g, '');
  const message = encodeURIComponent(content.whatsappMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <h2 className="font-display font-bold text-2xl" style={{color: 'hsl(var(--brand))'}}>
              {content.brand}
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              WhatsApp
            </a>
            
            <button 
              className="nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-mobile ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="nav-mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: hsl(var(--bg) / 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid hsl(var(--line));
          transition: all var(--transition-base);
        }

        .nav-scrolled {
          background: hsl(var(--bg) / 0.98);
          box-shadow: var(--shadow-sm);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: hsl(var(--fg));
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          transition: color var(--transition-base);
          position: relative;
        }

        .nav-link:hover {
          color: hsl(var(--brand));
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: hsl(var(--brand));
          transition: width var(--transition-base);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .nav-toggle span {
          width: 20px;
          height: 2px;
          background: hsl(var(--fg));
          transition: all var(--transition-base);
        }

        .nav-mobile {
          display: none;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 0;
          border-top: 1px solid hsl(var(--line));
          background: hsl(var(--bg));
        }

        .nav-mobile-open {
          display: flex;
        }

        .nav-mobile-link {
          color: hsl(var(--fg));
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color var(--transition-base);
        }

        .nav-mobile-link:hover {
          color: hsl(var(--brand));
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .nav-toggle {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;