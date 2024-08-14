// src/Components/UI/ReviewCard.js
import React from 'react';
import '../../Assets/CSS/ReviewCard.css';

const ReviewCard = ({ name, review, rating }) => {
    const maxRating = 5; // Maximum number of stars
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(maxRating - rating);

    return (
        <div className="review-card">
            <h3>{name}</h3>
            <p>{review}</p>
            <div className="star-rating">
                {filledStars}{emptyStars}
            </div>
        </div>
    );
};

export default ReviewCard;
