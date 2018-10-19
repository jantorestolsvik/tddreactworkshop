export const getWinner = (board) => {
  for (let i = 0; i < 3; i++) { // columns
    if (
      board[i] !== undefined &&
      board[i] === board[i + 3] &&
      board[i] === board[i + 6]
    ) {
      return board[i];
    }
  }
  for (let i = 0; i < 3; i++) { // rows
    const firstCellIndexInRow = i * 3;
    if (
      board[firstCellIndexInRow] !== undefined &&
      board[firstCellIndexInRow] === board[firstCellIndexInRow + 1] &&
      board[firstCellIndexInRow] === board[firstCellIndexInRow + 2]
    ) {
      return board[firstCellIndexInRow];
    }
  }
  if ( // first diagonal
    board[0] !== undefined &&
    board[0] === board[4] &&
    board[0] === board[8]
  ) {
    return board[0];
  }
  if ( // second diagonal
    board[2] !== undefined &&
    board[2] === board[4] &&
    board[2] === board[6]
  ) {
    return board[2];
  }
  return undefined;
};

export const isBoardFull = (board) => {
  return board.every((cell) => cell !== undefined)
};