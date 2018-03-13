import React from 'react';

class EmployeeCard extends React.Component {
  render() {
    return (
      <div className="EmployeeCard">
        <img src={this.props.photo} alt={this.props.title} />
        <h2>{this.props.name}</h2>
        <h3>{this.props.position}</h3>
      </div>
    )
  }

export default EmployeeCard;
