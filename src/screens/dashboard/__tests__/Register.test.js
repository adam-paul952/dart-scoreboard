import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import UserRegistration from "../Register";

describe("<UserRegistration />", () => {
  const history = createMemoryHistory();
  const testEmail = "test@email.com";
  const testPassword = "testPassword";

  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should render the user registration with all components", () => {
    render(
      <Router history={history}>
        <UserRegistration />
      </Router>
    );
    expect(screen.getByRole("button", { name: "Go back" })).toBeInTheDocument();
    expect(screen.getByLabelText("User Registration")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register", disabled: true })
    ).toBeInTheDocument();
  });

  it("should alert the user that passwords do not match", () => {
    render(
      <Router history={history}>
        <UserRegistration />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");
    userEvent.type(emailInput, testEmail);
    userEvent.type(passwordInput, testPassword);
    userEvent.type(confirmPasswordInput, "test");
    expect(screen.getByText("Passwords must match")).toBeInTheDocument();
  });

  it("should leave the register button disabled until proper input of fields", () => {
    render(
      <Router history={history}>
        <UserRegistration />
      </Router>
    );
    const passwordInput = screen.getByPlaceholderText("Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");
    userEvent.type(passwordInput, "pa");
    userEvent.type(confirmPasswordInput, "pa");
    expect(screen.getByPlaceholderText("Enter email").value).toBe("");
    expect(passwordInput.value.length).toBe(2);
    expect(confirmPasswordInput.value.length).toBe(2);
    expect(
      screen.getByRole("button", { name: "Register", disabled: true })
    ).toBeInTheDocument();
  });

  it("should successfully register a user", async () => {
    render(
      <Router history={history}>
        <UserRegistration />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");
    userEvent.type(emailInput, testEmail);
    userEvent.type(passwordInput, testPassword);
    userEvent.type(confirmPasswordInput, testPassword);
    expect(
      screen.getByRole("button", { name: "Register", disabled: false })
    ).toBeInTheDocument();
    const registerButton = screen.getByRole("button", { name: "Register" });
    userEvent.click(registerButton);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { username: testEmail, uuid: 1 },
      });
    });
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Continue to login" })
      ).toBeInTheDocument();
    });
    expect(
      screen.queryByRole("button", { name: "Register" })
    ).not.toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "Continue to login" }));
    expect(history.location.pathname).toBe("/game/login");
  });

  it("should alert the user that username is taken", async () => {
    window.alert = jest.fn();
    render(
      <Router history={history}>
        <UserRegistration />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");
    const submitButton = screen.getByRole("button", { name: "Register" });
    userEvent.type(emailInput, testEmail);
    userEvent.type(passwordInput, testPassword);
    userEvent.type(confirmPasswordInput, testPassword);
    await waitFor(() => {
      userEvent.click(submitButton);
    });
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({ status: 400, message: `Username already exists` })
        .then((err) => {
          expect(err).toBeTruthy();
        });
    });
    await waitFor(() => {
      expect(window.alert).toBeCalledWith("Username already exists");
    });
  });
});
