import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import DeleteUser from "../DeleteUser";

describe("<DeleteUser />", () => {
  const history = createMemoryHistory();
  const testEmail = "test@email.com";

  beforeEach(() => {
    moxios.install(axios);
    window.sessionStorage.setItem("username", JSON.stringify(testEmail));
    render(
      <Router history={history}>
        <DeleteUser />
      </Router>
    );
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should render the delete user screen", () => {
    expect(
      screen.getByText(`Are you sure you would like to delete ${testEmail}?`)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Delete User" })
    ).toBeInTheDocument();
  });

  it("should delete current user", async () => {
    const deleteUserButton = screen.getByRole("button", {
      name: "Delete User",
    });
    userEvent.click(deleteUserButton);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    expect(window.sessionStorage.getItem("username")).toBeNull();
    expect(history.location.pathname).toBe("/game/login");
  });
});
