import React, { Component } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import aaron from '../images/aaron.png';
import Slider from "react-slick";
import ReactDOM from "react-dom";
import '../css/slick.css';


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
  }
];

class LeadersTeam extends Component {

  render() {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true
    };

    return (
      <div className="LeadersTeamContainer">
        <div className="teamHeader">Team Leaders</div>
          <Slider {...settings}>
            {leadersTeam.map(employee => <EmployeeCard employee={employee} />)}
          </Slider>
      </div>
    )
  }
}

export default LeadersTeam;
