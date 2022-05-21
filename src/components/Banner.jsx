import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-inner container">
        <div className="banner-content">
          <h1>We Brand Quality. Quality leads with the industry.</h1>
          <p>Strapping tools for plastic, steel and textile starps.</p>
          <div className="banner-btn">
            <button className="btn btn-full">All Products</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
