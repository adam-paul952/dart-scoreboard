import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import {
  render,
  screen,
  setSessionStorage,
  setKillerScore,
} from "../../../test-utils";

import Killer from "../Killer";
import userEvent from "@testing-library/user-event";

describe("<Killer />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    setKillerScore();
    render(
      <Router history={history}>
        <Killer />
      </Router>
    );
  });

  it("should render the killer component", () => {
    // Test to ensure all required components are rendered
    expect(screen.getByRole("button", { name: "Go back" })).toBeInTheDocument();
    expect(screen.getAllByText("Killer"));
    expect(
      screen.getByRole("button", { name: "Reset Game" })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Total:")).toBeInTheDocument();
    // Button Group as score calculator
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enter" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Del" })).toBeInTheDocument();
  });
  it("should enter a playerscore, delete, re-enter, submit and add a life", () => {
    // Player 1 enters score
    userEvent.click(screen.getByRole("button", { name: "1" }));
    expect(screen.getByText("Total: 1")).toBeInTheDocument();
    // Deletes inpuit
    userEvent.click(screen.getByRole("button", { name: "Del" }));
    expect(screen.getByText("Total:")).toBeInTheDocument();
    // Enters score and submits
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "Enter" }));
    expect(screen.getByRole("row", { name: "Test 1 1" })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: "User 2 0" })).toBeInTheDocument();
  });

  it("should not submit playerscore if playertarget !== hit number", () => {
    // Player 1 enters score not equal to target
    userEvent.click(screen.getByRole("button", { name: "2" }));
    expect(screen.getByText("Total: 2")).toBeInTheDocument();
    // Attempts submit but lives remain at `0`
    userEvent.click(screen.getByRole("button", { name: "Enter" }));
    expect(screen.getByRole("row", { name: "Test 1 0" })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: "User 2 0" })).toBeInTheDocument();
  });

  it("should end the game with an alert if Player 1 hits 5 lives before player 2 has one", () => {
    const scoreInput = screen.getByRole("button", { name: "1" });
    // Player 1 hits 5 targets and ends game
    userEvent.click(scoreInput);
    userEvent.click(scoreInput);
    userEvent.click(scoreInput);
    userEvent.click(scoreInput);
    userEvent.click(scoreInput);
    userEvent.click(screen.getByRole("button", { name: "Enter" }));
    expect(
      screen.getByRole("row", { name: "Test 1 5 killerCheckmark" })
    ).toBeInTheDocument();
    expect(screen.getByRole("row", { name: "User 2 0" })).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("The WINNER is: Test");
    expect(screen.getByRole("alert")).toHaveTextContent("Congratulations!");
    expect(
      screen.getByRole("button", { name: "Play Again" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Choose another game" })
    ).toBeInTheDocument();
  });

  it("should subtract lives from a player if they hit their target while `killer`", () => {
    const scoreInputOne = screen.getByRole("button", { name: "1" });
    const scoreInputTwo = screen.getByRole("button", { name: "2" });
    const submitScore = screen.getByRole("button", { name: "Enter" });
    // Player 1 enters three target hits
    userEvent.click(scoreInputOne);
    userEvent.click(scoreInputOne);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    expect(screen.getByRole("row", { name: "Test 1 3" })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: "User 2 0" })).toBeInTheDocument();
    // Player 2 enters 5 target hits
    userEvent.click(scoreInputTwo);
    userEvent.click(scoreInputTwo);
    userEvent.click(scoreInputTwo);
    userEvent.click(scoreInputTwo);
    userEvent.click(scoreInputTwo);
    userEvent.click(submitScore);
    expect(screen.getByRole("row", { name: "Test 1 3" })).toBeInTheDocument();
    expect(
      screen.getByRole("row", { name: `User 2 5 killerCheckmark` })
    ).toBeInTheDocument();
    // Player 1 submits `0` hits
    userEvent.click(submitScore);
    // Player 2 hits Player 1 once then his own target twice to lose lives
    userEvent.click(scoreInputOne);
    userEvent.click(scoreInputTwo);
    userEvent.click(scoreInputTwo);
    userEvent.click(submitScore);
    expect(screen.getByRole("row", { name: "Test 1 2" })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: "User 2 3" })).toBeInTheDocument();
  });
});
