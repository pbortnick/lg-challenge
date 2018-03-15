import React, { Component } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import aaron from '../images/aaron.png';
import Slider from "react-slick";
import '../css/slick.css';
import '../css/flex.css';
import ReactDOM from "react-dom";
import arrow from '../images/arrow.svg';


const leadersTeam = [
  { photo: aaron,
    name: "Jordan March",
    position: "Director of Sales / Associate Broker",
  },
  { photo: aaron,
    name: "Jillian Vaccaro",
    position: "Sales and Leasing Team Manager",
  },
  { photo: aaron,
    name: "Evan Roth",
    position: "Roth Team Leader",
  },
  { photo: aaron,
    name: "Joe Banda, MBA",
    position: "Joe Banda Team Leader",
  },
  { photo: aaron,
    name: "Jordan March",
    position: "Director of Sales / Associate Broker",
  },
  { photo: aaron,
    name: "Jordan March",
    position: "Director of Sales / Associate Broker",
  },
  { photo: aaron,
    name: "Jillian Vaccaro",
    position: "Sales and Leasing Team Manager",
  },
  { photo: aaron,
    name: "Evan Roth",
    position: "Roth Team Leader",
  },
  { photo: aaron,
    name: "Joe Banda, MBA",
    position: "Joe Banda Team Leader",
  },
  { photo: aaron,
    name: "Jordan March",
    position: "Director of Sales / Associate Broker",
  }
];

class LeadersTeam extends Component {
  render() {
    return (
      <div className="leaders">
        <div className="team-header">Team Leaders</div>
        <div className="leaders-cards-container">
          {leadersTeam.map(employee => <EmployeeCard employee={employee} />)}
        </div>
      </div>
    )
  }
}

export default LeadersTeam;
