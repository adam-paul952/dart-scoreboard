import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import X01GameSelection from "../../createGame/X01SetUp";

describe("<X01GameSelection />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <X01GameSelection />
      </Router>
    );
  });

  it("should render the X01 Game Selection component", () => {
    // Test that component renders with all elements
    expect(screen.getByText(/X01/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Points/i })).toBeInTheDocument();
    expect(screen.getByText(/Game Selected/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Continue to Game/i, disabled: true })
    ).toBeInTheDocument();
  });

  it("should select the number of points and enable continue to game button", async () => {
    const pointsButton = screen.getByRole("button", { name: /Points/i });
    await waitFor(() => {
      userEvent.click(pointsButton);
    });
    expect(pointsButton).toHaveAttribute("aria-expanded", "true");
    const points = screen.getAllByRole("button");
    await waitFor(() => {
      userEvent.click(points[5]);
    });
    expect(screen.getByText(/Game Selected: 501/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Continue to Game/i, disabled: false })
    ).toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem("x01Points"))).toEqual("501");
  });
});
