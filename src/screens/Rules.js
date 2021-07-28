import React from 'react';

const Rules = () => {
  return (
    <div>
      <X01Rules />
      <BaseBallRules />
      <CricketRules />
      <EliminationRules />
      <KillerRules />
    </div>
  );
};

const X01Rules = () => {
  return (
    <div>
      <h1 className="ruleHeader">X01:</h1>
      <p className="rulePar"><b>Game Play:</b> X01 is a tournament style game, where players start with X01 points and lower their score to exactly 0.
      First players have to define how many points they start with (typically 301 or 501) be can be any number of points 
      the players want.
      </p>
      <p className="rulePar"><b>Scoring:</b> This game can be played either by double-in and double-out or just double out. Player take turns throwing darts
      into the board, adding up their points based on their scores. Then they subtract that from the number of points they have remaining.
      In order to successfully win the game, players must hit their score exactly on 0 by hitting a double, once this happens
      the game is over and that player wins.
      </p>
      <hr />
    </div>
  );
}
const BaseBallRules = () => {
  return (
    <div>
      <h1 className="ruleHeader">Baseball:</h1>
      <p className="rulePar"><b>Game Play:</b> Players each take turns throwing three darts, starting with the 1. Once all players have thrown at the 1,
      the start of the next round players will throw at the 2. The game continues until all players have throw at the numbers
      1 through 9 (like innings in a baseball game).
      </p>
      <p className="rulePar"><b>Scoring:</b> As players throw at the numbers 1 - 9, scoring works as a single is 1, a double is 2, and a treble is 3. Players 
      record their score, and whoever has the most points at the end of the game wins.
      </p>
      <p className="rulePar"><b>Note:</b> As we play the game, there are a few exceptions. If a player successfully lands three darts in the number they
      are shooting for (single,double or treble), then that players hits a "home run" and darts are returned to hand and
      that player gets to re-shoot for that number.
      <br />
      Also, once the 9th inning has been reached if there is a tie, then the tieing players go into "extra innings". Gameplay
      is then continued onto the 10 (maybe 11, 12, etc...) in a sudden death format. Both players shoot their 3 darts, and whoever
      has the most points, win.
      </p>
      <hr />
    </div>
  );
};
const CricketRules = () => {
  return (
    <div>
      <h1 className="ruleHeader">Cricket:</h1>
      <p className="rulePar"><b>Game Play:</b> Players take turns throwing three darts at the board, hitting the numbers 15 through
      20; bulls-eye included. The game requires players to "close" the numbers by hitting them three times,
      once a player has all numbers "closed" the game ends. If a player hits a number outside of the 15 through
      20 and bulls-eye then it doesn't have any effect to their score.
      </p>
      <p className="rulePar"><b>Scoring:</b> If a player hits a single, it accounts for 1 mark on a number, a double counts as 2, and
      a treble counts as 3. Once a number has been "closed" by one player, it remains open for that player
      to score points on that number until all other players have "closed" the number. Ultimately the player
      who "closes" out all their numbers first win, unless another player has accumulated points (hit an open
      number more then three times). The game continues then until either the player without the numbers "closed", closes
      their respective numbers or the player with all numbers "closed" accumulates more points.
      </p>
      <p className="rulePar"><b>Note:</b> When it comes to the bulls-eye, a true bulls-eye is worth 2 of the 3 required marks for bull and a cow is 
      worth 1 of the 3 required.
      </p>
      <hr />
    </div>
  );
};
const EliminationRules = () => {
  return (
    <div>
      <h1 className="ruleHeader">Elimination:</h1>
      <p className="rulePar"><b>Game Play:</b> Players alternate throwing 3 darts at the board trying to achieve the highest possible scoring hand. The next player
      must score higher then the player in front of them, if the throwing player fails to do that then they lose a life,
      but if the throwing player successfully scores higer then they do not lose a life and the next player throws their darts.
      Typically games are played with a defined number of lives(we usually use 5). Game play continues until there is only
      one player left with lives.
      </p>
      <hr />
    </div>
  );
};
const KillerRules = () => {
  return(
    <div>
      <h1 className="ruleHeader">Killer:</h1>
      <p className="rulePar"><b>Game Play:</b> The game begins by players throwing darts into the board with their hand opposite for throwing. (If I was
      right-handed, I would use my left hand for this.) A players number is assigned with whatever number you successfully
      hit (doubles and trebles are excluded in this). Once all players have been "assigned" a number game play will begin
      with the player with the lowest number and counting up.
      </p>
      <p className="rulePar"><b>Scoring:</b> Players take turns shooting at their assigned numbers (singles are 1, doubles are 2, trebles are 3), players gain
      lives relative to the scoring. Once a player reaches 5 lives, they are classified as a "Killer", once a player becomes
      a killer they begin then shooting towards other players numbers. If a player(s) is unsuccessful in hitting their number
      prior to a player becoming a killer they are eliminated from the game. There can be more then one killer at a time, and
      game play continues until there is only one player remaining.
      </p>
      <p className="rulePar"><b>A few additional rules:</b> If a player has 4 lives and hits a double of their number, they in fact do not become a killer
      but instead they bring themself up to 5 then back down to 4 again. As such, if a player is a killer and they strike their
      own number instead of another player they bring their lives down equivilent to that score.
      </p>
    </div>
  );
}

export default Rules;