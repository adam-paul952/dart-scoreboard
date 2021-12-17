import React from "react";
import PropTypes from "prop-types";

import { BiCaretLeft } from "react-icons/bi";

const EliminationPlayerData = ({ player, index, currentPlayerById }) => {
  return (
    <tr key={index}>
      {currentPlayerById === player.id ? (
        <th>
          {player.playerName}
          <BiCaretLeft size={20} />
        </th>
      ) : (
        <th>{player.playerName}</th>
      )}
      <td>{player.score}</td>
      <td>{player.lives}</td>
    </tr>
  );
};

EliminationPlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayerById: PropTypes.number,
};

export default EliminationPlayerData;
