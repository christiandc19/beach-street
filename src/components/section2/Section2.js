import React from "react";
import "./Section2.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import wrapper1 from "../../assets/wrapper1.webp";

const Section2 = () => {
  return (
    <>
      <div className="section2 ">
        <div className="section2-content container">
          
        <Fade left>
          <div className="section2-content-right">
            <h1>MENTAL HEALTH</h1> <br />
            <h2>
              <i>“Taking a step today will help you lead a better tomorrow.”</i>
            </h2>
            <br />
            <p>
            Our comprehensive Mental Health Treatment Center at Beach Street Rehab is dedicated to addressing the critical intersection of mental well-being and overall health. We understand that every individual's journey is unique, and our therapeutic services reflect that. From individual therapy sessions to group support, we offer a range of options to accommodate various preferences and comfort levels. Our practitioners are dedicated to staying at the forefront of mental health research and treatment methodologies, ensuring that you receive the most effective care available. Take the first step towards a healthier, happier you by exploring our offerings and scheduling a consultation with one of our compassionate experts today. Remember, at Beach Street Rehab, you're not alone on this path, and together, we'll pave the way to a brighter, more fulfilling tomorrow.
            </p>
            <br />
            <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/mental-health">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/mental-health">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
          </div>
          </Fade>

          <Fade right>
          <div className="section2-content-left">
            <img src={wrapper1} alt="Mental Health Therapy Session" loading="lazy" />
          </div>
          </Fade>


        </div>
      </div>
    </>
  );
};

export default Section2;
