import React from "react";
import GuessRow from "../molecules/GuessRow";

const GuessTable = ({ guesses, targetPlayer }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Club</th>
          <th>Age</th>
          <th>Nationality</th>
          <th>Number</th>
          <th>Foot</th>
          <th>Position</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        {guesses.map((guess, index) => (
          <GuessRow key={index} guess={guess} targetPlayer={targetPlayer} />
        ))}
      </tbody>
    </table>
  );
};

export default GuessTable;
