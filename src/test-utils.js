import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PingProvider } from "./contexts/PingProvider";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Theme from "./contexts/theme";

const AppWithProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <Theme>
        <PingProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </PingProvider>
      </Theme>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => {
  render(ui, { wrapper: AppWithProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };

const players = [
  {
    id: 1,
    playerName: "Test",
    score: 0,
    scoreList: [],
    lives: 0,
    highScore: 0,
    killer: false,
  },
  {
    id: 2,
    playerName: "Adam",
    score: 0,
    scoreList: [],
    lives: 0,
    highScore: 0,
    killer: false,
  },
];

export const setSessionStorage = () => {
  window.sessionStorage.clear();
  window.sessionStorage.setItem("listOfPlayers", JSON.stringify(players));
};

export const setX01PointsStorage = () => {
  window.sessionStorage.clear();
  window.localStorage.setItem("x01Points", JSON.stringify(501));
  players.forEach((player) => {
    player.score = 501;
  });
  window.sessionStorage.setItem("listOfPlayers", JSON.stringify(players));
};
