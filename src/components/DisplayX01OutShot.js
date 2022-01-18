import React from "react";
import PropTypes from "prop-types";
import { possibleOutShots } from "./X01OutChart";

const DisplayX01OutShot = ({ getCurrentPlayer }) => {
  const currentPlayer = getCurrentPlayer();
  const outShot = possibleOutShots.find(
    ({ score }) => score === currentPlayer.score
  );
  console.log(`outShot is: ${outShot.score}`);
  return (
    <>
      <div className="outShotContainer">
        <h3 className="mb-4">Possible Out: {outShot.score}</h3>
        {outShot.checkOut.map((possibleOuts, index) => {
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
