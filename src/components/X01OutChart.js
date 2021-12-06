import React, { useState, useContext } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { ThemeContext } from "../contexts/Provider";

const X01OutShotButton = () => {
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
          <X01OutShotChart />
        </Modal.Body>
      </Modal>
    </>
  );
};

const X01OutShotChart = () => {
  const { theme } = useContext(ThemeContext);
  const oppositeTheme = theme === "light" ? "light" : "dark";
  return (
    <>
      <Table variant={oppositeTheme} striped bordered hover>
        <thead>
          <tr>
            <th>Score</th>
            <th>Outshot Available</th>
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
      {/* {outShotScore.map((value, index) => {
        return (
          <tr key={index}>
            <td>{value}</td>
            <td>{outShotItems[index].join(" -- ")}</td>
          </tr>
        );
      })} */}
      {Object.keys(possibleOutShots).map((value, index) => {
        return (
          <tr key={index}>
            <td>{value}</td>
            <td>{possibleOutShots[value].join(" -- ")}</td>
          </tr>
        );
      })}
    </>
  );
};

export default X01OutShotButton;

const possibleOutShots = {
  170: ["T20", "T20", "Bull"],
  169: ["T20", "T19", "Bull"],
  164: ["T20", "T18", "Bull"],
  161: ["T20", "T17", "Bull"],
  160: ["T20", "T20", "D20"],
  158: ["T20", "T20", "D19"],
  157: ["T20", "T19", "D20"],
  156: ["T20", "T20", "D18"],
  155: ["T20", "T19", "D19"],
  154: ["T20", "T18", "D20"],
  153: ["T20", "T19", "D18"],
  152: ["T20", "T20", "D16"],
  151: ["T20", "T17", "D20"],
  150: ["T20", "T18", "D18"],
  149: ["T20", "T19", "D16"],
  148: ["T20", "T16", "D20"],
  147: ["T20", "T17", "D18"],
  146: ["T20", "T18", "D16"],
  145: ["T20", "T15", "D20"],
  144: ["T20", "T20", "D12"],
  143: ["T20", "T17", "D16"],
  142: ["T20", "T14", "D20"],
  141: ["T20", "T15", "D18"],
  140: ["T20", "T16", "D16"],
  139: ["T20", "T13", "D20"],
  138: ["T20", "T14", "D18"],
  137: ["T17", "T18", "D16"],
  136: ["T20", "T20", "D8"],
  135: ["T20", "T15", "D15"],
  134: ["T20", "T14", "D16"],
  133: ["T20", "T19", "D8"],
  132: ["T20", "T20", "D6"],
  131: ["T20", "T13", "D16"],
  130: ["T20", "T18", "D8"],
  129: ["T19", "T20", "D6"],
  128: ["T18", "T14", "D16"],
  127: ["T19", "T18", "D8"],
  126: ["T20", "T16", "D8"],
  125: ["Bull", "T20", "D20"],
  124: ["T20", "D16", "D16"],
  123: ["T19", "T16", "D8"],
  122: ["T18", "T20", "D4"],
  121: ["T20", "T15", "D8"],
  120: ["T20", "20", "D20"],
  119: ["T19", "T10", "D16"],
  118: ["T20", "18", "D20"],
  117: ["T20", "17", "D20"],
  116: ["T20", "16", "D20"],
  115: ["T20", "15", "D20"],
  114: ["T20", "14", "D20"],
  113: ["T20", "13", "D20"],
  112: ["T20", "20", "D16"],
  111: ["T20", "19", "D16"],
  110: ["T20", "18", "D16"],
  109: ["T20", "17", "D16"],
  108: ["T20", "16", "D16"],
  107: ["T19", "18", "D16"],
  106: ["T20", "14", "D16"],
  105: ["T20", "13", "D16"],
  104: ["T18", "18", "D16"],
  103: ["T20", "11", "D16"],
  102: ["T20", "10", "D16"],
  101: ["T17", "18", "D16"],
  100: ["T20", "D20"],
  99: ["T19", "10", "D16"],
  98: ["T20", "D19"],
  97: ["T19", "D20"],
  96: ["T20", "D18"],
  95: [
    ["T15", "18", "D16"],
    ["T19", "D19"],
  ],
  94: ["T18", "D20"],
  93: ["T19", "D18"],
  92: ["T20", "D16"],
  91: ["T17", "D20"],
  90: ["T18", "D18"],
  89: ["T19", "D16"],
  88: ["T16", "D20"],
  87: ["T17", "D18"],
  86: ["T18", "D16"],
  85: ["T15", "D20"],
  84: [
    ["T20", "D12"],
    ["T16", "D18"],
  ],
  83: ["T17", "D16"],
  82: [
    ["T14", "D20"],
    ["Bull", "D16"],
  ],
  81: ["T15", "D18"],
  80: ["T16", "D16"],
  79: ["T13", "D20"],
  78: ["T14", "D18"],
  77: ["T15", "D16"],
  76: ["T20", "D8"],
  75: ["T15", "D15"],
  74: ["T14", "D16"],
  73: ["T19", "D8"],
  72: ["T20", "D6"],
  71: ["T13", "D16"],
  70: ["T18", "D8"],
  69: ["T19", "D6"],
  68: [
    ["T16", "D10"],
    ["T20", "D4"],
  ],
  67: ["T17", "D8"],
  66: ["T10", "D18"],
  65: [
    ["T15", "D10"],
    ["T11", "D16"],
  ],
  64: [
    ["D16", "D16"],
    ["T16", "D8"],
  ],
  63: ["T13", "D12"],
  62: ["T10", "D16"],
  61: ["T15", "D8"],
  60: ["20", "D20"],
  59: ["19", "D20"],
  58: ["18", "D20"],
  57: ["17", "D20"],
  56: ["16", "D20"],
  55: ["15", "D20"],
  54: ["14", "D20"],
  53: ["13", "D20"],
  52: ["20", "D16"],
  51: ["19", "D16"],
  50: ["18", "D16"],
  49: ["17", "D16"],
  48: ["16", "D16"],
  47: ["15", "D16"],
  46: ["14", "D16"],
  45: ["13", "D16"],
  44: ["12", "D16"],
  43: ["11", "D16"],
  42: ["10", "D16"],
  41: ["9", "D16"],
};
