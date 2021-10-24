import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Theme from "./contexts/theme";

import { ThemeProvider } from "./contexts/Provider";
import { PingProvider } from "./contexts/PingProvider";

ReactDOM.render(
  <ThemeProvider>
    <Theme>
      <PingProvider>
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
      </PingProvider>
    </Theme>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
