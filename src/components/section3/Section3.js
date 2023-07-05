import React from "react";
import "./Section3.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import s31 from "../../assets/s31.jpg";
import s32 from "../../assets/s32.jpg";
import s33 from "../../assets/s33.jpg";

import { BiBrain } from "react-icons/bi";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { RiEmotionSadLine } from "react-icons/ri";

const Section3 = () => {
  return (
    <>
      <div className="section3">
        <div className="section3-top">
          <div className="s3-flexItem  overlay">
            <img src={s31} alt="Problem Discussion With Psychologist" />
            <div className="centered">
            <h1>INTENSIVE OUTPATIENT PROGRAM</h1>
                        <h2>IOP</h2>
                        <p>This offer a number of benefits to patients who need behavioral healthcare but do not need a residential program. Our IOP gives patients that freedom to come and go to each session, and to return home every evening.</p>
                    </div>


          </div>

          <div className="s3-flexItem overlay overlay2">
            <img src={s32} alt="Crying Woman Participating In Group" />
            <div className="centered">
            <h1>PARTIAL HOSPITALIZATION PROGRAM</h1>
                        <h2>PHP</h2>
                        <p>A partial hospitalization program (PHP) is a structured, intensive outpatient treatment program for those who need a higher level of care for a serious mental health condition.</p>

                    </div>

          </div>

          <div className="s3-flexItem  overlay overlay3">
            <img src={s33} alt="Depressed Man In Counseling Session " />
            <div className="centered centered3">
                        <h1> OUTPATIENT PROGRAM</h1>
                        <h2>OP</h2>
                        <p>A partial hospitalization program (PHP) is a structured, intensive outpatient treatment program for those who need a higher level of care for a serious mental health condition.</p>
                    </div>
          </div>
        </div>




{/* MENTAL HEALTH SERVICES */}



        <div className="component3">
          <div className="component3-content container">
          <div className="c3-left">
            <h2>MENTAL HEALTH SERVICES </h2>
            <h1>
            “Taking a step today will help you lead a 
              <i>
                <span> better tomorrow </span>.”
              </i>
            </h1>
            <p>
              Your personal medical assistant is always a message away for
              anything you need, at no cost.
            </p>
            <div className="c2-btn">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health">
                  <button>View All</button>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="c3-right">
            <div className="c3-card c3-card1">
              <div className="c2-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <CiFaceFrown />
                </h2>
                <h1>STRESS</h1>
              </div>
              <p>
              It is a state of worry or mental tension caused by a difficult situation. Stress is a natural human response that prompts us to address challenges and threats in our lives.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c3-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <CiFaceMeh />
                </h2>
                <h1>DEPRESSION</h1>
              </div>
              <p>
              A group of conditions associated with the elevation or lowering of a person's mood, such as depression or bipolar disorder.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c2-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <RiEmotionSadLine />
                </h2>
                <h1>ANXIETY </h1>
              </div>
              <p>
              Intense, excessive, and persistent worry and fear about everyday situations. Fast heart rate, rapid breathing, sweating, and feeling tired may occur.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c3-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>ANGER</h1>
              </div>
              <p>
              chronic mental health disorder characterized by impulsive, violent, and aggressive behavior, often culminating in verbal and physical outbursts of rage.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* <div className='section3-bottom'>

                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>


                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                </div>


                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                </div> */}

        {/* </div> */}
      </div>
    </>
  );
};

export default Section3;
