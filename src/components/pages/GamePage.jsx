import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  allPlayers,
  fetchRandomPlayer,
  fetchPlayerData,
} from "../../utils/api";
import GameTemplate from "../templates/GameTemplate";

const GamePage = () => {
  const { state } = useLocation();
  const { selectedPlayers } = state || {};

  const [targetPlayer, setTargetPlayer] = useState(null);
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const getRandomPlayer = async () => {
      if (!selectedPlayers || selectedPlayers.length === 0) return;
      try {
        const player = await fetchRandomPlayer(selectedPlayers);
        setTargetPlayer(player);
      } catch (error) {
        console.error("Failed to fetch random player:", error.message);
      }
    };
    getRandomPlayer();
  }, [selectedPlayers]);

  const handleGuessSubmit = async (playerName) => {
    const playerData = await fetchPlayerData(playerName);
    if (playerData) {
      const guessedPlayer = {
        name: playerName,
        club: playerData.strTeam || "Unknown",
        age: playerData.dateBorn
          ? new Date().getFullYear() -
            new Date(playerData.dateBorn).getFullYear()
          : "Unknown",
        nationality: playerData.strNationality || "Unknown",
        number: playerData.strNumber || "Unknown",
        foot: playerData.strSide || "Unknown",
        position: playerData.strPosition || "Unknown",
        height: playerData.strHeight || "Unknown",
      };
      setGuesses([...guesses, guessedPlayer]);
    } else {
      alert("Player not found!");
    }
  };

  return (
    <GameTemplate
      players={allPlayers}
      guesses={guesses}
      targetPlayer={targetPlayer}
      onGuessSubmit={handleGuessSubmit}
    />
  );
};

export default GamePage;
