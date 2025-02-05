import React from "react";
import Button from "../atoms/Button";

const DifficultyButtons = ({ setDifficulty }) => {
  return (
    <div>
      <Button onClick={() => setDifficulty("easy")}>Easy</Button>
      <Button onClick={() => setDifficulty("medium")}>Medium</Button>
      <Button onClick={() => setDifficulty("hard")}>Hard</Button>
    </div>
  );
};

export default DifficultyButtons;
