import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import hero from './images/hero.png'
import hero_overlay from './images/hero_overlay.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="img-container">
          <img className="hero" src={hero} alt="hero" />
          <img className="hero_overlay" src={hero_overlay} alt="hero_overlay" />
        </div>
        <div id="title">TEAM & AGENTS</div>
        <div id="title">Lg Fairmont maintains an intense and rigorous hiring process thus our clients can be assured that they areworking with a professional of the highest skill and integrity. Our agents are highly credentialed and haveachieved law, master degrees, and MBA degrees.</div>
      </div>
    );
  }
}

export default App;
