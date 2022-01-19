import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import Rules from "../Rules";

const games = ["Baseball", "Cricket", "Elimination", "Killer", "X01"];

describe("<Rules />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <Rules />
      </Router>
    );
  });
  it("should render the rules component", () => {
    // Test that all elements are rendered
    expect(screen.getByRole("button", { name: "Go back" })).toBeInTheDocument();
    expect(screen.getByText("Rules")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "X01", expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Baseball", expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cricket", expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Elimination", expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Killer", expanded: false })
    ).toBeInTheDocument();
  });

  it.each(games)("should open the accordian button belonging to %s", (game) => {
    // Test that the accordian button is open
    const accordianButton = screen.getByRole("button", {
      name: game,
      expanded: false,
    });
    userEvent.click(accordianButton);
    expect(accordianButton).toHaveAttribute("aria-expanded", "true");
  });
});
