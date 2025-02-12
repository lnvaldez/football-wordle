import React from "react";
import Button from "../atoms/Button";

const DifficultyButtons = ({ setDifficulty }) => {
  return (
    <div className="flex gap-8 justify-self-center">
      <Button color={"easy"} onClick={() => setDifficulty("easy")}>
        Easy
      </Button>
      <Button color={"medium"} onClick={() => setDifficulty("medium")}>
        Medium
      </Button>
      <Button color={"hard"} onClick={() => setDifficulty("hard")}>
        Hard
      </Button>
    </div>
  );
};

export default DifficultyButtons;
