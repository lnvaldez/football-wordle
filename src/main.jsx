import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Title from "./components/atoms/Title";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Title />
      <App />
    </BrowserRouter>
  </StrictMode>
);
