import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import PlayerDropdown from "../molecules/PlayerDropdown";

const GuessForm = ({ players, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredSuggestions = players
      .filter((player) => player.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);

    const uniqueSuggestions = [...new Set(filteredSuggestions)];

    setSuggestions(uniqueSuggestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue("");
      setSuggestions([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a player name"
      />
      {suggestions.length > 0 && (
        <PlayerDropdown suggestions={suggestions} onSelect={setInputValue} />
      )}
      <Button>Submit</Button>
    </form>
  );
};

export default GuessForm;
