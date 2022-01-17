import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import EliminationSetUp from "../../createGame/EliminationSetUp";

describe("<EliminationSetUp />", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <EliminationSetUp />
      </Router>
    );
  });

  it("should render the Elimination Setup component", () => {
    expect(screen.getByText(/Elimination/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Lives/i, expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Number of Lives Selected: 0/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Continue to Game/i, disabled: true })
    ).toBeInTheDocument();
  });

  it("should select number of lives and enable continue to game button", async () => {
    const livesButton = screen.getByRole("button", { name: /Lives/i });
    await waitFor(() => {
      userEvent.click(livesButton);
    });
    expect(livesButton).toHaveAttribute("aria-expanded", "true");
    const lives = screen.getAllByRole("button");
    await waitFor(() => {
      userEvent.click(lives[2]);
    });
    expect(
      screen.getByText(/Number of Lives Selected: 3/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Continue to Game/i, disabled: false })
    ).toBeInTheDocument();
  });
});
