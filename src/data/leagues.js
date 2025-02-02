import braLogo from "../assets/brasileirao-logo.svg";
import bundesligaLogo from "../assets/bundesliga-logo.svg";
import eplLogo from "../assets/epl-logo.svg";
import eredivisieLogo from "../assets/eredivisie-logo.svg";
import laLigaLogo from "../assets/la-liga-logo.svg";
import ligue1Logo from "../assets/ligue-1-logo.svg";
import mlsLogo from "../assets/mls-logo.svg";
import primeiraLigaLogo from "../assets/primeira-liga-logo.svg";
import primeraDivArgLogo from "../assets/primera-division-arg-logo.svg";
import proLeagueLogo from "../assets/pro-league-logo.svg";

const leaguesData = [
  {
    id: "epl",
    name: "English Premier League",
    logo: eplLogo,
    playersFile: "players/epl-players-2024-25.json",
  },
  {
    id: "la-liga",
    name: "La Liga",
    logo: laLigaLogo,
    playersFile: "players/la-liga-players-2024-25.json",
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    logo: bundesligaLogo,
    playersFile: "players/bundesliga-players-2024-25.json",
  },
  {
    id: "eredivisie",
    name: "Eredivisie",
    logo: eredivisieLogo,
    playersFile: "players/eredivisie-players-2024-25.json",
  },
  {
    id: "ligue-1",
    name: "Ligue 1",
    logo: ligue1Logo,
    playersFile: "players/ligue-1-players-2024-25.json",
  },
  {
    id: "mls",
    name: "Major League Soccer",
    logo: mlsLogo,
    playersFile: "players/mls-players-2025.json",
  },
  {
    id: "primeira-liga",
    name: "Primeira Liga",
    logo: primeiraLigaLogo,
    playersFile: "players/primeira-liga-players-2024-25.json",
  },
  {
    id: "primera-division-arg",
    name: "Primera División Argentina",
    logo: primeraDivArgLogo,
    playersFile: "players/primera-division-arg-players-2024.json",
  },
  {
    id: "pro-league",
    name: "Pro League",
    logo: proLeagueLogo,
    playersFile: "players/pro-league-players-2024-25.json",
  },
  {
    id: "brasileirao",
    name: "Brasileirão",
    logo: braLogo,
    playersFile: "players/brasileirao-players-2024.json",
  },
];

export default leaguesData;
