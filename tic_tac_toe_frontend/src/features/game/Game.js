import React, { useMemo, useState } from "react";
import Board from "../../components/Board/Board";
import Controls from "../../components/Controls/Controls";
import StatusPanel from "../../components/StatusPanel/StatusPanel";
import {
  PLAYER_X,
  createEmptyBoard,
  getNextPlayer,
  getWinner,
  isDraw,
} from "../../utils/ticTacToe";
import "./Game.css";

/**
 * # PUBLIC_INTERFACE
 * Main Tic Tac Toe game feature.
 */
export default function Game() {
  const [board, setBoard] = useState(() => createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);

  const winnerResult = useMemo(() => getWinner(board), [board]);
  const draw = useMemo(() => isDraw(board), [board]);

  const gameOver = Boolean(winnerResult.winner) || draw;

  function handleSquareClick(index) {
    // Ignore clicks when game ended or cell already filled.
    if (gameOver || board[index] !== null) return;

    setBoard((prev) => {
      const next = [...prev];
      next[index] = currentPlayer;
      return next;
    });

    setCurrentPlayer((p) => getNextPlayer(p));
  }

  function handleRestart() {
    setBoard(createEmptyBoard());
    setCurrentPlayer(PLAYER_X);
  }

  return (
    <main className="ttt-game">
      <StatusPanel currentPlayer={currentPlayer} winner={winnerResult.winner} isDraw={draw} />

      <div className="ttt-game__stage" aria-label="Game area">
        <Board
          board={board}
          onSquareClick={handleSquareClick}
          winningLine={winnerResult.line}
          gameOver={gameOver}
        />
      </div>

      <Controls onRestart={handleRestart} />
    </main>
  );
}
