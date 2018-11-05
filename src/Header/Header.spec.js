import React from 'react';
import {shallow} from 'enzyme';
import {player1} from "../Utils/Constants";
import {Header} from "./Header";

describe('Header', () => {

  it('should create header', () => {
    expect(Header).toBeTruthy();
  });

  it('should declare winner if there is one', () => {
    const header = shallow(<Header winner={player1}/>);
    expect(header.text()).toEqual("player1 won!");
  });

  it('should declare a tie if the board is full without a winner', () => {
    const header = shallow(<Header fullBoard/>);
    expect(header.text()).toEqual("It is a tie!");
  });

  it('should display the players whos turn it is if there is no winner and the board is not full', () => {
    const header = shallow(<Header player={player1}/>);
    expect(header.text()).toEqual("player1s turn");
  });

});
