const RatingStars = ({ rating = 5, size = 'md' }) => {
  const sizes = {
    sm: '16px',
    md: '20px',
    lg: '24px'
  };

  return (
    <div className="rating-stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          width={sizes[size]}
          height={sizes[size]}
          viewBox="0 0 24 24"
          fill={index < rating ? 'hsl(var(--brand))' : 'hsl(var(--line))'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}

      <style jsx>{`
        .rating-stars {
          display: flex;
          gap: 2px;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default RatingStars;