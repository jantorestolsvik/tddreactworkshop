import React from 'react';
import {configure, shallow} from 'enzyme';
import {Cell} from "./Cell";
import Adapter from "enzyme-adapter-react-16/build";
import {O, X} from "../Utils/Constants";

describe('Cell', () => {

  it('should be empty by default', () => {
    configure({adapter: new Adapter()});
    let cell = shallow(<Cell/>);
    expect(cell.text()).toEqual("");
  });

  it('should call cellClicked when clicked', () => {
    const cellClicked = jest.fn();
    const cell = shallow(<Cell cellClicked={cellClicked}/>);
    cell.find("button").simulate("click");
    expect(cellClicked).toHaveBeenCalled();
  });

  it('should display X user cell if value is X', () => {
    const cell = shallow(<Cell value={X}/>);
    expect(cell.text()).toEqual("X");
  });

  it('should display O user cell if value is O', () => {
    const cell = shallow(<Cell value={O}/>);
    expect(cell.text()).toEqual("O");
  });

});
