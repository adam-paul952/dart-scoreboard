import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import Dashboard from "../Dashboard";

describe("<Dashboard />", () => {
  const history = createMemoryHistory();
  const testUsername = "test@email.com";
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should render the dashboard with all required components", () => {
    window.sessionStorage.setItem("username", JSON.stringify(testUsername));
    window.sessionStorage.setItem("userUuid", JSON.stringify("2"));
    render(
      <Router history={history}>
        <Dashboard />
      </Router>
    );
    // All roles in the header
    expect(screen.getByRole("button", { name: "Go back" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Dashboard" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: testUsername })
    ).toBeInTheDocument();
    // Create player dashboard
    expect(screen.getByPlaceholderText("Player Name")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Player" })
    ).toBeInTheDocument();
    // Table to display players
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByRole("row", {
        name: "Player Name Select Player Edit Player Delete Player Player Stats",
      })
    ).toBeInTheDocument();
  });

  it("should return an unauthorized user to login page", () => {
    sessionStorage.clear();
    history.push("/dashboard");
    render(
      <Router history={history}>
        <Dashboard />
      </Router>
    );
    console.log(history.location.pathname);
    expect(JSON.parse(window.sessionStorage.getItem("username"))).toBe("");
  });

  //   it("should enter a player into the player table", async () => {
  //     const playerInput = screen.getByPlaceholderText("Player Name");
  //     const addPlayerButton = screen.getByRole("button", { name: "Add Player" });
  //     userEvent.type(playerInput, "Test Player");
  //     userEvent.click(addPlayerButton);
  //     let request = moxios.requests.mostRecent();
  //     console.log(request);
  //     console.log(nextRequest);
  //     moxios.wait(() => {
  //       request.respondWith({
  //         status: 200,
  //         response: { id: 1, playerName: "Test Player" },
  //       });
  //     });
  //   });
});
