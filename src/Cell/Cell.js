import React from 'react';
import {player2, player1} from "../Utils/Constants";
import {cell} from './Cell.module.css';

export const Cell = ({
                       cellClicked,
                       value,
                       disabled
                     }) => (
  <button
    disabled={disabled}
    className={cell}
    onClick={cellClicked}
  >
    {value === player1 && "X"}
    {value === player2 && "O"}
  </button>
);