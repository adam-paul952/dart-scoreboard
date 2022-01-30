import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { screen, render, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import CreatePlayerDashboard from "../CreatePlayerDashboard";

const createPlayer = jest.fn();
const getPlayerByUserId = jest.fn();

describe("<CreatePlayerDashboard", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    moxios.install(axios);
    render(
      <Router history={history}>
        <CreatePlayerDashboard
          createPlayer={createPlayer}
          getPlayerByUserId={getPlayerByUserId}
        />
      </Router>
    );
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should create a new player", async () => {
    const playerName = "Player 1";
    const nameInput = screen.getByPlaceholderText("Player Name");
    userEvent.type(nameInput, playerName);
    expect(nameInput).toHaveValue(playerName);
    userEvent.click(screen.getByRole("button", { name: "Add Player" }));
    await waitFor(() => {
      expect(createPlayer).toHaveBeenCalledWith(playerName);
      expect(getPlayerByUserId).toHaveBeenCalled();
    });
  });

  it("should leave the Add Player button disabled until the player name is longer then 3 characters", () => {
    const nameInput = screen.getByPlaceholderText("Player Name");
    const addPlayerButton = screen.getByRole("button", { name: "Add Player" });
    expect(addPlayerButton).toBeDisabled();
    userEvent.type(nameInput, "T");
    expect(nameInput).toHaveValue("T");
    expect(addPlayerButton).toBeDisabled();
    userEvent.type(nameInput, "e");
    expect(nameInput).toHaveValue("Te");
    expect(addPlayerButton).toBeDisabled();
    userEvent.type(nameInput, "s");
    expect(nameInput).toHaveValue("Tes");
    expect(addPlayerButton).not.toBeDisabled();
  });
});
