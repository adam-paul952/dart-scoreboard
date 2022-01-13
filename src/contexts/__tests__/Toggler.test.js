import React from "react";

import { render, screen, waitFor } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import Toggle from "../Toggler";

describe("<Toggle />", () => {
  it("should render toggle component", () => {
    render(<Toggle />);
  });

  it("should display onClick was called", async () => {
    render(<Toggle />);
    const themeToggle = jest.fn();
    const switchTheme = screen.getByRole("button", { name: /toggleTheme/i });
    expect(switchTheme).toBeInTheDocument();
    expect(themeToggle).not.toHaveBeenCalled();
    await waitFor(() => {
      userEvent.click(switchTheme);
    });
    expect(themeToggle).toHaveBeenCalledTimes(1);
  });
});
