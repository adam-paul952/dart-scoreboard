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

import Baseball from "../Baseball";

describe("<Baseball />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    setSessionStorage();
    render(
      <Router history={history}>
        <Baseball />
      </Router>
    );
  });

  it("should render the baseball component", () => {
    // Test to ensure component renders with all required elements
    expect(
      screen.getByRole("button", { name: /Go Back/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Baseball/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Reset Game/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    // Button Group as score calculator
    expect(screen.getAllByRole("group"));
  });

  it("should display player score input and submit to scoreboard", async () => {
    const scoreInput = screen.getByRole("button", { name: /1/i });
    // User enters score of 1
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    // 3 occurances of 1 on the screen (button, round, input total)
    expect(screen.getAllByText(/1/i)).toHaveLength(3);
    await waitFor(() => {
      userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    });
    // Scoreboard displays row with playername, score, and total
    expect(screen.getByRole("row", { name: /Test 1 1/i })).toBeInTheDocument();
  });

  it("should enter a score and delete input", async () => {
    const scoreInput = screen.getByRole("button", { name: /1/i });
    const deleteInput = screen.getByRole("button", { name: /Del/i });
    // User enters score of 1
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    // 3 occurances of 1 on the screen (button, round, input total)
    expect(screen.getAllByText(/1/i)).toHaveLength(3);
    // User deletes input
    await waitFor(() => {
      userEvent.click(deleteInput);
    });
    // Only 2 occurances of 1 on the screen (button, round)
    expect(screen.getAllByText(/1/i)).toHaveLength(2);
  });

  it("should reset the game to default", async () => {
    const scoreInput = screen.getByRole("button", { name: /3/i });
    const submitInput = screen.getByRole("button", { name: /Enter/i });
    const resetGame = screen.getByRole("button", { name: /Reset Game/i });
    // Both users enter a score of 3
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    await waitFor(() => {
      userEvent.click(submitInput);
    });
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    await waitFor(() => {
      userEvent.click(submitInput);
    });
    expect(screen.getByRole("row", { name: /Test 3 3/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /Adam 3 3/i })).toBeInTheDocument();
    // User resets the game
    await waitFor(() => {
      userEvent.click(resetGame);
    });
    expect(screen.getByRole("row", { name: /Test 0/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /Adam 0/i })).toBeInTheDocument();
  });

  it("should allow the user to use keyboard input to enter, delete and submit input", async () => {
    // User enters a score of 1 with the keyboard
    await waitFor(() => {
      userEvent.keyboard("{1}");
    });
    expect(screen.getAllByText(/1/i)).toHaveLength(3);
    // User hits backspace to delete input
    await waitFor(() => {
      userEvent.keyboard("{backspace}");
    });
    expect(screen.getAllByText(/1/i)).toHaveLength(2);
    // User re-enters score and submits
    await waitFor(() => {
      userEvent.keyboard("{1}");
    });
    await waitFor(() => {
      userEvent.keyboard("{enter}");
    });
    expect(screen.getByRole("row", { name: /Test 1 1/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /Adam 0/i })).toBeInTheDocument();
  });
});
