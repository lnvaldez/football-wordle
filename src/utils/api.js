import axios from "axios";

// Data
import braPlayers from "../data/players/brasileirao-players-2024.json";
import bundPlayers from "../data/players/bundesliga-players-2024-25.json";
import eplPlayers from "../data/players/epl-players-2024-25.json";
import eredPlayers from "../data/players/eredivisie-players-2024-25.json";
import llPlayers from "../data/players/la-liga-players-2024-25.json";
import l1Players from "../data/players/ligue-1-players-2024-25.json";
import mlsPlayers from "../data/players/mls-players-2025.json";
import plPlayers from "../data/players/primeira-liga-players-2024-25.json";
import pdaPlayers from "../data/players/primera-division-arg-players-2024.json";
import jplPlayers from "../data/players/pro-league-players-2024-25.json";

// All players list
export const allPlayers = [
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

export const fetchPlayerData = async (playerName) => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerName}`
    );

    if (response.data && response.data.player && response.data.player[0]) {
      console.log(response.data.player[0]);
      return response.data.player[0];
    }

    console.warn(`No player data found for ${playerName}`);
    return null;
  } catch (error) {
    console.error("Error fetching player data:", error);
    return null;
  }
};

export const fetchRandomPlayer = async (players) => {
  const maxRetries = 10;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const shuffledPlayers =
        players[Math.floor(Math.random() * players.length)];

      const playerData = await fetchPlayerData(shuffledPlayers);

      if (playerData) {
        return {
          name: playerData.strPlayer || "Unknown",
          club: playerData.strTeam || "Unknown",
          age: playerData.dateborn
            ? new Date().getFullYear() -
              new Date(playerData.dateBorn).getFullYear()
            : "Unknown",
          nationality: playerData.strNationality || "Unknown",
          number: playerData.strNumber || "Unknown",
          foot: playerData.strSide || "Unknown",
          position: playerData.strPosition || "Unknown",
          height: playerData.strHeight || "Unknown",
        };
      }
    } catch (error) {
      console.warn(`Attempt ${retries + 1} failed:`, error.message);
    }

    retries++;
  }

  throw new Error("No valid player found after multiple attempts.");
};
