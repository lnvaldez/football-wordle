import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchRandomPlayer, fetchCompletePlayerData } from "../../utils/api";
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
    const guessedPlayer = await fetchCompletePlayerData(playerName);

    if (guessedPlayer) {
      setGuesses([...guesses, guessedPlayer]);
    } else {
      alert("Player not found!");
    }
  };

  return (
    <GameTemplate
      players={selectedPlayers}
      guesses={guesses}
      targetPlayer={targetPlayer}
      onGuessSubmit={handleGuessSubmit}
    />
  );
};

export default GamePage;
