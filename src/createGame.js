import React from 'react';

function CreateGame() {
  return (
    <div>
      <div id="selection">
        <form>
          <label>
            Please Select a Game:
            <select id="gameType">
              <option value="Please Select a game">Please Select a game</option>
              <option value="x01">X01</option>
              <option value="Baseball">Baseball</option>
              <option value="Cricket">Cricket</option>
              <option value="Killer">Killer</option>
              <option value="Elimination">Elimination</option>
            </select>
          </label>
          <input type="button" value="Submit"></input>
          <input type="button" value="Return"></input>
        </form>
      </div>
    </div>
    );
}

export default function X01 () {
  return (
    <div>
      <h3>X01</h3>
      <form>
        <label>
          Points:
        </label>
        <select>
          <option value="301">301</option>
          <option value="501">501</option>
          <option value="601">601</option>
          <option value="701">701</option>
          <option value="801">801</option>
          <option value="901">901</option>
          <option value="1001">1001</option>
        </select>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};

const baseball = () => {
  return (
    <div>
      <h3>Baseball</h3>
      <form>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};

const cricket = () => {
  return (
    <div>
      <h3>Cricket</h3>
      <form>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};

const killer = () => {
  return (
    <div>
      <h3>Baseball</h3>
      <form>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};

const elimination = () => {
  return (
    <div>
      <h3>Baseball</h3>
      <form>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};
