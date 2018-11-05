import React from 'react';

export const Header = ({
                         winner,
                         fullBoard,
                         player
                       }) => {
  if (winner) {
    return <h1>{winner} won!</h1>;
  } else if (fullBoard) {
    return <h1>It is a tie!</h1>;
  } else {
    return <h1>{player}s turn</h1>;
  }

};