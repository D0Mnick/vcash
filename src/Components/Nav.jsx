import React from 'react'
import logo from '../assets/VCash LOGO.png'
// import { Link } from 'react-router-dom'
import { TiThMenuOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';

function Nav() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
   }
  return (
    <div className='nav'>
        <div className='navlogo'>
        <img src={logo} alt="" />
        <div>
            <ul id='navmenu' className={!nav ? '#navmenu active' : '#navmenu'}>
               <li className='active'>HOME</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
            <div onClick={handleNav} className="navmobile">

            {!nav ?  <FaTimes style={{color:'black'}}/> : <TiThMenuOutline  style={{color:'black'}}/>}


            
            </div>
        </div>
    </div>
  )
}

export default Nav