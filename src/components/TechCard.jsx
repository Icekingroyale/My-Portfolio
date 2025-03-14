import React from 'react'

const TechCard = ({icon, title}) => {
  return (
    <div className="flex items-center gap-3 p-4">
      <span className="text-3xl">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default TechCard;