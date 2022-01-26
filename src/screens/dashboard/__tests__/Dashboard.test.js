import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

<<<<<<< HEAD
import { render, screen, waitFor } from "../../../test-utils";
=======
import {
  render,
  screen,
  setLoggedInUser,
  setLoggedInUserWithPlayers,
  waitFor,
} from "../../../test-utils";
>>>>>>> client-passport
import userEvent from "@testing-library/user-event";

import Dashboard from "../Dashboard";

describe("<Dashboard />", () => {
  const history = createMemoryHistory();
<<<<<<< HEAD
  const testUsername = "test@email.com";
=======
>>>>>>> client-passport
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

<<<<<<< HEAD
  it("should render the dashboard with all required components", () => {
    window.sessionStorage.setItem("username", JSON.stringify(testUsername));
    window.sessionStorage.setItem("userUuid", JSON.stringify("2"));
=======
  it("should render the Dashboard component", () => {
    setLoggedInUser();
    const testUser = JSON.parse(window.sessionStorage.getItem("username"));
>>>>>>> client-passport
    render(
      <Router history={history}>
        <Dashboard />
      </Router>
    );
<<<<<<< HEAD
    // All roles in the header
=======
>>>>>>> client-passport
    expect(screen.getByRole("button", { name: "Go back" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Dashboard" })
    ).toBeInTheDocument();
<<<<<<< HEAD
    expect(
      screen.getByRole("button", { name: testUsername })
    ).toBeInTheDocument();
    // Create player dashboard
=======
    expect(screen.getByRole("button", { name: testUser })).toBeInTheDocument();
>>>>>>> client-passport
    expect(screen.getByPlaceholderText("Player Name")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Player" })
    ).toBeInTheDocument();
<<<<<<< HEAD
    // Table to display players
=======
>>>>>>> client-passport
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByRole("row", {
        name: "Player Name Select Player Edit Player Delete Player Player Stats",
      })
    ).toBeInTheDocument();
  });

<<<<<<< HEAD
  // it("should return an unauthorized user to login page", () => {
  //   sessionStorage.clear();
  //   history.push("/dashboard");
  //   render(
  //     <Router history={history}>
  //       <Dashboard />
  //     </Router>
  //   );
  //   console.log(history.location.pathname);
  //   expect(JSON.parse(window.sessionStorage.getItem("username"))).toBe("");
  // });

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
=======
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
>>>>>>> client-passport
});
