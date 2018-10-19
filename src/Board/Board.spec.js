import React from 'react';
import {configure, shallow} from 'enzyme';
import {Board} from "./Board";
import {Cell} from "./Cell";
import Adapter from "enzyme-adapter-react-16/build";

describe('Board', () => {

  it('should have 9 cells', () => {
    configure({adapter: new Adapter()});
    let board = shallow(<Board/>);
    expect(board.find(Cell).length).toEqual(9);

    expect(board
      .find(Cell).length).toEqual(9);


  });

  it('should transfer events from cell up', () => {
    configure({adapter: new Adapter()});
    const cellClicked = jest.fn();
    let board = shallow(<Board cellClicked={cellClicked}/>);
    board.find(Cell).at(4).props().cellClicked();
    expect(cellClicked).toHaveBeenCalledWith(4);

  });

});
