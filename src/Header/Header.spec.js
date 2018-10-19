import React from 'react';
import {shallow} from 'enzyme';
import {X} from "../Utils/Constants";
import {Header} from "./Header";

describe('Header', () => {

  it('should declare winner if there is one', () => {
    const header = shallow(<Header winner={X}/>);
    expect(header.text()).toEqual("player X won!");
  });

  it('should declare a tie if the board is full without a winner', () => {
    const header = shallow(<Header fullBoard/>);
    expect(header.text()).toEqual("It is a tie!");
  });

  it('should display the players whos turn it is if there is no winner and the board is not full', () => {
    const header = shallow(<Header player={X}/>);
    expect(header.text()).toEqual("player Xs turn");
  });

});
