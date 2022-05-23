import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../Firebase.init";
import "../styles/Header.css";
import HeaderContact from "./HeaderContact";
import NavProfile from "./NavProfile";

const Header = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  console.log(location);

  return (
    <header>
      {!location.pathname === "/dashboard" && <HeaderContact />}

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

            {user && <NavProfile />}
            {/* {user ? (
              <Link
                to="/login"
                className="btn btn-full"
                onClick={handleSignOut}
              >
                Signout
              </Link>
            ) : (
              <Link to="/signup" className="btn btn-outline">
                Signup
              </Link>
            )} */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
