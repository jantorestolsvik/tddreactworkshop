import React from 'react';
import {shallow} from 'enzyme';
import {Game} from "./Game";
import {Board} from "../Board/Board";
import {player2, player1} from "../Utils/Constants";
import {Header} from "../Header/Header";

describe('Game', () => {

  it('Should create game', () => {
    expect(Game).toBeTruthy();
  });

  it('should change player every time a cell is clicked', () => {
    const game = shallow(<Game/>);
    const board = game.find(Board);
    expect(game.state().player).toEqual(player1);
    board.props().cellClicked(0);
    expect(game.state().player).toEqual(player2);
  });

  it('should occupy a cell for the given player when a cell is clicked', () => {
    const game = shallow(<Game/>);
    const board = game.find(Board);
    expect(game.state().board[0]).toEqual(undefined);
    board.props().cellClicked(0);
    expect(game.state().board[0]).toEqual(player1);
  });

  it('should not do anything if cell clicked is already occupied', () => {
    const game = shallow(<Game/>);
    const board = game.find(Board);
    board.props().cellClicked(1);
    const firstState = game.state();
    board.props().cellClicked(1);
    expect(game.state()).toEqual(firstState);
  });

  it('should calculate the game state and report that to header', () => {
    const getWinner = jest.fn(() => "getWinnerResponse");
    const isBoardFull = jest.fn(() => "isBoardFullResponse");
    const game = shallow(<Game getWinner={getWinner} isBoardFull={isBoardFull}/>);
    const header = game.find(Header);
    expect(getWinner).toHaveBeenCalled();
    expect(isBoardFull).toHaveBeenCalled();
    expect(header.props().winner).toEqual("getWinnerResponse");
    expect(header.props().fullBoard).toEqual("isBoardFullResponse");
    expect(header.props().player).toEqual("player1");
  });

  it('should disable board if there is a winner', () => {
    const getWinner = jest.fn(() => "X");
    const game = shallow(<Game getWinner={getWinner}/>);
    const board = game.find(Board);
    expect(board.props().disabled).toBe(true);
  });

  it('should disable board if the board is full', () => {
    const isBoardFull = jest.fn(() => true);
    const game = shallow(<Game isBoardFull={isBoardFull}/>);
    const board = game.find(Board);
    expect(board.props().disabled).toBe(true);
  });

  it('should not disable board if there is no winner and the board still has free cells', () => {
    const isBoardFull = jest.fn(() => false);
    const game = shallow(<Game isBoardFull={isBoardFull}/>);
    const board = game.find(Board);
    expect(board.props().disabled).toBe(false);
  });

});
