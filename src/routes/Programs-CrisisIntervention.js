import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import CrisisIntervention from '../components/Programs-CrisisIntervention/CrisisIntervention'
import CrisisInterventionSection from '../components/Programs-CrisisIntervention/CrisisInterventionSection'
import MenusPrograms from "../components/menus/MenuPrograms";
import Contact2 from "../components/contact/Contact2";



const Php = () => {
  return (
    <>
    <Navbar /> 
    <CrisisIntervention />
    <CrisisInterventionSection />
    <MenusPrograms />
    <Contact2 />
    <Footer />
     </>
  )
}

export default Php