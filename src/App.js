import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import ManagementTeam from './containers/ManagementTeam';
import LeadersTeam from './containers/LeadersTeam';
import AgentsTeam from './containers/AgentsTeam';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Title />
        <ManagementTeam />
        <LeadersTeam />
        <AgentsTeam />
      </div>
    );
  }
}

export default App;
