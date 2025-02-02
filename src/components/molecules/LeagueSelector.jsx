import React from "react";
import Logo from "../atoms/Logo";

const LeagueSelector = ({ leagues, selectedLeagues, onToggleLeague }) => {
  return (
    <div>
      {leagues.map((league) => (
        <Logo
          key={league.id}
          src={league.logo}
          alt={league.name}
          onClick={() => onToggleLeague(league.id)}
          style={{
            border: selectedLeagues.includes(league.id)
              ? "2px solid blue"
              : "none",
          }}
        />
      ))}
    </div>
  );
};

export default LeagueSelector;
