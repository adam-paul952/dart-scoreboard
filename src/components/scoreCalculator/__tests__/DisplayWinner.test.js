import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import DisplayWinner from "../DisplayWinner";

const gameVariants = ["baseball", "x01", "elimination", "killer", "cricket"];

describe("<DisplayWinner />", () => {
  const history = createMemoryHistory();
  const eraseGameData = jest.fn();

  it.each(gameVariants)(
    "should call the `eraseGameData` function based on variant of %s",
    async (game) => {
      render(
        <Router history={history}>
          <DisplayWinner
            variant={game}
            eraseGameData={eraseGameData}
            winner={{ playerName: "Test" }}
          />
        </Router>
      );
      const winnerAlert = screen.getByRole("alert");
      expect(winnerAlert).toBeInTheDocument();
      expect(winnerAlert).toHaveTextContent("The WINNER is: Test");
      expect(winnerAlert).toHaveTextContent("Congratulations!");
      const playAgainButton = screen.getByRole("button", {
        name: /Play Again/i,
      });
      expect(playAgainButton).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /Choose Another Game/i })
      ).toBeInTheDocument();
      userEvent.click(playAgainButton);
      expect(eraseGameData).toHaveBeenCalled();
    }
  );

  it("should change history.location once `Choose Another Game` is clicked", () => {
    render(
      <Router history={history}>
        <DisplayWinner
          variant={gameVariants[0]}
          eraseGameData={eraseGameData}
          winner={{ playerName: "Test" }}
        />
      </Router>
    );
    expect(
      screen.getByRole("button", { name: /Play Again/i })
    ).toBeInTheDocument();
    const chooseAnotherGameButton = screen.getByRole("button", {
      name: /Choose Another Game/i,
    });
    expect(chooseAnotherGameButton).toBeInTheDocument();
    expect(chooseAnotherGameButton).toHaveAttribute("href", "/game/create");
    userEvent.click(chooseAnotherGameButton);
    expect(history.location.pathname).toBe("/game/create");
  });
});
