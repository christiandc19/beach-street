import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo-colored.png'
import {AiFillCaretDown } from "react-icons/ai";
import Topbar from '../../components/topbar/Topbar';

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }




    return (
        <>
        <Topbar />

        <div className='navbar' name="scroll">

            <div className='nav-box container'>

            <div className="navbar-logo logo-hide">
                    <Link to='/'>
                    <img src={logo} width="180px" height="70px" alt="Beach Street Rehab Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    {/* <li><Link to='/method'>Our Method</Link> </li> */}

                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`#`}> Programs <AiFillCaretDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/partial-hospitalization-program`}> Partial Hospitalization</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/intensive-outpatient-program`}> Intensive Outpatient</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/outpatient-program`}> Outpatient</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/case-management`}> Case Mangement </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/crisis-intervention`}> Crisis Intervention </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/family-therapy`}> Family Therapy</NavLink> </li>
                            </ul>
                        </li>

                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`/mental-health`}> Mental Health <AiFillCaretDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/depression`}> Depression </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anxiety`}> Anxiety Disorder </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/panic-disorder`}> Panic Disorder </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acute-stress-disorder`}> Acute Stress Disorder </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/adhd`}> ADHD</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anger-disorder`}> Anger Disorder </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/bipolar-disorder`}> Bipolar Disorder </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ptsd`}> PTSD </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/schizoaffective`}> Schizoaffective Disorder </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/schizophrenia`}> Schizophrenia </NavLink> </li>
                            </ul>
                        </li>


                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`/substance-abuse`}> Addiction <AiFillCaretDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/alcohol`}> Alcohol</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/cocaine`}> Cocaine </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/fentanyl`}> Fentanyl </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/heroin`}> Heroin</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/kratom`}> Kratom </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mdma`}> MDMA </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/meth`}> Meth </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opiate`}> Opiate </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opioid`}> Opioid </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/oxycodone`}> Oxycodone </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/prescriptions`}> Prescription </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/xanax`}> Xanax </NavLink> </li>
                            </ul>
                        </li>







                        <li><Link to='/mission'>Our Mission</Link> </li>
                        <li><Link to='/about-us'>About Us</Link> </li>
                        <li><Link to='/insurance'>Insurance</Link></li>
                        <li><Link to='/jobs'>Job Assistance</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>

                    <div className="hamburger" onClick={handleNav}>
                        {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                    </div>
            </div>
        </div>
        </>
    )
   
}

export default Navbar

