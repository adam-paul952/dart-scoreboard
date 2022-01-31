import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import {
  render,
  screen,
  waitFor,
  setSessionStorage,
} from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import EliminationSetUp from "../../createGame/EliminationSetUp";

const eliminationLives = [3, 4, 5, 6, 7, 8, 9, 10];

describe("<EliminationSetUp />", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    setSessionStorage();
    render(
      <Router history={history}>
        <EliminationSetUp />
      </Router>
    );
  });

  it("should render the Elimination Setup component", () => {
    expect(screen.getByText("Elimination")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Lives", expanded: false })
    ).toBeInTheDocument();
    expect(screen.getByText("Number of Lives Selected: 0")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Continue to Game", disabled: true })
    ).toBeInTheDocument();
  });

  it.each(eliminationLives)(
    "should select %s lives and enable continue to game button",
    async (playerLives) => {
      const livesButton = screen.getByRole("button", { name: "Lives" });
      await waitFor(() => {
        userEvent.click(livesButton);
      });
      expect(livesButton).toHaveAttribute("aria-expanded", "true");
      const livesSelectButton = screen.getByText(playerLives);
      await waitFor(() => {
        userEvent.click(livesSelectButton);
      });
      expect(
        screen.getByText(`Number of Lives Selected: ${playerLives}`)
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", {
          name: "Continue to Game",
          disabled: false,
        })
      ).toBeInTheDocument();
      await waitFor(() => {
        userEvent.click(
          screen.getByRole("button", { name: "Continue to Game" })
        );
      });
      await waitFor(() => {
        expect(
          JSON.parse(window.sessionStorage.getItem("listOfPlayers"))
        ).toEqual([
          {
            id: 1,
            playerName: "Test",
            score: 0,
            scoreList: [],
            lives: playerLives,
            highScore: 0,
            killer: false,
          },
          {
            id: 2,
            playerName: "User",
            score: 0,
            scoreList: [],
            lives: playerLives,
            highScore: 0,
            killer: false,
          },
        ]);
      });
    }
  );
});
