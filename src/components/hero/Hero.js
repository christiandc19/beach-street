import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/Bg-Video-2.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



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
                    </Link>
                    </div>
                    <br />
                    <Fade bottom>
                        <p>Find your happiness and learn to put it first.</p>
                    </Fade>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero