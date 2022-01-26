import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import {
  render,
  screen,
  setLoggedInUser,
  setLoggedInUserWithPlayers,
  waitFor,
} from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import Dashboard from "../Dashboard";

describe("<Dashboard />", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should render the Dashboard component", () => {
    setLoggedInUser();
    const testUser = JSON.parse(window.sessionStorage.getItem("username"));
    render(
      <Router history={history}>
        <Dashboard />
      </Router>
    );
    expect(screen.getByRole("button", { name: "Go back" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Dashboard" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: testUser })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Player Name")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Player" })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByRole("row", {
        name: "Player Name Select Player Edit Player Delete Player Player Stats",
      })
    ).toBeInTheDocument();
  });

  it("should display the modal for player stats", async () => {
    setLoggedInUserWithPlayers();
    const testUser = JSON.parse(window.sessionStorage.getItem("username"));
    render(
      <Router history={history}>
        <Dashboard />
      </Router>
    );
    userEvent.click(screen.getByRole("button", { name: testUser }));
    userEvent.click(screen.getByRole("button", { name: "displayPlayerStats" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveTextContent(
      "All StatsPlayer NameGames PlayedGames WonWin Percentage"
    );
  });

  it("should display the delete user modal", async () => {
    setLoggedInUserWithPlayers();
    const testUser = JSON.parse(window.sessionStorage.getItem("username"));
    render(
      <Router history={history}>
        <Dashboard />
      </Router>
    );
    userEvent.click(screen.getByRole("button", { name: testUser }));
    userEvent.click(screen.getByRole("button", { name: "Delete User" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
