import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

<<<<<<< HEAD
import axios from "axios";
import moxios from "moxios";

import { render, screen } from "../../../test-utils";
=======
import moxios from "moxios";
import axios from "axios";

import { render, screen, waitFor } from "../../../test-utils";
>>>>>>> client-passport
import userEvent from "@testing-library/user-event";

import DeleteUser from "../DeleteUser";

describe("<DeleteUser />", () => {
  const history = createMemoryHistory();
<<<<<<< HEAD
  const testEmail = "test@email.com";

  beforeEach(() => {
    moxios.install(axios);
    window.sessionStorage.setItem("username", JSON.stringify(testEmail));
    render(
      <Router history={history}>
        <DeleteUser />
      </Router>
    );
=======
  beforeEach(() => {
    moxios.install(axios);
>>>>>>> client-passport
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

<<<<<<< HEAD
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
=======
  it("should render the DeleteUser component", () => {
    render(
      <Router history={history}>
        <DeleteUser showDeleteUser={true} />
      </Router>
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Delete User")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure you would like to delete your account?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Note: This can not be undone!")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Delete Account" })
    ).toBeInTheDocument();
  });

  //   it("should close the modal", async () => {
  //     const hideModal = () => (showDeleteUser = false);
  //     render(
  //       <Router history={history}>
  //         <DeleteUser
  //           showDeleteUser={true}
  //           setShowDeleteUser={() => hideModal()}
  //         />
  //       </Router>
  //     );
  //     const closeButton = screen.getByRole("button", { name: "Close" });
  //     await waitFor(() => {
  //       userEvent.click(closeButton);
  //     });
  //     await waitFor(() => {
  //       expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  //     });
  //   });
>>>>>>> client-passport
});
