import React from 'react';
import {Cell} from "../Cell/Cell";
import {container} from './Board.module.css';

export const Board = ({
                        cellClicked,
                        board,
                        disabled
                      }) => {
  return (
    <div className={container}>
      {
        board
          .map((value, index) => (
            <Cell
              disabled={disabled}
              key={index}
              value={value}
              cellClicked={() => {
                cellClicked(index)
              }}
            />
          ))
      }
    </div>
  );
};