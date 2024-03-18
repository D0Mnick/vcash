
import React, { useState } from 'react';
// import './Menus.css';
// import { FaHome, FaUser, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/VCash LOGO.png'


function Menu() {
  const [active, setAtctive] = useState("nav_menu");
const navToggle = () => {
  active === 'nav_menu' ? setAtctive('nav_menu nav_active') 
  : setAtctive("nav_menu");

  //TogglerIcon
    toggleIcon === 'nav_toggler'
    ? setToggleIcon ('nav_toggler toggle')
    : setToggleIcon ('nav_toggler');
}
const [toggleIcon, setToggleIcon] = useState('nav_toggler')
  return (
  <nav className='nav'>
    <Link to='hero' smooth={true} duration={500}> <img src={logo} alt="" /></Link>
   <ul className={active}>
            <li><Link to='hero' smooth={true} duration={500}>Home</Link></li>
            <li> <Link to='about' smooth={true} duration={500}>About Us</Link></li>
            <li> <Link to='services' smooth={true} duration={500}>Services</Link></li>
            <li> <Link to='contact' smooth={true} duration={500}>Contact Us</Link></li>
   </ul>
   <div onClick={navToggle} className={toggleIcon}>
       <div className='line1'></div>
       <div className='line2'></div>
       <div className='line3'></div>
   </div>
  </nav>

  );
}

export default Menu
