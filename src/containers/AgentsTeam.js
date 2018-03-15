import React, { Component } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import aaron from '../images/aaron.png';
import '../css/slick.css';
import '../css/flex.css';
import Slider from "react-slick";
import arrow from '../images/arrow.svg';

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
  },
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
    },
    { photo: aaron,
      name: "Bakhtier Azizbekov",
      position: "Licensed Real Estate Salesperson",
    },
    { photo: aaron,
      name: "Bakhtier Azizbekov",
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
    <div className="agents">
          <div className="team-header">Team Agents</div>
          <div className="agents-cards-container">
            {agentsTeam.map(employee => <EmployeeCard employee={employee}/>)}
          </div>
    </div>
    )
  }
}

export default AgentsTeam;
