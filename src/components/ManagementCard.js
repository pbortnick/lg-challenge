import React from 'react';

const ManagementCard = ({ management }) => (

  <div className="ManagementCard">
    <img src={management.photo} alt={management.title} />
    <div className="name">{management.name}</div>
    <div className="position">{management.position}</div>
    <div className="learn-more">LEARN MORE</div>
  </div>
)

export default ManagementCard;
