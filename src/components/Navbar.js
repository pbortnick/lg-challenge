import React from 'react';
import '../css/navbar.css';
import beacon_logo from '../images/beacon_logo.svg';

// If active links, would use NavLink from react-router-dom with <NavLink className="NavLink"to="/">

const NavBar = () => {
  return (
    <div className="Navigation">
      <img src={beacon_logo} className="navbar-logo" alt="beacon_logo" />

      <ul>
        <li>BUY & RENT</li>
        <li>SELL</li>
        <li>LANDLORDS</li>
        <li>AGENTS</li>
        <li>CAREERS</li>
      </ul>

      <button>Sign In</button>
    </div>
  );
}

export default NavBar;
