import React from "react";

import { render, screen } from "../../../test-utils";

import Rules from "../Rules";

describe("<Rules />", () => {
  beforeEach(() => {
    render(<Rules />);
  });
  it("should render the rules component", () => {
    // Test that all elements are rendered
    expect(
      screen.getByRole("button", { name: /Go Back/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Rules/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /X01/i, expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Baseball/i, expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Cricket/i, expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Elimination/i, expanded: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Killer/i, expanded: false })
    ).toBeInTheDocument();
  });
});
