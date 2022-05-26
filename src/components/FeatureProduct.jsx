import React from "react";
import { useNavigate } from "react-router-dom";
import featurImgPlastic from "../assets/images/feature/plastic-feature.png";
import featurImgSteel from "../assets/images/feature/steel-feature.png";
import featurImgTextile from "../assets/images/feature/textile.png";
import "../styles/FeatureProduct.css";

const FeatureProduct = () => {
  const navigate = useNavigate();
  return (
    <section className="feature-products">
      <div className="feature-products-inner container">
        <div className="section-heading">
          <h2>Our Product Range</h2>
        </div>

        <div className="feature-products-container">
          <div className="feature-product">
            <h3>STRAPPING TOOL FOR PLASTIC STRAP</h3>
            <img src={featurImgPlastic} alt="plastic starp" />
            <button
              className="btn btn-full"
              onClick={() => navigate("/products")}
            >
              View All
            </button>
          </div>
          <div className="feature-product">
            <h3>STRAPPING TOOL FOR STEEL STRAP</h3>
            <img src={featurImgSteel} alt="steel starp" />
            <button
              className="btn btn-full"
              onClick={() => navigate("/products")}
            >
              View All
            </button>
          </div>
          <div className="feature-product">
            <h3>STRAPPING TOOL FOR TEXTILE STRAP</h3>
            <img src={featurImgTextile} alt="texttile starp" />
            <button
              className="btn btn-full"
              onClick={() => navigate("/products")}
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
