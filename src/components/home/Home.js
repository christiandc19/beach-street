import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../section2/Section2';
import ContactForm from '../contact/ContactForm';
// import Conditions from '../conditions/Conditions';
import MissionHome from '../mission/MissionHome';
import TherapySA from '../therapySA/TherapySA';
import TherapyMH from '../therapyMH/TherapyMH';
// import Section1 from '../section1/Section1';
import Section3 from '../section3/Section3';
// import Section4 from '../section4/Section4';



const home = () => {
  return (
    <>
    {/* <Section4 /> */}
    <WhatWeDo />
    <Section3 />
    {/* <Section1 /> */}
    <TherapySA />
    {/* <Conditions /> */}
    <TherapyMH />
    <InsuranceSection />
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home
