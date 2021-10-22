import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import styled from "styled-components";
import { ThemeContext } from "./contexts/Provider";
import useUserAPI from "./util/useUserAPI";

const StyledLink = styled(Link)`
text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        `;

const StyledButton = styled(Button)`
  margin: 2px;
  display: flex;
  width: 300px;
  border: 2px solid black;
  justify-content: center;
  font-size: 25px;
  flex-direction: row;
  border-radius: 10px;
`;

function App() {
  const { getPingFromServer, ping } = useUserAPI();
  const { theme } = useContext(ThemeContext);
  const oppositeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    setTimeout(() => {
      getPingFromServer();
    });
  }, []);

  return (
    <>
      <Header title="Dart Scoreboard" switchThemeButton />
      <div className="btnTable">
        {ping && (
          <StyledLink to="/game/login">
            <StyledButton variant={oppositeTheme}>Log In</StyledButton>
          </StyledLink>
        )}
        <StyledLink to="/create_player">
          <StyledButton variant={oppositeTheme}>Continue as Guest</StyledButton>
        </StyledLink>
        <StyledLink to="/rules">
          <StyledButton variant={oppositeTheme}>Rules</StyledButton>
        </StyledLink>
      </div>
    </>
  );
}

export default App;
