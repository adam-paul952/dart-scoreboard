import React, { useState } from 'react';
import Header from '../components/Header';
import { CreateGame } from './CreateGame';
import {Button, Container, Col, Row, Form, Table } from 'react-bootstrap';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePlayerList = () => {
  const initialState = { player: '', score: 0, isSubmitted: false };
  const [playerName, setPlayerName] = useState(initialState);
  const { player } = playerName;

  const onHandleChange = ({ target: { name, value } }) => {
    setPlayerName({...playerName, [name]: value, isSubmitted: true});
  };

  const [playerList, setPlayerList] = useState([]);

  const updatePlayerList = (player) => {
    setPlayerList([...playerList, player]);
  };

  const onAddPlayer = () => {
    updatePlayerList(playerName);
    setPlayerName(initialState);
  };

  console.log(playerList);

  const deleteRow = (rowNumber) => {
      let updatedRows = [...playerList];
      updatedRows.splice(rowNumber, 1);
      setPlayerList(updatedRows);
  };

  const onSubmit = () => {
    setPlayerList([...playerList]);
  };

  return (
    <div>
      <Header title='Create Player' goBackButton />
      <Form onSubmit={onSubmit}>
        <Container>
          <Row className="justify-content-md-center">
              <Col>
                <input
                  type='text'
                  name='player'
                  placeholder='Player Name'
                  onChange={onHandleChange}
                  value={player}
                />
              </Col>
              <Col>
                <Button onClick={onAddPlayer}>Add Player</Button>
              </Col>
          </Row>
          </Container>
          {/* <Container>
            <Row md="8">
            <Col xs="6"> Player # </Col>
            <Col md="auto">Player Name</Col>
            <Col></Col>
            </Row>
            <Row>
            {playerList.map((player, index) => {
              return (
                <PlayerList key={index} index={index} player={player} deleteRow={deleteRow}/>
                );
              })
            }
            </Row>
          </Container> */}
          <Container>
            <Table striped>
              <thead>
                <tr>
                  <th>Player #</th>
                  <th>Player Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {playerList.map((player, index) => {
                  return (
                    <PlayerList key={index} index={index} player={player} deleteRow={deleteRow}/>
                    );
                  })
                }
              </tbody>
            </Table>
            <Button type="submit">Submit</Button>
        </Container>
      </Form>
      <div>
        {isSubmitted && <CreateGame />}
      </div>
    </div>
  );
};

const PlayerList = ({ index, player, deleteRow}) => {

  let playerName = player.player;

  const removeRow = (index) => {
    deleteRow(index);
  };

  // Use this instead of table?
  // return (
  //     <Row sm="6">
  //   <Col>{index + 1}</Col>
  //   <Col md={{ span: 4, offset: 3 }}>{playerName}</Col>
  //   <Col><Button variant="secondary" size="sm" onClick={() => removeRow(index)}>Delete</Button></Col>
  //     </Row>
  // );

  return (
        <tr key={index + 1}>
          <th>{index + 1}</th>
          <td>{playerName}</td>
          <td><Button variant="secondary" size="sm" onClick={() => removeRow(index)}>Delete</Button></td>
        </tr>
  );
};

export default CreatePlayerList;
