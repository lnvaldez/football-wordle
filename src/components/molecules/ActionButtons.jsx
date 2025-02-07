import React from "react";
import Button from "../atoms/Button";

const ActionButtons = ({ onClear, onPlay }) => {
  return (
    <div className="justify-self-center">
      <Button onClick={onClear}>Clear</Button>
      <Button onClick={onPlay}>Play</Button>
    </div>
  );
};

export default ActionButtons;
