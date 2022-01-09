import React from "react";

import { render, screen, setSessionStorage } from "../../../test-utils";

import Baseball from "../Baseball";

describe("<Baseball />", () => {
  beforeEach(() => {
    setSessionStorage();
    render(<Baseball />);
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
    // Button Group as score calculator
    expect(screen.getAllByRole("group"));
  });
});
