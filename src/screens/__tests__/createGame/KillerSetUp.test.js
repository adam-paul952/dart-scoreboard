import React from "react";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import KillerSetUp from "../../createGame/KillerSetUp";

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

describe("<KillerSetUp />", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.sessionStorage.setItem("listOfPlayers", JSON.stringify(players));
    render(<KillerSetUp playerList={players} />);
  });

  it("should render the Killer SetUp component", () => {
    // Test if all the elements are in the document
    expect(screen.getByText(/Killer/i)).toBeInTheDocument();
    expect(screen.getByText(/Player Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Target/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Score/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /OK/i })).toBeInTheDocument();
  });

  it("should enter player score into table", () => {
    const input = screen.getByPlaceholderText(/Score/i);
    const submitScore = screen.getByRole("button", { name: /OK/i });
    expect(input).toBeInTheDocument();
    // Add first player score to the table
    userEvent.type(input, "10");
    userEvent.click(submitScore);
    // Check that value was added to player score
    expect(input.value).toBe("");
    expect(screen.getByRole("row", { name: /Test 10/i })).toBeInTheDocument();
    // Add second player score to the table
    userEvent.type(input, "8");
    userEvent.click(submitScore);
    // Check that value was added to player score
    expect(input.value).toBe("");
    expect(screen.getByRole("row", { name: /Adam 8/i })).toBeInTheDocument();
    // After all players enter score should see Continue to Game Button
    expect(
      screen.getByRole("button", { name: /Continue to Game/i })
    ).toBeInTheDocument();
  });

  it("should alert a user of invalid score entered", async () => {
    window.alert = jest.fn();
    const input = screen.getByPlaceholderText(/Score/i);
    const submitScore = screen.getByRole("button", { name: /OK/i });
    expect(input).toBeInTheDocument();
    // Add invalid score
    await waitFor(() => {
      userEvent.type(input, "21");
      userEvent.click(submitScore);
    });
    // Check that alert was shown
    expect(window.alert).toBeCalledWith(
      "Invalid score. Score must be between 1 and 20."
    );
  });
});