import React from 'react';
import {configure, shallow} from 'enzyme';

import Adapter from "enzyme-adapter-react-16/build";
import {Game} from "./Game";
import {Board} from "./Board/Board";

describe('Cell', () => {

  it('should be empty by default', () => {
    configure({adapter: new Adapter()});
    let game = shallow(<Game/>);
    const board = game.find(Board);
    expect(game.state().player).toEqual("x");
    board.props().changePlayer();
    expect(game.state().player).toEqual("y");
  });

});
