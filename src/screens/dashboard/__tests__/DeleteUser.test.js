import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import moxios from "moxios";
import axios from "axios";

import { render, screen, waitFor } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import DeleteUser from "../DeleteUser";

describe("<DeleteUser />", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

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
});
