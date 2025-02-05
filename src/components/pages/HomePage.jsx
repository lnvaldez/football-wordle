import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePageTemplate from "../templates/HomePageTemplate";
import leaguesData from "../../data/leagues.js";

const HomePage = () => {
  const [selectedLeagues, setSelectedLeagues] = useState([]);
  const navigateTo = useNavigate();

  const getSelectedPlayers = async () => {
    let leaguesToFetch;

    if (selectedLeagues.length === 0) {
      leaguesToFetch = leaguesData;
    } else {
      leaguesToFetch = leaguesData.filter((league) =>
        selectedLeagues.includes(league.id)
      );
    }

    const selectedPlayers = await Promise.all(
      leaguesToFetch.map(async (league) => {
        try {
          const playersData = await import(
            /* @vite-ignore */
            `../../data/${league.playersFile}`
          );
          return playersData.players || [];
        } catch (error) {
          console.error(
            `Failed to load players for league: ${league.name}`,
            error
          );
          return [];
        }
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
      alert("No players found. Please check your data files.");
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
