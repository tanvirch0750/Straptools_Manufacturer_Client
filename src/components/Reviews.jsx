import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "../styles/Reviews.css";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-heading">
          <h2>What our client says</h2>
        </div>
        <div className="reviews">
          <blockquote className="review">
            <div className="review-content">
              <h3>
                <FaQuoteLeft />
              </h3>
              <p>
                Straptools continues to provide outstanding products and
                excellent technical support for their product from small to
                large scope.{" "}
              </p>
            </div>
            <div className="review-footer">
              <div className="footer-inner">
                <div className="review-avatar">
                  <img src="https://i.ibb.co/LCPSMFN/user-3.jpg" alt="avatar" />
                </div>
                <div>
                  <p>CEO</p>
                  <p>Jersey Freak, Bangladesh</p>
                </div>
              </div>
            </div>
          </blockquote>
          <blockquote className="review">
            <div className="review-content">
              <h3>
                <FaQuoteLeft />
              </h3>
              <p>
                Straptools continues to provide outstanding products and
                excellent technical support for their product from small to
                large scope.{" "}
              </p>
            </div>
            <div className="review-footer">
              <div className="footer-inner">
                <div className="review-avatar">
                  <img src="https://i.ibb.co/LCPSMFN/user-3.jpg" alt="avatar" />
                </div>
                <div>
                  <p>CEO</p>
                  <p>Jersey Freak, Bangladesh</p>
                </div>
              </div>
            </div>
          </blockquote>
          <blockquote className="review">
            <div className="review-content">
              <h3>
                <FaQuoteLeft />
              </h3>
              <p>
                Straptools continues to provide outstanding products and
                excellent technical support for their product from small to
                large scope.{" "}
              </p>
            </div>
            <div className="review-footer">
              <div className="footer-inner">
                <div className="review-avatar">
                  <img src="https://i.ibb.co/LCPSMFN/user-3.jpg" alt="avatar" />
                </div>
                <div>
                  <p>CEO</p>
                  <p>Jersey Freak, Bangladesh</p>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

// Most importantly SCG strives to understand overall project objectives and offer practical and effective solutions. Their commitment to delivering exceptional service is evident in every task they take on.
