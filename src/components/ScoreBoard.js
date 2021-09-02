import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { BiCaretLeft } from "react-icons/bi";

const Scoreboard = ({ playerList, variant, x01Points, getCurrentPlayer }) => {
  const currentPlayer = getCurrentPlayer().player;

  return (
    <>
      It&apos;s {currentPlayer}&apos;s turn !
      <Table>
        <TableHeader variant={variant} />
        <PlayerData
          playerList={playerList}
          variant={variant}
          x01Points={x01Points}
          getCurrentPlayer={getCurrentPlayer}
        />
      </Table>
    </>
  );
};

Scoreboard.propTypes = {
  playerList: PropTypes.array,
  variant: PropTypes.string,
  x01Points: PropTypes.bool,
  getCurrentPlayer: PropTypes.func,
};

const inningNumber = ["Player", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Total"];
const cricketNumbers = ["Player", 20, 19, 18, 17, 16, 15, "Bull"];

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
        </tr>
      </thead>
    </>
  );
};

TableHeader.propTypes = { variant: PropTypes.string };

const PlayerData = ({ playerList, variant, getCurrentPlayer }) => {
  const currentPlayer = getCurrentPlayer().player;
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
                />
              );
            case "cricket":
              return (
                <CricketPlayerData
                  key={index}
                  player={player}
                  index={index}
                  currentPlayer={currentPlayer}
                />
              );
            case "x01":
              return (
                <X01PlayerData
                  key={index}
                  player={player}
                  index={index}
                  currentPlayer={currentPlayer}
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
  getCurrentPlayer: PropTypes.func,
};

const X01PlayerData = ({ player, index, currentPlayer }) => {
  return (
    <tr key={index}>
      {currentPlayer === player.player ? (
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
  currentPlayer: PropTypes.string,
};

const CricketPlayerData = ({ player, index, currentPlayer }) => {
  return (
    <tr key={index}>
      {currentPlayer === player.player ? (
        <th key={index} style={{ borderColor: "black" }}>
          {player.player}
          <BiCaretLeft size={20} />
        </th>
      ) : (
        <th key={index} style={{ borderColor: "black" }}>
          {player.player}
        </th>
      )}
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

CricketPlayerData.propTypes = {
  player: PropTypes.object,
  index: PropTypes.number,
  currentPlayer: PropTypes.string,
};

const BaseballPlayerData = ({ player, index, currentPlayer }) => {
  return (
    <tr key={index}>
      {currentPlayer === player.player ? (
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
  currentPlayer: PropTypes.string,
};

export default Scoreboard;
