import React from 'react';

const AgentsCard = ({ agents }) => (

  <div className="AgentsCard">
    <img src={agents.photo} alt={agents.title} />
    <div className="name">{agents.name}</div>
    <div className="position">{agents.position}</div>
  </div>
)

export default AgentsCard;
