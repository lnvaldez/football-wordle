import React from "react";
import TableCell from "../atoms/TableCell";

const GuessRow = ({ guess, targetPlayer }) => {
  const compareValues = (field, guessedValue, targetValue) => {
    if (!guessedValue || !targetValue) return false;

    guessedValue = String(guessedValue).toLowerCase().trim();
    targetValue = String(targetValue).toLowerCase().trim();

    return guessedValue === targetValue;
  };

  return (
    <tr>
      <TableCell
        value={
          <img src={guess.thumb} alt={guess.name} width={75} height={75} />
        }
      />
      <TableCell value={guess.name} />
      <TableCell
        value={guess.league}
        backgroundColor={
          compareValues("league", guess.league, targetPlayer.league)
            ? "green"
            : "red"
        }
      />
      <TableCell
        value={guess.club}
        backgroundColor={
          compareValues("club", guess.club, targetPlayer.club) ? "green" : "red"
        }
      />
      <TableCell
        value={guess.age}
        backgroundColor={
          compareValues("age", guess.age, targetPlayer.age) ? "green" : "red"
        }
      />
      <TableCell
        value={guess.nationality}
        backgroundColor={
          compareValues(
            "nationality",
            guess.nationality,
            targetPlayer.nationality
          )
            ? "green"
            : "red"
        }
      />
      <TableCell
        value={guess.number}
        backgroundColor={
          compareValues("number", guess.number, targetPlayer.number)
            ? "green"
            : "red"
        }
      />
      <TableCell
        value={guess.foot}
        backgroundColor={
          compareValues("foot", guess.foot, targetPlayer.foot) ? "green" : "red"
        }
      />
      <TableCell
        value={guess.position}
        backgroundColor={
          compareValues("position", guess.position, targetPlayer.position)
            ? "green"
            : "red"
        }
      />
      <TableCell
        value={guess.height}
        backgroundColor={
          compareValues("height", guess.height, targetPlayer.height)
            ? "green"
            : "red"
        }
      />
    </tr>
  );
};

export default GuessRow;
