export function createEmptyBoard() {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}

export function checkWinner(board) {
  const lines = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]],
  ];

  for (const line of lines) {
    const [a,b,c] = line;
    const v1 = board[a[0]][a[1]];
    if (v1 && v1 === board[b[0]][b[1]] && v1 === board[c[0]][c[1]]) {
      return v1;
    }
  }
  return null;
}

export function isBoardFull(board) {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (!board[r][c]) return false;
    }
  }
  return true;
}