import React from "react";
import Message from "../atoms/Message";
import LeagueSelector from "../molecules/LeagueSelector";
import ActionButtons from "../molecules/ActionButtons";

const HomePageContent = ({
  leagues,
  selectedLeagues,
  onToggleLeague,
  onClear,
  onPlay,
}) => {
  return (
    <div>
      <Message text={"Choose which leagues to include in the game:"} />
      <LeagueSelector
        leagues={leagues}
        selectedLeagues={selectedLeagues}
        onToggleLeague={onToggleLeague}
      />
      <ActionButtons onClear={onClear} onPlay={onPlay} />
    </div>
  );
};

export default HomePageContent;
