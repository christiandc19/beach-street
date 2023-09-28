import React from "react";
import "./Section3.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Card1 from "../../assets/programs-card-1.webp";
import Card2 from "../../assets/programs-card-2.webp";
import Card3 from "../../assets/programs-card-3.webp";
import Card4 from "../../assets/programs-card-4.webp";
import Card5 from "../../assets/programs-card-5.webp";
import Card6 from "../../assets/programs-card-6.webp";



const Section3 = () => {
  return (
    <>
      <div className="section3">
        <div className="section3-content container">

          <div className="menu-programs-header container">
              <h1>
                Beach Street Rehab Treatment Center offers various Mental Health Programs
              
              </h1>
              <p>
                At Beach Street Rehab Treatment Center, clients receive individual
                therapy alongside a range of additional treatments, including relapse
                prevention, trauma therapy, mindfulness meditation, transportation,
                yoga, and more. We offer support that clients need to allow them to
                gradually go back to treatment.
              </p>
            </div>


          <div className="section3-flex">
{/* PHP */}
              <div class="section3-flexItem">
                  <img src={Card1} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>PARTIAL HOSPITALIZATION</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/partial-hospitalization-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/partial-hospitalization-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>

{/* IOP */}

              <div class="section3-flexItem">
                  <img src={Card2} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>INTENSIVE OUTPATIENT</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/intensive-outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/intensive-outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* OP */}

<div class="section3-flexItem">
                  <img src={Card3} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>OUTPATIENT</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* CASE MANAGEMENT */}

<div class="section3-flexItem">
                  <img src={Card4} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>CASE MANAGEMENT</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/case-management">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/case-management">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



{/* CRISIS INTERVENTION */}

<div class="section3-flexItem">
                  <img src={Card5} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>CASE MANAGEMENT</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/crisis-intervention">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/crisis-intervention">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



{/* FAMILY THERAPY */}

<div class="section3-flexItem">
                  <img src={Card6} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>CASE MANAGEMENT</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/family-therapy">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/family-therapy">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



















          </div>
        </div>
      </div>

    </>
  );
};

export default Section3;
