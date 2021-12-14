import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row, Table } from "react-bootstrap";
import { BiCaretLeft } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { BsSlash } from "react-icons/bs";

import { ThemeContext } from "../contexts/Provider";

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

const inningNumber = ["Player", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Total"];
const cricketNumbers = ["Player", 20, 19, 18, 17, 16, 15, "Bull", "Score"];
const eliminationHeader = ["Player", "Score", "Lives"];
const killerHeader = ["Player", "Player #", "Lives", "Killer"];

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
          {variant === "killer" &&
            killerHeader.map((item, index) => {
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
            case "killer":
              return (
                <KillerPlayerData
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
  currentPlayer: PropTypes.object,
  currentPlayerById: PropTypes.number,
};

const X01PlayerData = ({ player, index, currentPlayerById }) => {
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
    </tr>
  );
};

X01PlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayerById: PropTypes.number,
};

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

const CricketScoreboardDisplay = ({ hitTarget }) => {
  if (hitTarget === 1) {
    return <BsSlash style={{ fontSize: "25px" }} />;
  } else if (hitTarget === 2) {
    return <AiOutlineClose style={{ fontSize: "20px" }} />;
  } else if (hitTarget >= 3) {
    return <AiOutlineCloseCircle style={{ fontSize: "28px" }} />;
  }
  return null;
};

CricketScoreboardDisplay.propTypes = {
  player: PropTypes.object,
  hitTarget: PropTypes.number,
};

const BaseballPlayerData = ({ player, index, currentPlayerById }) => {
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
  currentPlayerById: PropTypes.number,
};

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

const KillerPlayerData = ({ player, index, currentPlayerById }) => {
  return (
    <tr key={index}>
      {currentPlayerById === player.id ? (
        <th style={{ borderColor: "black" }}>
          {player.playerName}
          <BiCaretLeft size={20} />
        </th>
      ) : (
        <th style={{ borderColor: "black" }}>{player.playerName}</th>
      )}
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

KillerPlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayerById: PropTypes.number,
};

const DisplayCurrentRoundInformation = ({ currentPlayer, round }) => {
  const numOfDarts = () => {
    return round * 3 - 3;
  };
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <b>High Score:</b> {currentPlayer.highScore}
        </Col>
        <Col>
          <b>Number of Darts:</b> {numOfDarts()}
        </Col>
      </Row>
    </Container>
  );
};

DisplayCurrentRoundInformation.propTypes = {
  currentPlayer: PropTypes.object,
  round: PropTypes.number,
};

export default Scoreboard;
