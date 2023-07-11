import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Section2 from '../section2/Section2';
import ContactForm from '../contact/ContactForm';
// import Conditions from '../conditions/Conditions';
import MissionHome from '../mission/MissionHome';
import TherapySA from '../therapySA/TherapySA';
// import TherapyMH from '../therapyMH/TherapyMH';
// import Section1 from '../section1/Section1';
import Section3 from '../section3/Section3';
import Component3 from '../component3/Component3';
// import Section4 from '../section4/Section4';



const home = () => {
  return (
    <>
    {/* <Section4 /> */}

    <Section3 />
    <TherapySA />
    <Section2 />
    <Component3 />
    {/* <Section1 /> */}
    {/* <Conditions /> */}
    {/* <TherapyMH /> */}
    <InsuranceSection />
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home