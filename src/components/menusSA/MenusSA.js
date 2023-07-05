import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import "./MenusSA.css";

import Contact2 from "../contact/Contact2";

import Card1 from "../../assets/sa-php.jpg";
import Card2 from "../../assets/sa-iop.jpg";
import Card3 from "../../assets/sa-op.jpg";

const MenusSA = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          BEACH STREET REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS
        </h1>
        <p>
          At Beach Street Rehab Treatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.
        </p>
      </div>




      <div class="sa-card-wrap">


{/* SUBSTANCE ABUSE PHP */}
        <div class="sub-abuse">
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
                <Link to="/substance-abuse-php">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse-php">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>



{/* SUBTANCE ABUSE IOP */}
<div class="sub-abuse">
          <Fade top>
            <img src={Card2} alt="Mental Health" loading="lazy" />
          </Fade>


          <div>
            <h1>INTENSIVE OUTPATIENT PROGRAM</h1>
            <p>
            No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Beach Street Rehab.
            </p>

            <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse-iop">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse-iop">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>



{/* SUBSTANCE ABUSE OP */}
<div class="sub-abuse">
          <Fade right>
            <img src={Card3} alt="Mental Health" loading="lazy" />
          </Fade>


          <div>
            <h1>OUTPATIENT PROGRAM</h1>
            <p>
            We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.
            </p>

            <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse-op">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse-op">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>

        
      </div>






      {/* Mental Health Thumbnails */}

      <div class="sa-card-wrap container">

      
{/* ALCOHOL */}
        <div className="sub-abuse-tile">
          <Fade right>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
              alt="Alcoholism"
              loading="lazy"/>
          <h1>Alcohol Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/alcohol">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/alcohol">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>




{/* COCAINE */}
<div className="sub-abuse-tile">
          <Fade top>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
              alt="Cocaine"
              loading="lazy"/>
          <h1>Cocaine Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/cocaine">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/cocaine">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* FENTANYL */}
<div className="sub-abuse-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg"
              alt="Fentanyl"
              loading="lazy"/>
          <h1>Fentanyl Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/fentanyl">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/fentanyl">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* HEROIN */}
<div className="sub-abuse-tile">
          <Fade right>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
              alt="Heroin"
              loading="lazy"/>
          <h1>Heroin Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/heroin">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/heroin">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* KRATOM */}
<div className="sub-abuse-tile">
          <Fade top>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
              alt="Kratom"
              loading="lazy"/>
          <h1>Kratom Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/kratom">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/kratom">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* MDMA */}
<div className="sub-abuse-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg"
              alt="MDMA"
              loading="lazy"/>
          <h1>MDMA Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mdma">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/mdma">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* METH */}
<div className="sub-abuse-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg"
              alt="Meth"
              loading="lazy"/>
          <h1>Meth Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/meth">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/meth">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* OPIATE */}
<div className="sub-abuse-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg"
              alt="Cocaine"
              loading="lazy"/>
          <h1>Opiate Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/opiate">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/opiate">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* OPIOID */}
<div className="sub-abuse-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg"
              alt="Opioid"
              loading="lazy"/>
          <h1>Cocaine Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/opioid">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/opioid">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* OXYCODONE */}
<div className="sub-abuse-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
              alt="Oxycodone"
              loading="lazy"/>
          <h1>Oxycodone Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/oxycodone">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/oxycodone">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* PRESCRIPTIONS */}
<div className="sub-abuse-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg"
              alt="Prescriptions"
              loading="lazy"/>
          <h1>Prescriptions Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/prescriptions">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/prescriptions">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* ZANAX */}
<div className="sub-abuse-tile">
          <Fade left>
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
              alt="Xanax"
              loading="lazy"/>
          <h1>Cocaine Addiction</h1>
          </Fade>
        <div>

        <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/xanax">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                <Link to="/xanax">
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

export default MenusSA;
