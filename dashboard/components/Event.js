import React from "react";

const windowStyles = { width: 300, marginBottom: 10 };

export const Event = ({ name, description, start, end }) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  return (
    <div className="window" style={windowStyles}>
      <div className="title-bar">
        <div className="title-bar-text">{name}</div>
      </div>
      <div className="window-body">
        <p>{description}</p>
        <p style={{ textAlign: "right" }}>
          {startDate.toLocaleString()} - {endDate.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Event;
