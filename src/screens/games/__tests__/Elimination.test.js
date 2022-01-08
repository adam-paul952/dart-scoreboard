import React from "react";

import { render, screen, setSessionStorage } from "../../../test-utils";

import Elimination from "../Elimination";

describe("<Elimination />", () => {
  beforeEach(() => {
    setSessionStorage();
    render(<Elimination />);
  });
  it("should render the elimination component", () => {
    // Test to ensure all required components are rendered
    expect(
      screen.getByRole("button", { name: /Go Back/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Elimination/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Reset Game/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    // Button Group as score calculator
    expect(screen.getAllByRole("group"));
  });
});
