import React from "react";
import { render, screen } from "./test-utils";

import Routes from "./Routes";
import App from "./App";

describe("<App />", () => {
  it("should render the component without crashing", () => {
    render(
      <Routes>
        <App />
      </Routes>
    );
    expect(screen.getByRole("button", { name: /Create Player/i }));
    expect(screen.getByRole("button", { name: /Rules/i }));
  });

  // it("should render the component with a ping=true", () => {

  // })
});
