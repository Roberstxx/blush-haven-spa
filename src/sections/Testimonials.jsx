import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import RatingStars from '../components/RatingStars';
import content from '../data/content.json';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { testimonials } = content;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="section" id="opiniones">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title font-display">
              Lo que dicen nuestras clientas
            </h2>
            <p className="section-subtitle">
              Testimonios reales de quienes confían en nosotras
            </p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="testimonials-slider">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <RatingStars rating={testimonial.rating} size="lg" />
                    <blockquote className="testimonial-text">
                      "{testimonial.text}"
                    </blockquote>
                    <cite className="testimonial-author">
                      — {testimonial.name}
                    </cite>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'dot-active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir al testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
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

        .testimonials-slider {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }

        .testimonials-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .testimonial-card {
          flex: 0 0 100%;
          padding: 3rem 2rem;
          background: hsl(var(--card));
          box-shadow: var(--shadow-lg);
        }

        .testimonial-content {
          text-align: center;
        }

        .testimonial-text {
          font-size: 1.25rem;
          line-height: 1.6;
          color: hsl(var(--fg));
          margin: 1.5rem 0;
          font-style: italic;
        }

        .testimonial-author {
          font-weight: 600;
          color: hsl(var(--brand));
          font-style: normal;
        }

        .testimonials-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: hsl(var(--line));
          cursor: pointer;
          transition: background var(--transition-base);
        }

        .dot-active {
          background: hsl(var(--brand));
        }

        .dot:hover {
          background: hsl(var(--brand-light));
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2rem 1.5rem;
          }
          
          .testimonial-text {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;