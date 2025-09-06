import Reveal from '../components/Reveal';
import Badge from '../components/Badge';
import content from '../data/content.json';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  const { hero } = content;
  const phone = content.phone.replace(/\s+/g, '');
  const message = encodeURIComponent(content.whatsappMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="hero hero-bg" id="inicio">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <Reveal>
              <div className="hero-badges">
                {hero.badges.map((badge, index) => (
                  <Badge key={index}>{badge}</Badge>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="hero-title font-display">
                {hero.headline}
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p className="hero-subtitle">
                {hero.subheadline}
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="hero-actions">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  {hero.ctaPrimary}
                </a>
                <a 
                  href="#servicios" 
                  className="btn btn-secondary btn-lg"
                >
                  {hero.ctaSecondary}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            hsl(var(--bg) / 0.9) 0%,
            hsl(var(--brand-lighter) / 0.8) 50%,
            hsl(var(--brand-light) / 0.7) 100%
          );
          display: flex;
          align-items: center;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
          position: relative;
          z-index: 2;
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: hsl(var(--fg));
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px hsl(var(--ink) / 0.1);
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 4vw, 1.5rem);
          color: hsl(var(--fg) / 0.8);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .hero {
            background-attachment: scroll;
          }
          
          .hero-badges {
            gap: 0.5rem;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-lg {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;