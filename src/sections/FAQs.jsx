import { useState } from 'react';
import Reveal from '../components/Reveal';
import content from '../data/content.json';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { faqs } = content;

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section className="section" id="faqs">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title font-display">
              Preguntas Frecuentes
            </h2>
            <p className="section-subtitle">
              Resolvemos las dudas más comunes de nuestras clientas
            </p>
          </div>
        </Reveal>

        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={200 + index * 100}>
              <div className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.q}</span>
                  <span className={`faq-icon ${openFAQ === index ? 'faq-icon-open' : ''}`}>
                    +
                  </span>
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`faq-answer ${openFAQ === index ? 'faq-answer-open' : ''}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="faq-answer-content">
                    {faq.a}
                  </div>
                </div>
              </div>
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

        .faqs-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border: 1px solid hsl(var(--line));
          border-radius: var(--radius);
          margin-bottom: 1rem;
          overflow: hidden;
          transition: all var(--transition-base);
        }

        .faq-item:hover {
          box-shadow: var(--shadow-sm);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: hsl(var(--bg));
          border: none;
          text-align: left;
          font-size: 1.125rem;
          font-weight: 600;
          color: hsl(var(--fg));
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all var(--transition-base);
        }

        .faq-question:hover {
          background: hsl(var(--brand-lighter) / 0.5);
        }

        .faq-question:focus-visible {
          outline: 2px solid hsl(var(--brand));
          outline-offset: -2px;
        }

        .faq-icon {
          font-size: 1.5rem;
          font-weight: 300;
          transition: transform var(--transition-base);
          color: hsl(var(--brand));
        }

        .faq-icon-open {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .faq-answer-open {
          max-height: 200px;
        }

        .faq-answer-content {
          padding: 0 1.5rem 1.5rem;
          color: hsl(var(--fg) / 0.8);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .faq-question {
            padding: 1rem;
            font-size: 1rem;
          }
          
          .faq-answer-content {
            padding: 0 1rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQs;