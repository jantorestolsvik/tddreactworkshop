import React from 'react';
import {shallow} from 'enzyme';
import {Cell} from "./Cell";
import {player1, player2} from "../Utils/Constants";

describe('Cell', () => {

  it('should create cell', () => {
    expect(Cell).toBeTruthy();
  });

  it('should contain empty button by default', () => {
    const cell = shallow(<Cell/>);
    expect(cell.containsMatchingElement(<button></button>)).toBe(true);
  });

  it('should report when clicked', () => {
    const cellClicked = jest.fn();
    const cell = shallow(<Cell cellClicked={cellClicked}/>);
    cell.find("button").simulate("click");
    expect(cellClicked).toHaveBeenCalled();
  });

  it('should display X if value is player1', () => {
    const cell = shallow(<Cell value={player1}/>);
    expect(cell.text()).toEqual("X");
  });

  it('should display O if value is player2', () => {
    const cell = shallow(<Cell value={player2}/>);
    expect(cell.text()).toEqual("O");
  });

});
