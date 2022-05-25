import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "../styles/Reviews.css";
import Loading from "./Loading";
import Review from "./Review";

const Reviews = () => {
  const [newReview, setNewReview] = useState();
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("reviews", () =>
    fetch("https://polar-tundra-61708.herokuapp.com/review").then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    const latestReviews = reviews?.reverse();
    setNewReview(latestReviews);
  }, [reviews]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-heading">
          <h2>What our client says</h2>
        </div>
        <div className="reviews">
          {newReview?.reverse().map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

// Most importantly SCG strives to understand overall project objectives and offer practical and effective solutions. Their commitment to delivering exceptional service is evident in every task they take on.
