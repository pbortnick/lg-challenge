import React from 'react';
import '../css/navbar.css';
import beacon_logo from '../images/beacon_logo.png';

// If active links, would use NavLink from react-router-dom with <NavLink className="NavLink"to="/">

const Navbar = () => {
  return (
    <div className="Navigation">
    <ul><li id="inline" className="nav">BUY & RENT</li>
      <li><img src={beacon_logo} id="inline" className="beacon_logo" alt="beacon_logo" /></li>
        <li id="inline" className="nav">SELL</li>
        <li id="inline" className="nav">LANDLORDS</li>
        <li id="inline" className="nav">AGENTS</li>
        <li id="inline" className="nav">CAREERS</li>
        <li><button className="sign-in-button">SIGN IN</button></li>

      </ul>
    </div>
  );
}

export default Navbar;
