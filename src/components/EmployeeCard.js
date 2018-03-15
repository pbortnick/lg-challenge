import React from 'react';

const EmployeeCard = ({ employee }) => (

    <div className="card-container">
      <img src={employee.photo} alt={employee.title} />
      <div className="card-subtitle">
        <div className="name">{employee.name}</div>
        <div className="position">{employee.position}</div>
        <div className="learn-more">LEARN MORE</div>
      </div>
    </div>
)

export default EmployeeCard;
