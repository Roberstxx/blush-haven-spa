import Reveal from '../components/Reveal';
import content from '../data/content.json';

const About = () => {
  const { about } = content;

  return (
    <section className="section" id="sobre" style={{background: 'hsl(var(--brand-lighter) / 0.2)'}}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <Reveal>
              <h2 className="section-title font-display">
                {about.title}
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="about-description">
                {about.text}
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="about-values">
                <h3 className="values-title">¿Por qué elegirnos?</h3>
                <ul className="values-list">
                  {about.values.map((value, index) => (
                    <li key={index} className="value-item">
                      <span className="value-icon">✨</span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">💅</span>
                  <p>Imagen del salón</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 1.5rem;
        }

        .about-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: hsl(var(--fg) / 0.8);
          margin-bottom: 2rem;
        }

        .values-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: hsl(var(--fg));
          margin-bottom: 1rem;
        }

        .values-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: hsl(var(--fg) / 0.8);
          font-weight: 500;
        }

        .value-icon {
          font-size: 1.25rem;
        }

        .about-image {
          display: flex;
          justify-content: center;
        }

        .image-placeholder {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: linear-gradient(135deg, 
            hsl(var(--brand-light)) 0%, 
            hsl(var(--brand)) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-brand);
        }

        .placeholder-content {
          text-align: center;
          color: hsl(var(--brand-contrast));
        }

        .placeholder-icon {
          display: block;
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .placeholder-content p {
          font-weight: 600;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .image-placeholder {
            width: 250px;
            height: 250px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;