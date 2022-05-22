import React from "react";
import product1 from "../assets/images/products/product-plastic.png";
import "../styles/HomeProducts.css";

const HomeProducts = () => {
  return (
    <section className="section-home-products">
      <div className="section-heading">
        <h2>Our Products</h2>
      </div>
      <div className="container">
        <div className="home-products">
          <div className="product">
            <h3>strap 20 - Plastic</h3>
            <img src={product1} alt="starp-palstic" />
            <p className="product-description">
              Battery strapping tool for 13mm and 16mm PP and PET strap Manual
              Operating Mode
            </p>
            <div className="product-content">
              <p>Minimum order: 20</p>
              <p>Available quantity: 500</p>
              <p>Price: $800</p>
              <p>Category: Plastic</p>
            </div>
            <button className="btn btn-full">Purchase</button>
          </div>
          <div className="product">
            <h3>strap 20 - Plastic</h3>
            <img src={product1} alt="starp-palstic" />
            <p className="product-description">
              Battery strapping tool for 13mm and 16mm PP and PET strap Manual
              Operating Mode
            </p>
            <div className="product-content">
              <p>Minimum order: 20</p>
              <p>Available quantity: 500</p>
              <p>Price: $800</p>
              <p>Category: Plastic</p>
            </div>
            <button className="btn btn-full">Purchase</button>
          </div>
          <div className="product">
            <h3>strap 20 - Plastic</h3>
            <img src={product1} alt="starp-palstic" />
            <p className="product-description">
              Battery strapping tool for 13mm and 16mm PP and PET strap Manual
              Operating Mode
            </p>
            <div className="product-content">
              <p>Minimum order: 20</p>
              <p>Available quantity: 500</p>
              <p>Price: $800</p>
              <p>Category: Plastic</p>
            </div>
            <button className="btn btn-full">Purchase</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
