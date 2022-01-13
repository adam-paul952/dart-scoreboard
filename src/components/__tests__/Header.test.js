import React from "react";
import { render, screen, waitFor, theme } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import Header from "../Header";

describe("<Header />", () => {
  const title = "Test Title";
  it("should render the header component with a title", () => {
    render(<Header title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
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

  it("should render the switch theme button and call `themeToggle`", async () => {
    const themeToggle = jest.fn();
    render(
      <Header
        title={title}
        switchThemeButton
        theme={theme}
        themeToggle={themeToggle}
      />
    );
    expect(
      screen.getByRole("button", { name: /toggleTheme/i })
    ).toBeInTheDocument();
    expect(window.localStorage.getItem("theme")).toBe(/light/i);
    expect(themeToggle).not.toHaveBeenCalled();
    await waitFor(() => {
      userEvent.click(screen.getByRole("button", { name: /toggleTheme/i }));
    });
    expect(window.localStorage.getItem("theme")).toBe(/dark/i);
    // expect(themeToggle).toHaveBeenCalled();
  });
});
