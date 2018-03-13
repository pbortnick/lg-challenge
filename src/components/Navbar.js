import React from 'react';
import '../css/navbar.css';
import beacon_logo from '../images/beacon_logo.svg';

// If active links, would use NavLink from react-router-dom with <NavLink className="NavLink"to="/">

const NavBar = () => {
  return (
    <div className="Navigation">
      <ul>
        <li id="beacon_logo"><img src={beacon_logo} className="navbar-logo" alt="beacon_logo" /></li>

        <li id="nav">BUY & RENT</li>
        <li id="nav">SELL</li>
        <li id="nav">LANDLORDS</li>
        <li id="nav">AGENTS</li>
        <li id="nav">CAREERS</li>

        <li id="sign-in"><button>Sign In</button></li>

      </ul>

    </div>
  );
}

export default NavBar;
