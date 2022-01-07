import React from "react";
import { render, screen } from "../../test-utils";

import Header from "../Header";

describe("<Header />", () => {
  const title = "Test Title";
  it("should render the header component with a title", () => {
    render(<Header title={title} />);
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  });

  it("should render the header with a title and all buttons", () => {
    render(
      <Header
        title={title}
        goBackButton
        resetButton
        switchThemeButton
        outShotButton
      />
    );
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Go back/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Reset Game/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /toggleTheme/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Outshots/i })
    ).toBeInTheDocument();
  });
});
