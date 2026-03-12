/**
 * Tic Tac Toe game utilities.
 */

export const PLAYER_X = "X";
export const PLAYER_O = "O";

/**
 * @typedef {("X"|"O"|null)} CellValue
 */

/**
 * @typedef {Object} WinnerResult
 * @property {("X"|"O"|null)} winner
 * @property {number[] | null} line - The winning line indices, if a winner exists.
 */

/**
 * Winning lines for a 3x3 Tic Tac Toe board.
 * Each array contains indices into the board array.
 */
export const WINNING_LINES = Object.freeze([
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // cols
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6],
]);

/**
 * # PUBLIC_INTERFACE
 * Compute winner (and winning line) for the given board.
 * @param {CellValue[]} board - length 9 array of "X" | "O" | null
 * @returns {WinnerResult}
 */
export function getWinner(board) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    const v = board[a];
    if (v && v === board[b] && v === board[c]) {
      return { winner: v, line };
    }
  }
  return { winner: null, line: null };
}

/**
 * # PUBLIC_INTERFACE
 * Determine if the game is a draw (board full and no winner).
 * @param {CellValue[]} board
 * @returns {boolean}
 */
export function isDraw(board) {
  const { winner } = getWinner(board);
  if (winner) return false;
  return board.every((cell) => cell !== null);
}

/**
 * # PUBLIC_INTERFACE
 * Get next player given current player.
 * @param {("X"|"O")} current
 * @returns {("X"|"O")}
 */
export function getNextPlayer(current) {
  return current === PLAYER_X ? PLAYER_O : PLAYER_X;
}

/**
 * # PUBLIC_INTERFACE
 * Create a new empty board.
 * @returns {CellValue[]}
 */
export function createEmptyBoard() {
  return Array.from({ length: 9 }, () => null);
}
