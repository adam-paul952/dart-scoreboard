import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsSkipBackward } from "react-icons/bs";

const Header = ({ title, goBackButton, resetButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      <h1>{title}</h1>
      {goBackButton && (
        <Button onClick={() => history.goBack()} variant="secondary">
          <BsSkipBackward />
          Go back
        </Button>
      )}
      {resetButton && <Button variant="secondary">Reset Game</Button>}
    </div>
  );
};

export default Header;
