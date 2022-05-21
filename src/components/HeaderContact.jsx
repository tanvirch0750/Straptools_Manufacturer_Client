import React from "react";
import {
  IoCallSharp,
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMailSharp,
} from "react-icons/io5";
import "../styles/HeaderContact.css";

const HeaderContact = () => {
  return (
    <div className="header-contact-info">
      <div className="contact-info-address">
        <div>
          <IoCallSharp className="header-icon" />
          <span>+8801302047933</span>
        </div>
        <div>
          <IoMailSharp className="header-icon" />
          <span>straptool@strap.com</span>
        </div>
        <div>
          <IoLocationSharp className="header-icon" />
          <span>20 Va, Washington Dc</span>
        </div>
      </div>
      <div className="contact-info-social">
        <IoLogoFacebook className="header-icon" />
        <IoLogoTwitter className="header-icon" />
        <IoLogoYoutube className="header-icon" />
      </div>
    </div>
  );
};

export default HeaderContact;
