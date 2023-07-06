import React from "react";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";

import "./TherapySA.css";
import { Link } from "react-router-dom";
import { CiBeerMugFull } from "react-icons/ci";
import { CiPillsBottle1 } from "react-icons/ci";
import { RiSyringeLine } from "react-icons/ri";
import { TbPills } from "react-icons/tb";

import therapy from "../../assets/therapySA.png";


const TherapySA = () => {
  return (
    <>
      <div className="TherapySA">
        <div className="content container">
          <Fade left>
            <div className="TherapySA-left">
              <img src={therapy} alt="therapy" />
            </div>
          </Fade>

          <div className="TherapySA-right">
          <div className="therapySA-right-header">

            <h1>Types of Substance Addiction Disorder We Treat</h1>
                <p>
                  Here at Beach Street Rehab, we offer a full array of
                  affordable drug rehab programs that can take addicts from
                  detox to inpatient or outpatient care and back home again.
            </p>
          </div>
          


        <div className="therapy-sa-right-flex">

        <div className="box1 box">
              <div className="box-content1">
                <CiBeerMugFull className="box-icon" />
                <h1>ALCOHOL ADDICTION</h1>
                <p>
                  Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.
                </p>
              </div>
            </div>


            <div className="box2 box">
              <div className="box-content2">
                <CiPillsBottle1 className="box-icon" />
                <h1>PRESCRIPTION ADDICTION</h1>
                <p>
                  Abuse of prescription medications can be recreational, due to
                  addiction, or both, and the consequences can be severe or
                  fatal.
                </p>
              </div>
            </div>

            <div className="box3 box">
              <div className="box-content3">
                <RiSyringeLine className="box-icon" />
                <h1>HEROIN ADDICTION</h1>
                <p>
                  Heroin is an opioid stimulant created from morphine and the
                  seed of the poppy plant. It usually appears in either powder
                  form or as a sticky tar substance.
                </p>
              </div>
            </div>

            <div className="box4 box">
              <div className="box-content4">
                <TbPills className="box-icon" />
                <h1>XANAX ADDICTION</h1>
                <p>
                  When taken in high doses, Xanax can lead to serious side
                  effects, ranging from coma, to respiratory arrest, and even
                  death.
                </p>
              </div>
            </div>



        </div>


            <div className="TherapySA-btn hide-btn">
              <LinkRoll
                activeClass="active"
                to="scroll"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/substance-abuse">
                  <div className="therapySA-btn">
                    <button>
                      <span>VIEW ALL</span>
                    </button>
                  </div>
                </Link>
              </LinkRoll>
            </div>


            <div className="hide">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/substance-abuse">
                      <div className="therapySA-btn">
                        <button>
                          <span>VIEW ALL</span>
                        </button>
                      </div>
                    </Link>
                  </LinkRoll>
                </div>







          </div>
        </div>
      </div>
    </>
  );
};

export default TherapySA;
