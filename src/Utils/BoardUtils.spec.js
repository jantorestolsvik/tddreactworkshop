import React from 'react';
import {getWinner} from "./BoardUtils";

describe('Header', () => {

  it('should check if there is a winner horizontaly', () => {
    expect(getWinner([
      "x", "x", "x",
      undefined, undefined, undefined,
      undefined, undefined, undefined
    ])).toBe("x");
  });

  it('should check if there is a winner verticaly', () => {
    expect(getWinner([
      "x", undefined, undefined,
      "x", undefined, undefined,
      "x", undefined, undefined
    ])).toBe("x");
  });

  it('should check if there is a winner diagonaly', () => {
    expect(getWinner([
      "x", undefined, undefined,
      undefined, "x", undefined,
      undefined, undefined, "x"
    ])).toBe("x");
  });

});
