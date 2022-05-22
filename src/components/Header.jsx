import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import HeaderContact from "./HeaderContact";

const Header = () => {
  return (
    <header>
      <HeaderContact />
      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-logo">
            <h2>
              <Link to="/">STRAPTOOLS</Link>
            </h2>
          </div>
          <div className="nav-navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-button">
            <Link to="/login" className="btn btn-full">
              Login
            </Link>
            <Link to="/signup" className="btn btn-outline">
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
