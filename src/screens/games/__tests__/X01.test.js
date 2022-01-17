import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, setX01PointsStorage } from "../../../test-utils";

import X01 from "../X01";

describe("<X01 />", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
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
    // Button Group as score calculator
    expect(screen.getAllByRole("group"));
  });
});
