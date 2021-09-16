import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const linkStyle = {
    margin: "2px",
    padding: "10px",
    border: "2px solid black",
    borderRadius: "10px",
    // background: "gray",
    width: "300px",
    fontSize: "25px",
    color: "black",
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    justifyContent: "center",
  };

  return (
    <>
      <Header title="Dart Scoreboard" />
      <div className="btnTable">
        <Link className="optionBtn" to="/create_player" style={linkStyle}>
          Create Player
        </Link>
        <Link className="optionBtn" to="/rules" style={linkStyle}>
          Rules
        </Link>
      </div>
    </>
  );
}

export default App;
