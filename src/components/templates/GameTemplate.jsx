import React from "react";
import GuessForm from "../organisms/GuessForm";
import GuessTable from "../organisms/GuessTable";

const GameTemplate = ({ players, guesses, targetPlayer, onGuessSubmit }) => (
  <div>
    <GuessForm players={players} onSubmit={onGuessSubmit} />
    <GuessTable guesses={guesses} targetPlayer={targetPlayer} />
  </div>
);

export default GameTemplate;
