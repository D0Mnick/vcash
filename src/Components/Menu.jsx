import React from 'react'
import './Menus.css'
import logo from '../assets/VCash LOGO.png'
import { Link } from 'react-scroll'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

function Menu() {
   const [Mobile, setMobile] = useState(false)

  return (
    <nav className='navbar'>
      
          <h3 className='logo'>
            <img src={logo} alt="" />
          </h3>
            <ul className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(true)}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <IoClose /> :<FaBars />}
      
            </button>
      
    </nav>
  )
}

export default Menu