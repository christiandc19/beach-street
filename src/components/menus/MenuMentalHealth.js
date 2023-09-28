import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./MenuMentalHealth.css";

const MenuMentalHealth = () => {
  return (
    <>

    <div className="menu-mental-health">
      <div className="menu-mental-health-content container">

        <div className="menu-mental-health-header container">
          <h1>
            BEACH STREET REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
            PROGRAM
          </h1>
          <p>
            At Beach Street Rehab Treatment Center, clients receive individual
            therapy alongside a range of additional treatments, including relapse
            prevention, trauma therapy, mindfulness meditation, transportation,
            yoga, and more. We offer support that clients need to allow them to
            gradually go back to treatment.
          </p>
        </div>

{/* THUMBNAILS */}

      <div class="menu-mental-health-flex container">

      
{/* ANXIETY */}
        <div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
              alt="Anxiety"
              loading="lazy"/>
          <h1>Anxiety</h1>
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
<div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
              alt="Panic Disorder"
              loading="lazy"/>
          <h1>Panic Disorder</h1>
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
<div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
              alt="ASD"
              loading="lazy"/>
          <h1>ACUTE STRESS DISORDER</h1>
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
<div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg"
              alt="ADHD"
              loading="lazy"/>
          <h1>ADHD</h1>
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
<div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg"
              alt="Anger Disorder"
              loading="lazy"/>
          <h1>Anger Disorder</h1>
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
<div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
              alt="Bipolar Disorder"
              loading="lazy"/>
          <h1>Bipolar Disorder</h1>
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
<div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
              alt="PTSD"
              loading="lazy"/>
          <h1>PTSD</h1>
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
<div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg"
              alt="PTSD"
              loading="lazy"/>
          <h1>Schizoaffective</h1>
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
<div className="mental-health-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg"
              alt="PTSD"
              loading="lazy"/>
          <h1>Schizophrenia</h1>
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
</div>
</div>

    </>
  );
};

export default MenuMentalHealth;
