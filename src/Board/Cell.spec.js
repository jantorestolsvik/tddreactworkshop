import React from 'react';
import {configure, shallow} from 'enzyme';
import {Cell} from "./Cell";
import Adapter from "enzyme-adapter-react-16/build";

describe('Cell', () => {

  it('should be empty by default', () => {
    configure({adapter: new Adapter()});
    let cell = shallow(<Cell/>);
    expect(cell.text()).toEqual("");
  });

  it('should call cellClicked when clicked', () => {
    configure({adapter: new Adapter()});
    const cellClicked = jest.fn();
    let cell = shallow(<Cell cellClicked={cellClicked}/>);
    cell.find("button").simulate("click");
    expect(cellClicked).toHaveBeenCalled();
  });

});
