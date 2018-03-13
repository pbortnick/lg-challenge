import React from 'react';

const LeadersCard = ({ leaders }) => (

  <div className="LeadersCard">
    <img src={leaders.photo} alt={leaders.title} />
    <div className="name">{leaders.name}</div>
    <div className="position">{leaders.position}</div>
    <div className="learn-more">LEARN MORE</div>
  </div>
)

export default LeadersCard;
