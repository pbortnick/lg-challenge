import React from 'react';

const EmployeeCard = ({ employee }) => (
  <div className="EmployeeCard">
    <img src={this.props.photo} alt={this.props.title} />
    <h2>{this.props.name}</h2>
    <h3>{this.props.position}</h3>
  </div>
)

export default EmployeeCard;

import React from 'react';
