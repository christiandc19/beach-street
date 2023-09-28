import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from "../../assets/nav-logo-colored.png";
// import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import "./FooterStyles.css";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <img src={logo} width="180px" height="80px" alt="Beach Street Rehab Logo" loading="lazy"/>
            </div>


            <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>

          </div>



          <div className="col-container">
            <div className="col">
              <h3>COMPANY</h3>

{/* MISSION */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mission">
                    <p>Our Mission</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/mission">
                    <p>Our Mission</p>
                  </Link>
                </LinkRoll>
              </div>


{/* ABOUT US */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                </LinkRoll>
              </div>


{/* PROGRAMS */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health">
                    <p>Programs</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health">
                    <p>Programs</p>
                  </Link>
                </LinkRoll>
              </div>

          </div>



{/* NAVIGATION */}

            <div className="col">
              <h3>Navigation</h3>

{/* HOME */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>


{/* INSURANCE */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/insurance">
                    <p>Insurance</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/insurance">
                    <p>Insurance</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>



            <div className="col">
              <h3>MENTAL HEALTH</h3>

{/* PHP */}
              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health-php">
                    <p>Partial Hospitalization Program</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health-php">
                    <p>Partial Hospitalization Program</p>
                  </Link>
                </LinkRoll>
              </div>  


{/* IOP */}

<div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health-iop">
                    <p>Intensive Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health-iop">
                    <p>Intensive Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div> 

{/* OP */}

<div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health-op">
                    <p>Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health-op">
                    <p>Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div>


            </div>





          </div>
          <p className="copyright">
            <p>
              &copy; 2023 Beach Street Rehab Treatment Center. All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
