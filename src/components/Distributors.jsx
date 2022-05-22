import React from "react";
import AsiaSvg from "../assets/images/icons/asia.svg";
import EuropeSvg from "../assets/images/icons/europe.svg";
import NorthSvg from "../assets/images/icons/north-america.svg";
import SouthSvg from "../assets/images/icons/south-america.svg";
import "../styles/Distributor.css";

const Distributors = () => {
  return (
    <section className="distributors">
      <div className="container">
        <div className="distributor-header">
          <h2>Our Distrubutors</h2>
          <p>
            Our distributors are carefully selected for their efficient
            delivery, technical knowledge, and comprehensive support services.
          </p>
        </div>
        <div className="distributor-inner">
          <div className="distributor-details">
            <div className="distrubutor">
              <div className="distributor-image">
                <div>
                  <img src={AsiaSvg} alt="" />
                </div>
                <h4 className="continent">Asia Pacific</h4>
              </div>
              <div className="continent-country">
                <p>India</p>
                <p>China</p>
                <p>Bangladesh</p>
                <p>Malaysia</p>
              </div>
            </div>
            <div className="distrubutor">
              <div className="distributor-image">
                <div>
                  <img src={EuropeSvg} alt="" />
                </div>
                <h4 className="continent">Europe</h4>
              </div>
              <div className="continent-country">
                <p>Spain</p>
                <p>Italy</p>
                <p>England</p>
                <p>Portugal</p>
              </div>
            </div>
            <div className="distrubutor">
              <div className="distributor-image">
                <div>
                  <img src={NorthSvg} alt="" />
                </div>
                <h4 className="continent">North America</h4>
              </div>
              <div className="continent-country">
                <p>United States</p>
                <p>Canada</p>
                <p>Mexico</p>
                <p>Panama</p>
              </div>
            </div>
            <div className="distrubutor">
              <div className="distributor-image">
                <div>
                  <img src={SouthSvg} alt="" />
                </div>
                <h4 className="continent">South America</h4>
              </div>
              <div className="continent-country">
                <p>Brazil</p>
                <p>Argentina</p>
                <p>Columbia</p>
                <p>Ecuador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributors;
