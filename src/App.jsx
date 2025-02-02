import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import GamePage from "./components/pages/GamePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
