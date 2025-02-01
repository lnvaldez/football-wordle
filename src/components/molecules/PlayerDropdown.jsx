import React from "react";

const PlayerDropdown = ({ suggestions, onSelect }) => {
  return (
    <ul>
      {suggestions.map((player, index) => (
        <li key={index} onClick={() => onSelect(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
};

export default PlayerDropdown;
