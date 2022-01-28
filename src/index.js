import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Theme from "./contexts/theme";

import { ThemeProvider } from "./contexts/ThemeProvider";
import { PingProvider } from "./contexts/PingProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import Background from "./components/Background";

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider>
      <Theme>
        <PingProvider>
          <Background>
            <React.StrictMode>
              <Routes />
            </React.StrictMode>
          </Background>
        </PingProvider>
      </Theme>
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
