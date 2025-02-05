import axios from "axios";
import { Player } from "../models/Player";
import leaguesData from "../data/leagues";
import countries from "../data/countries";

const getFlagUrl = (countryName) => {
  const country = countries.find((c) => c.name === countryName);
  return country ? country.flag : null;
};

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

export const fetchTeamData = async (teamName) => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamName}`
    );

    if (response.data && response.data.teams && response.data.teams[0]) {
      return response.data.teams[0];
    }

    console.warn(`No team data found for ${teamName}`);
    return null;
  } catch (error) {
    console.error("Error fetching team data:", error);
  }
};

export const fetchCompletePlayerData = async (playerName) => {
  try {
    const playerData = await fetchPlayerData(playerName);
    if (!playerData) {
      throw new Error(`Failed to fetch player data for ${playerName}`);
    }

    const teamData = await fetchTeamData(playerData.strTeam);
    const leagueName = teamData?.strLeague || "Unknown";

    const leagueObject = leaguesData.find(
      (league) => league.name === leagueName
    );
    const leagueLogo = leagueObject ? leagueObject.logo : null;

    const league = {
      name: leagueName,
      logo: leagueLogo,
    };

    const club = {
      name: playerData.strTeam || "Unknown",
      logo: teamData?.strBadge || null,
    };

    const birthDate = new Date(playerData.dateBorn);
    const age =
      birthDate instanceof Date && !isNaN(birthDate)
        ? new Date().getFullYear() - birthDate.getFullYear()
        : "Unknown";

    const parseHeight = (heightStr) => {
      if (!heightStr) return null;

      const match = heightStr.match(/\d+(\.\d+)?/);

      if (!match) return null;

      let height = parseFloat(match[0]);

      if (height > 3) {
        height /= 100;
      }

      return parseFloat(height.toFixed(2));
    };

    const height = parseHeight(playerData.strHeight);

    const nationality = playerData.strNationality || "Unknown";
    const flagUrl = getFlagUrl(nationality);

    return new Player({
      thumb: playerData.strThumb,
      name: playerData.strPlayer || "Unknown",
      league,
      club,
      age,
      nationality: {
        name: nationality,
        flag: flagUrl,
      },
      number: playerData.strNumber,
      foot: playerData.strSide,
      position: playerData.strPosition,
      height,
    });
  } catch (error) {
    console.error("Error fetching complete player data:", error.message);
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

      const player = await fetchCompletePlayerData(shuffledPlayers);

      if (player) {
        return player;
      }
    } catch (error) {
      console.warn(`Attempt ${retries + 1} failed:`, error.message);
    }

    retries++;
  }

  throw new Error("No valid player found after multiple attempts.");
};
