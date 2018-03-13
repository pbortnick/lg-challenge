import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div id="title">TEAM & AGENTS</div>
        <div id="title">Lg Fairmont maintains an intense and rigorous hiring process thus our clients can be assured that they areworking with a professional of the highest skill and integrity. Our agents are highly credentialed and haveachieved law, master degrees, and MBA degrees.</div>
      </div>
    );
  }
}

export default App;
