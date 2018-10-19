import React from 'react';
import {Board} from "./Board/Board";

export class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      player: "x"
    };
  }

  render() {
    const {} = this.props;

    const {} = this.state;

    return (
      <Board
        cellClicked={(index) => {
          console.log(index);
        }}
        changePlayer={() => {
          this.setState({player: "y"})
        }}/>
    );
  }
}