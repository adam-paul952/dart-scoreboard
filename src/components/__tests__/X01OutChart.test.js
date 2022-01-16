import React from "react";

import { render, screen, waitFor, cleanup } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import X01OutShotButton from "../X01OutChart";

describe("<X01OutShotButton />", () => {
  it("should render the X01OutShotButton component", () => {
    render(<X01OutShotButton />);
    expect(
      screen.getByRole("button", { name: "Outshots" })
    ).toBeInTheDocument();
  });

  it("should open the x01 outshot modal", async () => {
    render(<X01OutShotButton />);
    const x01OutShotButton = screen.getByRole("button", { name: "Outshots" });
    expect(x01OutShotButton).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(x01OutShotButton);
    });
    expect(screen.getByText("OutChart")).toBeInTheDocument();
  });

  it("should close the modal", async () => {
    render(<X01OutShotButton />);
    const x01OutShotButton = screen.getByRole("button", { name: "Outshots" });
    await waitFor(() => {
      userEvent.click(x01OutShotButton);
    });
    expect(screen.getByText("OutChart")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveAttribute(
      "aria-labelledby",
      "x01OutshotChart"
    );
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
    const closeButton = screen.getByRole("button", { name: "Close" });
    expect(closeButton).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(closeButton);
    });
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("should show the outshot chart variant based on a light theme", async () => {
    let theme = "light";
    render(<X01OutShotButton theme={theme} />);
    const x01OutShotButton = screen.getByRole("button", { name: "Outshots" });
    await waitFor(() => {
      userEvent.click(x01OutShotButton);
    });
    expect(screen.getByRole("table")).toHaveAttribute(
      "class",
      "table table-dark table-striped table-bordered table-hover"
    );
  });

  it("should show the outshot chart variant based on a dark theme", async () => {
    let theme = "dark";
    render(<X01OutShotButton theme={theme} />);
    const x01OutShotButton = screen.getByRole("button", { name: "Outshots" });
    await waitFor(() => {
      userEvent.click(x01OutShotButton);
    });
    expect(screen.getByRole("table")).toHaveAttribute(
      "class",
      "table table-dark table-striped table-bordered table-hover"
    );
  });
});
