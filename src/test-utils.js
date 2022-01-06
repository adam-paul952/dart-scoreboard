import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PingProvider } from "./contexts/PingProvider";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Theme from "./contexts/theme";

const AppWithProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <Theme>
        <PingProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </PingProvider>
      </Theme>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => {
  render(ui, { wrapper: AppWithProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
