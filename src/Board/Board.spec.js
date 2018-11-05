import React from 'react';
import {shallow} from 'enzyme';
import {Board} from "./Board";
import {Cell} from "../Cell/Cell";

describe('Board', () => {

  it('should create board', () => {
    expect(Board).toBeTruthy();
  });

  it('should render the amount of cells that is put in the board', () => {
    const board = shallow(<Board board={[undefined, undefined, undefined]}/>);
    expect(board.find(Cell).length).toEqual(3);
  });

  it('Should report the index of the clicked cell', () => {
    const cellClicked = jest.fn();
    const board = shallow(
      <Board
        board={[undefined, undefined]}
        cellClicked={cellClicked}
      />
    );
    board.find(Cell).at(1).props().cellClicked();
    expect(cellClicked).toHaveBeenCalledWith(1);
  });

});
