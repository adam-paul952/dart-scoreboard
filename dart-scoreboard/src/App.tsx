import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Button } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <>
      <Link to="/create_player">
        <Button>Create Player</Button>
      </Link>
      <Link to="/rules">
        <Button>Rules</Button>
      </Link>
    </>
  );
};

export default App;
