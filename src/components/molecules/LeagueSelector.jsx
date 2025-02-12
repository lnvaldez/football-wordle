import React from "react";
import Logo from "../atoms/Logo";

const LeagueSelector = ({ leagues, selectedLeagues, onToggleLeague }) => {
  return (
    <div className="grid grid-cols-5 gap-4 justify-items-center">
      {leagues.map((league) => (
        <Logo
          key={league.id}
          src={league.logo}
          alt={league.name}
          onClick={() => onToggleLeague(league.id)}
          className={`${
            selectedLeagues.includes(league.id) ? "grayscale-0" : "opacity-25"
          }`}
        />
      ))}
    </div>
  );
};

export default LeagueSelector;
