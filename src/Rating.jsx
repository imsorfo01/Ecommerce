import React from "react";

export default function Rating({ rating }) {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i}>&#9733;</span>);
      } else if (hasHalfStar && i === fullStars) {
        stars.push(<span key={i}>&#9734;&#9733;</span>);
      } else {
        stars.push(<span key={i}>&#9734;</span>);
      }
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
}
