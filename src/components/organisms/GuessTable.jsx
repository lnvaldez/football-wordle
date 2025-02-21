import React from "react";
import GuessRow from "../molecules/GuessRow";

const GuessTable = ({ guesses, targetPlayer }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Thumb</th>
          <th>Name</th>
          <th>League</th>
          <th>Club</th>
          <th>Nationality</th>
          <th>Age</th>
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
