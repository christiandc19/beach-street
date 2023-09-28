import React from "react";
import "./Section3.css";


import s31 from "../../assets/s31.webp";
import s32 from "../../assets/s32.webp";
import s33 from "../../assets/s33.webp";



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
                        <p> Our IOP gives patients that freedom to come and go to each session, and to return home every evening.</p>
                    </div>
          </div>

          <div className="s3-flexItem overlay overlay2">
            <img src={s32} alt="Crying Woman Participating In Group" />
            <div className="centered">
            <h1>PARTIAL HOSPITALIZATION PROGRAM</h1>
                        <h2>PHP</h2>
                        <p> Structured, intensive outpatient treatment program for those who need a higher level of care for a serious mental health condition.</p>

                    </div>

          </div>

          <div className="s3-flexItem  overlay overlay3">
            <img src={s33} alt="Depressed Man In Counseling Session " />
            <div className="centered centered3">
                        <h1> OUTPATIENT PROGRAM</h1>
                        <h2>OP</h2>
                        <p>The outpatient program is designed to be a maintenance phase, where clients can attend this specific level of care for however long they dictate. </p>
                    </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Section3;
