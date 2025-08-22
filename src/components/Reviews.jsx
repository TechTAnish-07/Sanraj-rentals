import React from 'react'

const Reviews = ({ reviews }) => {
  const Lireviews = reviews.slice(0, 3);
  return (
   <div className="reviews-section">
      
      <ul>
        {Lireviews.map((review, i) => (
          <li key={i}>{review}</li>
        ))}
      </ul>
    </div>
  )
}

export default Reviews
