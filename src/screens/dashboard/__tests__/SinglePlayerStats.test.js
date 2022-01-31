import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { screen, render, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import DisplaySinglePlayerStats from "../SinglePlayerStats";

const player = { id: 1, playerName: "Test" };

describe("<DisplaySinglePlayerStats />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    moxios.install(axios);
    render(
      <Router history={history}>
        <DisplaySinglePlayerStats player={player} />
      </Router>
    );
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should open the modal for a single player stats when the button is clicked", async () => {
    const button = screen.getByRole("button", {
      name: "FindSingleStatsPlayer1",
    });
    userEvent.click(button);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            gamesPlayed: 0,
            gamesWon: 0,
            id: 1,
            player_id: 1,
            winPercentage: 0,
          },
        ],
      });
    });
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Test's Stats")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
      expect(
        screen.getByRole("row", {
          name: "Games Played Games Won Win Percentage",
        })
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByRole("row", { name: "0 0 0" }));
    });
  });

  it("should close the modal", async () => {
    const button = screen.getByRole("button", {
      name: "FindSingleStatsPlayer1",
    });
    userEvent.click(button);
    userEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
