import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, setSessionStorage } from "../../../test-utils";

import Killer from "../Killer";

describe("<Killer />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    setSessionStorage();
    render(
      <Router history={history}>
        <Killer />
      </Router>
    );
  });

  it("should render the killer component", () => {
    // Test to ensure all required components are rendered
    expect(
      screen.getByRole("button", { name: /Go Back/i })
    ).toBeInTheDocument();
    /* received value must be an HTMLElement or an SVGElement. Received has type:  array
     * expect(screen.getAllByText(/Killer/i)).toBeInTheDocument();
     */
    expect(screen.getAllByText(/Killer/i));
    expect(
      screen.getByRole("button", { name: /Reset Game/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    // Button Group as score calculator
    expect(screen.getAllByRole("group"));
  });
});
