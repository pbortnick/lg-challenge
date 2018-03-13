import React, { Component } from 'react';
import LeadersCard from '../components/LeadersCard';
import aaron from '../images/aaron.png';
import '../css/flex.css';
import Slider from "react-slick";
import ReactDOM from "react-dom";

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
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    return (
      <div className="LeadersTeamContainer">
        <div className="teamHeader">Team Leaders</div>
          <Slider {...settings}>
            {leadersTeam.map(leaders => <LeadersCard leaders={leaders} />)}
          </Slider>
      </div>
    )
  }
}

export default LeadersTeam;
