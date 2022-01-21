import React from "react";

import { render } from "../../../test-utils";

import PlayerData from "../PlayerData";

describe("<PlayerData />", () => {
  // Ignore console.error message for testing purposes
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("should throw error if game variant is not one of the game choices", async () => {
    expect(() =>
      render(
        <PlayerData
          variant={undefined}
          playerList={[{ playerName: "Test" }, { playerName: "User" }]}
        />
      )
    ).toThrow("Invalid variant!");
  });
});
