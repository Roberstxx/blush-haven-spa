import { useState } from 'react';
import Reveal from '../components/Reveal';
import content from '../data/content.json';
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';
import portfolio4 from '../assets/portfolio-4.jpg';

const imageMap = {
  '/src/assets/portfolio-1.jpg': portfolio1,
  '/src/assets/portfolio-2.jpg': portfolio2,
  '/src/assets/portfolio-3.jpg': portfolio3,
  '/src/assets/portfolio-4.jpg': portfolio4,
};

const Portfolio = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const { portfolio } = content;

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <section className="section" id="portafolio" style={{background: 'hsl(var(--brand-lighter) / 0.3)'}}>
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title font-display">
              Portafolio
            </h2>
            <p className="section-subtitle">
              Algunos de nuestros trabajos más destacados
            </p>
          </div>
        </Reveal>

        <div className="portfolio-grid">
          {portfolio.map((item, index) => {
            const imageSrc = imageMap[item.img];
            return (
              <Reveal key={index} delay={200 + index * 100}>
                <div 
                  className="portfolio-item"
                  onClick={() => openLightbox({ ...item, src: imageSrc })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox({ ...item, src: imageSrc })}
                >
                  <img src={imageSrc} alt={item.alt} loading="lazy" />
                  <div className="portfolio-overlay">
                    <span className="portfolio-zoom">Ver más</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div 
            className="lightbox"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Vista ampliada de imagen"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Cerrar"
              >
                ×
              </button>
              <img src={lightboxImage.src} alt={lightboxImage.alt} />
            </div>
          </div>
        )}
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

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .portfolio-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
          transition: transform var(--transition-smooth);
        }

        .portfolio-item:hover {
          transform: scale(1.02);
        }

        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: hsl(var(--ink) / 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-zoom {
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          background: hsl(var(--ink) / 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: var(--radius);
        }

        .lightbox-close {
          position: absolute;
          top: -3rem;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background var(--transition-base);
        }

        .lightbox-close:hover {
          background: hsl(var(--white) / 0.2);
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .lightbox {
            padding: 1rem;
          }
          
          .lightbox-close {
            top: -2.5rem;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;