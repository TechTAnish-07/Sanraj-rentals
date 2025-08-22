import React from 'react';
import './Review.css';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'Mayak Kumar',
      rating: 5,
      comment: 'Excellent service! The BMW M4 was in perfect condition and made my trip unforgettable. Will definitely rent again!',
      date: 'June 15, 2023'
    },
    {
      id: 2,
      name: 'Raj kalu',
      rating: 3,
      comment: 'Very smooth booking process. The car was clean and well-maintained. Only suggestion would be to offer more pickup locations.',
      date: 'May 28, 2023'
    },
    {
      id: 3,
      name: 'Utkarsh Shukla',
      rating: 5,
      comment: 'Best rental experience in Dubai! The team went above and beyond to accommodate my last-minute request. 5 stars!',
      date: 'April 10, 2023'
    },
    {
      id: 4,
      name: 'Utkarsh Shukla',
      rating: 5,
      comment: 'Best rental experience in Dubai! The team went above and beyond to accommodate my last-minute request. 5 stars!',
      date: 'April 10, 2023'
    },
     {
      id: 5,
      name: 'Utkarsh Shukla',
      rating: 5,
      comment: 'Best rental experience in Dubai! The team went above and beyond to accommodate my last-minute request. 5 stars!',
      date: 'April 10, 2023'
    },
     {
      id: 6,
      name: 'Utkarsh Shukla',
      rating: 5,
      comment: 'Best rental experience in Dubai! The team went above and beyond to accommodate my last-minute request. 5 stars!',
      date: 'April 10, 2023'
    },
     {
      id: 7,
      name: 'Utkarsh Shukla',
      rating: 5,
      comment: 'Best rental experience in Dubai! The team went above and beyond to accommodate my last-minute request. 5 stars!',
      date: 'April 10, 2023'
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <h2>Customer <span style={{ color: 'red' }}>Reviews</span></h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'star filled' : 'star'}>
                    {i < review.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
            </div>
            <p className="review-comment">"{review.comment}"</p>
            <p className="review-date">{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;