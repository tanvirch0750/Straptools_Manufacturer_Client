import React from "react";
import icon2 from "../assets/images/icons/summary-icon-2.png";
import icon3 from "../assets/images/icons/summary-icon-3.png";
import icon4 from "../assets/images/icons/summary-icon-4.png";
import icon1 from "../assets/images/icons/summay-icon-1.png";
import "../styles/BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <section className="summary-section">
      <div className="container">
        <div className="summary-inner">
          <div className="summary-content">
            <h2>Our Business Summary</h2>
            <h3>Straptools is a Spanish Manufacturer of Strapping tools.</h3>
            <p>
              Our product portfolio include a complete range of battery
              operated, pneumatic and manual strapping tools, suitable for
              almost any plastic, steel and textile strap, used for multiple
              applications and in several different sectors. We aim to be the
              installer’s supplier of choice, delivering our 100% Made in the
              Spain products with first-rate speed, precision, and control.
            </p>
            <button className="btn btn-full">Know more about us</button>
          </div>
        </div>
        <div className="summary-numbers">
          <div className="summary-number">
            <img src={icon1} alt="icon" />
            <p>20 Years of Experience</p>
          </div>
          <div className="summary-number">
            <img src={icon2} alt="icon" />
            <p>Distributors all around the world</p>
          </div>
          <div className="summary-number">
            <img src={icon3} alt="icon" />
            <p>Technical Support</p>
          </div>
          <div className="summary-number">
            <img src={icon4} alt="icon" />
            <p>Made in Spanish</p>
          </div>
        </div>
      </div>
    </section>
    // <section className="business-summary">
    //   <div className="business-summary-inner container">
    //     <div className="summary-content">
    //       <h2>Our Business Summary</h2>
    //       <p>
    //         SSP is the largest single-site, vertically integrated supplier of
    //         fitting, valve, and tubing systems in the industry. We aim to be the
    //         installer’s supplier of choice, delivering our 100% Made in the USA
    //         products with first-rate speed, precision, and control.
    //       </p>
    //       <button className="btn btn-full">Know more about us</button>
    //     </div>

    //     <div className="summary-numbers">
    //       <div>
    //         <div className="summary-number">
    //           <img src={icon1} alt="icon" />
    //           <p>20 Years of Experience</p>
    //         </div>
    //         <div className="summary-number">
    //           <img src={icon2} alt="icon" />
    //           <p>Distributors all around the world</p>
    //         </div>
    //         <div className="summary-number">
    //           <img src={icon3} alt="icon" />
    //           <p>Technical Support</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default BusinessSummary;
