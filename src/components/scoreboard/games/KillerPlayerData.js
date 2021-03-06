import React from "react";
import PropTypes from "prop-types";

import { BiCaretLeft } from "react-icons/bi";
import { AiOutlineCheckSquare } from "react-icons/ai";

const KillerPlayerData = ({ player, index, currentPlayerById }) => {
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
      {player.killer ? (
        <td>
          <AiOutlineCheckSquare aria-label="killerCheckmark" size={20} />
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  );
};

KillerPlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayerById: PropTypes.number,
};

export default KillerPlayerData;
