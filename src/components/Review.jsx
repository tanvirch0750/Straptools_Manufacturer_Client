import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "../styles/Review.css";

const Review = ({ review }) => {
  return (
    <blockquote className="review">
      <div className="review-content">
        <div className="rating">
          <h3>
            <FaQuoteLeft />
          </h3>
          <p>Rating: {review.number}/5</p>
        </div>
        <p>{review.review}</p>
      </div>
      <div className="review-footer">
        <div className="footer-inner">
          <div className="review-avatar">
            <img src={review.image} alt="avatar" />
          </div>
          <div>
            <p>
              {review.name} - {review.position}
            </p>
            <p>{review.company}</p>
          </div>
        </div>
      </div>
    </blockquote>
  );
};

export default Review;
