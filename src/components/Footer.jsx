import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-address">
            <div className="footer-logo">
              <h2>
                <Link to="/">STRAPTOOLS</Link>
              </h2>
              <div className="address">
                <IoLocationSharp className="footer-icon" />
                <div>
                  <h3>Address</h3>
                  <p>Del Piero 20, Real Madrid, Spain</p>
                </div>
              </div>
              <div className="address">
                <IoLocationSharp className="footer-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+01302047933</p>
                </div>
              </div>
              <div className="address">
                <IoLocationSharp className="footer-icon" />
                <div>
                  <h3>Email</h3>
                  <p>strapping@strap.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-product">
            <h3>Our Products</h3>
            <ul>
              <li>
                <Link to="/">Plastic strapping tools</Link>
              </li>
              <li>
                <Link to="/">Steel strapping tools</Link>
              </li>
              <li>
                <Link to="/">Textile strapping tools</Link>
              </li>
            </ul>
          </div>
          <div className="footer-link">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-end">
          <p>&copy; 2022 by Straptools, all right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
