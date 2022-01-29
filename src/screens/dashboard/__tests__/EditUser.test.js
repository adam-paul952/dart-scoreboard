import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import axios from "axios";
import moxios from "moxios";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import EditUserInfo from "../EditUser";

describe("<EditUserInfo />", () => {
  const history = createMemoryHistory();
  const testEmail = "test@email.com";
  const testPassword = "testPassword";

  beforeEach(() => {
    window.sessionStorage.setItem("username", JSON.stringify(testEmail));
    moxios.install(axios);
    render(
      <Router history={history}>
        <EditUserInfo showEditUser={true} />
      </Router>
    );
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should render the component to confirm credentials", () => {
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Edit User")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { value: testEmail })
    ).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Confirm Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Change Password" })
    ).toBeInTheDocument();
  });
});
