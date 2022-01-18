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

  it("should display player score input and submit to scoreboard", async () => {
    const scoreInput = screen.getByRole("button", { name: /1/i });
    const submitScore = screen.getByRole("button", { name: /Enter/i });
    // User enters score of 1
    await waitFor(() => {
      userEvent.click(scoreInput);
    });
    expect(screen.getByText(/Total: 1/i)).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(submitScore);
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
    expect(screen.getByText(/Total: 1/i)).toBeInTheDocument();
    // User deletes input
    await waitFor(() => {
      userEvent.click(deleteInput);
    });
    // Only 2 occurances of 1 on the screen (button, round)
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
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
    expect(screen.getByRole("row", { name: /User 3 3/i })).toBeInTheDocument();
    // User resets the game
    await waitFor(() => {
      userEvent.click(resetGame);
    });
    expect(screen.getByRole("row", { name: /Test 0/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /User 0/i })).toBeInTheDocument();
  });

  it("should allow the user to use keyboard input to enter, delete and submit input", async () => {
    // User enters a score of 1 with the keyboard
    await waitFor(() => {
      userEvent.keyboard("{1}");
    });
    expect(screen.getByText(/Total: 1/i)).toBeInTheDocument();
    // User hits backspace to delete input
    await waitFor(() => {
      userEvent.keyboard("{backspace}");
    });
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    // User re-enters score and submits
    await waitFor(() => {
      userEvent.keyboard("{1}");
    });
    await waitFor(() => {
      userEvent.keyboard("{enter}");
    });
    expect(screen.getByRole("row", { name: /Test 1 1/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /User 0/i })).toBeInTheDocument();
  });

  it("should enter user scores until the game ends and displays the display winner dialog", async () => {
    const scoreInputNine = screen.getByRole("button", { name: /9/i });
    const scoreInputOne = screen.getByRole("button", { name: /1/i });
    const submitScore = screen.getByRole("button", { name: /Enter/i });
    // Enter scores for 9 rounds of gameplay
    userEvent.click(scoreInputNine);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    userEvent.click(scoreInputOne);
    userEvent.click(submitScore);
    expect(
      screen.getByRole("row", { name: /Test 9 1 1 1 1 1 1 1 1 17/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("row", { name: /User 1 1 1 1 1 1 1 1 1 9/i })
    ).toBeInTheDocument();
    // Winner alert is displayed
    const winnerAlert = screen.getByRole("alert");
    expect(winnerAlert).toHaveTextContent("The WINNER is: Test");
    expect(winnerAlert).toHaveTextContent("Congratulations!");
    // Check that the `Play Again` button is displayed
    const playAgainButton = screen.getByRole("button", { name: /Play Again/i });
    expect(playAgainButton).toBeInTheDocument();
    // Check that `Choose Another Game` is displayed with the proper href
    const chooseAnotherGameButton = screen.getByRole("button", {
      name: /Choose Another Game/i,
    });
    expect(chooseAnotherGameButton).toBeInTheDocument();
    expect(chooseAnotherGameButton).toHaveAttribute("href", "/game/create");
  });
});
