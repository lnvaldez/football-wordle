import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Title from "./components/atoms/Title";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Title text="Football Wordle" />
    <App />
  </StrictMode>
);
