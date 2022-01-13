import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import styled from "styled-components";
import { ThemeContext } from "./contexts/ThemeProvider";
import { PingContext } from "./contexts/PingProvider";
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

const App = () => {
  const { getPingFromServer } = useUserAPI();
  const { theme, themeToggle } = useContext(ThemeContext);
  const { ping } = useContext(PingContext);
  const oppositeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    setTimeout(() => {
      getPingFromServer();
    });
  }, [getPingFromServer]);

  return (
    <>
      <Header
        title="Dart Scoreboard"
        switchThemeButton
        theme={theme}
        themeToggle={themeToggle}
      />
      <Container className="btnTable mt-5">
        {ping && (
          <StyledLink to="/game/login">
            <StyledButton variant={oppositeTheme}>Log In</StyledButton>
          </StyledLink>
        )}
        {ping ? (
          <StyledLink to="/create_player">
            <StyledButton variant={oppositeTheme}>
              Continue as Guest
            </StyledButton>
          </StyledLink>
        ) : (
          <StyledLink to="/create_player">
            <StyledButton variant={oppositeTheme}>Create Player</StyledButton>
          </StyledLink>
        )}
        <StyledLink to="/rules">
          <StyledButton variant={oppositeTheme}>Rules</StyledButton>
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
