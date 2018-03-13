import React, { Component } from 'react';
import AgentsCard from '../components/AgentsCard';
import aaron from '../images/aaron.png';
import '../css/flex.css';

const agentsTeam = [
  { photo: aaron,
    name: "Khalid Abdel-Hafeez",
    position: "Licensed Real Estate Salesperson",
  },
  { photo: aaron,
    name: "Nao Abe",
    position: "Licensed Real Estate Salesperson",
  },
  { photo: aaron,
    name: "Mia Adams",
    position: "Licensed Real Estate Salesperson",
  },
  { photo: aaron,
    name: "Peter Alley",
    position: "Licensed Real Estate Salesperson",
  },
  { photo: aaron,
    name: "Daniel Antman",
    position: "Licensed Real Estate Salesperson",
  },
  { photo: aaron,
    name: "John Antretter",
    position: "Licensed Real Estate Salesperson",
  },
  { photo: aaron,
    name: "Jeff Asmar",
    position: "Licensed Real Estate Salesperson",
  },
  { photo: aaron,
    name: "Bakhtier Azizbekov",
    position: "Licensed Real Estate Salesperson",
  }
];

class AgentsTeam extends Component {

  render() {
    return (
      <div className="AgentsTeamContainer">
        <h1>Team Agents</h1>
        <div className="agentsCards">
          {agentsTeam.map(agents => <AgentsCard agents={agents} />)}
        </div>
      </div>
    )
  }
}

export default AgentsTeam;
