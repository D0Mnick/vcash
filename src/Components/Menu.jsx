
import React, { useState } from 'react';
import './Menus.css';
import { FaHome, FaUser, FaBars } from 'react-icons/fa';


function Menu() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Logo</div>
      <ul className="nav-menu">
        <li className="nav-item"><FaHome /></li>
        <li className="nav-item"><FaUser /></li>
      </ul>
      <div className="nav-toggle"><FaBars /></div>
    </nav>
  );
}

export default Menu
