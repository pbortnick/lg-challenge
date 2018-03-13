import React from 'react';

const EmployeeCard = ({ employee }) => (

  <div className="EmployeeCard">
    <img src={employee.photo} alt={employee.title} />
    <div className="name">{employee.name}</div>
    <div className="position">{employee.position}</div>
    <div className="learn-more">LEARN MORE</div>
  </div>
)

export default EmployeeCard;
