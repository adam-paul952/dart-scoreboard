import React from "react";
import { render } from "@testing-library/react";
import { PingProvider } from "./contexts/PingProvider";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Theme from "./contexts/theme";
import { AuthProvider } from "./contexts/AuthProvider";
import Background from "./components/Background";

const AppWithProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider value={{ theme: "light" }}>
        <Theme>
          <PingProvider>
            <Background>{children}</Background>
          </PingProvider>
        </Theme>
      </ThemeProvider>
    </AuthProvider>
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
    playerName: "User",
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
    player.scoreList = [501];
  });
  window.sessionStorage.setItem("listOfPlayers", JSON.stringify(players));
};

export const setPlayerLives = () => {
  players.forEach((player) => {
    player.lives = 1;
  });
  window.sessionStorage.setItem("listOfPlayers", JSON.stringify(players));
};

export const setTheme = () => {
  window.localStorage.clear();
  window.localStorage.setItem("theme", JSON.stringify("dark"));
};

export const setLoggedInUser = () => {
  window.sessionStorage.clear();
  window.sessionStorage.setItem("username", JSON.stringify("Test User"));
};
export const setLoggedInUserWithPlayers = () => {
  window.sessionStorage.clear();
  window.sessionStorage.setItem("username", JSON.stringify("Test User"));
  window.sessionStorage.setItem("listOfPlayers", JSON.stringify(players));
};

const playersForKiller = [
  {
    id: 1,
    playerName: "Test",
    score: 1,
    scoreList: [],
    lives: 0,
    highScore: 0,
    killer: false,
  },
  {
    id: 2,
    playerName: "User",
    score: 2,
    scoreList: [],
    lives: 0,
    highScore: 0,
    killer: false,
  },
];

export const setKillerScore = () => {
  window.sessionStorage.clear();
  window.sessionStorage.setItem(
    "listOfPlayers",
    JSON.stringify(playersForKiller)
  );
};
