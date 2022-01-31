import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import SelectPlayersFromDB from "../ShowPlayersFromDB";

const userPlayerList = [
  { id: 1, playerName: "Player 1" },
  { id: 2, playerName: "Player 2" },
];

describe("<SelectPlayersFromDB />", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should display players from DB", async () => {
    render(
      <Router history={history}>
        <SelectPlayersFromDB userPlayerList={userPlayerList} />
      </Router>
    );
    expect(screen.getByText("Player 1")).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "SelectPlayer1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "EditPlayer1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "DeletePlayer1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "FindSingleStatsPlayer1" })
    ).toBeInTheDocument();
    expect(screen.getByText("Player 2")).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "SelectPlayer2" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "EditPlayer2" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "DeletePlayer2" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "FindSingleStatsPlayer2" })
    ).toBeInTheDocument();
  });

  it("should delete a player", async () => {
    const deletePlayerById = jest.fn();
    const getPlayerByUserId = jest.fn();
    render(
      <Router history={history}>
        <SelectPlayersFromDB
          userPlayerList={userPlayerList}
          deletePlayerById={deletePlayerById}
          getPlayerByUserId={getPlayerByUserId}
        />
      </Router>
    );
    userEvent.click(screen.getByRole("button", { name: "DeletePlayer1" }));
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: "Player 2 deleted successfully",
        },
      });
      expect(deletePlayerById).toHaveBeenCalledTimes(1);
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            id: 1,
            playerName: "Player 1",
          },
        });
      });
      expect(getPlayerByUserId).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Player 1")).toBeInTheDocument();
      expect(screen.queryByText("Player 2")).not.toBeInTheDocument();
    });
  });
});
