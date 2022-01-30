import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import CreateGameDashboard from "../CreateGameDashboard";

const checkedPlayerList = [
  { id: 1, playerName: "Player 1" },
  { id: 2, playerName: "Player 2" },
];
const setPlayerList = jest.fn();
const shufflePlayerArray = jest.fn();

describe("<CreateGameDashboard />", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    moxios.install(axios);
    render(
      <Router history={history}>
        <CreateGameDashboard
          checkedPlayerList={checkedPlayerList}
          setPlayerList={setPlayerList}
          shufflePlayerArray={shufflePlayerArray}
        />
      </Router>
    );
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should render the create game buttons", () => {
    expect(
      screen.getByRole("button", { name: "Create Game" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Random Players" })
    ).toBeInTheDocument();
  });

  it("should redirect users to create game and set playerlist with selected players", () => {
    userEvent.click(screen.getByRole("button", { name: "Create Game" }));
    expect(setPlayerList).toHaveBeenCalledWith(checkedPlayerList);
    expect(history.location.pathname).toBe("/game/create");
  });

  it("should shuffle the player array", () => {
    userEvent.click(screen.getByRole("button", { name: "Random Players" }));
    expect(shufflePlayerArray).toHaveBeenCalledWith(checkedPlayerList);
  });
});
