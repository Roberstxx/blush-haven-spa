const Badge = ({ children, variant = 'default' }) => {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
      
      <style jsx>{`
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: var(--radius);
          transition: all var(--transition-base);
        }

        .badge-default {
          background: hsl(var(--brand-lighter));
          color: hsl(var(--brand));
          border: 1px solid hsl(var(--brand-light));
        }

        .badge-outline {
          background: transparent;
          color: hsl(var(--brand));
          border: 1px solid hsl(var(--brand));
        }

        .badge:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </span>
  );
};

export default Badge;