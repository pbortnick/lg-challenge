import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Title from './components/Title';
import ManagementTeam from './containers/ManagementTeam';
import LeadersTeam from './containers/LeadersTeam';
import AgentsTeam from './containers/AgentsTeam';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <Title />
        <ManagementTeam />
        <LeadersTeam />
        <AgentsTeam />
        <Footer />
      </div>
    );
  }
}

export default App;
