import React from 'react';
import {O, X} from "../Utils/Constants";
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
    {value === X && "X"}
    {value === O && "O"}
  </button>
);