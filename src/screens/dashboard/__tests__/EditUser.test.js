import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import EditUserInfo from "../EditUser";

describe("<EditUserInfo />", () => {
  const history = createMemoryHistory();
  const testEmail = "test@email.com";
  const testPassword = "testPassword";

  beforeEach(() => {
    moxios.install(axios);
    render(
      <Router history={history}>
        <EditUserInfo />
      </Router>
    );
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should render the component to confirm credentials", () => {
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Current Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Confirm Credentials" })
    ).toBeInTheDocument();
  });

  it("should allow user to change details once credentials are confirmed", () => {
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Current Password");
    userEvent.type(emailInput, testEmail);
    userEvent.type(passwordInput, testPassword);
    userEvent.click(
      screen.getByRole("button", { name: "Confirm Credentials" })
    );
    expect(screen.getByPlaceholderText("New Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Confirm New Password")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Edit User Info" })
    ).toBeInTheDocument();
  });

  it("should allow a user to change username and password", async () => {
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Current Password");
    userEvent.type(emailInput, testEmail);
    userEvent.type(passwordInput, testPassword);
    userEvent.click(
      screen.getByRole("button", { name: "Confirm Credentials" })
    );
    userEvent.type(emailInput, "test1@email.com");
    userEvent.type(screen.getByPlaceholderText("New Password"), "test");
    userEvent.type(screen.getByPlaceholderText("Confirm New Password"), "test");
    userEvent.click(screen.getByRole("button", { name: "Edit User Info" }));
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { username: "test1@email.com" },
      });
    });
    expect(history.location.pathname).toBe("/dashboard");
  });
});
