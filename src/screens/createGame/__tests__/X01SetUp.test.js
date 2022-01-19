import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import X01GameSelection from "../../createGame/X01SetUp";

const x01Points = [201, 301, 401, 501, 601, 701];

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
    expect(screen.getByText("X01")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Points" })).toBeInTheDocument();
    expect(screen.getByText("Game selected: 0")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Continue to Game", disabled: true })
    ).toBeInTheDocument();
  });

  it.each(x01Points)(
    "should select %s points and enable continue to game button",
    async (points) => {
      const pointsButton = screen.getByRole("button", { name: "Points" });
      await waitFor(() => {
        userEvent.click(pointsButton);
      });
      expect(pointsButton).toHaveAttribute("aria-expanded", "true");
      const pointsSelectButton = screen.getByText(points);
      await waitFor(() => {
        userEvent.click(pointsSelectButton);
      });
      expect(screen.getByText(`Game selected: ${points}`)).toBeInTheDocument();
      expect(
        screen.getByRole("button", {
          name: "Continue to Game",
          disabled: false,
        })
      ).toBeInTheDocument();
      expect(JSON.parse(window.localStorage.getItem("x01Points"))).toEqual(
        points.toString()
      );
    }
  );
});
