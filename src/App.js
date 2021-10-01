import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import styled from "styled-components";
import { ThemeContext } from "./contexts/Provider";

const StyledLink = styled(Link)`
text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;`;

const StyledButton = styled(Button)`
  margin: 0.2rem;
  display: flex;
  width: 18rem;
  border: 2px solid black;
  justify-content: center;
  font-size: 1.6rem;
  flex-direction: row;
  border-radius: 0.7rem;
`;

function App() {
  const { theme } = useContext(ThemeContext);
  const oppositeTheme = theme === "dark" ? "light" : "dark";

  return (
    <>
      <Header title="Dart Scoreboard" />
      <div className="btnTable">
        <StyledLink to="">
          <StyledButton variant={oppositeTheme}>Log In</StyledButton>
        </StyledLink>
        <StyledLink to="/create_player">
          <StyledButton variant={oppositeTheme}>Create Player</StyledButton>
        </StyledLink>
        <StyledLink to="/rules">
          <StyledButton variant={oppositeTheme}>Rules</StyledButton>
        </StyledLink>
      </div>
    </>
  );
}

export default App;
