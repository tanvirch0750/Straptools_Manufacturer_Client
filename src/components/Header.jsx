import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import auth from "../Firebase.init";
import "../styles/Header.css";
import NavProfile from "./NavProfile";

const Header = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className={`nav ${open ? "open" : ""}`}>
        <div className="container nav-inner">
          <div className="nav-logo">
            <h2>
              <Link to="/">STRAPTOOLS</Link>
            </h2>
          </div>

          <ul className="nav-navigation">
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
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/portfolio">My Portfolio</Link>
            </li>
          </ul>

          <div className="nav-button">
            {!user && (
              <>
                <Link to="/login" className="btn btn-full">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-outline">
                  Signup
                </Link>
              </>
            )}
          </div>
          <div className="header-profile-box">
            {user && <NavProfile />}
            <button className="hamburger-btn" onClick={() => setOpen(!open)}>
              {open ? <IoCloseOutline /> : <IoMenuOutline />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
