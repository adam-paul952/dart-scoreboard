import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, setX01PointsStorage } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import X01 from "../X01";

describe("<X01 />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    // Sets player points to 501
    setX01PointsStorage();
    render(
      <Router history={history}>
        <X01 />
      </Router>
    );
  });

  it("should render the x01 component", () => {
    // Test to ensure all required components are rendered
    expect(
      screen.getByRole("button", { name: /Go Back/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/501/i));
    expect(
      screen.getByRole("button", { name: /Outshots/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Reset Game/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText(/High Score:/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of Darts:/i)).toBeInTheDocument();
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

  it("should display player score and submit to the scoreboard", () => {
    const scoreInputOne = screen.getByRole("button", { name: /1/i });
    const scoreInputZero = screen.getByRole("button", { name: /0/i });
    const scoreInputEight = screen.getByRole("button", { name: /8/i });
    userEvent.click(scoreInputEight);
    userEvent.click(screen.getByRole("button", { name: /Del/i }));
    userEvent.click(scoreInputOne);
    userEvent.click(scoreInputZero);
    userEvent.click(scoreInputZero);
    expect(screen.getByText(/Total: 100/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    expect(screen.getByRole("row", { name: /Test 401/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /User 501/i })).toBeInTheDocument();
  });

  it("should allow a user to enter score, delete and submit from the keyboard", () => {
    userEvent.keyboard("{1}");
    expect(screen.getByText(/Total: 1/i)).toBeInTheDocument();
    userEvent.keyboard("{backspace}");
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    userEvent.keyboard("{8}");
    userEvent.keyboard("{0}");
    expect(screen.getByText(/Total: 80/i)).toBeInTheDocument();
    userEvent.keyboard("{enter}");
    expect(screen.getByRole("row", { name: /Test 421/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /User 501/i })).toBeInTheDocument();
  });

  it("should alert the player of a invalid score input if score > 180", () => {
    window.alert = jest.fn();
    // User enters a score > 180
    userEvent.click(screen.getByRole("button", { name: /1/i }));
    userEvent.click(screen.getByRole("button", { name: /8/i }));
    userEvent.click(screen.getByRole("button", { name: /1/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    expect(window.alert).toHaveBeenCalledWith("Score cannot exceed 180!");
  });

  it("should display the `X01OutshotChart` once score < 170", () => {
    window.alert = jest.fn();
    // Players enter score until score < 170 and X01Shot dialog is rendered
    userEvent.click(screen.getByRole("button", { name: /1/i }));
    userEvent.click(screen.getByRole("button", { name: /8/i }));
    userEvent.click(screen.getByRole("button", { name: /0/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    // Player 2
    userEvent.click(screen.getByRole("button", { name: /1/i }));
    userEvent.click(screen.getByRole("button", { name: /8/i }));
    userEvent.click(screen.getByRole("button", { name: /0/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    // Player 1
    userEvent.click(screen.getByRole("button", { name: /1/i }));
    userEvent.click(screen.getByRole("button", { name: /8/i }));
    userEvent.click(screen.getByRole("button", { name: /0/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    // Player 2
    userEvent.click(screen.getByRole("button", { name: /1/i }));
    userEvent.click(screen.getByRole("button", { name: /8/i }));
    userEvent.click(screen.getByRole("button", { name: /0/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    // Expect outshot is displayed for player 1
    expect(screen.getByText(/Possible Out: 141/i)).toBeInTheDocument();
    expect(screen.getByText(/T20 -- T15 -- D18/i)).toBeInTheDocument();
    // Player 1 enters score
    userEvent.click(screen.getByRole("button", { name: /1/i }));
    userEvent.click(screen.getByRole("button", { name: /0/i }));
    userEvent.click(screen.getByRole("button", { name: /0/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    // Expect outshot is displayed for player 2
    expect(screen.getByText(/Possible Out: 141/i)).toBeInTheDocument();
    expect(screen.getByText(/T20 -- T15 -- D18/i)).toBeInTheDocument();
    // Player 2 enters score
    userEvent.click(screen.getByRole("button", { name: /5/i }));
    userEvent.click(screen.getByRole("button", { name: /0/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));
    // Expect new outshot for player 1
    expect(screen.getByText(/Possible Out: 41/i)).toBeInTheDocument();
    expect(screen.getByText(/9 -- D16/i)).toBeInTheDocument();
    // Check to test that player cannot have < then 2 for score and `bust`
    userEvent.click(screen.getByRole("button", { name: /4/i }));
    userEvent.click(screen.getByRole("button", { name: /0/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));

    expect(window.alert).toHaveBeenCalledWith("Bust!!");
    // Player 2 outshot is displayed
    expect(screen.getByText(/Possible Out: 91/i)).toBeInTheDocument();
    expect(screen.getByText(/T17 -- D20/i)).toBeInTheDocument();
    // Player 2 successfully hits outshot
    userEvent.click(screen.getByRole("button", { name: /9/i }));
    userEvent.click(screen.getByRole("button", { name: /1/i }));
    userEvent.click(screen.getByRole("button", { name: /Enter/i }));

    expect(screen.getByRole("row", { name: /Test 41/i })).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /User 0/i })).toBeInTheDocument();
    expect(screen.getByText(/The WINNER is: User/i)).toBeInTheDocument();
    expect(screen.getByText(/Congratulations!/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Play Again/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Choose Another Game/i })
    ).toBeInTheDocument();
  });
});
