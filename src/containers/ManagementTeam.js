import React, { Component } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import aaron from '../images/aaron.png';
import '../css/Management.css';

const managementTeam = [
  { photo: aaron,
    name: "Aaron Graf",
    position: "Chief Executive Officer",
  },
  { photo: aaron,
    name: "Philip Yellen",
    position: "Chief Operations Officer"
  },
  { photo: aaron,
    name: "Brett Comeaux",
    position: "Chief Talent Officer"
  },
  { photo: aaron,
    name: "Rani Nagpal",
    position: "Cheif Marketing Officer"
  },
  { photo: aaron,
    name: "Aaron Graf, MBA",
    position: "Chief Executive Officer"
  },
  { photo: aaron,
    name: "Jonathan Pineda",
    position: "Hiring Manager"
  },
  { photo: aaron,
    name: "Semira Ansari",
    position: "Hiring Manager"
  },
  { photo: aaron,
    name: "Anthony Pupello",
    position: "Licensed Real Estate Salesperson"
  },
  { photo: aaron,
    name: "Jason Decastro",
    position: "Lead Engineer"
  },
  { photo: aaron,
    name: "Megan Madden",
    position: "Closing Department Manager"
  }
];

class ManagementTeam extends Component {

  render() {
    return (
      <div className="Management">
        <div className="ManagementTeamContainer">
          <div className="teamHeader">Management Team</div>
          <div className="managementCards">
            {managementTeam.map(employee => <EmployeeCard employee={employee} />)}
          </div>
        </div>
      </div>
      
    )
  }
}

export default ManagementTeam;
