import serviceManicure from '../assets/service-manicure.jpg';
import serviceGelNails from '../assets/service-gel-nails.jpg';
import serviceMakeup from '../assets/service-makeup.jpg';
import serviceHair from '../assets/service-hair.jpg';

const imageMap = {
  '/src/assets/service-manicure.jpg': serviceManicure,
  '/src/assets/service-gel-nails.jpg': serviceGelNails,
  '/src/assets/service-makeup.jpg': serviceMakeup,
  '/src/assets/service-hair.jpg': serviceHair,
};

const CardService = ({ service }) => {
  const { title, price, tag, img, description } = service;
  const imageSrc = imageMap[img] || serviceManicure;

  return (
    <div className="service-card">
      <div className="service-image">
        <img src={imageSrc} alt={title} loading="lazy" />
        <div className="service-tag">
          {tag}
        </div>
      </div>
      
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <div className="service-price">{price}</div>
      </div>

      <style jsx>{`
        .service-card {
          background: hsl(var(--card));
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-smooth);
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .service-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-smooth);
        }

        .service-card:hover .service-image img {
          transform: scale(1.1);
        }

        .service-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: hsl(var(--brand));
          color: hsl(var(--brand-contrast));
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .service-content {
          padding: 1.5rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: hsl(var(--fg));
          margin-bottom: 0.5rem;
        }

        .service-description {
          color: hsl(var(--fg) / 0.7);
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .service-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: hsl(var(--brand));
          font-family: var(--font-display);
        }
      `}</style>
    </div>
  );
};

export default CardService;