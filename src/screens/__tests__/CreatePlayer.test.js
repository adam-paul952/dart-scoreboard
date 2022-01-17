import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen, cleanup } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import CreatePlayerList from "../CreatePlayer";

describe("<CreatePlayerList />", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <CreatePlayerList />
      </Router>
    );
  });

  it("should render the create player component", () => {
    // Test all the elements are in the document
    expect(screen.getByText(/Create Player/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add Player/i, disabled: true })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Player Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Player #/i)).toBeInTheDocument();
    expect(screen.getByText(/Player Name/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Submit/i, disabled: true })
    ).toBeInTheDocument();
  });

  it("should enter a name into the table", () => {
    const input = screen.getByPlaceholderText(/Player Name/i);
    expect(input).toBeInTheDocument();
    // Add value to table
    userEvent.type(screen.getByRole("textbox"), "Test");
    expect(input.value).toBe("Test");
    userEvent.click(screen.getByRole("button", { name: /Add Player/i }));
    // Expect input to be reset and value added to table
    expect(input.value).toBe("");
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Delete/i })).toBeInTheDocument();
    //Delete current Test player
    userEvent.click(screen.getByRole("button", { name: /Delete/i }));
    expect(screen.queryByText(/Test/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Submit/i, disabled: true })
    ).toBeInTheDocument();
  });

  it("should add player when pressing 'Enter'", () => {
    const input = screen.getByPlaceholderText(/Player Name/i);
    // Enter a player into the table by pressing'Enter;
    userEvent.type(screen.getByRole("textbox"), "Test");
    userEvent.keyboard("{enter}");
    expect(input.value).toBe("");
    // Check to see that players were added to table
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Submit/i, disabled: true })
    ).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /Delete/i }));
  });

  it("should enter multiple values in table and enable submit button", () => {
    const input = screen.getByPlaceholderText(/Player Name/i);
    // Enter two players into table
    userEvent.type(screen.getByRole("textbox"), "Adam");
    userEvent.click(screen.getByRole("button", { name: /Add Player/i }));
    userEvent.type(screen.getByRole("textbox"), "Paul");
    userEvent.click(screen.getByRole("button", { name: /Add Player/i }));
    expect(input.value).toBe("");
    // Check to see that players were added to table
    expect(screen.getByText(/Adam/i)).toBeInTheDocument();
    expect(screen.getByText(/Paul/i)).toBeInTheDocument();
    const deleteButtons = screen.getAllByRole("button", { name: /Delete/i });
    expect(deleteButtons).toHaveLength(2);
    expect(
      screen.getByRole("button", { name: /Submit/i, disabled: false })
    ).toBeInTheDocument();
  });
});
