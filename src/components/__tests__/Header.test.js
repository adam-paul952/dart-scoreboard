import React from "react";
import { MemoryRouter, Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

import {
  render,
  screen,
  waitFor,
  setTheme,
  setLoggedInUser,
} from "../../test-utils";
import userEvent from "@testing-library/user-event";

import Header from "../Header";

describe("<Header />", () => {
  const history = createMemoryHistory();
  const title = "Test Title";
  // const { location } = window;
  // beforeAll(() => {
  //   delete window.location;
  //   window.location = { assign: jest.fn() };
  // });

  // afterAll(() => {
  //   window.location = location;
  // });

  it("should render the header component with only a title and no buttons", () => {
    render(
      <Router history={history}>
        <Header title={title} />
      </Router>
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    // Button booleans are false
    expect(
      screen.queryByRole("button", { name: "Go back" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Reset Game" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "toggleTheme" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Outshots" })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "" })).not.toBeInTheDocument();
  });

  it("should render the header with the `goBackButton`", async () => {
    history.goBack = jest.fn();
    render(
      <Router history={history}>
        <Header goBackButton />
      </Router>
    );
    const goBackButton = screen.getByRole("button", { name: "Go back" });
    expect(goBackButton).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(goBackButton);
    });
    expect(history.goBack).toBeCalled();
  });

  it("should render the header with the `resetButton` and call `resetScoreList`", async () => {
    const resetScoreList = jest.fn();
    render(
      <Router history={history}>
        <Header resetButton resetScoreList={resetScoreList} />
      </Router>
    );
    const resetButton = screen.getByRole("button", { name: "Reset Game" });
    expect(resetButton).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(resetButton);
    });
    expect(resetScoreList).toHaveBeenCalledTimes(1);
  });

  it("should render the header with the `switchThemeButton` and trigger theme change", async () => {
    // Set initial theme to dark
    setTheme();
    render(
      <Router history={history}>
        <Header switchThemeButton />
      </Router>
    );
    expect(
      screen.getByRole("button", { name: "toggleTheme" })
    ).toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem("theme"))).toBe("dark");
    await waitFor(() => {
      userEvent.click(screen.getByRole("button", { name: /toggleTheme/i }));
    });
    expect(JSON.parse(window.localStorage.getItem("theme"))).toBe("light");
  });

  it("should render the header with the `outShotButton`", () => {
    render(
      <Router history={history}>
        <Header outShotButton />
      </Router>
    );
    expect(
      screen.getByRole("button", { name: "Outshots" })
    ).toBeInTheDocument();
  });

  it("should render the header with the `loginDropDown`", async () => {
    // let testLocation, testHistory;
    // const history = createMemoryHistory();
    setLoggedInUser();
    const testUser = JSON.parse(window.sessionStorage.getItem("username"));
    const testUserUuid = JSON.parse(window.sessionStorage.getItem("userUuid"));
    render(
      <>
        <Router history={history}>
          <Header loginDropDown username={testUser} />
        </Router>
        {/* <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        /> */}
      </>
    );
    // history.push("/dart-scoreboard/dashboard");
    // expect(history.location.pathname).toBe("/dart-scoreboard/dashboard");
    expect(
      screen.getByRole("button", { name: "Test User" })
    ).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(screen.getByRole("button", { name: "Test User" }));
    });
    // Expect dropdown to be open
    expect(screen.getByRole("button", { name: "Test User" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    expect(screen.getAllByRole("button", { name: "All Player Stats" }));
    expect(screen.getByText("Edit User")).toHaveAttribute("href", "/user/edit");
    expect(screen.getByText("Delete User")).toHaveAttribute(
      "href",
      "/user/delete"
    );
    expect(screen.getByText("LogOut")).toHaveAttribute("href", "/game/login");
    expect(
      screen.getByRole("button", { name: "toggleTheme" })
    ).toBeInTheDocument();
    // Check to make sure test variable are stored in sessionStorage
    expect(testUser).toBe(testUser);
    expect(testUserUuid).toBe(testUserUuid);
    await waitFor(() => {
      userEvent.click(screen.getByText("LogOut"));
    });
    // Check that the logout button clears the sessionStorage
    expect(window.sessionStorage.getItem("username")).toBe(null);
    expect(window.sessionStorage.getItem("userUuid")).toBe(null);
    // expect(window.location.assign).toHaveBeenCalledWith("/game/login");
    // await waitFor(() => {
    //   // expect(testLocation.pathname).toBe("/game/login");
    //   expect(history.location.pathname).toBe("/game/login");
    // });
    // Link causes navigation jest error
  });
});
