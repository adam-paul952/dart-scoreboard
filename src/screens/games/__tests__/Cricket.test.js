import React from "react";

import { render, screen, setSessionStorage } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import Cricket from "../Cricket";
import { waitFor } from "@testing-library/react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

describe("<Cricket />", () => {
  beforeEach(() => {
    setSessionStorage();
    render(<Cricket />);
  });

  it("should render the cricket component", () => {
    // Test to ensure all required components are rendered
    expect(
      screen.getByRole("button", { name: /Go Back/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Cricket/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Reset Game/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    // Button Group as score calculator
    expect(screen.getAllByRole("group"));
  });

  it("should display player score input and submit to the scoreboard", async () => {
    const scoreInput = screen.getByRole("button", { name: /15/i });
    const submitScore = screen.getByRole("button", { name: /Enter/i });
    const deleteScore = screen.getByRole("button", { name: /Del/i });
    // User enters a score of 15
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    // 3 occurances of `15` (button, score input, scoreboard header)
    expect(screen.getAllByText(/15/i)).toHaveLength(3);
    // User deletes score input
    await waitFor(() => {
      userEvent.click(deleteScore);
    });
    // 2 occurances of '15' (button, scoreboard table header)
    expect(screen.getAllByText(/15/i)).toHaveLength(2);
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    // User submits score
    await waitFor(() => {
      userEvent.click(submitScore);
    });
    // 2 occurances of '15' (button, scoreboard table header)
    expect(screen.getAllByText(/15/i)).toHaveLength(2);
  });

  it("should enter three scores of `25` and disable the `Bull` button", async () => {
    const scoreInput = screen.getByRole("button", { name: /Bull/i });
    const submitScore = screen.getByRole("button", { name: /Enter/i });
    // First player hits three marks of `25`
    await waitFor(() => {
      userEvent.click(scoreInput);
      userEvent.click(scoreInput);
      userEvent.click(scoreInput);
    });
    await waitFor(() => {
      userEvent.click(submitScore);
    });
    // Second player hits three marks of `25`
    await waitFor(() => {
      userEvent.click(scoreInput);
      userEvent.click(scoreInput);
      userEvent.click(scoreInput);
    });
    await waitFor(() => {
      userEvent.click(submitScore);
    });
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /Bull/i })).toBeDisabled();
    });
  });
});
