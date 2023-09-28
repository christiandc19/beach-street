import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/nav-logo-colored.png";
import { MdLocationPin } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-content container">
        <div className="topbar-logo" name="top">
          <Link to="/">
            <img src={logo} alt="Palm Springs Rehab Logo" loading="lazy" />
          </Link>
        </div>

        <div className="address bar-box1 ">
          <span>
            <MdLocationPin />
          </span>
          <div className="address-header">
            <span><b><p>Location:</p></b></span>
            <p>17682 Beach Blvd, Huntington Beach, CA 92647</p>
          </div>
        </div>

        <div className="email bar-box2">
          <span>
            <FiMail />
          </span>
          <div>
            <span><b><p>Email Address:</p></b></span>
            <p>Info@BeachStreetRehab.com</p>
          </div>
        </div>

        <div className="number bar-box3">
          <span>
            <AiOutlinePhone />
          </span>
          <div>
            <span><b><p>Phone Number:</p></b></span>
            <p>+1 (323) 902-5644</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
