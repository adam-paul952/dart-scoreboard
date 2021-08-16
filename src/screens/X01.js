import React, { useState } from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";

const CreateX01Board = ({ x01Points, playerList }) => {
  console.log(x01Points);
  console.log(playerList);
  return (
    <>
      <Header title={x01Points} goBackButton />
      <Scoreboard playerList={playerList} x01 />
    </>
  );
};

export default CreateX01Board;
