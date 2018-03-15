import React, { Component } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import aaron from '../images/aaron.png';
import '../css/Agents.css';
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
    }
];

function SampleNextArrow(props) {
const {className, onClick} = props
return (
  <div className={className} onClick={onClick}>
    <img src={arrow} alt="arrow" />
  </div>
);
}

function SamplePrevArrow(props) {
const {className, onClick} = props
return (
  <div className={className} onClick={onClick}>
    <img src={arrow} alt="arrow"/>
  </div>
);
}

class AgentsTeam extends Component {
render() {
  var settings = {
    slidesToShow: 8,
    dots: true,
    slidesToScroll: 8,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="Agents">
        <div className="AgentsTeamContainer">
          <div className="teamHeader">Team Agents</div>
          <div className="container">
          <Slider {...settings}>
            {agentsTeam.map(employee => <EmployeeCard employee={employee}/>)}
          </Slider>
          </div>
          </div>
    </div>
    )
  }
}

export default AgentsTeam;
