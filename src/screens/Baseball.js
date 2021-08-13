import React from "react";
import Header from "../components/Header";
import ScoreCalculator from '../components/ScoreCalculator';
import { Button, Container, Row, Col, Table } from "react-bootstrap";

export default function CreateBaseballBoard({ playerList }) {
  const inningNumber = ['Player', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Total'];

  return (
    <>
      <Header title="Baseball" goBackButton />
        <Container>
          <Row className='justify-content-md-center'>
            <Col>Inning:</Col>
            <Col>Inning #</Col>
          </Row>
        </Container>
        <Table>
          <thead>
            <tr>
              {inningNumber.map((inning, index) => {return <th key={index}>{inning}</th>})}
            </tr>
          </thead>
        </Table>
      {/* <div className="inningCounter">
        <>
          <p>Inning:</p>
        </>
        <>
          <p>`$[Inning #]`</p>
        </>
      </div> */}
      <ScoreCalculator />
      <Button
        onClick={() => {
          console.log(playerList);
        }}
      >
        Show State
      </Button>
    </>
  );
}
