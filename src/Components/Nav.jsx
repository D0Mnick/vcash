import React from 'react'
import logo from '../assets/VCash LOGO.png'
import { Link } from 'react-scroll';
import { TiThMenuOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import './hero.css'

function Nav() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
   }
  return (
    <div  className='nav'>
        <div className='navlogo'>
          <Link to='hero' smooth={true} duration={500}> <img src={logo} alt="" /></Link>
        <div id='navs'>
            <ul  id='navmenu'  className={!nav ? '#navmenu active' : '#navmenu'}>
            <li className='active'><Link to='hero' smooth={true} duration={500}>Home</Link></li>
            <li> <Link to='about' smooth={true} duration={500}>About Us</Link></li>
            <li> <Link to='services' smooth={true} duration={500}>Services</Link></li>
            <li> <Link to='contact' smooth={true} duration={500}>Contact Us</Link></li>
            </ul>
        </div>
            <div onClick={handleNav} className="navmobile">

            {!nav ?  <FaTimes style={{color:'#17cf97', fontSize: '25px'}} /> : <TiThMenuOutline  style={{color:' #17cf97' , fontSize: '25px'}}/>}


            
            </div>
        </div>
    </div>
  )
}

export default Nav