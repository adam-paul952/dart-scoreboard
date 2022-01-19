import React from "react";
import PropTypes from "prop-types";

import { BiCaretLeft } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { BsSlash } from "react-icons/bs";

const CricketPlayerData = ({ player, index, currentPlayerById }) => {
  const hitTargets = [
    player.scoreList.filter((hitNum) => hitNum === 20).length,
    player.scoreList.filter((hitNum) => hitNum === 19).length,
    player.scoreList.filter((hitNum) => hitNum === 18).length,
    player.scoreList.filter((hitNum) => hitNum === 17).length,
    player.scoreList.filter((hitNum) => hitNum === 16).length,
    player.scoreList.filter((hitNum) => hitNum === 15).length,
    player.scoreList.filter((hitNum) => hitNum === 25).length,
  ];

  return (
    <tr key={index}>
      {currentPlayerById === player.id ? (
        <th key={index}>
          {player.playerName}
          <BiCaretLeft size={20} />
        </th>
      ) : (
        <th key={index}>{player.playerName}</th>
      )}
      {hitTargets.map((hitTarget, index) => {
        return (
          <td key={index}>
            <CricketScoreboardDisplay player={player} hitTarget={hitTarget} />
          </td>
        );
      })}
      <td>{player.score}</td>
    </tr>
  );
};

CricketPlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayerById: PropTypes.number,
};

export default CricketPlayerData;

const CricketScoreboardDisplay = ({ hitTarget }) => {
  if (hitTarget === 1) {
    return <BsSlash aria-label="hitOne" style={{ fontSize: "25px" }} />;
  } else if (hitTarget === 2) {
    return <AiOutlineClose aria-label="hitTwo" style={{ fontSize: "20px" }} />;
  } else if (hitTarget >= 3) {
    return (
      <AiOutlineCloseCircle
        aria-label="hitThree"
        style={{ fontSize: "28px" }}
      />
    );
  }
  return null;
};

CricketScoreboardDisplay.propTypes = {
  player: PropTypes.object,
  hitTarget: PropTypes.number,
};
