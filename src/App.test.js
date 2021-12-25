import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import { PingProvider } from "./contexts/PingProvider";

describe("<App />", () => {
  beforeEach(() => {
    shallow(
      <PingProvider>
        <App />
      </PingProvider>
    );
  });
  it("should render the component without crashing", () => {
    expect(screen.getByText(/Dart Scoreboard/i)).toBeTruthy();
  });
});
