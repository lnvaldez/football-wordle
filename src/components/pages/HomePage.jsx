import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePageTemplate from "../templates/HomePageTemplate";
import leaguesData from "../../data/leagues.js";

const HomePage = () => {
  const [selectedLeagues, setSelectedLeagues] = useState([]);
  const navigateTo = useNavigate();

  const getSelectedPlayers = async () => {
    const selectedPlayers = await Promise.all(
      selectedLeagues.map(async (leagueId) => {
        const league = leaguesData.find((league) => league.id == leagueId);
        if (!league) return [];
        const playersData = await import(
          /* @vite-ignore */
          `../../data/${league.playersFile}`
        );
        return playersData.players || [];
      })
    );
    return selectedPlayers.flat();
  };

  const handleToggleLeague = (leagueId) => {
    if (selectedLeagues.includes(leagueId)) {
      setSelectedLeagues(selectedLeagues.filter((id) => id !== leagueId));
    } else {
      setSelectedLeagues([...selectedLeagues, leagueId]);
    }
  };

  const handleClear = () => {
    setSelectedLeagues([]);
  };

  const handlePlay = async () => {
    const selectedPlayers = await getSelectedPlayers();
    if (selectedPlayers.length === 0) {
      alert("Please select at least one league.");
      return;
    }
    navigateTo("/game", { state: { selectedPlayers } });
  };

  return (
    <HomePageTemplate
      leagues={leaguesData}
      selectedLeagues={selectedLeagues}
      onToggleLeague={handleToggleLeague}
      onClear={handleClear}
      onPlay={handlePlay}
    />
  );
};

export default HomePage;
