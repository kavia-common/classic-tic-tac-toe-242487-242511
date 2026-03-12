import React from "react";
import Square from "../Square/Square";
import "./Board.css";

/**
 * # PUBLIC_INTERFACE
 * Renders the 3x3 Tic Tac Toe board.
 */
export default function Board({ board, onSquareClick, winningLine, gameOver }) {
  return (
    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe board">
      {board.map((value, idx) => {
        const isWinning = Array.isArray(winningLine) ? winningLine.includes(idx) : false;

        return (
          <div className="ttt-board__cell" role="presentation" key={idx}>
            <Square
              index={idx}
              value={value}
              isWinning={isWinning}
              disabled={gameOver || value !== null}
              onClick={() => onSquareClick(idx)}
            />
          </div>
        );
      })}
    </div>
  );
}
