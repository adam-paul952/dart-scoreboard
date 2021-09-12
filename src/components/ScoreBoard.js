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
  // const targets = [15, 16, 17, 18, 19, 20, "Bull"];
  // const numberofHitTargets = player.scoreList.filter((hitNum, i) => {
  //   return targets[i] === hitNum;
  // }).length;
  const numberOfTwenties = player.scoreList.filter(
    (hitNum) => hitNum === 20
  ).length;
  const numberOfNinetines = player.scoreList.filter(
    (hitNum) => hitNum === 19
  ).length;
  const numberOfEighteens = player.scoreList.filter(
    (hitNum) => hitNum === 18
  ).length;
  const numberOfSeventeens = player.scoreList.filter(
    (hitNum) => hitNum === 17
  ).length;
  const numberOfSixteens = player.scoreList.filter(
    (hitNum) => hitNum === 16
  ).length;
  const numberOfFifteens = player.scoreList.filter(
    (hitNum) => hitNum === 15
  ).length;
  const numberOfBulls = player.scoreList.filter(
    (hitNum) => hitNum === "Bull"
  ).length;

  const numberofHitTargets = {
    numberOfTwenties,
    numberOfNinetines,
    numberOfEighteens,
    numberOfSeventeens,
    numberOfSixteens,
    numberOfFifteens,
    numberOfBulls,
  };

  // console.log({ numberofHitTargets });

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
          // // hitCount={hitCount}
          numberofHitTargets={numberofHitTargets}
          // numberOfTwenties={numberOfTwenties}
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          // // hitCount={hitCount}
          numberofHitTargets={numberofHitTargets}
          // numberOfNinetines={numberOfNinetines}
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          // // hitCount={hitCount}
          numberofHitTargets={numberofHitTargets}
          // numberOfEighteens={numberOfEighteens}
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          // // hitCount={hitCount}
          numberofHitTargets={numberofHitTargets}
          // numberOfSeventeens={numberOfSeventeens}
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          // // hitCount={hitCount}
          numberofHitTargets={numberofHitTargets}
          // numberOfSixteens={numberOfSixteens}
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          // // hitCount={hitCount}
          numberofHitTargets={numberofHitTargets}
          // numberOfFifteens={numberOfFifteens}
        />
      </td>
      <td>
        <CricketScoreboardDisplay
          player={player}
          // // hitCount={hitCount}
          numberofHitTargets={numberofHitTargets}
          // numberOfBulls={numberOfBulls}
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

const CricketScoreboardDisplay = ({ numberofHitTargets }) => {
  console.log({ numberofHitTargets });
  if (numberofHitTargets === 1) {
    return <BsSlash style={{ fontSize: "25px" }} />;
  } else if (numberofHitTargets === 2) {
    return <AiOutlineClose style={{ fontSize: "20px" }} />;
  } else if (numberofHitTargets >= 3) {
    return <AiOutlineCloseCircle style={{ fontSize: "28px" }} />;
  }
  return null;
};

CricketScoreboardDisplay.propTypes = {
  player: PropTypes.object,
  hitCount: PropTypes.object,
  hitNum: PropTypes.string,
  numberofHitTargets: PropTypes.object,
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

const KillerPlayerData = ({ player, index, currentPlayerById }) => {
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

export default Scoreboard;
