import React from "react";

import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import CreateGame from "../createGame/CreateGame";

describe("<Create Game />", () => {
  beforeEach(() => {
    render(<CreateGame />);
  });

  it("should render the create game component", () => {
    expect(screen.getByText(/Create a Game/i)).toBeInTheDocument();
    expect(screen.getByText(/Please Select a Game/i)).toBeInTheDocument();
  });
});
