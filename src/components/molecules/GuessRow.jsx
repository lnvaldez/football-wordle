import React from "react";
import TableCell from "../atoms/TableCell";

const GuessRow = ({ guess, targetPlayer }) => {
  const compareAndColor = (field, guessedValue, targetValue) => {
    if (!guessedValue || !targetValue) return { value: "?", color: "red" };

    let normalizedGuess = String(guessedValue).toLowerCase().trim();
    let normalizedTarget = String(targetValue).toLowerCase().trim();

    if (["age", "height"].includes(field)) {
      const guessedNum = Number(normalizedGuess.replace(/[^0-9.]/g, ""));
      const targetNum = Number(normalizedTarget.replace(/[^0-9.]/g, ""));

      if (guessedNum > targetNum)
        return field === "age"
          ? { value: `<${guessedNum}`, color: "yellow" }
          : { value: `<${guessedNum}cm`, color: "yellow" };
      if (guessedNum < targetNum)
        return field === "age"
          ? { value: `>${guessedNum}`, color: "yellow" }
          : { value: `>${guessedNum}cm`, color: "yellow" };
      return field === "age"
        ? { value: `${guessedNum}`, color: "green" }
        : { value: `${guessedNum}cm`, color: "green" };
    }

    return normalizedGuess === normalizedTarget
      ? { value: guessedValue, color: "green" }
      : { value: guessedValue, color: "red" };
  };

  const fields = [
    { key: "age", label: guess.age },
    { key: "number", label: guess.number },
    { key: "foot", label: guess.foot },
    { key: "position", label: guess.position },
    { key: "height", label: guess.height },
  ];

  return (
    <tr>
      <TableCell
        value={
          <img src={guess.thumb} alt={guess.name} width={75} height={75} />
        }
      />
      <TableCell value={guess.name} />
      <TableCell
        value={
          <img
            src={guess.league.logo}
            alt={guess.league.name}
            width={75}
            height={75}
          />
        }
        backgroundColor={
          compareAndColor("league", guess.league.name, targetPlayer.league.name)
            .color
        }
      />
      <TableCell
        value={
          <img
            src={guess.club.logo}
            alt={guess.club.name}
            width={75}
            height={75}
          />
        }
        backgroundColor={
          compareAndColor("club", guess.club.name, targetPlayer.club.name).color
        }
      />
      <TableCell
        value={
          <img
            src={guess.nationality.flag}
            alt={guess.nationality.name}
            width={75}
            height={75}
          />
        }
        backgroundColor={
          compareAndColor(
            "club",
            guess.nationality.name,
            targetPlayer.nationality.name
          ).color
        }
      />

      {fields.map(({ key, label }) => {
        const { value, color } = compareAndColor(key, label, targetPlayer[key]);
        return <TableCell key={key} value={value} backgroundColor={color} />;
      })}
    </tr>
  );
};

export default GuessRow;
