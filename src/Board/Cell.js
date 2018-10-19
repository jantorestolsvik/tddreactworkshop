import React from 'react';
import './Cell.css';

export const Cell = ({cellClicked}) => {
    return (
      <button
        className="cell"
        onClick={cellClicked}
      >

      </button>
    );
};