import React, { Component } from 'react';
import EmployeeCard from '../components/ConcertCard';

class Team extends Component {

  render() {
    return (
      <div className="ConcertContainer">
        <h1>{this.props.team}</h1>
        {this.props.emplyees.map(employee => <EmployeeCard employee={employee} />)}
      </div>
    )
  }
}
