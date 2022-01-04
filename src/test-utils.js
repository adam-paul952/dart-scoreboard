import React from "react";
import { render } from "@testing-library/react";
import { PingProvider } from "./contexts/PingProvider";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Theme from "./contexts/theme";

const customRender = (ui, options) => {
  const AppWithProviders = ({ children }) => {
    return (
      <ThemeProvider>
        <Theme>
          <PingProvider value={{ ping: true }}>{children}</PingProvider>
        </Theme>
      </ThemeProvider>
    );
  };
  render(ui, { wrapper: AppWithProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
