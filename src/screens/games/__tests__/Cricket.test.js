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

import Cricket from "../Cricket";

describe("<Cricket />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    setSessionStorage();
    render(
      <Router history={history}>
        <Cricket />
      </Router>
    );
  });

  it("should render the cricket component", () => {
    // Test to ensure all required components are rendered
    expect(screen.getByRole("button", { name: "Go back" })).toBeInTheDocument();
    expect(screen.getByText("Cricket")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Reset Game" })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Total:")).toBeInTheDocument();
    // Button Group as score calculator
    expect(screen.getByRole("button", { name: "15" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "16" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "17" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "18" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "19" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "20" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Bull" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Del" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enter" })).toBeInTheDocument();
  });

  it("should display player score input and submit to the scoreboard", async () => {
    const scoreInput = screen.getByRole("button", { name: "15" });
    const submitScore = screen.getByRole("button", { name: "Enter" });
    const deleteScore = screen.getByRole("button", { name: "Del" });
    // User enters a score of 15
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    // 3 occurances of `15` (button, score input, scoreboard header)
    expect(screen.getByText("Total: 15")).toBeInTheDocument();
    // User deletes score input
    await waitFor(() => {
      userEvent.click(deleteScore);
    });
    // 2 occurances of '15' (button, scoreboard table header)
    expect(screen.getByText("Total:")).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    // User submits score
    await waitFor(() => {
      userEvent.click(submitScore);
    });
    // 2 occurances of '15' (button, scoreboard table header)
    expect(
      screen.getByRole("row", { name: "Test hitOne 0" })
    ).toBeInTheDocument();
  });

  it("should enter three scores of `25` and disable the `Bull` button", async () => {
    const scoreInputBull = screen.getByRole("button", { name: "Bull" });
    const scoreInputFifteen = screen.getByRole("button", { name: "15" });
    const submitScore = screen.getByRole("button", { name: "Enter" });
    // First player hits three marks of `25`
    await waitFor(() => {
      userEvent.click(scoreInputBull);
      userEvent.click(scoreInputBull);
      userEvent.click(scoreInputBull);
      userEvent.click(scoreInputFifteen);
      userEvent.click(scoreInputFifteen);
    });
    await waitFor(() => {
      userEvent.click(submitScore);
    });
    // Second player hits three marks of `25`
    await waitFor(() => {
      userEvent.click(scoreInputBull);
      userEvent.click(scoreInputBull);
      userEvent.click(scoreInputBull);
    });
    await waitFor(() => {
      userEvent.click(submitScore);
    });
    expect(
      screen.getByRole("row", { name: "Test hitTwo hitThree 0" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("row", { name: "User hitThree 0" })
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Bull" })).toBeDisabled();
    });
  });
});
