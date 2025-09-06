import { useState } from 'react';
import Reveal from '../components/Reveal';
import CardService from '../components/CardService';
import content from '../data/content.json';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const { services } = content;

  const categories = ['Todos', ...new Set(services.map(service => service.tag))];
  
  const filteredServices = activeFilter === 'Todos' 
    ? services 
    : services.filter(service => service.tag === activeFilter);

  return (
    <section className="section" id="servicios">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title font-display">
              Nuestros Servicios
            </h2>
            <p className="section-subtitle">
              Tratamientos profesionales para realzar tu belleza natural
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="services-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'filter-btn-active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <Reveal key={service.id} delay={300 + index * 100}>
              <CardService service={service} />
            </Reveal>
          ))}
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

        .services-filters {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 1px solid hsl(var(--line));
          background: hsl(var(--bg));
          color: hsl(var(--fg));
          border-radius: var(--radius);
          cursor: pointer;
          font-weight: 500;
          transition: all var(--transition-base);
        }

        .filter-btn:hover {
          border-color: hsl(var(--brand));
          color: hsl(var(--brand));
        }

        .filter-btn-active {
          background: hsl(var(--brand));
          color: hsl(var(--brand-contrast));
          border-color: hsl(var(--brand));
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .services-filters {
            gap: 0.5rem;
          }
          
          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;