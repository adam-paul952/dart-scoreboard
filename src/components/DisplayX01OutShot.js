import React from "react";
import PropTypes from "prop-types";
import { possibleOutShots } from "./X01OutChart";

const DisplayX01OutShot = ({ getCurrentPlayer }) => {
  const currentPlayer = getCurrentPlayer();
  const score = currentPlayer.score;
  const filterOutShot = (possibleOutShots) => {
    return possibleOutShots.score === score;
  };
  const outShot = possibleOutShots.filter(filterOutShot);
  return (
    <>
      <div className="outShotContainer">
        <h3 className="mb-4">Possible Out:</h3>
        <h3>{outShot[0].score}</h3>
        {outShot[0].checkOut.map((possibleOuts, index) => {
          return <h4 key={index}>{possibleOuts.join(" -- ")}</h4>;
        })}
      </div>
    </>
  );
};

DisplayX01OutShot.propTypes = {
  getCurrentPlayer: PropTypes.func.isRequired,
};

export default DisplayX01OutShot;
