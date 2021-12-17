import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

import { ThemeContext } from "../../contexts/Provider";

import TableHeader from "./TableHeader";
import PlayerData from "./PlayerData";
import DisplayCurrentRoundInformation from "./DisplayCurrentRoundInfo";

const Scoreboard = ({
  playerList,
  x01Points,
  getCurrentPlayerById,
  variant,
  currentPlayer,
  round,
}) => {
  const { theme } = useContext(ThemeContext);
  const currentPlayerById = getCurrentPlayerById();

  return (
    <>
      <Table variant={theme} bordered striped size="sm">
        <TableHeader variant={variant} />
        <PlayerData
          playerList={playerList}
          variant={variant}
          x01Points={x01Points}
          currentPlayer={currentPlayer}
          currentPlayerById={currentPlayerById}
        />
      </Table>
      {variant === "x01" && (
        <DisplayCurrentRoundInformation
          currentPlayer={currentPlayer}
          round={round}
        />
      )}
    </>
  );
};

Scoreboard.propTypes = {
  variant: PropTypes.string,
  playerList: PropTypes.array,
  x01Points: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  getCurrentPlayer: PropTypes.func,
  getCurrentPlayerByName: PropTypes.func,
  getCurrentPlayerById: PropTypes.func,
  currentPlayer: PropTypes.object,
  round: PropTypes.number,
};

export default Scoreboard;
