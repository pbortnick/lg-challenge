import React from 'react';
import '../css/title.css';
import hero from '../images/hero.png';
import hero_overlay from '../images/hero_overlay.png';
import redandpurplepeople from '../images/redandpurplepeople.png';

// If active links, would use NavLink from react-router-dom with <NavLink className="NavLink"to="/">

const Title = () => {
  return (
    <div className="title-container">
        <img className="hero" src={hero} alt="hero" />
        <img className="hero_overlay" src={hero_overlay} alt="hero_overlay" />

        <p className="title">TEAM & AGENTS</p>



        <p className="description">
          Lg Fairmont maintains an intense and rigorous hiring process thus our clients can be assured that they areworking with a professional of the highest skill and integrity. Our agents are highly credentialed and haveachieved law, master degrees, and MBA degrees.
        </p>

        <img className="people" src={redandpurplepeople} alt="redandpurplepeople" />



    </div>
  );
}

export default Title;
