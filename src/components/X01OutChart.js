import React, { useState, useContext } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeProvider";

const X01OutShotButton = (theme) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        size="sm"
        onClick={() => {
          setShow(true);
        }}
      >
        Outshots
      </Button>
      <Modal
        aria-labelledby="x01OutshotChart"
        show={show}
        fullscreen={true}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>OutChart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <X01OutShotChart theme={theme} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const X01OutShotChart = (theme) => {
  const oppositeTheme = theme === "light" ? "light" : "dark";
  return (
    <>
      <Table variant={oppositeTheme} striped bordered hover>
        <thead>
          <tr>
            <th>Score</th>
            <th colSpan="2">Outshot Available</th>
          </tr>
        </thead>
        <tbody>
          <X01OutShotScore />
        </tbody>
      </Table>
    </>
  );
};

const X01OutShotScore = () => {
  return (
    <>
      {possibleOutShots.map((value, index) => {
        return (
          <tr key={index}>
            <td>{value.score}</td>
            {value.checkOut.map((co, index) => {
              return <td key={index}>{co.join("--")}</td>;
            })}
          </tr>
        );
      })}
    </>
  );
};

export default X01OutShotButton;

export const possibleOutShots = [
  { score: 170, checkOut: [["T20", "T20", "Bull"], []] },
  { score: 169, checkOut: [["T20", "T19", "Bull"], []] },
  { score: 168, checkOut: [["No Check Out Available"], []] },
  { score: 167, checkOut: [["No Check Out Available"], []] },
  { score: 166, checkOut: [["No Check Out Available"], []] },
  { score: 165, checkOut: [["No Check Out Available"], []] },
  { score: 164, checkOut: [["T20", "T18", "Bull"], []] },
  { score: 163, checkOut: [["No Check Out Available"], []] },
  { score: 162, checkOut: [["No Check Out Available"], []] },
  { score: 161, checkOut: [["T20", "T17", "Bull"], []] },
  { score: 160, checkOut: [["T20", "T20", "D20"], []] },
  { score: 159, checkOut: [["No Check Out Available"], []] },
  { score: 158, checkOut: [["T20", "T20", "D19"], []] },
  { score: 157, checkOut: [["T20", "T19", "D20"], []] },
  { score: 156, checkOut: [["T20", "T20", "D18"], []] },
  { score: 155, checkOut: [["T20", "T19", "D19"], []] },
  { score: 154, checkOut: [["T20", "T18", "D20"], []] },
  { score: 153, checkOut: [["T20", "T19", "D18"], []] },
  { score: 152, checkOut: [["T20", "T20", "D16"], []] },
  { score: 151, checkOut: [["T20", "T17", "D20"], []] },
  { score: 150, checkOut: [["T20", "T18", "D18"], []] },
  { score: 149, checkOut: [["T20", "T19", "D16"], []] },
  { score: 148, checkOut: [["T20", "T16", "D20"], []] },
  { score: 147, checkOut: [["T20", "T17", "D18"], []] },
  { score: 146, checkOut: [["T20", "T18", "D16"], []] },
  { score: 145, checkOut: [["T20", "T15", "D20"], []] },
  { score: 144, checkOut: [["T20", "T20", "D12"], []] },
  { score: 143, checkOut: [["T20", "T17", "D16"], []] },
  { score: 142, checkOut: [["T20", "T14", "D20"], []] },
  { score: 141, checkOut: [["T20", "T15", "D18"], []] },
  { score: 140, checkOut: [["T20", "T16", "D16"], []] },
  { score: 139, checkOut: [["T20", "T13", "D20"], []] },
  { score: 138, checkOut: [["T20", "T14", "D18"], []] },
  { score: 137, checkOut: [["T17", "T18", "D16"], []] },
  { score: 136, checkOut: [["T20", "T20", "D8"], []] },
  { score: 135, checkOut: [["T20", "T15", "D15"], []] },
  { score: 134, checkOut: [["T20", "T14", "D16"], []] },
  { score: 133, checkOut: [["T20", "T19", "D8"], []] },
  { score: 132, checkOut: [["T20", "T20", "D6"], []] },
  { score: 131, checkOut: [["T20", "T13", "D16"], []] },
  { score: 130, checkOut: [["T20", "T18", "D8"], []] },
  { score: 129, checkOut: [["T19", "T20", "D6"], []] },
  { score: 128, checkOut: [["T18", "T14", "D16"], []] },
  { score: 127, checkOut: [["T19", "T18", "D8"], []] },
  { score: 126, checkOut: [["T20", "T16", "D8"], []] },
  { score: 125, checkOut: [["Bull", "T20", "D20"], []] },
  { score: 124, checkOut: [["T20", "D16", "D16"], []] },
  { score: 123, checkOut: [["T19", "T16", "D8"], []] },
  { score: 122, checkOut: [["T18", "T20", "D4"], []] },
  { score: 121, checkOut: [["T20", "T15", "D8"], []] },
  { score: 120, checkOut: [["T20", "20", "D20"], []] },
  { score: 119, checkOut: [["T19", "T10", "D16"], []] },
  { score: 118, checkOut: [["T20", "18", "D20"], []] },
  { score: 117, checkOut: [["T20", "17", "D20"], []] },
  { score: 116, checkOut: [["T20", "16", "D20"], []] },
  { score: 115, checkOut: [["T20", "15", "D20"], []] },
  { score: 114, checkOut: [["T20", "14", "D20"], []] },
  { score: 113, checkOut: [["T20", "13", "D20"], []] },
  { score: 112, checkOut: [["T20", "20", "D16"], []] },
  { score: 111, checkOut: [["T20", "19", "D16"], []] },
  { score: 110, checkOut: [["T20", "18", "D16"], []] },
  { score: 109, checkOut: [["T20", "17", "D16"], []] },
  { score: 108, checkOut: [["T20", "16", "D16"], []] },
  { score: 107, checkOut: [["T19", "18", "D16"], []] },
  { score: 106, checkOut: [["T20", "14", "D16"], []] },
  { score: 105, checkOut: [["T20", "13", "D16"], []] },
  { score: 104, checkOut: [["T18", "18", "D16"], []] },
  { score: 103, checkOut: [["T20", "11", "D16"], []] },
  { score: 102, checkOut: [["T20", "10", "D16"], []] },
  { score: 101, checkOut: [["T17", "18", "D16"], []] },
  { score: 100, checkOut: [["T20", "D20"], []] },
  { score: 99, checkOut: [["T19", "10", "D16"], []] },
  { score: 98, checkOut: [["T20", "D19"], []] },
  { score: 97, checkOut: [["T19", "D20"], []] },
  { score: 96, checkOut: [["T20", "D18"], []] },
  {
    score: 95,
    checkOut: [
      ["T15", "18", "D16"],
      ["T19", "D19"],
    ],
  },
  { score: 94, checkOut: [["T18", "D20"], []] },
  { score: 93, checkOut: [["T19", "D18"], []] },
  { score: 92, checkOut: [["T20", "D16"], []] },
  { score: 91, checkOut: [["T17", "D20"], []] },
  { score: 90, checkOut: [["T18", "D18"], []] },
  { score: 89, checkOut: [["T19", "D16"], []] },
  { score: 88, checkOut: [["T16", "D20"], []] },
  { score: 87, checkOut: [["T17", "D18"], []] },
  { score: 86, checkOut: [["T18", "D16"], []] },
  { score: 85, checkOut: [["T15", "D20"], []] },
  {
    score: 84,
    checkOut: [
      ["T20", "D12"],
      ["T16", "D18"],
    ],
  },
  { score: 83, checkOut: [["T17", "D16"], []] },
  {
    score: 82,
    checkOut: [
      ["T14", "D20"],
      ["Bull", "D16"],
    ],
  },
  { score: 81, checkOut: [["T15", "D18"], []] },
  { score: 80, checkOut: [["T16", "D16"], []] },
  { score: 79, checkOut: [["T13", "D20"], []] },
  { score: 78, checkOut: [["T14", "D18"], []] },
  { score: 77, checkOut: [["T15", "D16"], []] },
  { score: 76, checkOut: [["T20", "D8"], []] },
  { score: 75, checkOut: [["T15", "D15"], []] },
  { score: 74, checkOut: [["T14", "D16"], []] },
  { score: 73, checkOut: [["T19", "D8"], []] },
  { score: 72, checkOut: [["T20", "D6"], []] },
  { score: 71, checkOut: [["T13", "D16"], []] },
  { score: 70, checkOut: [["T18", "D8"], []] },
  { score: 69, checkOut: [["T19", "D6"], []] },
  {
    score: 68,
    checkOut: [
      ["T16", "D10"],
      ["T20", "D4"],
    ],
  },
  { score: 67, checkOut: [["T17", "D8"], []] },
  { score: 66, checkOut: [["T10", "D18"], []] },
  {
    score: 65,
    checkOut: [
      ["T15", "D10"],
      ["T11", "D16"],
    ],
  },
  {
    score: 64,
    checkOut: [
      ["D16", "D16"],
      ["T16", "D8"],
    ],
  },
  { score: 63, checkOut: [["T13", "D12"], []] },
  { score: 62, checkOut: [["T10", "D16"], []] },
  { score: 61, checkOut: [["T15", "D8"], []] },
  { score: 60, checkOut: [["20", "D20"], []] },
  { score: 59, checkOut: [["19", "D20"], []] },
  { score: 58, checkOut: [["18", "D20"], []] },
  { score: 56, checkOut: [["16", "D20"], []] },
  { score: 55, checkOut: [["15", "D20"], []] },
  { score: 54, checkOut: [["14", "D20"], []] },
  { score: 53, checkOut: [["13", "D20"], []] },
  { score: 52, checkOut: [["20", "D16"], []] },
  { score: 51, checkOut: [["19", "D16"], []] },
  { score: 50, checkOut: [["18", "D16"], []] },
  { score: 49, checkOut: [["17", "D16"], []] },
  { score: 48, checkOut: [["16", "D16"], []] },
  { score: 47, checkOut: [["15", "D16"], []] },
  { score: 46, checkOut: [["14", "D16"], []] },
  { score: 45, checkOut: [["13", "D16"], []] },
  { score: 44, checkOut: [["12", "D16"], []] },
  { score: 43, checkOut: [["11", "D16"], []] },
  { score: 42, checkOut: [["10", "D16"], []] },
  { score: 41, checkOut: [["9", "D16"], []] },
  { score: 40, checkOut: [["D20"], []] },
  { score: 39, checkOut: [[], []] },
  { score: 38, checkOut: [[], []] },
  { score: 37, checkOut: [[], []] },
  { score: 36, checkOut: [[], []] },
  { score: 35, checkOut: [[], []] },
  { score: 34, checkOut: [[], []] },
  { score: 33, checkOut: [[], []] },
  { score: 32, checkOut: [[], []] },
  { score: 31, checkOut: [[], []] },
  { score: 30, checkOut: [[], []] },
  { score: 29, checkOut: [[], []] },
  { score: 28, checkOut: [[], []] },
  { score: 27, checkOut: [[], []] },
  { score: 26, checkOut: [[], []] },
  { score: 25, checkOut: [[], []] },
  { score: 24, checkOut: [[], []] },
  { score: 23, checkOut: [[], []] },
  { score: 22, checkOut: [[], []] },
  { score: 21, checkOut: [[], []] },
  { score: 20, checkOut: [[], []] },
  { score: 19, checkOut: [[], []] },
  { score: 18, checkOut: [[], []] },
  { score: 17, checkOut: [[], []] },
  { score: 16, checkOut: [[], []] },
  { score: 15, checkOut: [[], []] },
  { score: 14, checkOut: [[], []] },
  { score: 13, checkOut: [[], []] },
  { score: 12, checkOut: [[], []] },
  { score: 11, checkOut: [[], []] },
  { score: 10, checkOut: [[], []] },
  { score: 9, checkOut: [[], []] },
  { score: 8, checkOut: [[], []] },
  { score: 7, checkOut: [[], []] },
  { score: 6, checkOut: [["D3"], []] },
  {
    score: 5,
    checkOut: [
      ["1", "D2"],
      ["3", "D1"],
    ],
  },
  { score: 4, checkOut: [["D2"], ["2", "D1"]] },
  { score: 3, checkOut: [["1", "D1"], []] },
  { score: 2, checkOut: [["D1"], []] },
];
