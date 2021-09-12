import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsSkipBackward } from "react-icons/bs";
import useGame from "../util/useGame";

const Header = ({ title, goBackButton, resetButton }) => {
  const { resetScoreList } = useGame();
  const history = useHistory();
  const eraseData = () => {
    resetScoreList();
  };
  return (
    <div className="header">
      {goBackButton && (
        <Button onClick={() => history.goBack()} variant="secondary">
          <BsSkipBackward />
          Go back
        </Button>
      )}
      <h1>{title}</h1>
      {resetButton && (
        <Button onClick={() => eraseData()} variant="secondary">
          Reset Game
        </Button>
      )}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  goBackButton: PropTypes.bool,
  resetButton: PropTypes.bool,
  resetScoreList: PropTypes.func,
};

export default Header;
