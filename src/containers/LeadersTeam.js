import React, { Component } from 'react';
import LeadersCard from '../components/LeadersCard';
import aaron from '../images/aaron.png';
import '../css/flex.css';

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
  }
];

class LeadersTeam extends Component {

  render() {
    return (
      <div className="LeadersTeamContainer">
        <h1>Team Leaders</h1>
        <div className="leadersCards">
          {leadersTeam.map(leaders => <LeadersCard leaders={leaders} />)}
        </div>
      </div>
    )
  }
}

export default LeadersTeam;
