import React, { Component } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import aaron from '../images/aaron.png';
import Slider from "react-slick";
import '../css/Leaders.css';
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

class LeadersTeam extends Component {


  render() {
    var settings = {
      slidesToShow: 4,
      dots: true,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      speed: 500
    };

    return (
      <div className="Leaders">
      <div className="LeadersTeamContainer">

        <div className="teamHeader">Team Leaders</div>
          <div className="container">
          <Slider {...settings}>
            {leadersTeam.map(employee => <EmployeeCard employee={employee} />)}
          </Slider>
          </div>
        </div>
      </div>
    )
  }
}

export default LeadersTeam;
