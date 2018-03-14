import React from 'react';
import '../css/header.css';
import beacon_logo from '../images/beacon_logo.png';

// If active links, would use NavLink from react-router-dom with <NavLink className="NavLink"to="/">

const Header = () => {
  return (
    <div className="NavHeader">
      <div className="HeaderImage">
        <img src={beacon_logo} alt="beacon_logo" />
      </div>
      <div className="SignIn">
        <button className="sign-in-button">SIGN IN</button>
      </div>
      <div className="NavItems">
        <div className="nav">BUY & RENT</div>
        <div className="nav">SELL</div>
        <div className="nav">LANDLORDS</div>
        <div className="nav">AGENTS</div>
        <div className="nav">CAREERS</div>
      </div>
    </div>
  );
}

export default Header;
