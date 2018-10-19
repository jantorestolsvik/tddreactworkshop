import React from 'react';
import {Cell} from "./Cell";

export const Board = ({cellClicked}) => {
  return (
    <div>
      {
        new Array(9)
          .fill(undefined)
          .map((_, index) => (
            <Cell
              key={index}
              cellClicked={() => {
                cellClicked(index)
              }}
            />
          ))
      }
    </div>
  );
};