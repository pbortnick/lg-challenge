import React, { Component } from 'react';
import AgentsCard from '../components/AgentsCard';
import aaron from '../images/aaron.png';
import '../css/flex.css';
import Slider from "react-slick";


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


const handleHover = () => {

}

class AgentsTeam extends Component {

  render() {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8
    };

    return (
      <div className="AgentsTeamContainer">
        <div className="teamHeader">Team Agents</div>
        <Slider {...settings}>
          {agentsTeam.map(agents => <AgentsCard onmouseover={handleHover.bind(this)} agents={agents}/>)}
        </Slider>
      </div>
    )
  }
}

export default AgentsTeam;