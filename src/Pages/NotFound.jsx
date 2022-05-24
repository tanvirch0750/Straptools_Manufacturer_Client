import React from "react";
import errorImg from "../assets/images/banner/404.jpg";
import Header from "../components/Header";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="not-found">
        <div className="not-found-inner">
          <div className="section-heading">
            <h2>Page Not Found</h2>
          </div>
          <div>
            <img src={errorImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
