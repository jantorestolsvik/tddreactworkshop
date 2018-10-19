import React from 'react';
import {Board} from "../Board/Board";
import {O, X} from "../Utils/Constants";
import {Header} from "../Header/Header";
import {getWinner as getWinnerDefault, isBoardFull as isBoardFullDefault} from "../Utils/BoardUtils";

export class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      player: X,
      board: new Array(9).fill(undefined)
    };
  }

  render() {
    const {
      board,
      player
    } = this.state;

    const {
      getWinner = getWinnerDefault,
      isBoardFull = isBoardFullDefault
    } = this.props;

    const winner = getWinner(board);
    const fullBoard = isBoardFull(board);

    return (
      <div>
        <Header
          winner={winner}
          fullBoard={fullBoard}
          player={player}
        />
        <Board
          disabled={winner !== undefined || fullBoard}
          board={board}
          cellClicked={(index) => {
            this.setState((oldState) => {
              if (
                index === undefined ||
                oldState.board[index] !== undefined
              ) {
                return;
              }
              return {
                board: oldState
                  .board
                  .map((cellValue, i) => {
                    if (i === index) {
                      return oldState.player;
                    }
                    return cellValue;
                  }),
                player: oldState.player === X ? O : X
              };
            })
          }}
        />
      </div>
    );
  }
}