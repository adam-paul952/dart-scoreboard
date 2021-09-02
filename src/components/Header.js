import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsSkipBackward } from "react-icons/bs";

const Header = ({ title, goBackButton, resetButton, resetScoreList }) => {
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
      {resetButton && (
        <Button
          onClick={() => {
            resetScoreList();
          }}
          variant="secondary"
        >
          Reset Game
        </Button>
      )}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  goBackButton: PropTypes.bool,
  resetButton: PropTypes.bool,
  resetScoreList: PropTypes.func,
};

export default Header;
