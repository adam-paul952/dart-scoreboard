import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, waitFor, setPlayerLives } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import Elimination from "../Elimination";

describe("<Elimination />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    setPlayerLives();
    render(
      <Router history={history}>
        <Elimination />
      </Router>
    );
  });
  it("should render the elimination component", () => {
    // Test to ensure all required components are rendered
    expect(
      screen.getByRole("button", { name: /Go Back/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Elimination/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Reset Game/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    // Check that score calculator buttons are rendered
    expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "3" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "4" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "6" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "7" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "8" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "9" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Del" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enter" })).toBeInTheDocument();
  });

  it("should display player score input and submit to the scoreboard", async () => {
    const scoreInput = screen.getByRole("button", { name: /1/i });
    const submitScore = screen.getByRole("button", { name: /Enter/i });
    const deleteScore = screen.getByRole("button", { name: /Del/i });
    // User enters a score of 1
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    expect(screen.getAllByText(/1/i)).toHaveLength(4);
    // User clicks delete to clear input
    await waitFor(() => {
      userEvent.click(deleteScore);
    });
    expect(screen.getAllByText(/1/i)).toHaveLength(3);
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    await waitFor(() => {
      userEvent.click(submitScore);
    });
    // 2 occurances of '1' (button, score)
    expect(screen.getAllByText(/1/i)).toHaveLength(4);
  });

  it("should display input, submit score and delete input from keyboard", async () => {
    await waitFor(() => {
      userEvent.keyboard("{1}");
    });
    await waitFor(() => {
      userEvent.keyboard("{backspace}");
    });
    await waitFor(() => {
      userEvent.keyboard("{1}");
    });
    await waitFor(() => {
      userEvent.keyboard("{enter}");
    });
    expect(screen.getByRole("row", { name: /Test 1 1/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /User 0 1/i })).toBeInTheDocument();
  });

  it("should add a player score and a second player score that's less than to remove a life", async () => {
    await waitFor(() => {
      userEvent.keyboard("{10}");
    });
    await waitFor(() => {
      userEvent.keyboard("{enter}");
    });
    await waitFor(() => {
      userEvent.keyboard("{1}");
    });
    await waitFor(() => {
      userEvent.keyboard("{enter}");
    });
    expect(screen.getByRole("row", { name: /Test 10 1/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /User 1 0/i })).toBeInTheDocument();
    const winnerAlert = screen.getByRole("alert");
    expect(winnerAlert).toBeInTheDocument();
  });
});
