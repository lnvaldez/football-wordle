import React, { useState, useEffect } from "react";
import {
  allPlayers,
  fetchRandomPlayer,
  fetchPlayerData,
} from "../../utils/api";
import GameTemplate from "../templates/GameTemplate";

const GamePage = () => {
  const [targetPlayer, setTargetPlayer] = useState(null);
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const getRandomPlayer = async () => {
      const player = await fetchRandomPlayer();
      setTargetPlayer(player);
    };
    getRandomPlayer();
  }, []);

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
