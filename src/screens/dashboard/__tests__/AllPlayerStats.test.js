import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { screen, render, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import DisplayAllPlayerStats from "../AllPlayerStats";

describe("<DisplayAllPlayerStats", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    moxios.install(axios);
    render(
      <Router history={history}>
        <DisplayAllPlayerStats />
      </Router>
    );
    userEvent.click(screen.getByRole("button", { name: "displayPlayerStats" }));
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should render the modal", () => {
    expect(screen.getByText("All Stats")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    expect(
      screen.getByRole("row", {
        name: "Player Name Games Played Games Won Win Percentage",
      })
    ).toBeInTheDocument();
  });

  it("should close the modal", async () => {
    userEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(screen.queryByText("All Stats")).not.toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Close" })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("row", {
          name: "Player Name Games Played Games Won Win Percentage",
        })
      ).not.toBeInTheDocument();
    });
  });

  it("should display the modal with players from the users list", async () => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            player_id: 1,
            playerName: "Player 1",
            gamesPlayed: 1,
            gamesWon: 1,
            winPercentage: 100,
          },
          {
            player_id: 2,
            playerName: "Player 2",
            gamesPlayed: 1,
            gamesWon: 0,
            winPercentage: 0,
          },
        ],
      });
    });
    await waitFor(() => {
      expect(
        screen.getByRole("row", { name: "Player 1 1 1 100" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("row", { name: "Player 2 1 0 0" })
      ).toBeInTheDocument();
    });
  });
});
