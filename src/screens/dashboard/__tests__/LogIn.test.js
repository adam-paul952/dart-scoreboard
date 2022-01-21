import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import moxios from "moxios";
import axios from "axios";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import LoginUser from "../LogIn";

describe("<LoginUser />", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  // Test all required elements are in component
  it("should render the login screen", () => {
    render(
      <Router history={history}>
        <LoginUser />
      </Router>
    );
    expect(
      screen.getByRole("navigation", { name: "Log In" })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log In" })).toBeInTheDocument();
    expect(
      screen.getByText("No account, no problem click here to register")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });

  it("should change the window location for registration", () => {
    render(
      <Router history={history}>
        <LoginUser />
      </Router>
    );
    userEvent.click(screen.getByRole("button", { name: "Register" }));
    expect(history.location.pathname).toBe("/game/register");
  });

  it("should successfully log a user in", async () => {
    render(
      <Router history={history}>
        <LoginUser />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Log In" });
    userEvent.type(emailInput, "test@email.com");
    userEvent.type(passwordInput, "password");
    expect(emailInput.value).toBe("test@email.com");
    expect(passwordInput.value).toBe("password");
    userEvent.click(submitButton);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { username: "test@email.com", uuid: 1 },
      });
    });
    await waitFor(() => {
      expect(screen.getByText("Login Successful")).toBeInTheDocument();
    });
    expect(
      screen.getByRole("button", { name: "Continue" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Register" })
    ).not.toBeInTheDocument();
  });

  it("should not log a user in with incorrect username", async () => {
    window.alert = jest.fn();
    render(
      <Router history={history}>
        <LoginUser />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Log In" });
    userEvent.type(emailInput, "test");
    userEvent.type(passwordInput, "password");
    userEvent.click(submitButton);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({ status: 400, message: `No User Found` })
        .then((err) => {
          expect(err).toBeTruthy();
        });
    });
    await waitFor(() => {
      expect(window.alert).toBeCalledWith("Unsuccessful login");
    });
  });

  it("should not log a user in with incorrect password", async () => {
    window.alert = jest.fn();
    render(
      <Router history={history}>
        <LoginUser />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Log In" });
    userEvent.type(emailInput, "test@email.com");
    userEvent.type(passwordInput, "passwo");
    userEvent.click(submitButton);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({ status: 401, message: `No User Found` })
        .then((err) => {
          expect(err).toBeTruthy();
        });
    });
    await waitFor(() => {
      expect(window.alert).toBeCalledWith("Unsuccessful login");
    });
  });
});
