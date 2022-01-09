import React from "react";

import { render } from "../../../test-utils";

import PlayerData from "../PlayerData";

const players = [{ playerName: "Adam" }, { playerName: "Paul" }];

describe("<PlayerData />", () => {
  it("should throw error based on invalid variant of game", () => {
    expect(() => render(<PlayerData playerList={players} />)).toThrow(
      new Error("Invalid variant!")
    );
  });
});
