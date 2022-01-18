import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import CreateGame from "../../createGame/CreateGame";

const games = [
  ["Baseball", "/game/baseball/"],
  ["Cricket", "/game/cricket"],
  ["Elimination", "/game/elimination/create"],
  ["Killer", "/game/killer/create"],
  ["X01", "/game/x01/create"],
];

describe("<Create Game />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <CreateGame />
      </Router>
    );
  });

  it("should render the create game component", () => {
    expect(screen.getByText(/Create a Game/i)).toBeInTheDocument();
    expect(screen.getByText(/Please Select a Game/i)).toBeInTheDocument();
  });

  it.each(games)(
    "should when clicked game %s redirect to %s",
    async (name, path) => {
      expect(screen.getByText(/Please Select a Game/i)).toBeInTheDocument();
      userEvent.click(screen.getByText(/Please Select a Game/i));
      await waitFor(() => {
        expect(
          screen.getByRole("button", {
            name: /Game Dropdown/i,
            expanded: true,
          })
        ).toBeInTheDocument();
      });
      const gameSelectButton = screen.getByText(name);
      expect(gameSelectButton).toBeInTheDocument();
      userEvent.click(gameSelectButton);
      expect(history.location.pathname).toBe(path);
    }
  );
});
