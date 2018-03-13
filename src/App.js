import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Title />
      </div>
    );
  }
}

export default App;
