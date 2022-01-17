import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import CreateGame from "../../createGame/CreateGame";

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

  it("should show a dropdown of available games", async () => {
    expect(screen.getByText(/Please Select a Game/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Please Select a Game/i));
    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: /Game Dropdown/i,
          expanded: true,
        })
      ).toBeInTheDocument();
      expect(screen.getByText(/Baseball/i)).toBeInTheDocument();
      expect(screen.getByText(/Elimination/i)).toBeInTheDocument();
      expect(screen.getByText(/Cricket/i)).toBeInTheDocument();
      expect(screen.getByText(/X01/i)).toBeInTheDocument();
      expect(screen.getByText(/Killer/i)).toBeInTheDocument();
    });
  });
});
