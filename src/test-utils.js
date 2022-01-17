import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { PingProvider } from "./contexts/PingProvider";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Theme from "./contexts/theme";
import { createMemoryHistory } from "history";

const AppWithProviders = ({ children }) => {
  // const history = createMemoryHistory();

  return (
    <ThemeProvider value={{ theme: "light" }}>
      <Theme>
        <PingProvider>
          {/* <MemoryRouter initialEntries={["/"]}> */}
          {/* <Router history={history}> */}
          {children}
          {/* </Router> */}
          {/* </MemoryRouter> */}
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

const playersWithScore = [
  {
    id: 1,
    playerName: "Test",
    score: 170,
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

const playersWithLives = [
  {
    id: 1,
    playerName: "Test",
    score: 0,
    scoreList: [],
    lives: 1,
    highScore: 0,
    killer: false,
  },
  {
    id: 2,
    playerName: "Adam",
    score: 0,
    scoreList: [],
    lives: 1,
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

export const setPlayerLives = () => {
  window.sessionStorage.setItem(
    "listOfPlayers",
    JSON.stringify(playersWithLives)
  );
};

export const setTheme = () => {
  window.localStorage.clear();
  window.localStorage.setItem("theme", JSON.stringify("dark"));
};

export const setLoggedInUser = () => {
  window.sessionStorage.clear();
  window.sessionStorage.setItem("username", JSON.stringify("Test User"));
  window.sessionStorage.setItem("userUuid", JSON.stringify("1"));
};

export const setPlayerWithScore = () => {
  window.sessionStorage.clear();
  window.sessionStorage.setItem(
    "listOfPlayers",
    JSON.stringify(playersWithScore)
  );
};
