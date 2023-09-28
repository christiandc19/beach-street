import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import CaseManagement from '../components/Programs-CaseManagement/CaseManagement'
import CaseManagementSection from '../components/Programs-CaseManagement/CaseManagementSection'
import MenusPrograms from "../components/menus/MenuPrograms";
import Contact2 from "../components/contact/Contact2";



const CaseManagementPage = () => {
  return (
    <>
    <Navbar /> 
    <CaseManagement />
    <CaseManagementSection />
    <MenusPrograms />
    <Contact2 />
    <Footer />
     </>
  )
}

export default CaseManagementPage