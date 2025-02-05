import React from "react";
import Message from "../atoms/Message";
import LeagueSelector from "../molecules/LeagueSelector";
import ActionButtons from "../molecules/ActionButtons";
import DifficultyButtons from "../molecules/DifficultyButtons";

const HomePageContent = ({
  leagues,
  selectedLeagues,
  onToggleLeague,
  onClear,
  onPlay,
  difficulty,
  setDifficulty,
}) => {
  return (
    <div>
      <DifficultyButtons
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
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
