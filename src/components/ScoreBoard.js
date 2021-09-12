import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { BiCaretLeft } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { BsSlash } from "react-icons/bs";

const Scoreboard = ({
  playerList,
  x01Points,
  getCurrentPlayer,
  getCurrentPlayerByName,
  getCurrentPlayerById,
  variant,
}) => {
  const currentPlayer = getCurrentPlayer();
  const currentPlayerByName = getCurrentPlayerByName();
  const currentPlayerById = getCurrentPlayerById();

  return (
    <>
      It&apos;s {currentPlayerByName}&apos;s turn !
      <Table>
        <TableHeader variant={variant} />
        <PlayerData
          playerList={playerList}
          variant={variant}
          x01Points={x01Points}
          currentPlayer={currentPlayer}
          currentPlayerById={currentPlayerById}
        />
      </Table>
    </>
  );
};

Scoreboard.propTypes = {
  variant: PropTypes.string,
  playerList: PropTypes.array,
  x01Points: PropTypes.number,
  getCurrentPlayer: PropTypes.func,
  getCurrentPlayerByName: PropTypes.func,
  getCurrentPlayerById: PropTypes.func,
};

const inningNumber = ["Player", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Total"];
const cricketNumbers = ["Player", 20, 19, 18, 17, 16, 15, "Bull", "Score"];
const eliminationHeader = ["Player", "Score", "Lives"];

const TableHeader = ({ variant }) => {
  return (
    <>
      <thead>
        <tr>
          {variant === "baseball" &&
            inningNumber.map((inning, index) => {
              return <th key={index}>{inning}</th>;
            })}
          {variant === "cricket" &&
            cricketNumbers.map((number, index) => {
              return <th key={index}>{number}</th>;
            })}
          {variant === "elimination" &&
            eliminationHeader.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
        </tr>
      </thead>
    </>
  );
};

TableHeader.propTypes = { variant: PropTypes.string };

const PlayerData = ({
  playerList,
  variant,
  currentPlayer,
  currentPlayerById,
}) => {
  return (
    <>
      <tbody>
        {playerList.map((player, index) => {
          switch (variant) {
            case "baseball":
              return (
                <BaseballPlayerData
                  key={index}
                  player={player}
                  index={index}
                  currentPlayer={currentPlayer}
                  currentPlayerById={currentPlayerById}
                />
              );
            case "cricket":
              return (
                <CricketPlayerData
                  key={index}
                  player={player}
                  index={index}
                  currentPlayer={currentPlayer}
                  currentPlayerById={currentPlayerById}
                />
              );
            case "x01":
              return (
                <X01PlayerData
                  key={index}
                  player={player}
                  index={index}
                  currentPlayer={currentPlayer}
                  currentPlayerById={currentPlayerById}
                />
              );
            case "elimination":
              return (
                <EliminationPlayerData
                  key={index}
                  player={player}
                  index={index}
                  currentPlayer={currentPlayer}
                  currentPlayerById={currentPlayerById}
                />
              );
            default:
              throw new Error("Invalid variant!");
          }
        })}
      </tbody>
    </>
  );
};

PlayerData.propTypes = {
  playerList: PropTypes.array,
  variant: PropTypes.string,
  currentPlayer: PropTypes.string,
  currentPlayerById: PropTypes.number,
};

const X01PlayerData = ({ player, index, currentPlayerById }) => {
  return (
    <tr key={index}>
      {currentPlayerById === player.id ? (
        <th style={{ borderColor: "black", borderWidth: "thin" }}>
          {player.player}
          <BiCaretLeft size={20} />
        </th>
      ) : (
        <th style={{ borderColor: "black", borderWidth: "thin" }}>
          {player.player}
        </th>
      )}
      <td>{player.score}</td>
    </tr>
  );
};

X01PlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayerById: PropTypes.number,
};

const CricketPlayerData = ({ player, index, currentPlayerById }) => {
  let hitCount = {};
  player.scoreList.map((hitNum) => {
    hitCount[hitNum] = hitCount[hitNum] ? hitCount[hitNum] + 1 : 1;
    if (player.scoreList[hitNum] > 3) {
      player.score += hitNum;
    }
  });

  return (
    <tr key={index}>
      {currentPlayerById === player.id ? (
        <th key={index} style={{ borderColor: "black" }}>
          {player.player}
          <BiCaretLeft size={20} />
        </th>
      ) : (
        <th key={index} style={{ borderColor: "black" }}>
          {player.player}
        </th>
      )}
      <td>
        <CricketScoreboardDisplay
          player={player}
          hitCount={hitCount}
          hitNum="20"
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          hitCount={hitCount}
          hitNum="19"
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          hitCount={hitCount}
          hitNum="18"
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          hitCount={hitCount}
          hitNum="17"
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          hitCount={hitCount}
          hitNum="16"
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          hitCount={hitCount}
          hitNum="15"
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          hitCount={hitCount}
          hitNum="Bull"
        />
      </td>
      <td>{player.score}</td>
    </tr>
  );
};

CricketPlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayerById: PropTypes.number,
};

const CricketScoreboardDisplay = ({ hitCount, hitNum }) => {
  if (hitCount[hitNum] === 1) {
    return <BsSlash style={{ fontSize: "25px" }} />;
  } else if (hitCount[hitNum] === 2) {
    return <AiOutlineClose style={{ fontSize: "20px" }} />;
  } else if (hitCount[hitNum] >= 3) {
    return <AiOutlineCloseCircle style={{ fontSize: "28px" }} />;
  }
  return null;
};

CricketScoreboardDisplay.propTypes = {
  player: PropTypes.object,
  hitCount: PropTypes.object,
  hitNum: PropTypes.string,
};

const BaseballPlayerData = ({ player, index, currentPlayerById }) => {
  return (
    <tr key={index}>
      {currentPlayerById === player.id ? (
        <th style={{ borderColor: "black" }}>
          {player.player}
          <BiCaretLeft size={20} />
        </th>
      ) : (
        <th style={{ borderColor: "black" }}>{player.player}</th>
      )}
      <td>{player.scoreList[0]}</td>
      <td>{player.scoreList[1]}</td>
      <td>{player.scoreList[2]}</td>
      <td>{player.scoreList[3]}</td>
      <td>{player.scoreList[4]}</td>
      <td>{player.scoreList[5]}</td>
      <td>{player.scoreList[6]}</td>
      <td>{player.scoreList[7]}</td>
      <td>{player.scoreList[8]}</td>
      <td>{player.scoreList.reduce((sum, current) => sum + current, 0)}</td>
    </tr>
  );
};

BaseballPlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayer: PropTypes.object,
  currentPlayerById: PropTypes.number,
};

const EliminationPlayerData = ({ player, index, currentPlayerById }) => {
  return (
    <tr key={index}>
      {currentPlayerById === player.id ? (
        <th style={{ borderColor: "black" }}>
          {player.player}
          <BiCaretLeft size={20} />
        </th>
      ) : (
        <th style={{ borderColor: "black" }}>{player.player}</th>
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
export default Scoreboard;
