import axios from "axios";

// Data
import braPlayers from "../data/brasileirao-players-2024.json";
import bundPlayers from "../data/bundesliga-players-2024-25.json";
import eplPlayers from "../data/epl-players-2024-25.json";
import eredPlayers from "../data/eredivisie-players-2024-25.json";
import llPlayers from "../data/la-liga-players-2024-25.json";
import l1Players from "../data/ligue-1-players-2024-25.json";
import mlsPlayers from "../data/mls-players-2025.json";
import plPlayers from "../data/primeira-liga-players-2024-25.json";
import pdaPlayers from "../data/primera-division-arg-players-2024.json";
import jplPlayers from "../data/pro-league-players-2024-25.json";

// All players list
const allPlayers = [
  ...braPlayers.players,
  ...bundPlayers.players,
  ...eplPlayers.players,
  ...eredPlayers.players,
  ...llPlayers.players,
  ...l1Players.players,
  ...mlsPlayers.players,
  ...plPlayers.players,
  ...pdaPlayers.players,
  ...jplPlayers.players,
];

export const shuffledPlayers = async () => {
  const shuffledPlayers = allPlayers.sort(() => Math.random() - 0.5);

  for (const playerName of shuffledPlayers) {
    try {
      const response = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(
          playerName
        )}`
      );

      const playerData = response.data.player && response.data.player[0];
      if (playerData) {
        return {
          name: playerData.strPlayer,
          club: playerData.strTeam,
          age:
            new Date().getFullYear() -
            new Date(player.Data.dateBorn).getFullYear(),
          nationality: playerData.strNationality,
          number: playerData.strNumber,
          foot: playerData.strSide,
          position: playerData.strPosition,
          height: playerData.strHeight,
        };
      }
    } catch (error) {
      console.error(`Error fetching data for ${playerName}:`, error);
    }
  }

  throw new Error("No valid player found after trying all names.");
};

export const fetchPlayerData = async (playerName) => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(
        playerName
      )}`
    );
    return response.data.player && response.data.player[0];
  } catch (error) {
    console.error("Error fetching player data:", error);
    return null;
  }
};
