import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./Hero.css";
import Hero1 from '../../assets/hero-1.jpg'
import Hero2 from '../../assets/hero-2.jpg'
import Hero3 from '../../assets/hero-3.jpg'
import Hero4 from '../../assets/hero-4.jpg'


const Hero = () => {
  return (
    <>
<div className="hero-overlay">
      <div className="hero">

      <div class="fling-minislide">
        <img src={Hero1} alt="Slide 1" />
        <img src={Hero2} alt="Slide 2" />
        <img src={Hero3} alt="Slide 3" />
        <img src={Hero4} alt="Slide 4" />
      </div>

      <div className="hero-container">

                <div className="content">
               <Fade left>
                         <h2 className='subtitle'>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
                     </Fade>
                        <h1>“A great life starts with a strong mind and a strong body."</h1>

                        <br />
                       <div className='hero-btn'>
                         <Link to="/contact">
                    <button>Contact Us</button>
                    </Link>                     </div>
                     <br />
                     <Fade bottom>
                         <p>Find your happiness and learn to put it first.</p>
                     </Fade>
                 </div>
            </div>

      </div>
      </div>
    </>
  );
};

export default Hero;







