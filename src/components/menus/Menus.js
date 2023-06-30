import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import "./Menus.css";

import Contact2 from "../contact/Contact2";

import Card1 from "../../assets/mh-php.jpg";
import Card2 from "../../assets/mh-iop.jpg";
import Card3 from "../../assets/mh-op.jpg";

const Menus = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          BEACH STREET REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS{" "}
        </h1>
        <p>
          At Beach Street Rehab Treatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.{" "}
        </p>
      </div>




      <div class="ma-card-wrap">


{/* MENTAL HEALTH PHP */}
        <div class="mental-health">
          <Fade left>
            <img src={Card1} alt="Mental Health" loading="lazy" />
          </Fade>


          <div>
            <h1>PARTIAL HOSPITALIZATION PROGRAM​</h1>
            <p>
              Some of our clients are here to attend to their mental health, and
              some come to us for help with addiction and sobriety.
            </p>

            <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health-php">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health-php">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* MENTAL HEALTH IOP */}
<div class="mental-health">
          <Fade left>
            <img src={Card3} alt="Mental Health" loading="lazy" />
          </Fade>


          <div>
            <h1>INTENSIVE OUTPATIENT PROGRAM​</h1>
            <p>
              SNo matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Beach Street Rehab.
            </p>

            <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health-iop">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health-iop">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* MENTAL HEALTH OP */}
<div class="mental-health">
          <Fade left>
            <img src={Card2} alt="Mental Health" loading="lazy" />
          </Fade>


          <div>
            <h1>OUTPATIENT PROGRAM​</h1>
            <p>
              No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Beach Street Rehab.
            </p>

            <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health-op">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health-op">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
      </div>






{/* THUMBNAILS */}


      {/* Mental Health Thumbnails */}

      <div class="sa-card-wrap container">

      
{/* ANXIETY */}
        <div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
              alt="Anxiety"
              loading="lazy"/>
          <h1>Anxiety</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/anxiety">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/anxiety">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* PANIC DISORDER */}
<div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
              alt="Panic Disorder"
              loading="lazy"/>
          <h1>Panic Disorder</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/panic-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/panic-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* ASD DISORDER */}
<div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
              alt="ASD"
              loading="lazy"/>
          <h1>ACUTE STRESS DISORDER</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/acute-stress-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/acute-stress-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* ADHD DISORDER */}
<div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg"
              alt="ADHD"
              loading="lazy"/>
          <h1>ADHD</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/adhd">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/adhd">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>



{/* Anger Disorder  */}
<div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg"
              alt="Anger Disorder"
              loading="lazy"/>
          <h1>Anger Disorder</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/anger-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/anger-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>



{/* Bipolar Disorder  */}
<div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
              alt="Bipolar Disorder"
              loading="lazy"/>
          <h1>Bipolar Disorder</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/bipolar-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/bipolar-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* PTSD Disorder  */}
<div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
              alt="PTSD"
              loading="lazy"/>
          <h1>PTSD</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/ptsd">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/ptsd">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>



{/* Schizoaffective  */}
<div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg"
              alt="PTSD"
              loading="lazy"/>
          <h1>Schizoaffective</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/schizoaffective">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/schizoaffective">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>



{/* Schizophrenia  */}
<div className="mental-health-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg"
              alt="PTSD"
              loading="lazy"/>
          <h1>Schizophrenia</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/schizophrenia">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/schizophrenia">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
</div>

      <Contact2 />
    </>
  );
};

export default Menus;
