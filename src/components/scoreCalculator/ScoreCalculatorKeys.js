import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "react-bootstrap";

const ScoreCalculatorKey = (props) => {
  return (
    <ButtonGroup
      onChange={() => {
        props.onChange(props.keyValue);
      }}
    >
      <Button
        variant="primary"
        onClick={() => props.onClick(props.keyValue)}
        disabled={props.disabled}
      >
        {props.keyValue}
      </Button>
    </ButtonGroup>
  );
};

ScoreCalculatorKey.propTypes = {
  keyValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: () => {},
  onClick: () => {},
  disabled: PropTypes.bool,
};
//   return (
//     <ButtonGroup
//       onChange={() => {
//         props.onChange(props.keyValue);
//       }}
//     >
//       <Button variant="primary" onClick={() => props.onClick(props.keyValue)}>
//         {props.keyValue}
//       </Button>
//     </ButtonGroup>
//   );
// };

// ScoreCalculatorKey.propTypes = {
//   keyValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   onChange: () => {},
//   onClick: () => {},
// };

export default ScoreCalculatorKey;

export const getCalculatorKeys = () => {
  return [9, 8, 7, 6, 5, 4, 3, 2, 1, "Del", "0", "Enter"];
};

export const getCricketCalculatorKeys = () => {
  return [20, 19, 18, 17, 16, 15, "Bull", "Del", "Enter"];
};
